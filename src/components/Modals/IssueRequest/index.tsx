import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import styles from './styles.module.scss'

export default function IssueRequest({onClose = () => {}}) {
    return(
        <div className={styles.issueContainer}>
            <section id="header" className={styles.headerContainer}>
                <div className={styles.dateTimeId}>
                    <span className={styles.dateTime}>Hoje - 14:53</span>

                    <span id="idDelivery" className={`${styles.titleDelivery} ${styles.idDelivery}`}>
                        <FontAwesomeIcon icon="hashtag" />
                        <strong>1973</strong>
                    </span>
                </div>

                <button onClick={onClose}>
                    <FontAwesomeIcon icon="times"  className={styles.faIcon} />
                </button>
            </section>

            <section className={styles.whatsWrong}>
                <h3 className={styles.titleDelivery}>
                    <FontAwesomeIcon icon="exclamation-circle" />
                    <strong>Houve algo de errado com essa entrega</strong>
                </h3>

                <div className={styles.issue}>
                    <FontAwesomeIcon icon="adjust" />
                    <p>Pedido incompleto</p>
                </div>

                <div className={styles.messageDeliveryman}>
                    <strong>Nome do entregador:</strong>
                    <p>- Está faltando um refrigerante.</p>
                </div>
            </section>

            <section className={styles.solveAction}>
                <div className={styles.solveActionOptionOnPressed}>
                    <FontAwesomeIcon icon="exchange-alt" />
                    <span>Preciso que o entregador retorne</span>
                </div>
                <div className={styles.solveActionOption}>
                    <FontAwesomeIcon icon="times-circle" />
                    <span>Não preciso que o entregador retorne</span>
                </div>
            </section>

            <div className={styles.issueButtonsContainer}>
                <button onClick={onClose} className={styles.cancelIssueBtn}>Cancelar</button>
                <button className={styles.requestIssueBtn}>Confirmar correção</button>
                {/* <button className={styles.disabledBtn}>Selecione uma solução para continuar</button> */}
            </div>
        </div>
    )
}