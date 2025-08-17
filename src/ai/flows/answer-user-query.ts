'use server';

import { z } from 'genkit';

const AnswerUserQueryInputSchema = z.object({
  query: z.string().describe('The user question about a computer issue.'),
});
export type AnswerUserQueryInput = z.infer<typeof AnswerUserQueryInputSchema>;

const AnswerUserQueryOutputSchema = z.object({
  answer: z.string().describe('The detailed AI response to the user question.'),
  summary: z.string().describe('Short summary of the technical answer.'),
  externalSources: z.array(z.string()).describe('Helpful support links.'),
});
export type AnswerUserQueryOutput = z.infer<typeof AnswerUserQueryOutputSchema>;

export async function answerUserQuery(
  input: AnswerUserQueryInput
): Promise<AnswerUserQueryOutput> {
  if (typeof window !== 'undefined') {
    throw new Error('answerUserQuery must be called on the server');
  }

  // 👇 import dinámico solo en servidor
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { ai } = require('../../../genkit.config');

  const answerUserQueryPrompt = ai.definePrompt({
    name: 'answerUserQueryPrompt',
    input: { schema: AnswerUserQueryInputSchema },
    output: { schema: AnswerUserQueryOutputSchema },
    prompt: `
You are a technical support AI specialized in resolving incidents related to computers and networks.

Answer the following question:
{{query}}

Include:
- A complete technical answer.
- A short summary.
- Links to external sources from one or more of the following support sites:
  - https://superuser.com
  - https://www.techsupportforum.com
  - https://support.microsoft.com
  - https://askubuntu.com
  - https://support.lenovo.com
  - https://support.hp.com
  - https://www.reddit.com/r/techsupport
`,
  });

  const answerUserQueryFlow = ai.defineFlow(
    {
      name: 'answerUserQueryFlow',
      inputSchema: AnswerUserQueryInputSchema,
      outputSchema: AnswerUserQueryOutputSchema,
    },
    async (input: AnswerUserQueryInput) => {
      const { output } = await answerUserQueryPrompt(input);
      return output!;
    }
  );

  return answerUserQueryFlow(input);
}
