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
                    <div className={styles.title}>
                        <FontAwesomeIcon icon="map-marker-alt" />
                        <h3>Endereço da entrega</h3>
                    </div>

                    <form action="">
                        <span>Rua com número</span>
                        <input type="text" placeholder="Rua do Endereço Do Cliente, 123" />
                        <span>Referência (opcional)</span>
                        <input type="text" placeholder="Próximo ao Bar do Zé" />
                        <span>Observações (opcional)</span>
                        <textarea placeholder="Preciso que busque um produto na loja Exemplo e traga aqui" />
                    </form>
                </section>

                <section className={styles.paymentContainer}>
                    <div className={styles.title}>
                        <FontAwesomeIcon icon="coins" />
                        <h3>Forma de pagamento</h3>
                    </div>

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

                <section className={styles.btnsContainer}>
                    <button className={styles.cancel}>Cancelar</button>
                    {/* <button className={styles.continue} onClick={openCollectAddressModal}>Escolher endereço de coleta</button> */}
                    <button className={styles.recharge}>Saldo insuficiente: R$ 0,00. Clique para recarregar</button>
                    {/* <button className={styles.disabled}>Preencha todas as informações para continuar</button> */}
                </section>
            </div>
            {isCollectAddressVisible ? <CollectAddress onClose={() => setIsCollectAddressVisible(false)} /> : null}
        </>
    )
}