declare module '@eslint/js' {
  import { type Linter } from 'eslint';
  declare const configs: {
    all: Linter.FlatConfig;
    recommended: Linter.FlatConfig;
  };

  export { configs };
}

declare module 'eslint-config-prettier' {
  import { type Linter } from 'eslint';
  declare const config: Linter.FlatConfig;

  export default config;
}
