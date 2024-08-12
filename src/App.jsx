import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import SignUpPage from './pages/SignUpPage'
import TransactionPage from './pages/TransactionPage'
import Header from './components/ui/Header'
import { useQuery } from '@apollo/client'
import { GET_AUTHENTICATED_USER } from './graphql/queries/user.query'

function App() {
    // const { loading, data, error } = useQuery(GET_AUTHENTICATED_USER)
    const { data } = useQuery(GET_AUTHENTICATED_USER)

    return (
        <div className="w-screen h-screen flex flex-col overflow-scroll">
            {data?.authUser && <Header />}
            <Routes>
                <Route
                    path="/"
                    element={
                        data?.authUser ? <HomePage /> : <Navigate to="/login" />
                    }
                />
                <Route
                    path="/login"
                    element={
                        !data?.authUser ? <LoginPage /> : <Navigate to="/" />
                    }
                />
                <Route
                    path="/sign-up"
                    element={
                        !data?.authUser ? <SignUpPage /> : <Navigate to="/" />
                    }
                />
                <Route
                    path="/transaction/:id"
                    element={
                        !data?.authUser ? (
                            <TransactionPage />
                        ) : (
                            <Navigate to="/" />
                        )
                    }
                />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    )
}

export default App
