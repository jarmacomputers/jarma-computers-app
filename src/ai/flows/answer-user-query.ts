'use server';

/**
 * @fileOverview AI-powered module that uses a tool that responds to user queries with relevant information extracted from external APIs.
 *
 * - answerUserQuery - A function that handles the answering user query process.
 * - AnswerUserQueryInput - The input type for the answerUserQuery function.
 * - AnswerUserQueryOutput - The return type for the answerUserQuery function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerUserQueryInputSchema = z.object({
  query: z.string().describe('The user question about a computer issue.'),
});
export type AnswerUserQueryInput = z.infer<typeof AnswerUserQueryInputSchema>;

const AnswerUserQueryOutputSchema = z.object({
  answer: z.string().describe('The answer to the user question.'),
  summary: z.string().describe('A summary of the answer.'),
  externalSources: z.array(z.string()).describe('Links to external sources.'),
});
export type AnswerUserQueryOutput = z.infer<typeof AnswerUserQueryOutputSchema>;

export async function answerUserQuery(input: AnswerUserQueryInput): Promise<AnswerUserQueryOutput> {
  return answerUserQueryFlow(input);
}

const answerUserQueryPrompt = ai.definePrompt({
  name: 'answerUserQueryPrompt',
  input: {schema: AnswerUserQueryInputSchema},
  output: {schema: AnswerUserQueryOutputSchema},
  prompt: `You are a helpful AI assistant that answers user questions about computer issues.

  Answer the following question:
  {{query}}

  Include a summary of the answer and links to external sources if available.`,
});

const answerUserQueryFlow = ai.defineFlow(
  {
    name: 'answerUserQueryFlow',
    inputSchema: AnswerUserQueryInputSchema,
    outputSchema: AnswerUserQueryOutputSchema,
  },
  async input => {
    const {output} = await answerUserQueryPrompt(input);
    return output!;
  }
);
