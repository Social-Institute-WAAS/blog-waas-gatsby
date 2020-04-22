// const rupture = require('rupture')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Blog do WAAS`,
    description: `Blog do WAAS em Gatsby.js consumindo api do Wordpress`,
    author: `@adaolima`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'fonts',
        path: `${__dirname}/src/fonts/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WAAS Tecnologia Fortalecendo Jovens`,
        short_name: `Ninjas WAAS`,
        default_locale: "pt_BR",
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon :`src/images/favicon-96x96.png`,
        // icons: [
        //   {
        //    src : `src/images/android-icon-96x96.png`,
        //    sizes : `96x96`,
        //    type: `image/png`,
        //   },
        //   {
        //    src : `src/images/android-icon-144x144.png`,
        //    sizes : `144x144`,
        //    type: `image/png`,
        //   },
        //   {
        //    src : `src/images/android-icon-192x192.png`,
        //    sizes : `192x192`,
        //    type: `image/png`,
        //   },
        //   {
        //     src : `src/images/apple-icon-114x114.png`,
        //     sizes : `96x96`,
        //     type: `image/png`,
        //    },
        //    {
        //     src : `src/images/apple-icon-144x144.png`,
        //     sizes : `144x144`,
        //     type: `image/png`,
        //    },
        //    {
        //     src : `src/images/apple-icon-180x180.png`,
        //     sizes : `192x192`,
        //     type: `image/png`,
        //    }
        //  ], // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your WordPress source
        baseUrl: process.env.URL_HOST,
        protocol: process.env.URL_PROTOCOL,
        // If not set, it uses the default of "wp-json"
        // restApiRoutePrefix: 'wp-json',
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: true,
        auth: {
          // If auth.user and auth.pass are filled, then the source plugin will be allowed
          // to access endpoints that are protected with .htaccess.
          // htaccess_user: 'your-htaccess-username',
          // htaccess_pass: 'your-htaccess-password',
          // htaccess_sendImmediately: false,
          // If you use "JWT Authentication for WP REST API" (https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/)
          // or (https://github.com/jonathan-dejong/simple-jwt-authentication) requires jwt_base_path, path can be found in WordPress wp-api.
          // plugin, you can specify user and password to obtain access token and use authenticated requests against WordPress REST API.
          jwt_user: process.env.JWT_USER,
          jwt_pass: process.env.JWT_PASSWORD,
          jwt_base_path: '/jwt-auth/v1/token',
          // Default - can skip if you are using https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/
        },
        // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
        // It can help you debug specific API Endpoints problems.
        verboseOutput: false,
        cookies: {},
        // Search and Replace Urls across WordPress content.
        searchAndReplaceContentUrls: {
          sourceUrl: `${process.env.URL_PROTOCOL}://${process.env.URL_HOST}`,
          replacementUrl: '',
        },
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        // Set WP REST API routes whitelists
        // and blacklists using glob patterns.
        // Defaults to whitelist the routes shown
        // in the example below.
        // See: https://github.com/isaacs/minimatch
        // Example:  `["/*/*/comments", "/yoast/**"]`
        // ` will either include or exclude routes ending in `comments` and
        // all routes that begin with `yoast` from fetch.
        // Whitelisted routes using glob patterns
        // includedRoutes: [
        //   '**/categories',
        //   '**/posts',
        //   '**/pages',
        //   '**/media',
        //   '**/tags',
        //   '**/taxonomies',
        //   '**/users',
        // ],
        // Blacklisted routes using glob patterns
        // excludedRoutes: ['**/settings', '**/themes'],
        // Set this to keep media sizes.
        // This option is particularly useful in case you need access to
        // URLs for thumbnails, or any other media detail.
        // Defaults to false
        // perPage: 20,
        keepMediaSizes: false,
        // use a custom normalizer which is applied after the built-in ones.
        // normalizer: function ({ entities }) {
        //   return entities
        // },
      },
    },
    `gatsby-plugin-styled-components`,
    // {
    //   // Removes unused css rules
    //   resolve: 'gatsby-plugin-purgecss',
    //   options: {
    //     // Activates purging in gatsby develop
    //     develop: true,
    //     // Purge only the main css file
    //     purgeOnly: ['./src/components/main.css'],
    //   },
    // }, // must be after other CSS plugins

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-glamor`,
  ],
}
