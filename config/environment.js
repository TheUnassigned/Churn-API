
const env = process.env

const config = {
  AWS_ID: env.CHURNAPI_AWS_ID,
  AWS_KEY: env.CHURNAPI_AWS_KEY,
  AWS_REGION: env.CHURNAPI_AWS_REGION || 'us-east-1',
  JWT_SECRET: env.CHURNAPI_JWT_SECRET,
  YOUTUBE_SERVER_KEY: env.CHURNAPI_YOUTUBE_SERVER_KEY,
  GRAPHIQL_HEADER: env.CHURNAPI_GRAPHIQL_HEADER,
  LAMBDA_ENDPOINT_DEV: env.CHURNAPI_LAMBDA_ENDPOINT_DEV,
  PORT: 3000
}

export {
  config
}
