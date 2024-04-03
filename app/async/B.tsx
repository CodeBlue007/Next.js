export default async function B() {
  await new Promise(resolve => setTimeout(resolve, 2000))

  return (
    <>
      <h2>Component B</h2>
    </>
  )
}
