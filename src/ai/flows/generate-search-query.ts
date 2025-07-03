// src/ai/flows/generate-search-query.ts
'use server';

/**
 * @fileOverview AI-powered module that transcribes and understands user spoken queries.
 *
 * - generateSearchQuery - A function that handles the transcription and understanding of voice search queries.
 * - GenerateSearchQueryInput - The input type for the generateSearchQuery function.
 * - GenerateSearchQueryOutput - The return type for the generateSearchQuery function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSearchQueryInputSchema = z.object({
  audioDataUri: z
    .string()
    .describe(
      "A recorded voice query from the user as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type GenerateSearchQueryInput = z.infer<typeof GenerateSearchQueryInputSchema>;

const GenerateSearchQueryOutputSchema = z.object({
  transcription: z.string().describe('The transcribed text from the audio data.'),
});
export type GenerateSearchQueryOutput = z.infer<typeof GenerateSearchQueryOutputSchema>;

export async function generateSearchQuery(input: GenerateSearchQueryInput): Promise<GenerateSearchQueryOutput> {
  return generateSearchQueryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSearchQueryPrompt',
  input: {schema: GenerateSearchQueryInputSchema},
  output: {schema: GenerateSearchQueryOutputSchema},
  prompt: `You are an AI assistant that transcribes user voice queries into text.

  Transcribe the following audio data into text:
  {{media url=audioDataUri}}`,
});

const generateSearchQueryFlow = ai.defineFlow(
  {
    name: 'generateSearchQueryFlow',
    inputSchema: GenerateSearchQueryInputSchema,
    outputSchema: GenerateSearchQueryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
