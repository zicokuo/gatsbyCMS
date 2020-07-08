import {NowRequest, NowResponse} from "@now/node/dist";

const schemaUrl = `https://liyuteamdev.myshopify.com/admin/api/2020-07/graphql.json`;

export default {
    getSchema: async (_req: NowRequest, resolve: NowResponse) => {
        const schemaJson = await fetch(schemaUrl);

    }
}