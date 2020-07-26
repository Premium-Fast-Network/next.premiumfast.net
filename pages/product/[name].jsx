import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { id, name } = router.query

  return (
      <>
        <p>ID: {id}</p>
        <p>Product: {name}</p>
      </>
  )
}

export default Post