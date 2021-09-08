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
          <span>Saldo atual</span>
          <h1>R$ 79,00</h1>
          <button onClick={openModalPay}>Adicionar saldo</button>
        </section>

        <div className={styles.bgTimeline}>
          <section className={styles.timeline}>

            <div className={styles.timelineItem}>
              <div className={styles.pendingPayment} />

              <div className={styles.titleDescription}>
                  <strong>Pagamento em análise</strong>
                  <p>Pode demorar até 1 dia útil para ser reconhecido.</p>
              </div>

              <span>19 Abr 2021</span>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.paymentReceived} />

              <div className={styles.titleDescription}>
                  <strong>Pagamento recebido</strong>
                  <p>Você adicionou R$ 79,00 ao seu saldo. Obrigado!</p>
              </div>

              <span>19 Abr 2021</span>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.overdueInvoice} />

              <div className={styles.titleDescription}>
                  <strong>Saldo insuficiente</strong>
                  <p>O seu saldo atual é de R$ 0,00. Faça uma recarga para continuar utilizando os nossos serviços.</p>
              </div>

              <span>19 Abr 2021</span>
            </div>

            <div className={styles.timelineItem} onClick={openModalInvoiceDetails}>
                <div className={styles.closeInvoice} />

                <div className={styles.titleDescription}>
                    <strong>Crédito baixo</strong>
                    <p>O seu saldo atual é de R$ 10,00. Não se esqueça de recarregar.</p>
                </div>

                <span>19 Abr 2021</span>
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
