module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // New feature
        'fix', // Bug fix
        'docs', // Documentation update
        'style', // Code style changes (not affecting code execution)
        'refactor', // Code changes that neither fix a bug nor add a feature
        'perf', // Performance improvements
        'test', // Adding tests
        'chore', // Build process or auxiliary tool changes
        'revert', // Revert to previous version
        'merge', // Code merge
        'build', // Build
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'scope-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-case': [0],
    'header-max-length': [2, 'always', 72],
  },
}
