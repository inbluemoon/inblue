import { ContentApiClient, HaloRestAPIClient } from "@halo-dev/content-api";

const haloRestApiClient = new HaloRestAPIClient({
  baseUrl: 'http://127.0.0.1:8080',
  auth: { apiToken: 'Zhangyifeng0218' }
});

// 通过 http 客户端创建 halo 前台 api 客户端
export default new ContentApiClient(haloRestApiClient)
