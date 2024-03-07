import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/Signup'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import TodoApp from './pages/TodoApp'
import AuthRoute from './routes/AuthRoute'
import ProtectedRoute from './routes/ProtectedRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Routes>
    <Route element={<AuthRoute />}>
          <Route index element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

      <Route element={<ProtectedRoute />}>
          <Route path="/todoapp" element={<TodoApp />} />
        </Route>

    </Routes>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </>
  )
}

export default App
