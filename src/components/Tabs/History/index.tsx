import React, { useState } from 'react'
import styles from './styles.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HistoryCard from '../../HistoryCard'

export default function History() {

  return (
    <div className={styles.historyPage}>
      <div className={styles.groupBtn}>
        <button  className={styles.groupBtnActive}>
            Todas
        </button>
        <button>
            Esta semana
        </button>
        <button>
            Este mês
        </button>
      </div>

      <section className={styles.resumeCards}>
        <div className={styles.resumeCard}>
          <h1>76</h1>
          <span>entregas</span>
        </div>
        <div className={styles.resumeCard}>
          <h1>2</h1>
          <span>imprevistos</span>
        </div>
        <div className={styles.resumeCard}>
          <h1>34 <span>min</span></h1>
          <span>entregas</span>
        </div>
      </section>

      <section className={styles.filter}>
        <button>
          <FontAwesomeIcon icon="calendar-alt" />
        </button>
        <span>
          Mostrando resultados de 
          <strong>
            {' 01/06 '}
          </strong> 
          até 
          <strong>
            {' 16/06'}
          </strong>
          .
        </span>
      </section>

      <section>
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
      </section>
    </div>
  )
}
