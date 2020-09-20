import { GetServerSideProps } from "next"

interface DynamicPageProps {
  phoneNumber: string
}

export default function DynamicPage (props: DynamicPageProps) {
  return (
    <>
      <h1>This is the dynamic page. It renders the URL slug below:</h1>
      <p>{props.phoneNumber}</p>
      <br/>
      <sub>The above phone number should have a + at the beginning..</sub>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { phoneNumber } = context.query

  return {
    props: {
      phoneNumber,
    },
  }
}
