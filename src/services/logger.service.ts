// src/services/logger.service.ts
import { reactive } from 'vue';

export interface Log {
    timestamp: string;
    message: string;
}

export const logs = reactive<Log[]>([]);

export const addLog = (message: string) => {
    const timestamp = new Date().toLocaleString();
    logs.push({ timestamp, message });
};

export const Logger = {
    log: (...args: any[]) => {
        console.log(...args);
        addLog(args.map(String).join(' '));
    },
    error: (...args: any[]) => {
        console.error(...args);
        addLog(`ERROR: ${args.map(String).join(' ')}`);
    },
    warn: (...args: any[]) => {
        console.warn(...args);
        addLog(`WARN: ${args.map(String).join(' ')}`);
    },
    info: (...args: any[]) => {
        console.info(...args);
        addLog(`INFO: ${args.map(String).join(' ')}`);
    },
};