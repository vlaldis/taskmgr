export interface Task { name: string, url: string, lastRun: string, result: string, nextRun: string };
export interface Tasks { tasks: Task[] };