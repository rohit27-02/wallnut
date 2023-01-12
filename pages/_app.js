import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'
import { HashLoader } from 'react-spinners'
function MyApp({ Component, pageProps }) {
  const [loaded, setloaded] = useState(false);
  useEffect(() => {
    if (typeof window != "undefined") {
      document.addEventListener("load",setloaded(true))
    }
  }, []);
  return <>
    {loaded ? <div><Navbar />
      <Component {...pageProps} />
      <Footer />
    </div> : <div className='absolute top-[50%] left-[50%] '><HashLoader color="#a58838" /></div>}
  </>
}

export default MyApp
