import path from 'path';

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.stories.@(js|jsx)'],
  addons: [
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-coverage',
      options: {
        provider: 'istanbul',
        istanbul: {
          // cwd set to repo root so include patterns resolve correctly
          cwd: path.resolve(__dirname, '../../..'),
          include: [
            'apps/website/src/**/*.jsx',
            'packages/package-2/src/**/*.js',
          ],
          exclude: ['**/*.stories.*', '**/*.test.*'],
        },
      },
    },
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};

export default config;
