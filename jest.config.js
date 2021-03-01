module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '@state/snap': ['<rootDir>/src/state/snap/index.ts'],
    '@state/app': ['<rootDir>/src/state/app/index.ts'],
  },
};
