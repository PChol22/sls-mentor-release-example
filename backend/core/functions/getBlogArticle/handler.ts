import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getHandler } from '@swarmion/serverless-contracts';
import { getEnvVariable } from '@swarmion/serverless-helpers';

import { getBlogArticle } from '@sls-mentor-release/core-contracts';

const client = new S3Client({});

export const main = getHandler(getBlogArticle)(
  async ({ pathParameters: { id } }) => {
    const { Body } = await client.send(
      new GetObjectCommand({
        Bucket: getEnvVariable('EXAMPLE_BUCKET_NAME'),
        Key: id,
      }),
    );

    if (Body === undefined) {
      throw new Error('Article not found');
    }

    const articleBody = await Body.transformToString();

    return { body: articleBody };
  },
);
