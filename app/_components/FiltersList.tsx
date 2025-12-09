import { Button } from "@/components/ui/button"

export default async function FiltersList({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams
  const filters = params.filters


  await new Promise(r => setTimeout(r, 1500))
  const categories = ["Electronics", "Clothing", "Books", "Toys"]

  return (
   <ul className="space-y-2">
      <li>Active filter from URL: <strong>{filters || "none"}</strong></li>
      <li>
        Categories from database ({categories.length} found):
        <ul className="ml-6 mt-1">
          {categories.map(cat => (
            <li key={cat}>{cat}</li>
          ))}
        </ul>
      </li>
      <Button>Clear</Button>
    </ul>
  )
}