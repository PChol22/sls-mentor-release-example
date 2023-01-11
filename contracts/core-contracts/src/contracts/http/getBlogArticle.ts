import { ApiGatewayContract } from '@swarmion/serverless-contracts';

const pathParametersSchema = {
  type: 'object',
  properties: { id: { type: 'string' } },
  required: ['id'],
  additionalProperties: false,
} as const;

const outputSchema = {
  type: 'object',
  properties: { body: { type: 'string' } },
  required: ['body'],
  additionalProperties: false,
} as const;

export const getBlogArticle = new ApiGatewayContract({
  id: 'get-blog-article',
  path: '/blog/article/{id}',
  method: 'GET',
  integrationType: 'httpApi',
  pathParametersSchema,
  queryStringParametersSchema: undefined,
  headersSchema: undefined,
  bodySchema: undefined,
  outputSchema,
});
