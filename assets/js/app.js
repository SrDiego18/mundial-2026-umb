/* =========================================================
   CONTROLADOR PRINCIPAL
   ========================================================= */

class WorldCupApp {
    constructor(repository) {
        this.repository = repository;
        this.activeTab = "inicio";
        this.activeStory = COLOMBIA_MATCH_STORIES[0].id;
        this.visibleResults = 18;
        this.filteredResults = repository.all();
    }

    init() {
        this.renderAwards();
        this.renderPlayers();
        this.renderGroupK();
        this.renderStorySelector();
        this.renderStory(this.activeStory);
        this.renderResults();

        this.bindTabs();
        this.bindStorySelector();
        this.bindResultTools();
        this.bindLoadMore();
        this.bindContactForm();
        this.bindReadingProgress();

        this.openFromHash();
    }

    /* -----------------------------------------------------
       PESTAÑAS
       ----------------------------------------------------- */

    bindTabs() {
        const tabs = [...document.querySelectorAll("[data-tab-link]")];
        const roleTabs = [...document.querySelectorAll('.tab-link[role="tab"]')];

        tabs.forEach(link => {
            link.addEventListener("click", event => {
                const id = link.dataset.tabLink;
                if (!id) return;

                event.preventDefault();
                this.activateTab(id, true);
            });
        });

        roleTabs.forEach((tab, index) => {
            tab.addEventListener("keydown", event => {
                let next = null;

                if (event.key === "ArrowRight") {
                    next = roleTabs[(index + 1) % roleTabs.length];
                } else if (event.key === "ArrowLeft") {
                    next = roleTabs[(index - 1 + roleTabs.length) % roleTabs.length];
                } else if (event.key === "Home") {
                    next = roleTabs[0];
                } else if (event.key === "End") {
                    next = roleTabs[roleTabs.length - 1];
                }

                if (next) {
                    event.preventDefault();
                    next.focus();
                    this.activateTab(next.dataset.tabLink, true);
                }
            });
        });

        window.addEventListener("hashchange", () => this.openFromHash());
    }

    openFromHash() {
        const hash = window.location.hash.replace("#", "");
        const valid = ["inicio", "colombia", "cronicas", "resultados", "proyecto", "contacto"];

        if (valid.includes(hash)) {
            this.activateTab(hash, false);
        } else {
            this.activateTab("inicio", false);
        }
    }

    activateTab(id, updateHash = true) {
        this.activeTab = id;

        document.querySelectorAll(".tab-panel").forEach(panel => {
            const active = panel.id === id;
            panel.hidden = !active;
            panel.classList.toggle("is-active", active);
        });

        document.querySelectorAll('.tab-link[role="tab"]').forEach(tab => {
            const active = tab.dataset.tabLink === id;
            tab.classList.toggle("is-active", active);
            tab.setAttribute("aria-selected", String(active));
            tab.tabIndex = active ? 0 : -1;
        });

        if (updateHash) {
            history.pushState(null, "", `#${id}`);
        }

        window.scrollTo({top: 0, behavior: "smooth"});

        const activeTabButton = document.querySelector(`.tab-link[data-tab-link="${id}"]`);
        activeTabButton?.scrollIntoView({behavior: "smooth", block: "nearest", inline: "center"});
    }

    /* -----------------------------------------------------
       PORTADA
       ----------------------------------------------------- */

    renderAwards() {
        const cards = WORLD_CUP_AWARDS.map(item => new AwardCard(item));
        document.querySelector("#awardGrid").innerHTML = renderComponents(cards);
    }

    /* -----------------------------------------------------
       COLOMBIA
       ----------------------------------------------------- */

    renderPlayers() {
        const cards = COLOMBIA_PLAYER_SPOTLIGHTS.map(
            item => new PlayerSpotlightCard(item)
        );

        document.querySelector("#playersGrid").innerHTML = renderComponents(cards);
    }

    renderGroupK() {
        const rows = this.repository.standings("K");

        document.querySelector("#groupKTable").innerHTML = `
            <table>
                <caption>Tabla final · Grupo K</caption>
                <thead>
                    <tr>
                        <th scope="col">Pos.</th>
                        <th scope="col">Selección</th>
                        <th scope="col">PJ</th>
                        <th scope="col">PG</th>
                        <th scope="col">PE</th>
                        <th scope="col">PP</th>
                        <th scope="col">DG</th>
                        <th scope="col">Pts</th>
                    </tr>
                </thead>
                <tbody>
                    ${rows.map((row, index) => `
                        <tr class="${row.team === "Colombia" ? "row-colombia" : ""}">
                            <td>${index + 1}</td>
                            <td class="team-cell">${TEAM_FLAGS[row.team] ?? "⚽"} ${row.team}</td>
                            <td>${row.pj}</td>
                            <td>${row.pg}</td>
                            <td>${row.pe}</td>
                            <td>${row.pp}</td>
                            <td>${row.dg > 0 ? "+" : ""}${row.dg}</td>
                            <td><strong>${row.pts}</strong></td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        `;
    }

    /* -----------------------------------------------------
       CRÓNICAS
       ----------------------------------------------------- */

    renderStorySelector() {
        document.querySelector("#storySelector").innerHTML =
            COLOMBIA_MATCH_STORIES.map(story => `
                <button type="button"
                        class="story-button ${story.id === this.activeStory ? "is-active" : ""}"
                        data-story-id="${story.id}">
                    <strong>${story.home} ${story.score} ${story.away}</strong>
                    <span>${story.date} · ${story.stage}</span>
                </button>
            `).join("");
    }

    bindStorySelector() {
        document.querySelector("#storySelector").addEventListener("click", event => {
            const button = event.target.closest("[data-story-id]");
            if (!button) return;

            this.activeStory = button.dataset.storyId;
            this.renderStorySelector();
            this.renderStory(this.activeStory);
        });
    }

    renderStory(id) {
        const story = COLOMBIA_MATCH_STORIES.find(item => item.id === id);
        if (!story) return;

        document.querySelector("#matchStory").innerHTML = `
            <header class="story-header">
                <div>
                    <span class="kicker">${story.date} · ${story.stage}</span>
                    <h2>${story.headline}</h2>
                    <p class="story-header__deck">${story.deck}</p>
                </div>

                <aside class="story-score-card" aria-label="Marcador del partido">
                    <span>${story.home}</span>
                    <strong>${story.score}</strong>
                    <span>${story.away}</span>
                    <small>${story.venue}</small>
                </aside>
            </header>

            <div class="story-body">
                <div class="story-copy">
                    ${story.paragraphs.map(p => `<p>${p}</p>`).join("")}

                    <a class="source-link"
                       href="${story.source}"
                       target="_blank"
                       rel="noopener noreferrer">
                        Ver crónica oficial de FIFA ↗
                    </a>
                </div>

                <aside class="story-sidebar">
                    <section class="story-box">
                        <span class="kicker">PROTAGONISTAS</span>
                        <div class="story-players">
                            ${story.keyPlayers.map(player => `
                                <div class="story-player">
                                    <strong>${player.name}</strong>
                                    <span>${player.role} · ${player.detail}</span>
                                </div>
                            `).join("")}
                        </div>
                    </section>

                    <section class="story-box">
                        <span class="kicker">DATO CLAVE</span>
                        <h3>${story.stat}</h3>
                    </section>

                    <section class="story-box story-verdict">
                        <span class="kicker kicker--yellow">LECTURA DEL PARTIDO</span>
                        <p>${story.verdict}</p>
                    </section>
                </aside>
            </div>
        `;
    }

    /* -----------------------------------------------------
       RESULTADOS
       ----------------------------------------------------- */

    componentForMatch(match) {
        return match.stage === "Fase de grupos"
            ? new GroupMatchCard(match)
            : new KnockoutMatchCard(match);
    }

    bindResultTools() {
        const search = document.querySelector("#teamSearch");
        const stage = document.querySelector("#stageFilter");
        const group = document.querySelector("#groupFilter");

        const refresh = () => {
            this.visibleResults = 18;
            this.applyResultFilters();
            this.renderResults();
        };

        search.addEventListener("input", refresh);
        stage.addEventListener("change", refresh);
        group.addEventListener("change", refresh);
    }

    applyResultFilters() {
        const query = document.querySelector("#teamSearch").value.trim();
        const stage = document.querySelector("#stageFilter").value;
        const group = document.querySelector("#groupFilter").value;

        let matches = query
            ? this.repository.search(query)
            : this.repository.all();

        if (stage === "groups") {
            matches = matches.filter(match => match.stage === "Fase de grupos");
        } else if (stage !== "all") {
            matches = matches.filter(match => match.stage === stage);
        }

        if (group !== "all") {
            matches = matches.filter(
                match => match.stage === "Fase de grupos" && match.group === group
            );
        }

        this.filteredResults = matches;
    }

    renderResults() {
        if (!this.filteredResults) {
            this.filteredResults = this.repository.all();
        }

        const shown = this.filteredResults.slice(0, this.visibleResults);
        const cards = shown.map(match => this.componentForMatch(match));

        document.querySelector("#resultsGrid").innerHTML = cards.length
            ? renderComponents(cards)
            : `<p>No se encontraron partidos con esos filtros.</p>`;

        document.querySelector("#resultCount").textContent = this.filteredResults.length;

        const more = document.querySelector("#loadMore");
        more.hidden = this.visibleResults >= this.filteredResults.length;
    }

    bindLoadMore() {
        document.querySelector("#loadMore").addEventListener("click", () => {
            this.visibleResults += 18;
            this.renderResults();
        });
    }

    /* -----------------------------------------------------
       FORMULARIO
       ----------------------------------------------------- */

    bindContactForm() {
        const form = document.querySelector("#contactForm");
        const status = document.querySelector("#formStatus");

        form.addEventListener("submit", event => {
            event.preventDefault();

            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            status.hidden = false;
            status.textContent =
                "Validación correcta. El formulario demuestra accesibilidad y HTML5; no envía información a un servidor.";
            form.reset();
        });
    }

    /* -----------------------------------------------------
       BARRA DE LECTURA
       ----------------------------------------------------- */

    bindReadingProgress() {
        const bar = document.querySelector("#readingProgress");

        const update = () => {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            const progress = max > 0 ? (window.scrollY / max) * 100 : 0;
            bar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
        };

        update();
        window.addEventListener("scroll", update, {passive: true});
        window.addEventListener("resize", update);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const repository = new TournamentRepository(WORLD_CUP_MATCHES);
    new WorldCupApp(repository).init();
});
