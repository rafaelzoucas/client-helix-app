import React, { useState } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

import Image from 'next/image'

import styles from './styles.module.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Issue from '../../Modals/Issue'
import DeliverymanProfile from '../../Modals/DeliverymanProfile'

library.add(fas)

export default function InProgressOld() {
    const [isDeliveryCardOpened, setIsDeliveryCardOpened] = useState(true)
    const [displayDeliveryCardItems, setDisplayDeliveryCardItems] = useState('none')
    const [isModalIssueVisible, setIsMotalIssueVisible] = useState(false)
    const [isIssueRequestVisible, setIsIssueRequestVisible] = useState(false)
    const [isModalDeliverymanProfileVisible, setIsModalDeliverymanProfileVisible] = useState(false)

    function showHideDeliveryCard() {
        if (isDeliveryCardOpened === true) {
            setIsDeliveryCardOpened(false)
            setDisplayDeliveryCardItems('')
        }else{
            setIsDeliveryCardOpened(true)
            setDisplayDeliveryCardItems('none')
        }
    }

    const openModalIssue = () => {
        setIsMotalIssueVisible(true)
        disableBodyScroll(document)
    }  

    const openModalDeliverymanProfile = () => {
        setIsModalDeliverymanProfileVisible(true)
        disableBodyScroll(document)
    }  

    const openIssueRequest = () => {
        setIsIssueRequestVisible(true)
    }

    const onClose = () => {
        setIsIssueRequestVisible(false)
    }

    return (
        <> 
        {/* ------------------MOBILE------------------- */}
            <div className={styles.deliveryCardMobileContainer}>
                {!isIssueRequestVisible ? (
                    <>
                        <section id="header" className={styles.headerContainer} onClick={showHideDeliveryCard}>
                            <div className={styles.dateTimeId}>
                                <span className={styles.dateTime}>Hoje - 14:53</span>
            
                                <span id="idDelivery" className={`${styles.titleDelivery} ${styles.idDelivery}`}>
                                    <FontAwesomeIcon icon="hashtag" />
                                    <strong>1973</strong>
                                </span>
            
                            </div>
            
                            <FontAwesomeIcon 
                                icon="chevron-down" 
                                className={`${isDeliveryCardOpened ? (
                                    `${styles.showDeliveryCard}`
                                ) : (
                                    `${styles.hideDeliveryCard}`
                                )}`}
                            />
                        </section>
            
                        <section id="status" className={styles.statusContainer}>
                            <div className={styles.statusBar} style={{display: `${displayDeliveryCardItems}`}}>
                                <div className={styles.findingDeliverymanStatus}>
                                    <div className={styles.findingDeliverymanCurrentStatus}></div>
                                </div>
            
                                <div className={styles.waitingDeliverymanStatus}>
                                    <div className={styles.waitingDeliverymanCurrentStatus}></div>
                                </div>

                                <div className={styles.deliveryInProgressStatus}>
                                    <div className={styles.deliveryInProgressCurrentStatus}></div>
                                </div>
                            </div>
            
                            <p>Chegada prevista às 20:15</p>
            
                            <span>30:00</span>
                        </section>
            
                        <section id="deliveryMan" className={styles.deliverymanContainer} style={{display: `${displayDeliveryCardItems}`}}>
                            {/* <h3 className={styles.titleDelivery}>
                                <FontAwesomeIcon icon="motorcycle" />
                                <strong>Informações do entregador</strong>
                            </h3> */}
            
                            <div className={styles.profileLink} onClick={openModalDeliverymanProfile}>
                                <div className={styles.info}>
                                    <Image 
                                        width={28} 
                                        height={28} 
                                        src="/img/icons/profile-user.svg"
                                        alt="Profile"
                                    />
                                    <div className={styles.deliveryman}>
                                        <span>
                                            Nome do Entregador
                                        </span>
            
                                        <div className={styles.currentRate}>
                                            <FontAwesomeIcon icon="star" />
                                            <span>4.8</span>
                                        </div>
                                    </div>
                                </div>
            
                                <FontAwesomeIcon icon="angle-right" className={styles.arrow} />
                            </div>
                        </section>
            
                        <section id="address" className={styles.addressContainer}>
                            <h3 className={styles.titleDelivery}>
                                <FontAwesomeIcon icon="map-marker-alt" />
                                <strong>Endereço da entrega</strong>
                            </h3>
                                <p>Rua Do Endereço Da Entrega, 345</p>
            
                            <span style={{display: `${displayDeliveryCardItems}`}}>Referência:</span>
            
                            <p style={{display: `${displayDeliveryCardItems}`}}>Próximo ao Bar Do Zé, Casa amarela de portão azul.</p>
                        </section>
            
                        <section id="description" className={styles.descriptionContainer} style={{display: `${displayDeliveryCardItems}`}}>
                            <h3 className={styles.titleDelivery}>
                                <FontAwesomeIcon icon="align-left" />
                                <strong>Descrição</strong>
                            </h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt ullam quas praesentium animi placeat beatae magni dolore a maiores.</p>
            
                        </section>
            
                        <section id="payment" style={{display: `${displayDeliveryCardItems}`}}>
                            <h3 className={styles.titleDelivery}>
                                <FontAwesomeIcon icon="exclamation-triangle" />
                                <strong>Imprevisto</strong>
                            </h3>
                            <p>Faltou um item do pedido.</p>
                        </section>
            
                        <section id="payment" style={{display: `${displayDeliveryCardItems}`}}>
                            <h3 className={styles.titleDelivery}>
                                <FontAwesomeIcon icon="coins" />
                                <strong>Forma de recebimento</strong>
                            </h3>
                            <p>Cartão</p>
                        </section>
                        
                        <section id="payment" style={{display: `${displayDeliveryCardItems}`}}>
                            <h3 className={styles.titleDelivery}>
                                <FontAwesomeIcon icon="dollar-sign" />
                                <strong>Valor a pagar ao entregador</strong>
                            </h3>
                            <p>R$ 6,75</p>
                        </section>
            
                        <div id="actionButtons" className={styles.actionButtonsContainer}>        
                            <div className={styles.progressBtns}>
                                <button onClick={openModalIssue} className={styles.issueBtn}>
                                    Imprevisto
                                </button>

                                <button onClick={openModalIssue} className={styles.finalize}>
                                    Finalizar entrega
                                </button>

                                {/*class issueRequestBtnViewed quando for visualizada*/}
                                {/* <button onClick={openIssueRequest} className={styles.issueRequestBtn}> 
                                    <FontAwesomeIcon icon="exclamation-circle" />
                                    <span>Houve 1 imprevisto</span>
                                </button> */}
                            </div>
                        </div>
            
                        {isModalIssueVisible ? (
                        <Issue 
                            onClose={() => {
                                setIsMotalIssueVisible(false)
                                enableBodyScroll(document)
                            }} 
                        />
                        ) : null}

                        {isModalDeliverymanProfileVisible ? (
                        <DeliverymanProfile 
                            onClose={() => {
                                setIsModalDeliverymanProfileVisible(false)
                                enableBodyScroll(document)
                            }} 
                        />
                        ) : null}
                    </>
                ) : (
                    <>
                        <h3 className={styles.titleDelivery}>
                            <FontAwesomeIcon icon="exclamation-circle" />
                            <strong>Houve algo de errado com essa entrega</strong>
                        </h3>

                        <section className={styles.whatsWrong}>
                            <div className={styles.prevData}>
                                <span>ID:</span>
                                <p>1234</p>
                                <span>Endereço da entrega</span>
                                <p>Rua Do Endereço Da Entrega, 123 - Assis SP</p>
                                <span>Referência</span>
                                <p>Próximo ao Bar do Zé</p>
                                <span>Forma de pagamento</span>
                                <p>Cartão</p>
                                <span>Descrição</span>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus in aliquam nostrum.</p>
                            </div>

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
                            <div className={styles.solveOptions}>
                                <div className={styles.solveActionOptionOnPressed}>
                                    <FontAwesomeIcon icon="exchange-alt" />
                                    <span>Preciso que o entregador retorne</span>
                                </div>

                                <div className={styles.solveActionOption}>
                                    <FontAwesomeIcon icon="times-circle" />
                                    <span>Não preciso que o entregador retorne</span>
                                </div>
                            </div>
                            <div className={styles.explanation}>
                                <strong>Serão cobradas 2 entregas.</strong>

                                <span>
                                    O entregador retornará ao endereço de coleta 
                                    e depois ao endereço de entrega novamente.
                                </span>

                                {/* <span>
                                    O entregador retornará apenas ao endereço de coleta 
                                    conforme seja necessário.
                                </span> */}
                            </div>
                        </section>

                        <div className={styles.issueButtonsContainer}>
                            {/* <button className={styles.disabledBtn}>Selecione uma solução para continuar</button> */}
                            <button onClick={onClose} className={styles.requestIssueBtn}>Confirmar correção</button>
                        </div>
                    </>
                )}
            </div>

            
        </>
    )
}