import React from 'react'
import Image from 'next/image'

import styles from '../../styles/About.module.css';

export default function index() {
  return (
    <div className={styles.about}>
      <h1>
        About the project
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis sollicitudin nulla, sit amet viverra lectus faucibus ut. Curabitur turpis risus, iaculis malesuada scelerisque at, tincidunt id justo. Aenean id sollicitudin ipsum, nec mattis ligula. Etiam eleifend arcu eros, ut fermentum dui blandit nec. Suspendisse in gravida magna, eu accumsan sem. Vivamus ut urna sagittis, rutrum massa ut, elementum enim. Sed elit lacus, maximus non posuere ac, rhoncus nec risus. Aenean risus nulla, tempus nec quam sit amet, egestas fermentum mauris. Aliquam erat volutpat. Mauris ut justo non erat porttitor pretium eu vel nibh. Sed consequat nunc sit amet libero facilisis, in tempus orci egestas. Donec et justo id quam vestibulum efficitur a vitae leo. Curabitur elementum nibh at ipsum facilisis euismod. Sed condimentum leo vitae auctor fermentum.
      </p>
      <Image
        width='300'
        height='300'
        alt='Charizard image'
        src='/images/charizard.png'
      />
    </div>
  )
}
