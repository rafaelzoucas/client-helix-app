import React from 'react'
import styles from './styles.module.scss'
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Pay from '../Pay'

export default function InvoiceDetails({onClose = () => {}}) {
  const [isModalPayVisible, setIsModalPayVisible] = useState(false)

  function openModalPay() {
    setIsModalPayVisible(true)
  }

  return (
    <>
      <div className={styles.invoiceDetailsContainer}>

        <section className={styles.headerContainer}>
          <div className={styles.backTitle}>
              <button onClick={onClose}>
                  <FontAwesomeIcon icon="arrow-left" />
              </button>
              <h1>Solicitar entregador</h1>
          </div>
      </section> 

        <section className={styles.currentInvoice}>
          <span>Fatura atual</span>
          <h1>R$ 79,00</h1>
          <span>
            de
            <strong>
              {' 31/05 '} 
            </strong>
            até
            <strong>
              {' 06/06'}
            </strong>
          </span>
          <button onClick={openModalPay}>Efetuar pagamento</button>
        </section>

        <section className={styles.timeline}>

          <div className={styles.timelineItem}>
            <div className={styles.paymentReceived} />

            <div className={styles.titleDescription}>
                <strong>24 entregas</strong>
                <p>Ver detalhes</p>
            </div>

            <div className={styles.dateAndButton}>
              <span>19 Abr 2021</span>
              <FontAwesomeIcon icon="angle-right" />
            </div>
          </div>

          <div className={styles.timelineItem}>
              <div className={styles.overdueInvoice} />

              <div className={styles.titleDescription}>
                  <strong>Fatura anterior</strong>
                  <p>Valor pendente </p>
              </div>

              <div className={styles.dateAndButton}>
                <span>19 Abr 2021</span>
                <strong>R$ 55,00</strong>
              </div>
          </div> 
        </section>

      </div>

      {isModalPayVisible ? (
        <Pay onClose={() => setIsModalPayVisible(false)} />
      ) : null}
    </>
  )
}
