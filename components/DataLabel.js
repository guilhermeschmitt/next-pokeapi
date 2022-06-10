import React from 'react'

import styles from '../styles/DataLabel.module.css'

export default function DataLabel({ label, data, className }) {
  return (
    <div className={`${styles.data_label} ${className}`}>
      <h4>
        {label}
      </h4>
      <p>
        {data}
      </p>
    </div>
  )
}
