import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/movies">Movies</Link>
          </li>
          <li>
            <Link href="/async">Async</Link>
          </li>
          <li>
            <Link href="/delay">delay</Link>
          </li>
          <li>
            <Link href="/delay?revalidate=true">delay(revalidate)</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
