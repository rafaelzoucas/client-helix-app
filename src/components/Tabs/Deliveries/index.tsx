import React from 'react'
import styles from './styles.module.scss'

import OnHold from '../../DeliveryCard/OnHold'
import InProgress from '../../DeliveryCard/InProgress'
import Finished from '../../DeliveryCard/Finished'
import { useState } from 'react'
import Canceled from '../../DeliveryCard/Canceled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TryAgain from '../../DeliveryCard/OnHold/TryAgain'

export default function Home() {
  const [currentTab, setCurretTab] = useState('inProgress')

  const [displayOnHoldDeliveries, setDisplayOnHoldDeliveries] = useState('none')
  const [displayInProgressDeliveries, setDisplayInProgressDeliveries] = useState('')
  const [displayFinishedDeliveries, setDisplayFinishedDeliveries] = useState('none')

  function showOnHold() {
    setDisplayOnHoldDeliveries('')
    setDisplayInProgressDeliveries('none')
    setDisplayFinishedDeliveries('none')
  }
  function showInProgress() {
    setDisplayOnHoldDeliveries('none')
    setDisplayInProgressDeliveries('')
    setDisplayFinishedDeliveries('none')
  }
  function showFinished() {
    setDisplayOnHoldDeliveries('none')
    setDisplayInProgressDeliveries('none')
    setDisplayFinishedDeliveries('')
  }

  return (
    <div className={styles.deliveriesPage}>
      <main>
        <div className={styles.groupBtn}>
          <button onClick={showOnHold}>
              Em espera
          </button>

          <button onClick={showInProgress}>
              Em andamento
          </button>
          
          <button onClick={showFinished}>
              Finalizadas
          </button>
        </div>
        
        <div className={styles.deliveriesContainer}>
          <section style={{display: `${displayOnHoldDeliveries}`}}>
            <OnHold />
            <TryAgain />

            {/* ------- ativar quando estiver com cadastro em análise -------- */}
            {/* <div className={styles.theresNoDelivery}>
              <FontAwesomeIcon icon="clock" />
              <p>
                Estamos analisando o seu cadastro, em breve entraremos em contato para ativá-lo.
              </p>
            </div> */}

            {/* ------- ativar quando não houver entregas -------- */}
            {/* <div className={styles.theresNoDelivery}>
              <FontAwesomeIcon icon="motorcycle" />
              <p>
                Não há entregas em espera.
              </p> 
            </div> */}
          </section>
          <section style={{display: `${displayInProgressDeliveries}`}}>
            <InProgress />
            <InProgress />
            <InProgress />
            <InProgress />
            <InProgress />
            <InProgress />
            <InProgress />
            <InProgress />
            <InProgress />

            {/* ------- ativar quando estiver com cadastro em análise -------- */}
            {/* <div className={styles.theresNoDelivery}>
              <FontAwesomeIcon icon="clock" />
              <p>
                Estamos analisando o seu cadastro, em breve entraremos em contato para ativá-lo.
              </p>
            </div> */}
            
            {/* ------- ativar quando não houver entregas -------- */}
            {/* <div className={styles.theresNoDelivery}>
              <FontAwesomeIcon icon="motorcycle" />
              <p>
                Não há entregas em andamento.
              </p> 
            </div> */}
          </section>
          <section style={{display: `${displayFinishedDeliveries}`}}>
            <Finished />
            <Finished />
            <Canceled />

            {/* ------- ativar quando estiver com cadastro em análise -------- */}
            {/* <div className={styles.theresNoDelivery}>
              <FontAwesomeIcon icon="clock" />
              <p>
                Estamos analisando o seu cadastro, em breve entraremos em contato para ativá-lo.
              </p>
            </div> */}

            {/* ------- ativar quando não houver entregas -------- */}
            {/* <div className={styles.theresNoDelivery}>
              <FontAwesomeIcon icon="motorcycle" />
              <p>
                Não há entregas finalizadas hoje.
              </p> 
            </div> */}

          </section>
        </div>

        
      </main>
    </div>
  )
}
