import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Patipon's NextJS Resume</title>
        <meta name="description" content="My Next.JS Resume" />
      </Head>


      <Layout home/>
 
    </>
  )
}
