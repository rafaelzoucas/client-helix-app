import React from 'react'
import styles from './styles.module.scss'
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Pay from '../../Modals/Pay'
import InvoiceDetails from '../../Modals/InvoiceDetails'

export default function Finance() {
  const [isModalPayVisible, setIsModalPayVisible] = useState(false)
  const [isModalInvoiceDetailsVisible, setIsModalInvoiceDetailsVisible] = useState(false)

  function openModalPay() {
    setIsModalPayVisible(true)
  }

  function openModalInvoiceDetails() {
    setIsModalInvoiceDetailsVisible(true)
  }

  return (
    <>
      <div className={styles.financePage}>
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
            <div className={styles.pendingPayment} />

            <div className={styles.titleDescription}>
                <strong>Pagamento pendente</strong>
                <p>Este pagamento está em análise.</p>
            </div>

            <span>19 Abr 2021</span>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.paymentReceived} />

            <div className={styles.titleDescription}>
                <strong>Pagamento recebido</strong>
                <p>Você pagou R$ 79,00. Obrigado!</p>
            </div>

            <span>19 Abr 2021</span>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.overdueInvoice} />

            <div className={styles.titleDescription}>
                <strong>Fatura vencida</strong>
                <p>Para desbloquear a utilização do nosso sistema, basta efetuar o pagamento.</p>
            </div>

            <span>19 Abr 2021</span>
          </div>

          <div className={styles.timelineItem} onClick={openModalInvoiceDetails}>
              <div className={styles.closeInvoice} />

              <div className={styles.titleDescription}>
                  <strong>Fatura de 31/05 até 06/06 fechada</strong>
                  <p>Vencimento em 18/06. Evite o bloqueio efetuando o pagamento em dia.</p>
              </div>

              <div className={styles.dateAndButton}>
                <span>19 Abr 2021</span>
                <FontAwesomeIcon icon="angle-right" />
              </div>
          </div>

          <div className={styles.timelineItem}>
            <FontAwesomeIcon icon="star" />

            <div className={styles.titleDescription}>
                <strong>Bem vindo à</strong>
                <p>Helix!</p>
            </div>
            
            <span>19 Abr 2021</span>
          </div>
        </section>

      </div>

      {isModalPayVisible ? (
        <Pay onClose={() => setIsModalPayVisible(false)} />
      ) : null}

      {isModalInvoiceDetailsVisible ? (
        <InvoiceDetails onClose={() => setIsModalInvoiceDetailsVisible(false)} />
      ) : null}
    </>
  )
}
