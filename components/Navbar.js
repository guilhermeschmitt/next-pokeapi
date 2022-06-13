import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <navbar className={styles.navbar}>
      <div>
        <Link href="/">
          <a className={styles.logo}>
            <Image
              height='30'
              width="30"
              alt="Logo pokeball"
              src="/images/pokeball.png"
            />
            <h1>
              Next - PokéAPI
            </h1>
          </a>
        </Link>
      </div>
      <ul className={styles.menu_items}>
        <li>
          <Link href="/about">
            <a>
              About
            </a>
          </Link>
        </li>
      </ul>
    </navbar>
  )
}
