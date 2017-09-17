[![Build Status](https://travis-ci.org/{{github-user-name}}/{{github-app-name}}.svg?branch=master)](https://travis-ci.org/{{github-user-name}}/{{github-app-name}}.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/{{github-user-name}}/{{github-app-name}}/badge.svg?branch=master)](https://coveralls.io/github/{{github-user-name}}/{{github-app-name}}?branch=master)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

# Using this module in other modules

Here is a quick example of how this module can be used in other modules. The [TypeScript Module Resolution Logic](https://www.typescriptlang.org/docs/handbook/module-resolution.html) makes it quite easy. The file `src/index.ts` is a [barrel](https://basarat.gitbooks.io/typescript/content/docs/tips/barrel.html) that re-exports selected exports from other files. The _package.json_ file contains `main` attribute that points to the generated `lib/index.js` file and `typings` attribute that points to the generated `lib/index.d.ts` file.

- To use the `MeilMan` class in a TypeScript file -

```ts
import { MeilMan } from "@bititrain/meilman";

const MeilMan = new MeilMan("TELEGRAM_TOKEN", "BOT_WEBHOOK_URL");
```

- To use the `MeilMan` class in a JavaScript file -

```js
const MeilMan = require('@bititrain/meilman').MeilMan;

const MeilMan = new MeilMan("TELEGRAM_TOKEN", "BOT_WEBHOOK_URL");
```
