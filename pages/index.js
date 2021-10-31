import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {FaGlassMartini} from "react-icons/fa"
import HeaderPage from '../components/HeaderPages/HeaderPage'
import FooterPage from '../components/FooterPages/FooterPage'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hiago Patrick </title>
        <meta name="description" content="Portal de Informações sobre Reiki, Tarot, Magia, Programação e Arte." />
        <meta charSet="utf-8"/>

      </Head>
      <HeaderPage />
      <main className={styles.main}>
        
        <h1 className={styles.title}>
          Eu te recebo em paz, Forasteiro!
        </h1>

        <p className={styles.description}>
          Pegue um <FaGlassMartini/> e prepare-se, a viagem é longa!
        </p>

       <p className={styles.description}>
          Utilize o Menu para Navegar pelo site.<br /> Sinta-se em Casa!
        </p>
      </main>
      <FooterPage />
 
    </div>
  )
}
