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
        {!isCollectAddressVisible ? (
          <>
          <div className={styles.step1}>

            <h1>Solicitar entregador</h1>
            <form action="">
                <span>Rua</span>
                <input type="text" placeholder="Rua do Endereço Do Cliente" />
                <span className={styles.addressNotFound}>Endereço não encontrado.</span>

                <div>
                    <div>
                        <span>Número</span>
                        <input type="text" placeholder="123" />
                    </div>

                    <div className={styles.comp}>
                        <span>Complemento (opcional)</span>
                        <input type="text" placeholder="Ap 12" />
                    </div>
                </div>

                <span>Referência (opcional)</span>
                <input type="text" placeholder="Próximo ao Bar do Zé" />

                <span>Observações (opcional)</span>
                <input placeholder="R$ 10,00 de troco" />
            </form>

            <section className={styles.paymentContainer}>
                <div className={styles.radioBtnContainer}>
                    <div className={styles.radioBtnCardOnPressed}> {/*Quando clica muda para radioBtnCardOnPressed */}
                        <FontAwesomeIcon icon="money-bill" />
                        <p>Sem troco</p>
                    </div>

                    <div className={styles.radioBtnCard}>
                        <FontAwesomeIcon icon="hand-holding-usd" />
                        <p>Com troco</p>
                    </div>

                    <div className={styles.radioBtnCard}>
                        <FontAwesomeIcon icon="credit-card" />
                        <p>Cartão</p>
                    </div>

                    <div className={styles.radioBtnCard}>
                        <FontAwesomeIcon icon="check-circle" />
                        <p>Pago</p>
                    </div>
                </div>   
            </section>

            <div className={styles.btnsContainer}>
                <button className={styles.cancel}>Cancelar</button>
                <button 
                  className={styles.continue} 
                  onClick={showCollectAddress}
                  >Escolher endereço de coleta</button>
                {/* <button className={styles.disabled}>Preencha todas as informações para continuar</button> */}
            </div>
          </div>
          </>
        ) : (
          <>
          <div className={styles.step2}>
            <section className={styles.headerContainer}>
                <div className={styles.backTitle}>
                    <button onClick={goBack}>
                        <FontAwesomeIcon icon="arrow-left" />
                    </button>
                    <h1>Solicitar entregador</h1>
                </div>

                {/* <button onClick={onClose}>
                    <FontAwesomeIcon icon="times" />
                </button> */}
            </section> 

            <section className={styles.prevData}>
                <span>Endereço da entrega</span>
                <p>Rua Do Endereço Da Entrega, 123 - Assis SP</p>
            </section>

            <section className={styles.collectAddress}>
                <div className={styles.title}>
                    <FontAwesomeIcon icon="map-marker" />
                    <h3>Endereço de coleta</h3>
                </div>

                <div className={styles.collectAddressCardContainer}>
                    <div className={styles.collectAddressCardOnPressed}>
                        <div className={styles.addressInfo}>
                            <strong>Apelido</strong>
                            <p>Rua Endereço do Restaurante, 1234</p>
                            <span>Ao lado da Outra Loja</span>
                        </div>
                        
                        <button 
                            className={styles.menuEllipsis}
                            // onClick={showMenuEllipsis}
                        >
                            <FontAwesomeIcon icon="ellipsis-v" />
                        </button>
                    </div>

                    {/* {isMenuEllipsisVisible ? (
                        <MenuEllipsis 
                            onClose={() => setIsMenuEllipsisVisible(false)}
                        />
                    ) : null} */}
                </div>

                <button 
                  // onClick={openNewCollectAddressModal}
                >
                  + Adicionar novo endereço</button>
            </section>

            <section>
                <div className={styles.title}>
                    <FontAwesomeIcon icon="motorcycle" />
                    <h3>Entregador</h3>
                </div>
                {/* <select placeholder="Nome do Entregador Atual" >
                    <option value="">
                        Nome do Entregador Atual
                    </option>
                    <option value="">Escolher entregador aleatório</option>
                </select>  */}
                <div className={styles.deliveryman}>
                    <div className={styles.cardOnPressed}>
                        <div>
                            <Image
                                width={36} 
                                height={36} 
                                src="/img/icons/profile-user.svg"
                                alt="Profile"
                            />
                            <h1>Nome Do Entregador</h1>
                        </div>

                        <FontAwesomeIcon icon="check" />                            
                    </div>

                    <div className={styles.card}>
                        <div>
                            <FontAwesomeIcon icon="random" />
                            <h1>Escolher entregador aleatóriamente</h1>
                        </div>
                    </div>
                </div>
            </section>
          </div>
          </>
        )}
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

              {/* <div className={styles.item}>
                  <span>Saldo disponível</span>
                  <p>R$ 20,00</p>
              </div> */}

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

            <div className={styles.btnsContainer}>
                <button className={styles.cancel}>Cancelar</button>
                <button className={styles.continue}>Solicitar entregador</button>
                {/* <button className={styles.recharge}>Saldo insuficiente: R$ 0,00. Clique para recarregar</button> */}
                {/* <button className={styles.disabled}>Preencha todas as informações para continuar</button> */}
            </div>
        </section>
      </aside>

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
