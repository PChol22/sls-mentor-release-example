import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getHandler } from '@swarmion/serverless-contracts';
import { getEnvVariable } from '@swarmion/serverless-helpers';
import { uuid } from 'uuidv4';

import { createBlogArticle } from '@sls-mentor-release/core-contracts';

const client = new S3Client({});

export const main = getHandler(createBlogArticle)(
  async ({ body: { body } }) => {
    const id = uuid();

    await client.send(
      new PutObjectCommand({
        Bucket: getEnvVariable('EXAMPLE_BUCKET_NAME'),
        Key: id,
        Body: body,
      }),
    );

    return { id };
  },
);
