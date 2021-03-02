import '../styles/_app.css'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
function MyApp ({ Component, pageProps }) {
  return (
  <>
    <Head>
        <link rel="shortcut icon" href="/kiwi-yout.png" />
        <link rel="apple-touch-icon" href="/kiwi-yout.png" />
      </Head>
    <NextSeo
        title="Kiwi Code - Curso Clean Architecture NodeJs"
        description="Aprenda criar uma API com NodeJs e Typescript utilizando boas práticas como: Clean Architecture,SOLID e TDD"
        canonical="https://kiwicode.com.br/"
        openGraph={{
          url: 'https://kiwicode.com.br/',
          title:
            'Kiwi Code - Curso Clean Architecture NodeJs',
          description:
            'Aprenda a criar uma API com NodeJs e Typescript utilizando boas práticas como: Clean Architecture,SOLID e TDD',
          site_name: 'Kiwi Code',
          locale: 'pt_BR'
        }}
      />
  <Component {...pageProps} />
  </>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
