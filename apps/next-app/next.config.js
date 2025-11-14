//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  // Use this to set Nx-specific options
  // See: https://nx.dev/recipes/next/next-config-setup
  nx: {},
  // Tell Next.js to transpile workspace packages
  transpilePackages: [
    '@limup-monorepo-nx-nextjs-expo-solito-tailwind-bun/features',
    '@limup-monorepo-nx-nextjs-expo-solito-tailwind-bun/ui',
    '@limup-monorepo-nx-nextjs-expo-solito-tailwind-bun/utils',
  ],
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
      'react-native-safe-area-context': require.resolve(
        'react-native-css-interop/dist/runtime/third-party-libs/react-native-safe-area-context.js'
      ),
    };
    return config;
  },
};

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
