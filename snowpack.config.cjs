process.env.SNOWPACK_PUBLIC_VERSION = process.env.VERSION || Date.now();

module.exports = {
  mount: {
    dev: "/",
    src: "/_dist_",
  },
  plugins: ["@snowpack/plugin-react-refresh", "@snowpack/plugin-typescript"],
  packageOptions: {
    installTypes: true,
    env: {
      SNOWPACK_PUBLIC_VERSION: true,
    },
  },
  alias: {
    "@bifravst/rsrp-bar": "./src",
  },
  buildOptions: {
    ...(process.env.SNOWPACK_PUBLIC_DEVICE_UI_BASE_URL !== undefined && {
      baseUrl: `${process.env.SNOWPACK_PUBLIC_DEVICE_UI_BASE_URL.replace(
        /\/+$/,
        ""
      )}/`,
    }),
  },
};
