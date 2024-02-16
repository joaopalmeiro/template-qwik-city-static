# template-qwik-city-static

Opinionated [Qwik City](https://qwik.dev/) + [SSG](https://qwik.dev/docs/deployments/static/) template for new projects.

## Getting Started

1. Go to or create the project folder.
2. Get the template files:

```bash
npx degit github:joaopalmeiro/template-qwik-city-static
```

or

```bash
npx degit github:joaopalmeiro/template-qwik-city-static --force
```

3. Search for `template-qwik-city-static` and replace it with the project name.
4. Search for `Opinionated Qwik City + SSG template for new projects.`/`Opinionated [Qwik City](https://qwik.dev/) + [SSG](https://qwik.dev/docs/deployments/static/) template for new projects.` and replace it with the (short) project description.
5. Search for `João Palmeiro` and replace it with the author's name.
6. Install [fnm](https://github.com/Schniz/fnm) (if necessary).
7. Run the first two commands in the [`Development` section](#development) to install [Node.js](https://nodejs.org/en) and the development dependencies.
8. Open the [NOTES.md](NOTES.md) file and install the project-specific dependencies according to the first command in the [Commands section](NOTES.md#commands).
9. Search for `https://yoursite.qwik.dev` and replace it with the project domain.
10. Delete the [`Template References` section](NOTES.md#template-references) from the [NOTES.md](NOTES.md) file.
11. Delete the [`Getting Started` section](#getting-started).

## Development

Install [fnm](https://github.com/Schniz/fnm) (if necessary).

```bash
fnm install && fnm use && node --version && npm --version
```

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run lint
```

```bash
npm run format
```

## Deployment

```bash
npm run build
```
