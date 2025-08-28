// lib/gpt.ts
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // keep secret, server-side only
});

/**
 * Generate a case summary from client intake data
 * @param intakeData - object containing client answers
 * @returns summary string
 */
export async function generateCaseSummary(intakeData: Record<string, string>) {
  try {
    const prompt = `
You are a legal assistant. Summarize the following client case concisely:

${JSON.stringify(intakeData, null, 2)}

Provide a professional case summary in plain text.
`;

    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini', // can use gpt-3.5-turbo if preferred
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 500,
    });

    const summary = response.choices[0].message?.content?.trim() || '';
    return summary;
  } catch (err) {
    console.error('GPT summary error:', err);
    return 'Failed to generate summary.';
  }
}

