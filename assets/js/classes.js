/* =========================================================
   ARQUITECTURA ORIENTADA A OBJETOS
   ========================================================= */

/**
 * Clase base para componentes renderizables.
 * Las clases hijas sobrescriben render(): ejemplo de polimorfismo.
 */
class BaseComponent {
    constructor(data) {
        this.data = data;
    }

    render() {
        throw new Error("La clase hija debe implementar render().");
    }
}

/**
 * Componente base de un partido.
 */
class MatchCard extends BaseComponent {
    flag(team) {
        return TEAM_FLAGS[team] ?? "⚽";
    }

    formatDate(date) {
        const [year, month, day] = date.split("-").map(Number);
        return new Intl.DateTimeFormat("es-CO", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }).format(new Date(year, month - 1, day));
    }

    get isColombiaMatch() {
        return this.data.home === "Colombia" || this.data.away === "Colombia";
    }

    renderTeam(team) {
        return `
            <div class="result-team">
                <span class="result-team__flag" aria-hidden="true">${this.flag(team)}</span>
                <span class="result-team__name">${team}</span>
            </div>
        `;
    }

    renderScore() {
        return `
            <div class="result-score"
                 aria-label="${this.data.home} ${this.data.homeScore}, ${this.data.away} ${this.data.awayScore}">
                <strong>${this.data.homeScore}</strong>
                <span>—</span>
                <strong>${this.data.awayScore}</strong>
            </div>
        `;
    }
}

/**
 * Partido de fase de grupos.
 */
class GroupMatchCard extends MatchCard {
    render() {
        return `
            <article class="result-card ${this.isColombiaMatch ? "result-card--colombia" : ""}">
                <div class="result-card__meta">
                    <span class="chip">Grupo ${this.data.group}</span>
                    <time datetime="${this.data.date}">${this.formatDate(this.data.date)}</time>
                </div>
                <div class="result-card__board">
                    ${this.renderTeam(this.data.home)}
                    ${this.renderScore()}
                    ${this.renderTeam(this.data.away)}
                </div>
            </article>
        `;
    }
}

/**
 * Partido de eliminación directa.
 */
class KnockoutMatchCard extends MatchCard {
    render() {
        return `
            <article class="result-card result-card--ko ${this.isColombiaMatch ? "result-card--colombia" : ""}">
                <div class="result-card__meta">
                    <span class="chip chip--gold">${this.data.stage}</span>
                    <time datetime="${this.data.date}">${this.formatDate(this.data.date)}</time>
                </div>
                <div class="result-card__board">
                    ${this.renderTeam(this.data.home)}
                    ${this.renderScore()}
                    ${this.renderTeam(this.data.away)}
                </div>
                ${this.data.note ? `<p class="result-card__note">${this.data.note}</p>` : ""}
                ${this.data.venue ? `<p class="result-card__venue">📍 ${this.data.venue}</p>` : ""}
            </article>
        `;
    }
}

/**
 * Tarjeta de jugador destacado.
 */
class PlayerSpotlightCard extends BaseComponent {
    render() {
        const image = this.data.image
            ? `<img src="${this.data.image}" alt="${this.data.alt}" loading="lazy">`
            : `<div class="player-card__placeholder" aria-hidden="true">🇨🇴</div>`;

        return `
            <article class="player-card">
                <div class="player-card__media">
                    ${image}
                    <span class="player-card__metric">${this.data.metric}</span>
                </div>
                <div class="player-card__body">
                    <span class="kicker">${this.data.tag}</span>
                    <h3>${this.data.name}</h3>
                    <p>${this.data.text}</p>
                    ${this.data.credit ? `<small>${this.data.credit}</small>` : ""}
                </div>
            </article>
        `;
    }
}

/**
 * Tarjeta de premio del torneo.
 */
class AwardCard extends BaseComponent {
    render() {
        return `
            <article class="award-card">
                <span class="award-card__icon" aria-hidden="true">${this.data.icon}</span>
                <div>
                    <span class="kicker">${this.data.title}</span>
                    <h3>${this.data.name}</h3>
                    <p><strong>${this.data.country}</strong> · ${this.data.detail}</p>
                </div>
            </article>
        `;
    }
}

/**
 * Repositorio: concentra consultas sobre los 104 resultados.
 */
class TournamentRepository {
    constructor(matches) {
        this.matches = matches;
    }

    all() {
        return [...this.matches];
    }

    colombia() {
        return this.matches.filter(
            match => match.home === "Colombia" || match.away === "Colombia"
        );
    }

    groupStage() {
        return this.matches.filter(match => match.stage === "Fase de grupos");
    }

    knockout() {
        return this.matches.filter(match => match.stage !== "Fase de grupos");
    }

    byStage(stage) {
        return this.matches.filter(match => match.stage === stage);
    }

    byGroup(group) {
        return this.groupStage().filter(match => match.group === group);
    }

    search(query) {
        const term = query.trim().toLocaleLowerCase("es");
        if (!term) return this.all();

        return this.matches.filter(match =>
            match.home.toLocaleLowerCase("es").includes(term) ||
            match.away.toLocaleLowerCase("es").includes(term) ||
            match.stage.toLocaleLowerCase("es").includes(term)
        );
    }

    standings(group) {
        const table = new Map();

        const ensure = team => {
            if (!table.has(team)) {
                table.set(team, {
                    team, pj: 0, pg: 0, pe: 0, pp: 0,
                    gf: 0, gc: 0, dg: 0, pts: 0
                });
            }
            return table.get(team);
        };

        this.byGroup(group).forEach(match => {
            const home = ensure(match.home);
            const away = ensure(match.away);

            home.pj++;
            away.pj++;
            home.gf += match.homeScore;
            home.gc += match.awayScore;
            away.gf += match.awayScore;
            away.gc += match.homeScore;

            if (match.homeScore > match.awayScore) {
                home.pg++;
                home.pts += 3;
                away.pp++;
            } else if (match.homeScore < match.awayScore) {
                away.pg++;
                away.pts += 3;
                home.pp++;
            } else {
                home.pe++;
                away.pe++;
                home.pts++;
                away.pts++;
            }
        });

        return [...table.values()]
            .map(row => ({...row, dg: row.gf - row.gc}))
            .sort((a, b) =>
                b.pts - a.pts ||
                b.dg - a.dg ||
                b.gf - a.gf ||
                a.team.localeCompare(b.team, "es")
            );
    }
}

/**
 * POLIMORFISMO:
 * recibe objetos de clases distintas y solo exige que tengan render().
 */
function renderComponents(components) {
    return components.map(component => component.render()).join("");
}
