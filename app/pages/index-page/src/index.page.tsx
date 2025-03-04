// @ts-expect-error:next-line
import { redirect } from 'next/navigation.js'

const IndexPage = (): void => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  redirect('/members')
}

export default IndexPage
