"use client";

import { Suspense } from "react";
import useSWR from "swr";
import { ErrorBoundary } from "react-error-boundary";
import { HeadingDivider, Loader } from "components";
import { fetcher } from "utils/fetcher";
import Error from "../error";
import { Blogs } from "./components/blogs";

const url = `${process.env.NEXT_PUBLIC_SANITY_URL}${process.env.NEXT_PUBLIC_SANITY_ALL_BLOGS}`;

export default function Page() {

    // const filterUrl = `${process.env.NEXT_PUBLIC_SANITY_URL}${process.env.NEXT_PUBLIC_SANITY_PROJECTS}${category}${process.env.NEXT_PUBLIC_SANITY_PROJECT_BY_CATEGORY}`;
    const fetchUrl = url;
    const { data, error } = useSWR(fetchUrl, fetcher);
    const filteredBlogs = data?.result;


    if (error) {
        return <div className="container-md">Error loading Blogs...</div>;
    }

    return (
        <div className="container-md">
            <section id="blogs" className="section">
                <HeadingDivider title="Relevant Blogs" />
                <Suspense
                    fallback={
                        <div className="flex-center">
                            <Loader />
                        </div>
                    }
                >
                    <ErrorBoundary FallbackComponent={Error}>
                        {filteredBlogs === undefined ? (
                            // Loading state
                            <div className="flex-center">
                                <Loader />
                            </div>
                        ) : filteredBlogs.length === 0 ? (
                            // Empty state
                            <div className="flex-center">
                                <h3 className="text-2xl">No Blogs found in {category} category</h3>
                            </div>
                        ) : (
                            <Blogs blogs={filteredBlogs} />
                        )}
                    </ErrorBoundary>
                </Suspense>
            </section>
        </div>
    );
}
