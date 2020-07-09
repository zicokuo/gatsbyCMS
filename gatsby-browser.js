/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
const React = require("react");
const {ApolloProvider} = require("@apollo/react-hooks");
const {client} = require('./src/utils/apolloClient');

export const wrapRootElement = ({element}) => {
    let apolloClient = client();

    return (
        <ApolloProvider client={apolloClient}>
            {element}
        </ApolloProvider>
    )
}