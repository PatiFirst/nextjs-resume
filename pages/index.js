import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJS Resume</title>
        <meta name="description" content="My NextJS Resume" />
      </Head>


      <Layout home/>
 
    </>
  )
}
