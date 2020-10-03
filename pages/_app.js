import Router from 'next/router'
import NProgress from 'nprogress'
import Layout from '../layouts/DefaultLayout'

import 'nprogress/nprogress.css'
import '../styles/all.scss'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
