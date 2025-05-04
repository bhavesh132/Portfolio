// blog/components/BlogItem.js
import Link from "next/link";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { urlFor } from "../../../lib/imageBuilder";

export function BlogItem({ blog, index }) {
  const { title, slug, excerpt, coverImage, tags, createdAt } = blog;
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });

  return (
    <article
      ref={cardRef}
      className="rounded-lg bg-card-light dark:bg-card-dark overflow-hidden shadow-md"
      style={{
        transform: isInView
          ? "none"
          : `translateY(${200 / (index + 1)}px)`,
        opacity: isInView ? 1 : 0,
        transition: `all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) ${index * 100}ms`
      }}
    >
      {coverImage && (
        <img
          src={urlFor(coverImage).url()}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-5 flex flex-col gap-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-300">{excerpt}</p>

        <div className="flex flex-wrap gap-2 text-xs mt-2">
          {tags?.map(tag => (
            <span key={tag} className="px-2 py-1 bg-badge-dark rounded">
              {tag}
            </span>
          ))}
        </div>

       <Link
          href={`/blogs/${slug.current}`}
          className="mt-4 inline-flex items-center text-indigo-200 font-medium hover:text-indigo-500 transition-colors duration-200 group"
        >
          Read more
          <span className="ml-1 transition-transform duration-200 transform group-hover:translate-x-1">→</span>
</Link>
      </div>
    </article>
  );
}
