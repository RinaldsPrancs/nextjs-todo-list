import Link from "next/link"
import { Button } from "@/components/ui/button"


export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Button variant="outline" size="lg" aria-label="Submit">
        <Link href="/todo">GO TO TODO PAGE</Link>
      </Button>
    </div>
  )
}

