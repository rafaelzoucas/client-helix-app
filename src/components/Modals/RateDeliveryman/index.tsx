import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './styles.module.scss'

export default function RateDeliveryman({id = 'modal', onClose = () => {}}) {

    const handleOutSideClick = (e) => {
        if(e.target.id === id) onClose()
    }
    return(
        <div id={id} className={styles.modalContainer} onClick={handleOutSideClick}>
            <div className={styles.cancelContainer}>
                <section className={styles.title}>
                    <p>Por favor, deixe a sua avaliação</p>
                </section>

                <div className={styles.rateDeliveryman}>
                    <span>Nome do entregador</span>
                    <span>Entrega: #1235</span>

                    <ul>
                        <li><FontAwesomeIcon icon="star" /></li>
                        <li><FontAwesomeIcon icon="star" /></li>
                        <li><FontAwesomeIcon icon="star" /></li>
                        <li><FontAwesomeIcon icon="star" /></li>
                        <li><FontAwesomeIcon icon="star" /></li>
                    </ul>
                    <div>
                        <button className={styles.cancel} onClick={onClose}>Cancelar</button>
                        <button>Enviar</button>
                    </div>

                </div>
            </div>
        </div>
    )
}