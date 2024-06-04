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
    semi: ["error", "always"],
    // Aqui você pode adicionar regras adicionais específicas do seu professor
    // Exemplo:
    // "indent": ["error", 4],
    // "linebreak-style": ["error", "unix"],
    // "quotes": ["error", "double"],
    // "semi": ["error", "always"]
  },
};
