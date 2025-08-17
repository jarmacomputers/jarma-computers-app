
'use server';

import { z } from 'genkit';

// Esquema de entrada
const GenerateSearchQueryInputSchema = z.object({
  audioDataUri: z.string().describe(
    "A base64 encoded voice query. Format: 'data:<mimetype>;base64,<encoded_data>'"
  ),
});
export type GenerateSearchQueryInput = z.infer<typeof GenerateSearchQueryInputSchema>;

// Esquema de salida
const GenerateSearchQueryOutputSchema = z.object({
  transcription: z.string().describe('The text version of the voice query.'),
});
export type GenerateSearchQueryOutput = z.infer<typeof GenerateSearchQueryOutputSchema>;

/**
 * Función que se ejecuta solo en servidor.
 * Importa dinámicamente `ai` para evitar que `handlebars` se empaquete en el cliente.
 */
export async function generateSearchQuery(
  input: GenerateSearchQueryInput
): Promise<GenerateSearchQueryOutput> {
  if (typeof window !== 'undefined') {
    throw new Error('generateSearchQuery must be called on the server');
  }

  // Importación dinámica para evitar warnings de Webpack
  const { ai } = await import('../../../genkit.config');

  // Prompt definition
  const generateSearchQueryPrompt = ai.definePrompt({
    name: 'generateSearchQueryPrompt',
    input: { schema: GenerateSearchQueryInputSchema },
    output: { schema: GenerateSearchQueryOutputSchema },
    prompt: `
You are a voice-to-text AI assistant.

Convert the following audio (encoded as base64) into a clear technical support query.

Audio:
{{media url=audioDataUri}}
    `,
  });

  // Flow definition con tipado explícito
  const generateSearchQueryFlow = ai.defineFlow(
    {
      name: 'generateSearchQueryFlow',
      inputSchema: GenerateSearchQueryInputSchema,
      outputSchema: GenerateSearchQueryOutputSchema,
    },
    async (input: GenerateSearchQueryInput) => {
      const { output } = await generateSearchQueryPrompt(input);
      return output!;
    }
  );

  return generateSearchQueryFlow(input);
}


