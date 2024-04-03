import React from 'react'

export default function Layout({
  children
}: {
  children: Readonly<React.ReactNode>
}) {
  return (
    <>
      <h2>Nested Layout</h2>
      {children}
    </>
  )
}
