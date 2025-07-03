'use server';

/**
 * @fileOverview An AI agent that summarizes issue details.
 *
 * - generateIssueSummary - A function that generates a summary of issue details.
 * - GenerateIssueSummaryInput - The input type for the generateIssueSummary function.
 * - GenerateIssueSummaryOutput - The return type for the generateIssueSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateIssueSummaryInputSchema = z.object({
  issueDetails: z.string().describe('The detailed description of the issue.'),
});
export type GenerateIssueSummaryInput = z.infer<typeof GenerateIssueSummaryInputSchema>;

const GenerateIssueSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the diagnostic steps and recommendations.'),
});
export type GenerateIssueSummaryOutput = z.infer<typeof GenerateIssueSummaryOutputSchema>;

export async function generateIssueSummary(input: GenerateIssueSummaryInput): Promise<GenerateIssueSummaryOutput> {
  return generateIssueSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateIssueSummaryPrompt',
  input: {schema: GenerateIssueSummaryInputSchema},
  output: {schema: GenerateIssueSummaryOutputSchema},
  prompt: `You are an AI assistant that summarizes technical issue details.

  Please provide a concise summary of the diagnostic steps and recommendations for the following issue:

  Issue Details: {{{issueDetails}}}
  `,
});

const generateIssueSummaryFlow = ai.defineFlow(
  {
    name: 'generateIssueSummaryFlow',
    inputSchema: GenerateIssueSummaryInputSchema,
    outputSchema: GenerateIssueSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
