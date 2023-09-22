import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { SessionProvider } from "next-auth/react"
import { store } from '../pages/api/store'
import { Provider } from 'react-redux'

export default function App({ Component, 
  pageProps: { session, ...pageProps },
  

}) {
  return (
    <SessionProvider session={session}>
     <Provider store={store}>
      <Component {...pageProps} />
      </Provider >
      <ToastContainer/>
    </SessionProvider>
  )
}
