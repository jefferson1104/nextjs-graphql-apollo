import {gql} from '@apollo/client'
import {initializeApollo} from '../utils/apollo'

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      name
      capital
      phone
    }
  }
`

export default function Index(props: any) {
  if (props.data) return <pre>{JSON.stringify(props.data, null, 2)}</pre>

  return <h1>Home Page</h1>
}

// getStaticProps => gerar estático em build time
// getServerSideprops => gerar via ssr a cada request (nunca vai para o bundle do client)
// getInitialProps => gerar via ssr a cada request (vai para o client, faz o hydrate do lado do cliente depois do primeiro request)
export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({ query: GET_COUNTRIES })

  return {
    props: {
      data: data,
      initialApolloState: apolloClient.cache.extract(),
    }
  }
}