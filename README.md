# ⚡typescript-eslint-standard

#### quickly start eslint in typescript.

[![npm version](https://img.shields.io/npm/v/typescript-eslint-standard.svg?style=flat-square)](https://www.npmjs.com/package/typescript-eslint-standard)
[![Alt](https://img.shields.io/npm/dt/typescript-eslint-standard?style=flat-square)](https://npmcharts.com/compare/typescript-eslint-standard?minimal=true)
![Vite Version](https://img.shields.io/badge/eslint->=9.0.0-brightgreen.svg?style=flat-square)
![Alt](https://img.shields.io/github/license/mivui/typescript-eslint-standard?style=flat-square)

### install

```shell
npm i typescript-eslint-standard -D
```

### eslint.config.js

```js
import { defineConfig } from 'typescript-eslint-standard';

export default defineConfig();
```

### .prettierrc.js

```js
/**
 * @type {import("prettier").Config}
 */
export default {
  singleQuote: true,
  trailingComma: 'all',
  bracketSameLine: true,
  endOfLine: 'auto',
};
```

### custom configuration

```js
import { defineConfig } from 'typescript-eslint-standard';
import tseslint from 'typescript-eslint';

export default defineConfig({
  extends: [...tseslint.configs.recommended, ...tseslint.configs.strict],
  rules: {
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-object-type': 'off',
  },
});
```

### only use js rules

```js
import { eslintRules } from 'typescript-eslint-standard';
import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';

export default defineConfig(eslint.configs.recommended, {
  rules: {
    ...eslintRules,
  },
});
```

### only use ts rules

```js
import { tslintRules } from 'typescript-eslint-standard';
import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.strictTypeChecked,
  {
    rules: {
      ...tslintRules,
    },
  },
);
```
