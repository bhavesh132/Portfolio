import { urlFor } from "../../../lib/imageBuilder";
import { PortableText } from "@portabletext/react";


export async function generateMetadata({ params }) {
	return {
		title: `${params.slug} | Blog`,
	};
}

function renderWithLineBreaks(text) {
  return text.split('\n').flatMap((line, index) => [
    index > 0 && <br key={index} />,
    line
  ])
}


const components = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null
      return (
        <img
          src={urlFor(value).width(800).url()}
          alt={value.alt || ' '}
          className="rounded-md my-4"
        />
      )
    },
    code: ({ value }) => {
      return (
        <div className="my-6">
          {value?.filename && (
            <div className="text-sm font-mono bg-gray-800 text-white px-3 py-1 rounded-t-md">
              {value.filename}
            </div>
          )}
          <div
            language={value.language || 'javascript'}
            customStyle={{ borderRadius: '0 0 0.5rem 0.5rem', margin: 0 }}
          >
            {value.code}
          </div>
        </div>
      )
    }
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {children.map((child, i) =>
          typeof child === 'string' ? renderWithLineBreaks(child) : child
        )}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mt-6 mb-3">
        {children.map((child, i) =>
          typeof child === 'string' ? renderWithLineBreaks(child) : child
        )}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 pl-4 italic text-gray-600 dark:text-gray-300">
        {children.map((child, i) =>
          typeof child === 'string' ? renderWithLineBreaks(child) : child
        )}
      </blockquote>
    ),
    normal: ({ children }) => (
		<p>
			{children.map((child, i) => {
			// If the child is a string and it's empty, render a <br /> for line break
			if (typeof child === 'string' && child.trim() === '') {
				return <br key={i} />
			}

			// Otherwise, render text with line breaks
			return typeof child === 'string' ? renderWithLineBreaks(child) : child
			})}
		</p>
	)
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside pl-5">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside pl-5">{children}</ol>
    )
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm font-mono">{children}</code>
    ),
    link: ({ children, value }) => (
      <a
        href={value.href}
        className="underline text-blue-600 hover:text-blue-800"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }
}

export default async function BlogPostPage({ params }) {
	const url = `${process.env.NEXT_PUBLIC_SANITY_URL}${process.env.NEXT_PUBLIC_SANITY_GET_BLOG1}${params.slug}${process.env.NEXT_PUBLIC_SANITY_GET_BLOG2}`;
	const res = await fetch(url, { next: { revalidate: 60 } }); // ISR with 60s revalidation
	const json = await res.json();
	const blog = json?.result;

	if (!blog) {
		console.log("Blog not found:", params.slug);
		return (
			<div className="container-md py-10">
				<h1 className="text-2xl">Blog not found</h1>
			</div>
		);
	}

	const { title, createdAt, content, coverImage, tags } = blog;

	return (
		<article className="container-md py-10">
			<header className="mb-8">
				<h1 className="text-4xl font-bold">{title}</h1>
				<p className="mt-2 text-gray-500 text-sm">{new Date(createdAt).toDateString()}</p>

				{coverImage && (
					<img
						src={urlFor(coverImage).width(800).url()}
						alt={title}
						className="w-[80%] m-auto mt-6 rounded"
					/>
				)}

				<div className="flex flex-wrap gap-2 mt-4 justify-center">
					{tags?.map((tag) => (
						<span key={tag} className="bg-gray-200 dark:bg-gray-700 px-2 py-1 text-sm rounded">
							{tag.charAt(0).toUpperCase() + tag.slice(1)}
						</span>
					))}
				</div>
			</header>

			<section className="prose dark:prose-invert max-w-none">
				<PortableText value={content} components={components} />
			</section>
		</article>
	);
}
