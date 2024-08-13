import eslint from '@eslint/js';
import { type TSESLint } from '@typescript-eslint/utils';
import tseslint from 'typescript-eslint';

import { eslintRules } from '..';

describe('eslint2tslint', () => {
  const recommendedRules =
    tseslint.configs.recommendedTypeChecked.reduce<TSESLint.FlatConfig.Rules>((pre, next) => {
      if (next.rules) {
        Object.keys(next.rules).forEach((key) => {
          pre[key] = (next.rules as TSESLint.FlatConfig.Rules)[key];
        });
      }
      return pre;
    }, {});
  const strictTypeChecked = tseslint.configs.strictTypeChecked.reduce<TSESLint.FlatConfig.Rules>(
    (pre, next) => {
      if (next.rules) {
        Object.keys(next.rules).forEach((key) => {
          pre[key] = (next.rules as TSESLint.FlatConfig.Rules)[key];
        });
      }
      return pre;
    },
    {},
  );
  const array: string[] = [];
  Object.keys(strictTypeChecked).forEach((key) => {
    if (!key.startsWith('@typescript-eslint')) {
      array.push(`'${key}':'${strictTypeChecked[key] as string}'`);
    }
  });
  Object.keys(recommendedRules).forEach((key) => {
    if (!key.startsWith('@typescript-eslint')) {
      array.push(`'${key}':'${recommendedRules[key] as string}'`);
    }
  });
  // console.log([...new Set(array)].join(',\n'));

  const eslintConfigRules: TSESLint.FlatConfig.Rules = {
    ...eslint.configs.recommended.rules,
    ...eslintRules,
  };

  const tsAllRules = tseslint.configs.all.reduce<string[]>((pre, next) => {
    if (next.rules) {
      Object.keys(next.rules).forEach((key) => {
        if (key.startsWith('@typescript-eslint')) {
          pre.push(key);
        }
      });
    }
    return pre;
  }, []);

  const toTsLint: string[] = [];
  Object.keys(eslintConfigRules).forEach((key) => {
    tsAllRules.forEach((_key) => {
      if (_key.includes(key)) {
        toTsLint.push(`'${key}':'off'`);
      }
    });
  });
  console.log(toTsLint.join(',\n'));
});
