import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import HomePage from './components/HomePage/HomePage'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import MobileHeader from './components/Header/MobileHeader'


function App() {
 
  const [isMobile, setIsMobile] = useState(false);
  // const authStatus = useSelector(state => state.auth.status)

  useEffect(() => {
    const handleResize = () => {
      const isMobileDevice = window.innerWidth <= 1024; // Change 600 to your desired breakpoint
      console.log('is mobile ', isMobileDevice)
      setIsMobile(isMobileDevice);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial screen size
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? (<>
        <MobileHeader/>
      </>) : (<>
        <Header/>
      </>)}
      
      {/* <HomePage/> */}
      <Outlet/>
      <Footer/>
      

     
      


    </>
  )
}

export default App
