type Movies = {
  Title: string
  imdbId: string
}[]

export default async function Movies() {
  await new Promise(resolve => setTimeout(resolve, 3000))
  const endPoint = 'https://omdbapi.com/?apikey=7035c60c&s=avengers'
  const response = await fetch(endPoint)
  const { Search: movies }: { Search: Movies } = await response.json()

  throw new Error('에러 ㅎㅇ')

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.imdbId}>{movie.Title}</li>
      ))}
    </ul>
  )
}

//비동기 컴포넌트? 컴포넌트에 async가 붙는다면?
// 클라이언트 컴포넌트에는 async 왜 안됨?
// loading이 그냥 뜨는데? 프레임워크라 그런듯
