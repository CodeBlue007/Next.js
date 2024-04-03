import { Suspense } from 'react'
import A from './A'
import B from './B'
import Loader from '@/components/Loader'

export default async function Async() {
  await new Promise(resolve => setTimeout(resolve, 3000))

  return (
    <>
      <h1>Async Page</h1>
      <Suspense fallback={<Loader />}>
        <A />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <B />
      </Suspense>
    </>
  )
}
