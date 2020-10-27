import moment from "moment";
import mongoose from "mongoose";

interface DataFactoryOptions {
  dbString: string;
  disableReplica: boolean;
  logger?: LoggerOptions;
  [s: string]: unknown;
}
interface FormatterOptions {
  colorize: string;
  level: "debug" | "error" | "info" | "warn" | "silly";
  message?: string;
  meta: { [s: string]: unknown; };
  timestamp(): moment.MomentInput;
}
interface LoggerOptions {
  logLevel?: string;
  sentry?: WinstonSentryOptions;
  shardID?: string;
  [s: string]: unknown;
}
interface WinstonSentryOptions {
  dsn?: string;
  logLevel?: string;
  [s: string]: unknown;
}

declare class Logger {
  private _options: LoggerOptions;
  transports: [unknown /* No Winston docs for 2.2.0 */, unknown /* Why is winston-sentry on 0.1.4 (2011) */]
  exitOnError: boolean;
  private _formatter(options: FormatterOptions): string;
  constructor(options: LoggerOptions);
}

interface Document extends mongoose.Document {
  [s: string]: unknown;
}

export declare class DataFactory {
  logger: Logger;
  private _models: { [s: string]: mongoose.Model<Document>; };
  constructor(options: DataFactoryOptions);
  models: { [s: string]: mongoose.Model<Document>; };
  mongoose: typeof mongoose;
  connection: mongoose.Connection;
  collection(name: string, options?: unknown): mongoose.Collection;
  collection(...args: unknown[]): mongoose.Connection; // In case you actually use spread args
  Schema: mongoose.Schema;
  registerModel(data: { name: string; schema: mongoose.Schema; }): void;
}

declare module "@dyno.gg/datafactory" {
  export = typeof DataFactory;
}