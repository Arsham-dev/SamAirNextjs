import Footer from '@/Componets/Layout/Footer'
import Header from '@/Componets/Layout/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { FC } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div
      style={{
        direction: 'rtl'
      }}>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default App
