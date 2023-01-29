/* eslint-disable @typescript-eslint/no-unused-vars */
declare namespace NodeJS {
  export interface ProcessEnv {
    MONGODB_CONNECTION_STRING: string;
    NODE_ENV: Environment;
    SECRET_KEY: string;
  }
  export type Environment = 'DEVELOPMENT' | 'PRODUCTION' | 'TEST';
}
