import React from 'react'
import { useState } from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)


import styles from './styles.module.scss'
import CollectAddress from './CollectAddress'
import Deliverymen from './Deliverymen'

export default function NewDelivery({onClose = () => {}}) {
    const [isCollectAddressVisible, setIsCollectAddressVisible] = useState(false)
    const [isDeliverymenVisible, setIsDeliverymenVisible] = useState(false)

    const openCollectAddressModal = () => {
        setIsCollectAddressVisible(true)
    }

    const openDeliverymenModal = () => {
        setIsDeliverymenVisible(true)
    }

    return(
        <>
            <div className={styles.newDeliveryContainer}>
                <section className={styles.headerContainer}>
                    <button onClick={onClose}>
                        <FontAwesomeIcon icon="arrow-left" />
                    </button>

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
                        <div className={styles.radioBtnCard}>
                            <FontAwesomeIcon icon="check-circle" />
                            <p>Pedido Pronto</p>
                        </div>

                        <div className={styles.setTimeContainerOnPressed}>
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
            
        </>
    )
}