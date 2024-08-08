import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import SignUpPage from './pages/SignUpPage'
import TransactionPage from './pages/TransactionPage'
import Header from './components/ui/Header'

function App() {
    const authUser = true
    return (
        <div className='w-screen h-screen flex flex-col'>
            {authUser && <Header />}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/transaction/:id" element={<TransactionPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    )
}

export default App
