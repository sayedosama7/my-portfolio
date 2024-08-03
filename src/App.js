import React, { useEffect, useState } from 'react'
import HomePage from './Components/HomePage'
import { ScaleLoader } from 'react-spinners';
import { useLocation } from 'react-router';

const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [loading, setLoading] = useState([false]);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, []);

  return (
    <div>
      {loading ?
        <div className="loader">
          <ScaleLoader color={'#fff'} size={90} speedMultiplier={1} />
        </div> :
        <HomePage />
      }
    </div>
  )
}

export default App