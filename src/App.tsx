import {RouterProvider} from 'react-router-dom'

import './index.scss'
import './registerSW.ts'

import router from './routes/root'

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
