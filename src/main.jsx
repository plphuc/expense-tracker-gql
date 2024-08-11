import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import GridBackground from './components/ui/GridBackground.jsx'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql', // the URL of GraphQL Server
    cache: new InMemoryCache(), //Apollo Client uses to cache query results after fetching them
    credentials: 'include', // This tells Apollo Client to send cookie along with every request to the server
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <GridBackground>
                <App />
            </GridBackground>
        </BrowserRouter>
    </React.StrictMode>
)
