import internal from "stream";

export interface Task { id:string, name: string, url: string, lastRun: string, result: string, nextRun: string };
export interface Tasks { tasks: Task[] };
export interface TaskRequest { name: string, url: string, minutes: number, firstRun: string };
