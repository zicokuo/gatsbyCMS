const shopifyConfig = require("./gatsby-config-shopify");

module.exports = {
    siteMetadata: {
        title: 'Gatsby + Node.js (TypeScript) API',
    },
    plugins: [
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        // {
        // resolve: `gatsby-plugin-react-helmet`,
        // },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'Gatsby + Node.js (TypeScript) API',
                short_name: 'Gatsby + Node.js (TypeScript)',
                start_url: '/',
                icon: 'src/images/gatsby-icon.png',
            },
        },
        {
            resolve: `gatsby-plugin-typescript`,    //  支持tsx
        },
        {
            resolve: `gatsby-plugin-postcss` //  语义化css集
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                postCssPlugins: [
                    require("tailwindcss"),
                    require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
                ],
            },
        },
        {
            resolve: `gatsby-plugin-theme-ui`,  //  主题插件
            options: {
                preset: "@theme-ui/preset-funk",
            },
        },
        {
            resolve: `gatsby-theme-blog`,   //  主题功能
            options: {
                /*
                - basePath defaults to `/`
                */
                basePath: `/blog`,
            },
        },
        ...shopifyConfig.plugins],
};
