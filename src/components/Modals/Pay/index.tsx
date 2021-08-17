import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import styles from './styles.module.scss'

export default function Pay({onClose = () => {}}) {
    return(
        <div className={styles.payContainer}>
            <section className={styles.headerContainer}>
                <div className={styles.backTitle}>
                    <button onClick={onClose}>
                        <FontAwesomeIcon icon="arrow-left" />
                    </button>

                    <h1>Efetuar pagamento</h1>
                </div>
            </section> 

            <section className={styles.currentInvoice}>
                <span>Fatura atual</span>
                <h1>R$ 79,00</h1>
                <span>
                de
                <strong>
                    {' 31/05 '}
                </strong>
                até
                <strong>
                    {' 06/06'}
                </strong>
                </span>
            </section>

            <section className={styles.paymentData}>
                <div className={styles.paymentVoucherContainer}>
                    <span>Realizar pagamento</span>

                    <div className={styles.actionButtons}>
                        <input type="number" placeholder="R$ 0,00" />

                        <span>Comprovante</span>
                        
                        <div className={styles.paymentVoucherUpload}>
                            <FontAwesomeIcon icon="file" />

                            <p>nomedoarquivo.pdf</p>

                            <div className={styles.removeFile}>
                                <FontAwesomeIcon icon="times" />
                            </div>
                        </div>

                        <button className={styles.uploadButton}>
                            <FontAwesomeIcon icon="upload" />
                            Adicionar arquivo
                        </button>

                        <button>
                            Enviar pagamento
                        </button>
                    </div>
                </div>

                <div className={styles.pixContainer}>
                    <div className={styles.titleAndData}>
                        <span>Chave PIX</span>
                        <strong>32.185.931/0001-06</strong>
                    </div>

                    <button>
                        <FontAwesomeIcon icon="clone" />
                        Copiar
                    </button>
                </div>

                <div className={styles.bankDataContainer}>
                    <span>Dados para Depósito, TED ou DOC</span>

                    <div className={styles.bankData}>
                        <div className={styles.bankDataItem}>
                            <p>Helix Delivery</p>
                            <button>
                                <FontAwesomeIcon icon="clone" />
                                Copiar
                            </button>
                        </div>

                        <div className={styles.bankDataItem}>
                            <p>Banco 260 - Nu Pagamentos S.A.</p>
                            <button>
                                <FontAwesomeIcon icon="clone" />
                                Copiar
                            </button>
                        </div>

                        <div className={styles.bankDataItem}>
                            <p>Agência: 0001</p>
                            <button>
                                <FontAwesomeIcon icon="clone" />
                                Copiar
                            </button>
                        </div>

                        <div className={styles.bankDataItem}>
                            <p>Conta 5559052-0</p>
                            <button>
                                <FontAwesomeIcon icon="clone" />
                                Copiar
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}