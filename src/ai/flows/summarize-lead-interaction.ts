// Summarize the lead interaction and suggest next steps.
'use server';
/**
 * @fileOverview A lead interaction summarization AI agent.
 *
 * - summarizeLeadInteraction - A function that handles the lead interaction summarization process.
 * - SummarizeLeadInteractionInput - The input type for the summarizeLeadInteraction function.
 * - SummarizeLeadInteractionOutput - The return type for the summarizeLeadInteraction function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeLeadInteractionInputSchema = z.object({
  interactionHistory: z
    .string()
    .describe('The history of interactions with the lead.'),
  leadDetails: z.string().describe('Details about the lead.'),
});
export type SummarizeLeadInteractionInput = z.infer<
  typeof SummarizeLeadInteractionInputSchema
>;

const SummarizeLeadInteractionOutputSchema = z.object({
  summary: z.string().describe('A summary of the lead interaction.'),
  nextSteps: z.string().describe('Suggested next steps for the lead.'),
});
export type SummarizeLeadInteractionOutput = z.infer<
  typeof SummarizeLeadInteractionOutputSchema
>;

export async function summarizeLeadInteraction(
  input: SummarizeLeadInteractionInput
): Promise<SummarizeLeadInteractionOutput> {
  return summarizeLeadInteractionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeLeadInteractionPrompt',
  input: {schema: SummarizeLeadInteractionInputSchema},
  output: {schema: SummarizeLeadInteractionOutputSchema},
  prompt: `You are an AI assistant helping a salesperson summarize lead interactions and suggest next steps.

  Summarize the interaction history and suggest the next steps based on the lead details.

  Interaction History: {{{interactionHistory}}}
  Lead Details: {{{leadDetails}}}

  Summary:
  Next Steps: `,
});

const summarizeLeadInteractionFlow = ai.defineFlow(
  {
    name: 'summarizeLeadInteractionFlow',
    inputSchema: SummarizeLeadInteractionInputSchema,
    outputSchema: SummarizeLeadInteractionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
