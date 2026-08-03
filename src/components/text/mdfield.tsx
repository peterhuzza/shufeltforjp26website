import ReactMarkdown from 'react-markdown';
import NextImage from 'next/image';

export interface MarkdownFieldProps {
  content: string | string[];
}

// Helper: Auto-fix paths and validate safe protocols
const getSafeSrc = (src: string) => {
  if (!src) return "";

  // Only allow absolute https or relative paths (starting with / but not //)
  const isHttps = src.startsWith("https://");
  const isRelative = src.startsWith("/") && !src.startsWith("//");

  if (isHttps || isRelative) {
    return src;
  }

  // If it's a relative path not starting with / or //, prepend /
  if (!src.startsWith("/") && !src.startsWith("//")) {
    return `/${src}`;
  }

  // Block protocol-relative URLs (//example.com) and non-https absolute URLs
  return "";
};

// Helper: Robustly extract YouTube ID from any format
const getYouTubeId = (url: string) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

// Image Component
const StyledImage = ({ src, alt }: { src: string; alt?: string }) => {
  const safeSrc = getSafeSrc(src);
  if (!safeSrc) return null;

  return (
    <span className="my-8 w-full flex justify-center">
      <NextImage
        src={safeSrc}
        alt={alt || "Article Image"}
        width={0}
        height={0}
        sizes="100vw"
        className="rounded-xl shadow-lg max-h-[500px] w-auto h-auto object-contain bg-slate-50"
      />
    </span>
  );
};

export default function MarkdownField({ content }: MarkdownFieldProps) {
  if (!content) return null;

  const validContent = Array.isArray(content) ? content.join('\n\n') : content;

  return (
    <article className="max-w-3xl mx-auto prose prose-lg prose-slate text-slate-700 leading-relaxed text-left">
      <ReactMarkdown
        components={{
          img: ({ node, ...props }) => (
            <StyledImage src={props.src as string} alt={props.alt} />
          ),

          a: ({ node, ...props }) => {
            const rawHref = props.href as string;
            if (!rawHref) return <a {...props} className="text-indigo-600 hover:underline">{props.children}</a>;

            const youtubeId = getYouTubeId(rawHref);

            if (youtubeId) {
              return (
                <span className="block my-8 aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${youtubeId}`}
                    className="w-full h-full border-none"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    referrerPolicy="no-referrer"
                  />
                </span>
              );
            }

            // Security: Prevent javascript: and other dangerous protocols
            // Only allow https:// and relative paths (starting with / but not //)
            const isSafeProtocol = rawHref.startsWith('https://') ||
              (rawHref.startsWith('/') && !rawHref.startsWith('//'));

            const safeHref = isSafeProtocol ? rawHref : '#';

            if (/\.(jpg|png|webp|svg)$/i.test(rawHref)) {
              return <StyledImage src={rawHref} alt={String(props.children)} />;
            }

            return (
              <a
                {...props}
                href={safeHref}
                className="text-indigo-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.children}
              </a>
            );
          }
        }}
      >
        {validContent}
      </ReactMarkdown>
    </article>
  );
}
