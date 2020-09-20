import { useRouter } from 'next/router'

export default function DynamicPageWithHook () {
  const router = useRouter()
  const { phoneNumber } = router.query

  return (
    <>
      <h1>This is the dynamic page with the `useRouter` hook. It renders the URL slug below:</h1>
      <p>{phoneNumber}</p>
      <br/>
      <sub>The above phone number should have a + at the beginning..</sub>
    </>
  )
}
