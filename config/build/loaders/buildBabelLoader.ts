import babelRemovePropsPlugin from '../babel/babelRemovePropsPlugin';
import { BuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends BuildOptions {
    isTSX?: boolean;
}

export function buildBabelLoader(props: BuildBabelLoaderProps) {
  const { isDev, isTSX } = props;

  return {
    test: isTSX ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            '@babel/plugin-transform-typescript',
            {
              isTSX,
            },
          ],
          isTSX && !isDev && [
            babelRemovePropsPlugin,
            {
              props: ['data-testid'],
            },
          ],
          '@babel/plugin-transform-runtime',
        ].filter(Boolean),
      },
    },
  };
}
