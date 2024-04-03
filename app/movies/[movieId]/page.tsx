import ImageWrap from './ImageWrap'

export interface Movie {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}

interface Rating {
  Source: string
  Value: string
}

type Context = {
  params: { movieId: string }
  searchParams: { plot?: 'short' | 'full' }
}

async function fetchMovie(id: string, plot?: 'short' | 'full'): Promise<Movie> {
  const res = await fetch(
    `https://omdbapi.com/?apikey=7035c60c&i=${id}&plot=${plot || 'short'}`
  )
  return await res.json()
}

export async function generateMetadata({ params, searchParams }: Context) {
  const movie = await fetchMovie(params.movieId, searchParams.plot)
  return {
    title: movie.Title,
    description: movie.Plot,
    openGraph: {
      title: movie.Title,
      description: movie.Plot,
      images: movie.Poster,
      url: `https://nextjs-movie-app-steel.vercel.app/movies/${movie.imdbID}`,
      type: 'website',
      siteName: 'Nextjs Movie App',
      locale: 'ko_KR'
    }
  }
}

export default async function MovieId({
  params: { movieId },
  searchParams: { plot = 'short' }
}: Context) {
  const movie: Movie = await fetchMovie(movieId, plot)

  return (
    <>
      <h2>{movie.Title}</h2>
      <ImageWrap movie={movie} />
    </>
  )
}
