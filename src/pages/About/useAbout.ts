import { useState } from 'react'
import { useEffectOnce, useMediaQuery } from 'usehooks-ts'
import request from '../../componets/request'
type Airplane = {
  imageLink: string
  links: string[]
  model: string
  register: string
}
type Director = {
  name: string
  imageLink: string
  links: string[]
  position: string
}
const useAbout = () => {
  const isTablet = useMediaQuery('(max-width: 1180px)')
  const [firstText, setFirstText] = useState<string>('')
  const [secondText, setsecondText] = useState<string>('')
  const [airplane, setairplane] = useState<Airplane[]>([])
  const [director, setdirector] = useState<Director[]>([])
  const getFirstText = async () => {
    const { response } = await request('CUFtext', 'GET')
    setFirstText(response?.text)
  }

  const getSecondText = async () => {
    const { response } = await request('CUStext', 'GET')
    setsecondText(response?.text)
  }
  const getAirplane = async () => {
    const { response } = await request('Airplanes', 'GET')
    setairplane(response)
  }
  const getDirector = async () => {
    const { response } = await request('bods', 'GET')
    setdirector(response)
  }

  useEffectOnce(() => {
    getFirstText()
    getSecondText()
    getAirplane()
    getDirector()
  })

  return { firstText, secondText, isTablet, airplane, director }
}
export default useAbout
