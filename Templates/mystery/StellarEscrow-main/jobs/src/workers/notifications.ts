import { Worker, Job } from 'bullmq';
import { QUEUE_NAMES, SendNotificationJobData, RedisConfig } from '../types';

export function createNotificationsWorker(redis: RedisConfig) {
  return new Worker<SendNotificationJobData>(
    QUEUE_NAMES.NOTIFICATIONS,
    async (job: Job<SendNotificationJobData>) => {
      // TODO: implement notification sending logic
      console.log(`[notifications-worker] processing job ${job.id}`, job.data);
    },
    { connection: redis }
  );
}
