import ServerlessCdkPlugin from '@swarmion/serverless-cdk-plugin';
import { Stack } from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class SlsMentorReleaseStack extends Stack {
  public bucketArn: string;
  public bucketName: string;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    const exampleBucket = new Bucket(this, 'BlogArticles', {
      bucketName: 'sls-mentor-blog-articles',
    });

    this.bucketArn = exampleBucket.bucketArn;
    this.bucketName = exampleBucket.bucketName;
  }
}

export const getCdkProperty =
  // @ts-ignore ServerlessCdkPlugin typing bug
  ServerlessCdkPlugin.getCdkPropertyHelper<SlsMentorReleaseStack>;
