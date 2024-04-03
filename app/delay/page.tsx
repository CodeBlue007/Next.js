import { revalidatePath } from 'next/cache'

type ResponseValue = {
  message: string
  time: string
}

export default async function Delay({
  searchParams: { revalidate }
}: {
  searchParams: { revalidate: 'true' | 'false' }
}) {
  if (revalidate === 'true') {
    revalidatePath('https://api.heropy.dev/v0/delay')
  }
  const res = await fetch('https://api.heropy.dev/v0/delay')
  const data: ResponseValue = await res.json()

  return <h1>{data.time}</h1>
}
