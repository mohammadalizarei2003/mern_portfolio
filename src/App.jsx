import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { LuSun, LuMoon } from 'react-icons/lu'
import { useThemeStore } from './stores/useThemeStore'
import { LandingLayout } from './layouts'
import { LandingPage } from './pages'

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

  return <RouterProvider router={router} />
}

export default App