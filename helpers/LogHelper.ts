import { Console } from 'console';

export class LogHelper {
  static info(message: string) {
    console.info(`INFO: ${message}`);
  }

  static error(message: string, error?: Error) {
    console.error(`ERROR: ${message}`, error);
  }

  static warn(message: string) {
    console.warn(`WARN: ${message}`);
  }
}
