# Notes

## Template References

- https://qwik.dev/docs/deployments/static/
- https://qwik.dev/docs/guides/static-site-generation/#static-site-generation-config
- https://qwik.dev/docs/guides/static-site-generation/#dynamic-ssg-routes
- https://qwik.dev/docs/faq/#do-i-need-a-server-to-deploy-qwik-apps
- https://kinsta.com/docs/static-site-hosting/static-site-quick-start/qwik-static-site-example
- https://github.com/kinsta/hello-world-qwik
- https://github.com/BuilderIO/qwik/tree/main/starters/adapters/static
- `sort-package-json` does not sort scripts if `npm-run-all2` is installed:
  - https://github.com/keithamus/sort-package-json/pull/309
  - https://github.com/keithamus/sort-package-json/blob/v2.7.0/index.js#L166

## Commands

```bash
npm install -D @builder.io/qwik @builder.io/qwik-city typescript vite vite-tsconfig-paths @biomejs/biome sort-package-json npm-run-all2 check-engine
```

```bash
rm -rf dist/ server/ tmp/
```

```bash
rm -rf node_modules/ && npm install
```
