import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-gray-900/80 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center">
          <Link href="/" className="text-lg font-semibold hover:text-gray-600 transition-colors">
            fishisnow
          </Link>
        </div>
      </div>
    </header>
  )
} 