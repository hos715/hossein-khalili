import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="prose-blog">
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </div>
  );
}
