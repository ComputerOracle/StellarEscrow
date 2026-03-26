import { Worker, Job } from 'bullmq';
import { QUEUE_NAMES, ProcessEventJobData, RedisConfig } from '../types';

export function createEventsWorker(redis: RedisConfig) {
  return new Worker<ProcessEventJobData>(
    QUEUE_NAMES.EVENTS,
    async (job: Job<ProcessEventJobData>) => {
      // TODO: implement event processing logic
      console.log(`[events-worker] processing job ${job.id}`, job.data);
    },
    { connection: redis }
  );
}
