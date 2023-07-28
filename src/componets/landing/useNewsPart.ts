import { useState } from 'react'
import { useEffectOnce, useMediaQuery } from 'usehooks-ts'
import request from '../../Componets/request'

type News = {
  title: string
  imageLink: string
  text: string
}

const useNewsPart = () => {
  const [pagination, setpagination] = useState<number>(1)
  const [news, setnews] = useState<News[]>([])

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
export default useNewsPart
