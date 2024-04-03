import Link from 'next/link'

type Movies = {
  Title: string
  imdbID: string
}[]

export default async function Movies() {
  const endPoint = 'https://omdbapi.com/?apikey=7035c60c&s=avengers'
  const response = await fetch(endPoint)
  const { Search: movies }: { Search: Movies } = await response.json()

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.imdbID}>
          <Link href={`/movies/${movie.imdbID}`}>{movie.Title}</Link>
        </li>
      ))}
    </ul>
  )
}
