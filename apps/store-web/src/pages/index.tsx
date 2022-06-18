import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Button } from 'ui'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const tutu = 'ffsdf'
  const toto = 'toto' + tutu + ' '
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button />
    </>
  )
}

export default Home
