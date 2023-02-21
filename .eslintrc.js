module.exports = {
  'env': {
    es6: true,
    node: true,
    jest: true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  'overrides': [],
  'parserOptions': {
    project: './tsconfig.json',
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    'react-hooks',
  ],
  'rules': {
    'indent': ['error', 2, { SwitchCase: 1 }],
    // 'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single', { avoidEscape: true }],
    'react/react-in-jsx-scope': 'off',
    'semi': ['error', 'always'],
    'no-empty-function': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
