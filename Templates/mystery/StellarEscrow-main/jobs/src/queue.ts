import { Queue, DefaultJobOptions } from 'bullmq';
import {
  QUEUE_NAMES,
  ProcessEventJobData,
  SendNotificationJobData,
  RedisConfig,
} from './types';

const DEFAULT_REDIS: RedisConfig = {
  host: process.env.REDIS_HOST ?? 'localhost',
  port: Number(process.env.REDIS_PORT ?? 6379),
};

// Shared defaults applied to every job added to a queue.
// Individual jobs can override these (e.g. pass { priority: 1 } when adding).
const DEFAULT_JOB_OPTIONS: DefaultJobOptions = {
  attempts: 3,
  backoff: {
    type: 'exponential',
    delay: 1000,
  },
  removeOnComplete: { count: 100 },
  removeOnFail: { count: 500 },
};

export function createEventsQueue(redis: RedisConfig = DEFAULT_REDIS) {
  return new Queue<ProcessEventJobData>(QUEUE_NAMES.EVENTS, {
    connection: redis,
    defaultJobOptions: DEFAULT_JOB_OPTIONS,
  });
}

export function createNotificationsQueue(redis: RedisConfig = DEFAULT_REDIS) {
  return new Queue<SendNotificationJobData>(QUEUE_NAMES.NOTIFICATIONS, {
    connection: redis,
    defaultJobOptions: DEFAULT_JOB_OPTIONS,
  });
}
