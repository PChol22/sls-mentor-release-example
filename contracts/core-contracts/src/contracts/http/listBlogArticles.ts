import { ApiGatewayContract } from '@swarmion/serverless-contracts';

const outputSchema = {
  type: 'object',
  properties: { articlesIds: { type: 'array', items: { type: 'string' } } },
  required: ['articlesIds'],
  additionalProperties: false,
} as const;

export const listBlogArticles = new ApiGatewayContract({
  id: 'list-blog-articles',
  path: '/blog/article',
  method: 'GET',
  integrationType: 'httpApi',
  pathParametersSchema: undefined,
  queryStringParametersSchema: undefined,
  headersSchema: undefined,
  bodySchema: undefined,
  outputSchema,
});
