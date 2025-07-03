import { config } from 'dotenv';
config();

import '@/ai/flows/generate-issue-summary.ts';
import '@/ai/flows/answer-user-query.ts';
import '@/ai/flows/generate-search-query.ts';