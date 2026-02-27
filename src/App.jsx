import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { LuSun, LuMoon, LuLoader, LuLoaderCircle } from 'react-icons/lu'
import { useThemeStore } from './stores/useThemeStore'
import { LandingLayout } from './layouts'
import { LandingPage } from './pages'
import { useEffect, useState } from 'react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />
      }
    ]
  }
])


const App = () => {
  // const { theme, themes, toggleThemeMode } = useThemeStore();
  // return <div className='min-h-screen w-screen flex flex-col gap-y-5 items-center justify-center'>
  //   <h1 className='text-3xl font-bold'>Portfolio</h1>
  //   <button className='btn btn-md btn-circle' onClick={() => toggleThemeMode()}>
  //     {theme === themes.nord ? <LuMoon className='size-4' /> : <LuSun className='size-4' />}
  //   </button>
  // </div>

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadHandler = () => setIsLoaded(true);

    if (document.readyState === 'complete') {
      setIsLoaded(true);
    } else {
      window.addEventListener('load', loadHandler);
    }

    return () => window.removeEventListener('load', loadHandler);

  }, [])

  if (!isLoaded) {
    return <main className='w-screen h-screen flex items-center justify-center'>
      <span className='loading loading-ring text-primary size-16'></span>
    </main>
  }

  return <RouterProvider router={router} />
}

export default App