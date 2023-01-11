import { ListObjectsCommand, S3Client } from '@aws-sdk/client-s3';
import { getHandler } from '@swarmion/serverless-contracts';
import { getEnvVariable } from '@swarmion/serverless-helpers';

import { listBlogArticles } from '@sls-mentor-release/core-contracts';

const client = new S3Client({});

export const main = getHandler(listBlogArticles)(async () => {
  const { Contents } = await client.send(
    new ListObjectsCommand({
      Bucket: getEnvVariable('EXAMPLE_BUCKET_NAME'),
    }),
  );

  if (Contents === undefined) {
    throw new Error('Articles not found');
  }

  const articlesIds = Contents.map(({ Key }) => Key).filter(
    (id): id is string => id !== undefined,
  );

  return { articlesIds };
});
