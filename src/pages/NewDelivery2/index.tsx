import React from 'react'
import { useState } from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)


import styles from './styles.module.scss'
import CollectAddress from './CollectAddress'

export default function NewDelivery({onClose = () => {}}) {
    const [isCollectAddressVisible, setIsCollectAddressVisible] = useState(false)

    const openCollectAddressModal = () => {
        setIsCollectAddressVisible(true)
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
                            Endereço de coleta
                        </span>

                        <p>Rua do Endereço de Coleta</p>
                    </div>
                    
                    <button>Alterar</button>
                </div>

                <hr />

                <section className={styles.formContainer}>
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

                        <span>Observações (opcional)</span>
                        <input placeholder="R$ 10,00 de troco" />
                    </form>
                </section>

                <section className={styles.paymentContainer}>

                    <div className={styles.radioBtnContainer}>
                        <div className={styles.radioBtnCardOnPressed}>
                            <FontAwesomeIcon icon="check-circle" />
                            <p>Pago</p>
                        </div>

                        <div className={styles.radioBtnCard}> {/*Quando clica muda para radioBtnCardOnPressed */}
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
                    </div>

                    <button>Alterar</button>
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
            </div>

            <div className={styles.btnsContainer}>
                <button className={styles.cancel}>Cancelar</button>
                <button className={styles.continue} onClick={openCollectAddressModal}>Solicitar entregador</button>
                {/* <button className={styles.disabled}>Preencha todas as informações para continuar</button> */}
            </div>
            {isCollectAddressVisible ? <CollectAddress onClose={() => setIsCollectAddressVisible(false)} /> : null}
        </>
    )
}