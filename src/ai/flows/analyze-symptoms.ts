// 'use server';
/**
 * @fileOverview An AI agent that analyzes symptoms and provides a ranked list of potential health conditions.
 *
 * - analyzeSymptoms - A function that handles the symptom analysis process.
 * - AnalyzeSymptomsInput - The input type for the analyzeSymptoms function.
 * - AnalyzeSymptomsOutput - The return type for the analyzeSymptoms function.
 */

'use server';
import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeSymptomsInputSchema = z.object({
  symptoms: z
    .string()
    .describe('A comma-separated list of symptoms experienced by the user.'),
  medicalHistory: z
    .string()
    .optional()
    .describe('Optional medical history of the user.'),
});
export type AnalyzeSymptomsInput = z.infer<typeof AnalyzeSymptomsInputSchema>;

const AnalyzeSymptomsOutputSchema = z.object({
  conditions: z
    .array(z.object({
      condition: z.string().describe('The name of the potential health condition.'),
      confidence: z.number().describe('A confidence score between 0 and 1 indicating the likelihood of the condition.'),
    }))
    .describe('A ranked list of potential health conditions based on the symptoms.'),
});
export type AnalyzeSymptomsOutput = z.infer<typeof AnalyzeSymptomsOutputSchema>;

export async function analyzeSymptoms(input: AnalyzeSymptomsInput): Promise<AnalyzeSymptomsOutput> {
  return analyzeSymptomsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeSymptomsPrompt',
  input: {schema: AnalyzeSymptomsInputSchema},
  output: {schema: AnalyzeSymptomsOutputSchema},
  prompt: `You are an AI-powered medical assistant that analyzes symptoms and provides a ranked list of potential health conditions.

  Analyze the following symptoms and medical history to generate a ranked list of potential health conditions with confidence scores.

  Symptoms: {{{symptoms}}}
  Medical History: {{{medicalHistory}}}

  Conditions:`, // The prompt should return a json object with the conditions array.
});

const analyzeSymptomsFlow = ai.defineFlow(
  {
    name: 'analyzeSymptomsFlow',
    inputSchema: AnalyzeSymptomsInputSchema,
    outputSchema: AnalyzeSymptomsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
