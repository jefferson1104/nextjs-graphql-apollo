import type { AppProps } from 'next/app'

import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../utils/apollo'

function App({ Component, pageProps }: AppProps) {
  // instanciando o client, com initialState para cache
  const client = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={client}>
        <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default App