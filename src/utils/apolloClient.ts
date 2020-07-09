import {ApolloClient} from 'apollo-client'
import shopifyConfig from '../../gatsby-config-shopify.js';
import {HttpLink, InMemoryCache, from, ApolloLink, concat} from "apollo-boost";

let pin = shopifyConfig.plugins.map(item => {
    if (item.resolve === 'gatsby-source-shopify') {
        return item
    }
})

pin = Array.isArray(pin) ? pin[0] : null;

const
    link = new HttpLink({
        // uri: `https://${pin.options.shopName}/api/2020-07/graphql`
        uri: `/___graphql`
    }),
    cache = new InMemoryCache(),
    config = {
        shopName: pin.options.shopName,
        headers: {
            shopifyAccessToken: '35e26ae582a726141b9d641159f7cde9',
        },
    },
    authMiddleware = new ApolloLink((operation, forward) => {
        // add the authorization to the headers
        operation.setContext(({headers = {}}) => ({
            headers: {
                ...headers,
                // authorization: `Bearer ${'35e26ae582a726141b9d641159f7cde9'}`,
                'X-Shopify-Storefront-Access-Token':'35e26ae582a726141b9d641159f7cde9',
                'Accept':'application/json',
                'Access-Control-Allow-Origin':'http://127.0.0.1:8000/',
                'Access-Control-Allow-Credentials':'true',
            }
        }));

        return forward(operation);
    })

export const client = () => new ApolloClient({
    cache: cache,
    link: concat(authMiddleware, link)
});