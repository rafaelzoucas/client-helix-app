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
import CollectAddress from '../../Modals/NewDelivery/CollectAddress'
import Deliverymen from '../../Modals/NewDelivery/Deliverymen'

export default function Home() {
  const [currentTab, setCurretTab] = useState('inProgress')

  const [isCollectAddressVisible, setIsCollectAddressVisible] = useState(false)
  const [isDeliverymenVisible, setIsDeliverymenVisible] = useState(false)

  const [displayOnHoldDeliveries, setDisplayOnHoldDeliveries] = useState('none')
  const [displayInProgressDeliveries, setDisplayInProgressDeliveries] = useState('')
  const [displayFinishedDeliveries, setDisplayFinishedDeliveries] = useState('none')

  const openCollectAddressModal = () => {
      setIsCollectAddressVisible(true)
  }

  const openDeliverymenModal = () => {
      setIsDeliverymenVisible(true)
  }

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
      <div className={styles.newDeliveryContainer}>
                <section className={styles.headerContainer}>
                    {/* <button onClick={onClose}>
                        <FontAwesomeIcon icon="arrow-left" />
                    </button> */}

                    <h1>Solicitar entregador</h1>
                </section>

                <div className={styles.collectAddress}>
                    <div>
                        <span>
                            <FontAwesomeIcon icon="map-marker" className={styles.icon} />
                            Endereço de coleta
                        </span>

                        <p>Rua do Endereço de Coleta</p>
                    </div>
                    
                    <button onClick={openCollectAddressModal}>
                        {/* <FontAwesomeIcon icon="pen" />  */}
                        Alterar
                    </button>
                </div>

                <hr />

                <section className={styles.formContainer}>
                    <label>
                        <FontAwesomeIcon icon="map-marker-alt" className={styles.icon} />
                        Rua
                    </label>
                    <input type="text" placeholder="Rua que o entregador levará o seu pedido" />
                    <label className={styles.addressNotFound}>Endereço não encontrado.</label>

                    <div>
                        <div>
                            <label>
                                <FontAwesomeIcon icon="map-marker-alt" className={styles.icon} />
                                Número
                            </label>
                            <input type="text" placeholder="123" />
                        </div>

                        <div className={styles.comp}>
                            <label>
                                <FontAwesomeIcon icon="map-marker-alt" className={styles.icon} />
                                Complemento (opcional)
                            </label>
                            <input type="text" placeholder="Ap 12" />
                        </div>
                    </div>

                    <label>
                        <FontAwesomeIcon icon="align-left" className={styles.icon} />
                        Observações (opcional)
                    </label>
                    <input placeholder="Digite o nome do cliente, valor e etc" />
                </section>

                <section className={styles.preparationTimeContainer}>
                    <label>
                        <FontAwesomeIcon icon="stopwatch" className={styles.icon} />
                        Tempo até estar disponível para coleta
                    </label>
                    <div className={styles.radioBtnContainer}>
                        <div className={styles.radioBtnCardOnPressed}>
                            <FontAwesomeIcon icon="check-circle" />
                            <p>Pedido Pronto</p>
                        </div>

                        <div className={styles.setTimeContainer}>
                            <button>
                                -
                            </button>

                            <span>
                                5 min
                            </span>  

                            <button>+</button>
                        </div>
                    </div>   
                </section>

                <hr />

                <div className={styles.deliveryman}>
                    <div>
                        <FontAwesomeIcon icon="user-circle" className={styles.picture} />

                        <div className={styles.nameAndRate}>
                            <p>João da Silva</p>

                            <div className={styles.rate}>
                                <FontAwesomeIcon icon="star" />
                                4.9
                            </div>
                        </div>

                        {/* <p>Buscar entregador aleatório</p> */}
                    </div>

                    <button onClick={openDeliverymenModal}>
                        {/* <FontAwesomeIcon icon="pen" />  */}
                        Alterar
                    </button>
                </div>

                <hr />

                <section className={styles.confirm}>
                    <p>Saldo atual: <strong>R$ 20,00</strong></p> 

                    <div className={styles.distanceAndPrice}>
                        <div className={styles.item}>
                            <span>Distância</span>
                            <p>12 Km</p>
                        </div>

                        <div className={styles.item}>
                            <span>Para o entregador</span>
                            <p>R$ 8,50</p>
                        </div>

                        <div className={styles.item}>
                            <span>Saldo a ser descontado</span>
                            <p>R$ 1,00</p>
                        </div>

                        <div className={styles.item}>
                            <span>Total</span>
                            <strong>R$ <h3>9,50</h3></strong>
                        </div>                     
                        <div className={styles.distance}>
                        </div>

                        <div className={styles.price}>
                        </div>
                    </div>
                </section>

                <div className={styles.btnsContainer}>
                    <button className={styles.continue} onClick={openCollectAddressModal}>Solicitar entregador</button>
                    {/* <button className={styles.disabled}>Preencha todas as informações para continuar</button> */}
                </div>
                
                {isCollectAddressVisible ? (
                    <CollectAddress 
                        onClose={() => setIsCollectAddressVisible(false)} 
                    />) : null}
                
                {isDeliverymenVisible ? (
                    <Deliverymen 
                        onClose={() => setIsDeliverymenVisible(false)} 
                    />) : null}
                
            </div>
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

            <div className={styles.paymentCards}>
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
