import path from 'path';
import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';

import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: {config: Configuration}) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    locales: path.resolve(__dirname, '..', '..', 'public', 'locales'),
    buildLocales: path.resolve(__dirname, '..', '..', 'build', 'locales'),
  };
  config.resolve?.modules?.unshift(paths.src);
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');

  if (config.module && config.module.rules) {
    // @ts-ignore
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    });
  }

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  config.module?.rules?.push(buildCssLoader(true));

  const mode = process.env.mode || 'development';
  const apiUrl = process.env.apiUrl || 'http://localhost:8000';
  const isDev = mode === 'development';
  const project = 'storybook';

  config.plugins?.push(new DefinePlugin({
    __IS_DEV__: JSON.stringify(isDev),
    __API_URL__: JSON.stringify(apiUrl),
    __PROJECT__: JSON.stringify(project),
  }));

  return config;
};
