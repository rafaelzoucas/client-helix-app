import React from 'react'
import { useState } from 'react'

import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import OnHold from '../../DeliveryCard/OnHold'
import TryAgain from '../../DeliveryCard/OnHold/TryAgain'
import InProgress from '../../DeliveryCard/InProgress'
import Finished from '../../DeliveryCard/Finished'
import Canceled from '../../DeliveryCard/Canceled'
import Image from 'next/image'
import TryRandom from '../../DeliveryCard/OnHold/TryRandom'
import Offline from '../../Modals/Offline'
import NewDeliveryForm from '../../NewDeliveryForm'

export default function Home() {
  const [currentTab, setCurretTab] = useState('inProgress')

  const [isCollectAddressVisible, setIsCollectAddressVisible] = useState(false)

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

  function showCollectAddress() {
    if(!isCollectAddressVisible){
      setIsCollectAddressVisible(true)
    }
  }

  function goBack() {
    setIsCollectAddressVisible(false)
  }

  return (
    <div className={styles.deliveriesPage}>
      <aside>
        <NewDeliveryForm />
      </aside>

      <main>
        <div className={styles.groupBtn}>
          {/* <button onClick={showOnHold}>
              Em espera
          </button> */}

          <button onClick={showInProgress}>
              Em progresso
          </button>
          
          <button onClick={showFinished}>
              Finalizadas
          </button>
        </div>
        
        <div className={styles.deliveriesContainer}>
          {/* <Offline /> */}
          <section style={{display: `${displayOnHoldDeliveries}`}}>
            <OnHold />
            <TryAgain />
            <TryRandom />

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
                Não há entregas em espera no momento.
                </p> 
              </div> */}

            {/* -------- ativar quando saldo estiver insuficiente ---------- */}
            {/* <div className={styles.theresNoDelivery}>
              <FontAwesomeIcon icon="ban" />
              <p>
              O seu saldo é insuficiente para solicitar novas entregas. 
              <button>Adicionar crédito</button>
              </p> 
            </div> */}
          </section>
          <section style={{display: `${displayInProgressDeliveries}`}}>
            <h2>Aguardando entregador</h2>
            <OnHold />
            <TryAgain />
            <TryRandom />

            <h2>Entregas em andamento</h2>
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
          <h2>Pagamentos pendentes</h2>
          <section style={{display: `${displayFinishedDeliveries}`}}>
            <div className={styles.paymentCard}>
              <div>
                <p>Nome do entregador</p>
                <span>10 entregas em aberto</span>
              </div>

              <div className={styles.value}>
                <div>
                  <span>Total a pagar:</span>
                  <p>R$ 50,50</p>
                </div>
              </div>
            </div>
            
            <div className={styles.paymentCard}>
              <div>
                <p>Nome do entregador</p>
                <span>10 entregas em aberto</span>
              </div>

              <div className={styles.value}>
                <div>
                  <span>Total a pagar:</span>
                  <p>R$ 50,50</p>
                </div>
              </div>
            </div>

            <h2>Entregas finalizadas</h2>
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
