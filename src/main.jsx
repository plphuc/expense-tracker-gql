import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import GridBackground from './components/ui/GridBackground.jsx'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    // REMEMBER TO UPDATE THIS URL
    uri: 'http://localhost:4000/graphql', // the URL of GraphQL Server
    cache: new InMemoryCache(), //Apollo Client uses to cache query results after fetching them
    credentials: 'include', // This tells Apollo Client to send cookie along with every request to the server
})
console.log(client)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <GridBackground>
                <ApolloProvider client={client}>
                    <App />
                </ApolloProvider>
            </GridBackground>   
        </BrowserRouter>
    </React.StrictMode>
)
