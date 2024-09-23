import Link from "next/link"

export const Header = () => {
  return (
    <header className="p-5">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold ">
          Cryptosteeze
        </Link>
        <div>
          {/* Add navigation items here */}
          <button className="bg-blue-600 px-4 py-2 rounded">Explore Now</button>
        </div>
      </nav>
    </header>
  )
}

