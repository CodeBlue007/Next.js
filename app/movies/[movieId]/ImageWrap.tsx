'use client'

import Image from 'next/image'
import { Movie } from './page'

export default function ImageWrap({ movie }: { movie: Movie }) {
  return (
    <Image
      src={movie.Poster}
      alt={movie.Title}
      width="200"
      height="300"
      onLoad={() => console.log('로드완료')}
    />
  )
}
