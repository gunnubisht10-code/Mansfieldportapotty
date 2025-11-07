
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.error("Gemini API key is not set. Please set the API_KEY environment variable.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

// Simple in-memory cache to avoid re-fetching content during the same session.
const cache = new Map<string, string>();

export async function generateContent(prompt: string, useCache: boolean = true): Promise<string> {
  if (useCache && cache.has(prompt)) {
    return cache.get(prompt)!;
  }

  if (!API_KEY) {
    return Promise.resolve(`Error: Gemini API key not configured.
Prompt: ${prompt}`);
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    const text = response.text;
    if (useCache) {
      cache.set(prompt, text);
    }
    return text;
  } catch (error) {
    console.error("Error generating content with Gemini:", error);
    return `Error: Could not generate content. Please check the console for details.
Prompt: ${prompt}`;
  }
}
