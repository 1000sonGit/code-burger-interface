module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',     
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:eslint-plugin/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },

  settings: {
    node: {
      tryExtensions: ['.js', '.json', '.node', '.ts', '.d.ts']
    }
  },
  
  plugins: [ '@typescript-eslint', 'eslint-plugin-import-helpers', 'react', 'react-hooks', 'prettier', 'node'],

  rules: {
    camelcase: 'off',
    "no-console": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    'node/no-unsupported-features/es-syntax': [
      'error',
      { ignores: ['modules'] },
    ],
    
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always', // new line between groups
        groups: ['module', '/^@shared/', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true }
      }
    ],
    'prettier/prettier': 0,
		'eslint-plugin/prefer-message-ids': 1,
  },
  overrides: [
    {
      files: ['test/**/*.js'],
      env: {
        mocha: true       
      }
    },
    {
      parser: '@typescript-eslint/parser',
      files: ['*.ts'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {        
        'node/no-unsupported-features/es-syntax': [
          'error',
          { ignores: ['modules'] }
        ]
      }
    }
  ]
}
