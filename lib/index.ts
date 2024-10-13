import eslint from '@eslint/js';
import { type TSESLint } from '@typescript-eslint/utils';
import vitest from '@vitest/eslint-plugin';
import prettierConfig from 'eslint-config-prettier';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';

export const eslintRules: TSESLint.FlatConfig.Rules = {
  'accessor-pairs': [
    'error',
    { enforceForClassMembers: true, getWithoutSet: false, setWithoutGet: true },
  ],
  'array-callback-return': [
    'error',
    {
      allowVoid: false,
      checkForEach: false,
      allowImplicit: false,
    },
  ],
  'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: true }],
  'arrow-parens': 'error',
  'block-scoped-var': 'error',
  camelcase: 'warn',
  complexity: 'error',
  'consistent-this': 'error',
  curly: ['error', 'multi-line'],
  'default-param-last': 'off',
  eqeqeq: ['error', 'always', { null: 'ignore' }],
  'func-name-matching': 'error',
  'func-names': 'error',
  'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
  'grouped-accessor-pairs': 'error',
  'guard-for-in': 'error',
  'id-denylist': 'error',
  'id-match': 'error',
  'logical-assignment-operators': 'error',
  'max-nested-callbacks': 'error',
  'no-alert': 'error',
  'no-await-in-loop': 'error',
  'no-bitwise': 'error',
  'no-caller': 'error',
  'no-constructor-return': 'error',
  'no-continue': 'error',
  'no-debugger': 'off',
  'no-div-regex': 'error',
  'no-dupe-class-members': 'off',
  'no-else-return': 'error',
  'no-empty': 'error',
  'no-eq-null': 'error',
  'no-eval': 'error',
  'no-extend-native': 'error',
  'no-extra-label': 'error',
  'no-implicit-coercion': 'error',
  'no-implicit-globals': 'error',
  'no-inner-declarations': 'error',
  'no-iterator': 'error',
  'no-label-var': 'error',
  'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
  'no-lone-blocks': 'error',
  'no-lonely-if': 'error',
  'no-multi-assign': 'error',
  'no-multi-str': 'error',
  'no-nested-ternary': 'error',
  'no-new': 'error',
  'no-new-func': 'error',
  'no-new-wrappers': 'error',
  'no-object-constructor': 'error',
  'no-octal-escape': 'error',
  'no-plusplus': [
    'error',
    {
      allowForLoopAfterthoughts: true,
    },
  ],
  'no-promise-executor-return': 'error',
  'no-proto': 'error',
  'no-redeclare': 'off',
  'no-restricted-exports': 'error',
  'no-restricted-globals': 'error',
  'no-restricted-properties': 'error',
  'no-restricted-syntax': 'error',
  'no-return-assign': ['error', 'except-parens'],
  'no-script-url': 'error',
  'no-self-compare': 'error',
  'no-sequences': 'error',
  'no-template-curly-in-string': 'error',
  'no-undef-init': 'error',
  'no-underscore-dangle': [
    'warn',
    {
      allowAfterThis: true,
      allowAfterSuper: true,
      allowAfterThisConstructor: true,
    },
  ],
  'no-unmodified-loop-condition': 'error',
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],
  'no-unreachable-loop': 'error',
  'no-unused-vars': 'off',
  'no-useless-call': 'error',
  'no-useless-computed-key': 'error',
  'no-useless-concat': 'error',
  'no-useless-rename': 'error',
  'no-useless-return': 'error',
  'no-void': ['error', { allowAsStatement: true }],
  'object-shorthand': ['warn', 'properties'],
  'operator-assignment': 'error',
  'prefer-arrow-callback': 'error',
  'prefer-const': 'error',
  'prefer-numeric-literals': 'error',
  'prefer-object-has-own': 'error',
  'prefer-object-spread': 'error',
  'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
  'prefer-template': 'error',
  radix: 'error',
  'sort-vars': 'error',
  'symbol-description': 'error',
  'unicode-bom': 'error',
  'use-isnan': [
    'error',
    {
      enforceForIndexOf: true,
      enforceForSwitchCase: true,
    },
  ],
  'valid-typeof': ['error', { requireStringLiterals: true }],
  'vars-on-top': 'error',
  yoda: 'error',
};

export const typescriptRules: TSESLint.FlatConfig.Rules = {
  '@typescript-eslint/adjacent-overload-signatures': 'error',
  '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
  '@typescript-eslint/ban-tslint-comment': 'error',
  '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
  '@typescript-eslint/consistent-generic-constructors': ['error', 'constructor'],
  '@typescript-eslint/consistent-indexed-object-style': 'off',
  '@typescript-eslint/consistent-type-assertions': [
    'error',
    {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'never',
    },
  ],
  '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
  '@typescript-eslint/consistent-type-exports': [
    'error',
    {
      fixMixedExportsWithInlineTypeSpecifier: true,
    },
  ],
  '@typescript-eslint/consistent-type-imports': [
    'error',
    {
      disallowTypeAnnotations: true,
      fixStyle: 'inline-type-imports',
      prefer: 'type-imports',
    },
  ],
  '@typescript-eslint/default-param-last': 'error',
  '@typescript-eslint/dot-notation': [
    'error',
    {
      allowPattern: '',
      allowKeywords: true,
      allowPrivateClassPropertyAccess: false,
      allowIndexSignaturePropertyAccess: false,
      allowProtectedClassPropertyAccess: false,
    },
  ],
  '@typescript-eslint/explicit-member-accessibility': [
    'error',
    {
      overrides: {
        constructors: 'no-public',
      },
    },
  ],
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/max-params': ['error', { max: 4 }],
  '@typescript-eslint/method-signature-style': 'error',
  '@typescript-eslint/naming-convention': [
    'warn',
    {
      format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      leadingUnderscore: 'allow',
      selector: 'variableLike',
      trailingUnderscore: 'allow',
    },
  ],
  '@typescript-eslint/no-confusing-void-expression': [
    'error',
    { ignoreArrowShorthand: false, ignoreVoidOperator: false },
  ],
  '@typescript-eslint/no-dupe-class-members': 'error',
  '@typescript-eslint/no-dynamic-delete': 'error',
  '@typescript-eslint/no-empty-function': 'off',
  '@typescript-eslint/no-empty-object-type': [
    'error',
    {
      allowInterfaces: 'always',
    },
  ],
  '@typescript-eslint/no-extraneous-class': ['error', { allowWithDecorator: true }],
  '@typescript-eslint/no-floating-promises': 'off',
  '@typescript-eslint/no-invalid-this': 'error',
  '@typescript-eslint/no-invalid-void-type': 'error',
  '@typescript-eslint/no-loss-of-precision': 'error',
  '@typescript-eslint/no-misused-promises': 'off',
  '@typescript-eslint/no-redeclare': ['error', { builtinGlobals: false }],
  '@typescript-eslint/no-restricted-imports': 'error',
  '@typescript-eslint/no-shadow': 'error',
  '@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true }],
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
  '@typescript-eslint/no-unnecessary-condition': 'off',
  '@typescript-eslint/no-unnecessary-type-parameters': 'off',
  '@typescript-eslint/no-unsafe-argument': 'off',
  '@typescript-eslint/no-unsafe-assignment': 'off',
  '@typescript-eslint/no-unsafe-enum-comparison': 'off',
  '@typescript-eslint/no-unsafe-member-access': 'off',
  '@typescript-eslint/no-unsafe-return': 'off',
  '@typescript-eslint/no-unused-expressions': [
    'error',
    {
      allowShortCircuit: true,
      allowTaggedTemplates: true,
      allowTernary: true,
      enforceForJSX: false,
    },
  ],
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      args: 'all',
      argsIgnorePattern: '^_',
      caughtErrors: 'all',
      caughtErrorsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      ignoreRestSiblings: true,
    },
  ],
  '@typescript-eslint/no-use-before-define': [
    'error',
    {
      classes: false,
      enums: false,
      functions: false,
      typedefs: false,
      variables: false,
    },
  ],
  '@typescript-eslint/no-useless-constructor': 'error',
  '@typescript-eslint/no-var-requires': 'error',
  '@typescript-eslint/only-throw-error': [
    'error',
    { allowThrowingAny: false, allowThrowingUnknown: false },
  ],
  '@typescript-eslint/prefer-destructuring': [
    'error',
    {
      array: false,
      object: true,
    },
  ],
  '@typescript-eslint/prefer-function-type': 'off',
  '@typescript-eslint/prefer-includes': 'error',
  '@typescript-eslint/prefer-nullish-coalescing': [
    'error',
    {
      ignorePrimitives: {
        string: false,
      },
    },
  ],
  '@typescript-eslint/prefer-optional-chain': 'error',
  '@typescript-eslint/prefer-readonly': 'error',
  '@typescript-eslint/prefer-reduce-type-parameter': 'error',
  '@typescript-eslint/prefer-return-this-type': 'error',
  '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
  '@typescript-eslint/restrict-plus-operands': ['error', { skipCompoundAssignments: false }],
  '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
  '@typescript-eslint/return-await': 'error',
  '@typescript-eslint/sort-type-constituents': 'error',
  '@typescript-eslint/unbound-method': 'off',
  '@typescript-eslint/unified-signatures': 'off',
};

export const tseslintRules: TSESLint.FlatConfig.Rules = {
  'simple-import-sort/imports': 'error',
  'simple-import-sort/exports': 'error',
  ...eslintRules,
  ...typescriptRules,
};

export interface Config
  extends Omit<TSESLint.FlatConfig.Config, 'linterOptions' | 'name' | 'processor'> {
  extends?: TSESLint.FlatConfig.Config[];
  globals?: TSESLint.SharedConfig.GlobalsConfig;
}

export function defineConfig(config?: Config): TSESLint.FlatConfig.ConfigArray {
  const {
    extends: inherit,
    files,
    ignores,
    languageOptions,
    plugins,
    rules,
    globals,
    settings,
  } = config ?? {};
  const inherits = inherit ?? [];
  return tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
    prettierConfig,
    prettierRecommended,
    ...inherits,
    {
      name: 'typescript-eslint-standard',
      files: files ?? ['**/*.{j,t}s', '**/*.{j,t}sx'],
      languageOptions: languageOptions ?? {
        parser: tseslint.parser,
        globals: globals ?? {},
        parserOptions: {
          project: true,
          ecmaVersion: 'latest',
          sourceType: 'module',
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      plugins: {
        'simple-import-sort': simpleImportSort,
        ...plugins,
      },
      rules: {
        ...tseslintRules,
        ...rules,
      },
      ignores: ignores ?? [
        'node_modules',
        'dist',
        'build',
        'package.json',
        '**/*.md',
        ' **/*.svg',
        '**/*.ejs',
        '**/*.html',
      ],
      settings: settings ?? {},
    },
    {
      name: 'vitest-eslint-standard',
      files: ['**/*.{test,spec}.{j,t}s', '**/*.{test,spec}.{j,t}sx'],
      plugins: {
        vitest,
      },
      rules: {
        ...vitest.configs.recommended.rules,
        ...rules,
      },
      settings: {
        vitest: {
          typecheck: true,
        },
      },
      languageOptions: {
        globals: {
          ...vitest.environments.env.globals,
        },
      },
    },
    {
      files: ['**/*.js', '**/*.jsx'],
      ...tseslint.configs.disableTypeChecked,
    },
  );
}
