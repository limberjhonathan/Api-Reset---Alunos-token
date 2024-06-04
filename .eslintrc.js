module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2024,
    SourceType: 'module',
  },
  rules: {
    // Aqui você pode adicionar regras adicionais específicas do seu professor
    // Exemplo:
    // "indent": ["error", 4],
    // "linebreak-style": ["error", "unix"],
    // "quotes": ["error", "double"],
    camelcase: 'off',
    'max-len': 'off',
    'no-param-reassign': 'off',
    'class-methods-use-this': 'off',
    'import/first': 'off',
    semi: ['error', 'always'], // Exigindo ponto e vírgula
    'no-console': 'off', // Desativando a regra no-console
  },
};
