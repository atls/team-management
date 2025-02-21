// @ts-expect-error:next-line
import { redirect } from 'next/navigation.js'

const IndexPage = () => {
  redirect('/members')
}

export default IndexPage
