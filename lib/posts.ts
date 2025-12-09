export async function getPosts(): Promise<{ id: string; title: string }[]> {
 
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
  const data = await response.json()

  return data.map((post: any) => ({
    id: post.id.toString(),
    title: post.title,
  }))
}