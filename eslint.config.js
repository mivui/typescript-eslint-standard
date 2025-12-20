import { globalIgnores } from 'eslint/config';

import { defineConfig } from './dist/index.js';

export default defineConfig({
  extends: [globalIgnores(['dist'])],
});
