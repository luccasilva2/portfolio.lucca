'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating personalized content based on user interactions and profile information.
 *
 * The flow uses a prompt to create unique and engaging content tailored to each visitor, highlighting Lucca's skills and personality.
 *
 * @exports `personalizedContent` - An async function that takes no input and returns a string of personalized content.
 * @exports `PersonalizedContentOutput` - The output type for the personalizedContent function, which is a string.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedContentOutputSchema = z.string().describe('Personalized content based on user interactions and profile information.');
export type PersonalizedContentOutput = z.infer<typeof PersonalizedContentOutputSchema>;

export async function personalizedContent(): Promise<PersonalizedContentOutput> {
  return personalizedContentFlow();
}

const personalizedContentPrompt = ai.definePrompt({
  name: 'personalizedContentPrompt',
  output: {schema: PersonalizedContentOutputSchema},
  prompt: `You are an AI assistant tasked with generating personalized content for visitors to Lucca Silva Oliveira's website.

  Based on the visitor's past interactions (if any) and general profile information (e.g., location, interests), create a short, engaging blurb that highlights Lucca's skills and personality.

  The goal is to make the visitor feel welcome and encourage them to explore the website further. The content should be unique and tailored to each visitor.

  Keep the content concise and professional.
  `,
});

const personalizedContentFlow = ai.defineFlow(
  {
    name: 'personalizedContentFlow',
    outputSchema: PersonalizedContentOutputSchema,
  },
  async () => {
    const {output} = await personalizedContentPrompt({});
    return output!;
  }
);
