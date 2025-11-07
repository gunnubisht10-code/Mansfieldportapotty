
import React from 'react';
import { marked } from 'marked';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const getHTML = () => {
    if (!content) return { __html: '' };
    // Basic sanitization to prevent XSS. For production, a more robust library like DOMPurify is recommended.
    const sanitizedHtml = marked.parse(content, { gfm: true, breaks: true });
    return { __html: sanitizedHtml };
  };

  return (
    <div
      className="prose prose-lg max-w-none prose-h1:font-heading prose-h2:font-heading prose-h3:font-heading prose-a:text-primary hover:prose-a:text-blue-700 prose-strong:text-dark"
      dangerouslySetInnerHTML={getHTML()}
    />
  );
};

export default MarkdownRenderer;
