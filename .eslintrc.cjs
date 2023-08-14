// Übersicht zu den JavaScript-Regeln: https://eslint.org/docs/rules/
// ESLint mit TS nutzen: https://typescript-eslint.io/

module.exports = {
  env: {
    //Wo soll der Code später funktionieren?
    browser: true, // Läuft im Browser
    es2022: true, // Legt fest, das neue Features von JavaScript erlaubt sind
    node: true, // Läuft mit Node
  },
  root: true,
  // Nutze die Standard-Regeln
  // Deaktiviere alle Formatierungsregeln, die mit Prettier in Konflikt stehen
  // Wichtig: Prettier immer als letztes auflisten
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  // Ignoriere Dateien im Dist-Ordner
  ignorePatterns: ['/dist'],
  // Hier können Regeln festgelegt werden und ggf. Vorgaben
  // aus Regelsätzen überschrieben werden, ihr habt also
  // das letzte Wort, ob eine Regel angewandt wird.
  rules: {
    'no-var': 'error', // "off", "warn" oder "error", alternativ 0,1 oder 2
    'prefer-const': 'error',
    'object-shorthand': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-no-target-blank': 'off',
  },
  plugins: ['@typescript-eslint', 'react'],
};
