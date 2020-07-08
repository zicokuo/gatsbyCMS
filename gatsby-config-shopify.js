module.exports = {
    plugins: [
        {
            resolve: "gatsby-source-shopify",
            options: {
                // The domain name of your Shopify shop. This is required.
                // Example: 'gatsby-source-shopify-test-shop' if your Shopify address is
                // 'gatsby-source-shopify-test-shop.myshopify.com'.
                // If you are running your shop on a custom domain, you need to use that
                // as the shop name, without a trailing slash, for example:
                // shopName: "gatsby-shop.com",
                shopName: "liyuteamdev.myshopify.com",

                // An API access token to your Shopify shop. This is required.
                // You can generate an access token in the "Manage private apps" section
                // of your shop's Apps settings. In the Storefront API section, be sure
                // to select "Allow this app to access your storefront data using the
                // Storefront API".
                // See: https://help.shopify.com/api/custom-storefronts/storefront-api/getting-started#authentication
                accessToken: "35e26ae582a726141b9d641159f7cde9",

                // Set the API version you want to use. For a list of available API versions,
                // see: https://help.shopify.com/en/api/storefront-api/reference/queryroot
                // Defaults to 2019-07
                apiVersion: "2020-07",

                // Set verbose to true to display a verbose output on `npm run develop`
                // or `npm run build`. This prints which nodes are being fetched and how
                // much time was required to fetch and process the data.
                // Defaults to true.
                verbose: true,

                // Number of records to fetch on each request when building the cache
                // at startup. If your application encounters timeout errors during
                // startup, try decreasing this number.
                paginationSize: 250,

                // List of collections you want to fetch.
                // Possible values are: 'shop' and 'content'.
                // Defaults to ['shop', 'content'].
                includeCollections: ["shop", "content"],

                // Allow overriding the default queries
                // This allows you to include/exclude extra fields when sourcing nodes
                // Available keys are: articles, blogs, collections, products, shopPolicies, and pages
                // Queries need to accept arguments for first and after
                // You will need to include all the fields you want available for a
                // specific key. View the `shopifyQueries Defaults` section below for a
                // full list of keys and fields.
        //         shopifyQueries: {
        //             products: `
        //   query GetProducts($first: Int!, $after: String) {
        //     products(first: $first, after: $after) {
        //       pageInfo {
        //         hasNextPage
        //       }
        //       edges {
        //         cursor
        //         node {
        //           availableForSale
        //         }
        //       }
        //     }
        //   }
        // `,
        //         },
            },
        },
        {
            resolve: `gatsby-plugin-apollo-shopify`,
            options: {
                shopName: `liyuteamdev.myshopify.com`,
                accessToken: `35e26ae582a726141b9d641159f7cde9`,
            },
        },

        // {
        //     resolve: 'gatsby-source-shopify-admin',
        //     options: {
        //         storeName: `liyuteamdev.myshopify.com`,
        //         apiKey: `310e4a1ac9c1251460cf5188a335c87b`,
        //         verbose: true,
        //         onlyPublished: false, // only show products that are currently published on the 'publication' aka the private app
        //         pollInterval: 1000 * 10,
        //         imagesMetafields: {
        //             product: null,
        //             collection: null
        //         }
        //     },
        // },
    ]
}