// Job name constants
export const JOB_NAMES = {
  PROCESS_EVENT: 'process-event',
  SEND_NOTIFICATION: 'send-notification',
} as const;

export type JobName = (typeof JOB_NAMES)[keyof typeof JOB_NAMES];

// Queue name constants
export const QUEUE_NAMES = {
  EVENTS: 'events',
  NOTIFICATIONS: 'notifications',
} as const;

// Job data shapes
export interface ProcessEventJobData {
  eventId: string;
  tradeId: string;
  type: string;
  timestamp: string;
  data: Record<string, unknown>;
}

export interface SendNotificationJobData {
  userId: string;
  tradeId: string;
  message: string;
  channel: 'email' | 'push' | 'in-app';
}

// Redis connection config
export interface RedisConfig {
  host: string;
  port: number;
}
