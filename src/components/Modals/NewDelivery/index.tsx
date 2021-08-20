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
                    <h1>Solicitar entregador</h1>

                    <button onClick={onClose}>
                        <FontAwesomeIcon icon="times" />
                    </button>
                </section> 

                <section className={styles.formContainer}>
                    <form action="">
                        <span>Rua</span>
                        <input type="text" placeholder="Rua do Endereço Do Cliente" />

                        <div>
                            <div>
                                <span>Número</span>
                                <input type="text" placeholder="123" />
                            </div>

                            <div className={styles.cep}>
                                <span>CEP</span>
                                <input type="text" placeholder="19800-000" disabled />
                            </div>
                        </div>

                        <span>Referência (opcional)</span>
                        <input type="text" placeholder="Próximo ao Bar do Zé" />

                        <span>Observações (opcional)</span>
                        <input placeholder="Ap 12, cobrar R$ 50,00" />
                    </form>
                </section>

                <section className={styles.paymentContainer}>
                    {/* <div className={styles.title}>
                        <FontAwesomeIcon icon="coins" />
                        <h3>Forma de recebimento</h3>
                    </div> */}

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

                <section className={styles.confirm}>
                    <div className={styles.distanceAndPrice}>
                        <div className={styles.distance}>
                            <span>Distância</span>
                            <p>12 Km</p>
                        </div>

                        <strong>R$ <h3>9,75</h3></strong>
                    </div>

                    <div className={styles.btnsContainer}>
                        <button className={styles.cancel}>Cancelar</button>
                        <button className={styles.continue} onClick={openCollectAddressModal}>Escolher endereço de coleta</button>
                        {/* <button className={styles.recharge}>Saldo insuficiente: R$ 0,00. Clique para recarregar</button> */}
                        {/* <button className={styles.disabled}>Preencha todas as informações para continuar</button> */}
                    </div>
                </section>

            </div>
            {isCollectAddressVisible ? <CollectAddress onClose={() => setIsCollectAddressVisible(false)} /> : null}
        </>
    )
}