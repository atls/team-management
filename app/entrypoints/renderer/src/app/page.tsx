'use client'

// @ts-ignore:next-line
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()
  router.push('/dashboard/users')
}

export default Page
