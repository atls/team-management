'use client'

import { useRouter } from 'next/navigation.js'

const IndexPage = () => {
  const router = useRouter()
  router.push('/dashboard/users')
}

export default IndexPage
