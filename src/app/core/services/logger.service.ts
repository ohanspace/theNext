import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  logs: string[] = [];

  getLogs(): string[] {
    return this.logs;
  }

  add(log: string): void {
    this.logs.push(log);
  }

  clear(): void {
    this.logs = [];
  }

}
