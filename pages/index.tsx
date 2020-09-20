import Link from 'next/link'

export default function Index () {
  const fakePhoneNumber = '+12025550113'

  const plainHref = `/dynamic/${fakePhoneNumber}`
  const encodedHref = `/dynamic/${encodeURIComponent(fakePhoneNumber)}`
  const withHookHref = `/hookTest/${fakePhoneNumber}`

  return (
    <>
      <h1>The links below will not work even when encoded:</h1>
      <Link href={plainHref}>
        Unencoded `next/link`
      </Link>
      <p>href: <pre style={{ display: 'inline-block' }}>{plainHref}</pre></p>
      <hr style={{ border: '1px solid rgb(240, 240, 240)' }}/>
      <br/>
      <Link href={encodedHref}>
        Encoded `next/link`
      </Link>
      <p>href: <pre style={{ display: 'inline-block' }}>{encodedHref}</pre></p>
      <hr style={{ border: '1px solid rgb(240, 240, 240)' }}/>
      <br/>
      <Link href={withHookHref}>
        A test with the `useRouter` hook
      </Link>
      <p>href: <pre style={{ display: 'inline-block' }}>{withHookHref}</pre></p>
    </>
  )
}