import imageUrlBuilder from '@sanity/image-url';
import myConfiguredSanityClient from '@sanity/client';



export const client = myConfiguredSanityClient({
  
  // projectId: process.env.SANITY_PROJECT_ID,
  projectId: 'qhxo2zzr',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: true,
  // token: process.env.SANITY_TOKEN,
  token: 'skRY4HnNKuJJjM1PhY2kTxVYKkTSS1gbcGUASsovMCxaeL74wIVYncLmGxsWblPXtKgjf5dgMkQ2LvcuXJ4uQAeSTCaKhMVbowQ5nCMnlxiYxmbfBTnRu1q2o1xzitWSs0g8bwiL6JkfdXb9kucRAhQcWj60sdVSJSlFgYOO4OCDuiNHWq2C',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source).url()