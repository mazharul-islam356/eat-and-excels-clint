import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { queryClient, router } from './Route/Route.jsx'
import AuthProvider from './Authentication/Firebase/AuthProvider.jsx'
import { QueryClientProvider } from '@tanstack/react-query'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <QueryClientProvider client={queryClient}>
   <AuthProvider> 
      <RouterProvider router={router} />
    </AuthProvider>
   </QueryClientProvider>
  </React.StrictMode>,
)
