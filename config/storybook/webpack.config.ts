import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
    config.plugins ??= [];

    config.module ??= {};
    config.module.rules ??= [];

    config.resolve ??= {};
    config.resolve.modules ??= ['node_modules'];
    config.resolve.extensions ??= [];

    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    // ВАЖНО: добавляем src ПЕРЕД node_modules для приоритета
    config.resolve.modules = [paths.src, ...config.resolve.modules];

    config.resolve.extensions.push('.ts', '.tsx');

    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule) => {
        if (rule && typeof rule === 'object' && 'test' in rule) {
            if (rule.test instanceof RegExp && rule.test.test('file.svg')) {
                return { ...rule, exclude: /\.svg$/i };
            }
        }
        return rule;
    });

    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.module.rules.push(buildCssLoader(true));

    config.plugins.push(
        new DefinePlugin({
            __IS_DEV__: true,
        }),
    );

    return config;
};
