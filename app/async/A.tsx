export default async function A() {
  await new Promise(resolve => setTimeout(resolve, 5000))
  return (
    <>
      <h2>Component A</h2>
    </>
  )
}
//5초 비동기 컴포넌트
