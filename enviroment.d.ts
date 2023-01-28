/* eslint-disable @typescript-eslint/no-unused-vars */
declare namespace NodeJS {
  export interface ProcessEnv {
    MONGODB_CONNECTION_STRING: string;
    NODE_ENV: Environment;
  }
  export type Environment = 'DEVELOPMENT' | 'PRODUCTION' | 'TEST';
}
