// app/blog/[slug]/page.tsx

import { Suspense } from "react";
import Fallback from "./fallback";
export async function generateStaticParams() {

  const blogs = ["1", "2", "8"];

  return blogs.map((blog) => ({
    slug: blog,
  }))

}

function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function BlogAndFilter({
  params,
  searchParams
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { slug } = await params;
  const filters = (await searchParams).filters
  await wait(2000);

  return (
    <div>
      Blog: {slug}
      <h2>searchParams: {filters}
      </h2>
    </div>
  )
}

export default async function BlogPostPage({
  searchParams,
  params
}: {
  params: Promise<{ slug: string }>,
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {

  return (
    <div>
      <Suspense fallback={<Fallback />}>
        <BlogAndFilter params={params} searchParams={searchParams} />
      </Suspense>

    </div>
  )
}