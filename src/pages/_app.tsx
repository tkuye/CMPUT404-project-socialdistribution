import { useState } from 'react';
import '@/styles/globals.scss'
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from '@/components/alert/AlertTemplate'

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import type { AppProps } from 'next/app'

const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 5000,
  // you can also just use 'scale'
  transition: transitions.SCALE
}


export default function App({ Component, pageProps }: AppProps) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())
  const [queryClient] = useState(() => new QueryClient())
  // get the initial session from the server
 
  
  return (
    <AlertProvider template={AlertTemplate} {...options}>
    <QueryClientProvider client={queryClient}>
       <Hydrate state={pageProps.dehydratedState}>
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <Component {...pageProps} />
    </SessionContextProvider>
    </Hydrate>
    </QueryClientProvider>
    </AlertProvider>
  )
}

