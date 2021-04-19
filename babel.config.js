module.exports = {
  presets: [
    [
      "@vue/cli-plugin-babel/preset",
      {
        useBuiltIns: "usage",
        corejs: {
          version: "3.10",
          proposals: true,
        },
      },
    ],
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: {
          version: 3,
          proposals: true,
        },
      },
    ],
  ],
};
