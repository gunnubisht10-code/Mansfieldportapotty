
import { useState, useEffect } from 'react';
import { generateContent } from '../services/geminiService';

export function useGeminiContent(prompt: string, dependencies: any[] = []) {
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const result = await generateContent(prompt);
        setContent(result);
      } catch (err) {
        setError('Failed to generate content.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prompt, ...dependencies]);

  return { content, isLoading, error };
}
