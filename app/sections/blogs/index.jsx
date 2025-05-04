// sections/blog/BlogSection.js
import { Suspense, useRef } from "react";
import { domAnimation, LazyMotion, useInView } from "framer-motion";
import useSWR from "swr";
import { HeadingDivider, Loader } from "components";
import { fetcher } from "utils/fetcher";
import { ErrorBoundary } from "react-error-boundary";
import Error from "../../error";
import { Blogs } from "../../blogs/components/blogs";
import { SITE_ROUTES } from "../../../constants";

const url = `${process.env.NEXT_PUBLIC_SANITY_URL}${process.env.NEXT_PUBLIC_SANITY_LATEST_BLOGS}`;
// /blog/components/Blogs.js will map each BlogItem

export function BlogSection() {
  const btnRef = useRef(null);
  const isBtnInView = useInView(btnRef, { once: true });

  const { data, error } = useSWR(url, fetcher);
  const blogs = data?.result;

  if (error && !data) {
    console.error("Error loading blogs...", error);
    return null;
  }

  return (
    <LazyMotion features={domAnimation}>
      <section id="blogs" className="section">
        <HeadingDivider title="Latest blog posts" />
        <div className="h-10 md:h-14" />

        <div className="flex flex-col items-center gap-8 md:gap-14">
          <Suspense fallback={<Loader />}>
            <ErrorBoundary FallbackComponent={Error}>
              <Blogs blogs={blogs} />
            </ErrorBoundary>
          </Suspense>

          <a
            href={SITE_ROUTES.blogs}
            ref={btnRef}
            className="inline-block px-4 py-2 mt-4 text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 rounded-md transition duration-200 shadow-md"
            style={{
              transform: btnRef ? "none" : "translateX(-50px)",
              opacity: isBtnInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
          >
            <button>More Blogs</button>
          </a>
        </div>
      </section>
    </LazyMotion>
  );
}
