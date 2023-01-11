import { getTrigger } from '@swarmion/serverless-contracts';
import { getHandlerPath, LambdaFunction } from '@swarmion/serverless-helpers';

import { listBlogArticles } from '@sls-mentor-release/core-contracts';

import { getCdkProperty } from 'resources';

const config: LambdaFunction = {
  environment: {
    EXAMPLE_BUCKET_NAME: getCdkProperty('bucketName'),
  },
  iamRoleStatements: [
    {
      Effect: 'Allow',
      Action: 's3:ListBucket',
      Resource: [getCdkProperty('bucketArn')],
    },
  ],
  handler: getHandlerPath(__dirname),
  events: [getTrigger(listBlogArticles)],
};

export default config;
