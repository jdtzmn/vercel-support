import Link from 'next/link'

export default function Index () {
  const fakePhoneNumber = '+12025550113'

  return (
    <>
      <h1>The links below will not work even when encoded</h1>
      <Link href={`/dynamic/${fakePhoneNumber}`}>
        Unencoded `next/link`
      </Link>
      <Link href={`/dynamic/${encodeURIComponent(fakePhoneNumber)}`}>
        Encoded `next/link`
      </Link>
    </>
  )
}