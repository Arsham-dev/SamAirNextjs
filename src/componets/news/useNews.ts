import { useState } from 'react'
import { useEffectOnce, useMediaQuery } from 'usehooks-ts'
import request from '../../Componets/request'

type News = {
  title: string
  imageLink: string
  text: string
  createdAt: string
}

const useNews = () => {
  const [pagination, setpagination] = useState<number>(1)
  const [news, setnews] = useState<News[]>([])
  // Array(50)
  //   .fill(0)
  //   .map((_, i) => ({
  //     title: `title ${i}`,
  //     imageLink: 'https://picsum.photos/200/300',
  //     text: 'text' + i,
  //     createdAt: '2021-09-01'
  //   }))

  const isSmallScreen = useMediaQuery('(max-width: 400px)')
  const getNews = async () => {
    const { response } = await request('post', 'GET')
    setnews(response)
  }
  useEffectOnce(() => {
    getNews()
  })

  return { pagination, setpagination, isSmallScreen, news }
}
export default useNews
