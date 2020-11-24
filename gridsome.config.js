// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Tailwind Hamburgers',
  siteUrl: 'https://patrickgulas.github.io',
  pathPrefix: '/patrickgulas.com-hamburgers',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
    },
  ],
}
