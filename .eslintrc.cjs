const fs = require('fs');

let autoImportGlobals = {};
try {
  const raw = fs.readFileSync('./.eslintrc-auto-import.json', 'utf8');
  const parsed = JSON.parse(raw);
  if (parsed && parsed.globals) autoImportGlobals = parsed.globals;
} catch (e) {
  // If the auto-import JSON is missing or invalid, continue without it.
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-recommended',
    'plugin:tailwindcss/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  plugins: ['vue', 'tailwindcss'],
  globals: Object.assign({}, autoImportGlobals),
  rules: {
    'import/extensions': ['error', 'always', {
      js: 'always',
      vue: 'always',
    }],
    'import/no-extraneous-dependencies': [0, { 'packageDir ': './src/' }],
    'max-len': ['error', {
      code: 160,
      ignorePattern: 'class="([\\s\\S]*?)"|d="([\\s\\S]*?)"', // ignore classes or svg draw attributes
      ignoreUrls: true,
    }],
    'vue/multi-word-component-names': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', 'svg'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      alias: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', 'svg'],
        map: [['@', './src']],
      },
    },
  },
};
