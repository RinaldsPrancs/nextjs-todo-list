import Posts from '@/components/ui/posts'
import { getPosts } from '@/lib/posts'
import { Suspense } from 'react'
 
export default function BlogPage() {
  // Don't await the data fetching function
  const posts = getPosts()
 
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Posts posts={posts} />
    </Suspense>
  )
}