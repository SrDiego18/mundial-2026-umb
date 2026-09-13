# Arquitectura

## Decisión visual

Aunque la guía pide un sitio `single-page`, eso no obliga a mostrar todas las secciones simultáneamente.

Este proyecto mantiene:

- un único `index.html`;
- un único `<main>`;
- anclas internas;
- secciones semánticas.

La navegación activa y oculta paneles mediante JavaScript.

Por tanto, sigue siendo una página única, pero la experiencia se parece a una aplicación con pestañas.

## Componentes orientados a objetos

```text
BaseComponent
├── MatchCard
│   ├── GroupMatchCard
│   └── KnockoutMatchCard
├── PlayerSpotlightCard
└── AwardCard

TournamentRepository
WorldCupApp
```

## Polimorfismo

Las clases hijas sobrescriben `render()`.

```js
function renderComponents(components) {
    return components.map(component => component.render()).join("");
}
```

La función funciona con varios tipos de componentes sin preguntar cuál es la clase concreta.

## Separación

- `data.js`: resultados y contenido editorial.
- `classes.js`: clases.
- `app.js`: interacción y navegación.
- `styles.css`: presentación.
- `index.html`: semántica.
