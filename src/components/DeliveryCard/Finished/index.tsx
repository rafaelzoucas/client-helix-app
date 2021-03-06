import React, { useState } from 'react'
import styles from './styles.module.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

import Image from 'next/image'
import Link from 'next/link'
import RateDeliveryman from '../../Modals/RateDeliveryman'

export default function Finished() {
    const [isDeliveryCardOpened, setIsDeliveryCardOpened] = useState(true)
    const [isPaymentDone, setIsPaymentDone] = useState(false)
    const [isModalConfirmCancelOpened, setIsModalConfirmCancelOpened] = useState(false)
    const [displayDeliveryCardItems, setDisplayDeliveryCardItems] = useState('none')

    function showHideDeliveryCard() {
        if (isDeliveryCardOpened === true) {
            setIsDeliveryCardOpened(false)
            setDisplayDeliveryCardItems('')
        } else{
            setIsDeliveryCardOpened(true)
            setDisplayDeliveryCardItems('none')
        }
    }

    function openConfirmCancel() {
        setIsModalConfirmCancelOpened(true)
    }

    const switchToggle = () => {
        if(isPaymentDone) {
            setIsPaymentDone(false)
        } else {
            setIsPaymentDone(true)
        }
      }

    return (
        <>
            {/* ------------------MOBILE------------------- */}
            <div className={styles.deliveryCardMobileContainer}>
                

                <section 
                    id="header" 
                    className={styles.headerContainer} 
                    onClick={showHideDeliveryCard}
                >
                    {/* <div className={styles.dateTimeId}>
                        <span className={styles.dateTime}>Hoje - 14:53</span>

                    </div> */}

                    <div className={styles.statusContainer}>
                        <div className={`${styles.label} ${styles.labelTime}`}>
                            <FontAwesomeIcon icon="clock" />

                            <span>{'Hoje - 14:23'}</span>
                        </div>

                        <div className={`${styles.label} ${styles.labelSuccess}`}>
                            <FontAwesomeIcon icon="check" />

                            <span>{'Conclu??da'}</span>
                        </div>

                        <div className={`${styles.label} ${styles.labelTime}`}>
                            <FontAwesomeIcon icon="hourglass-end" />

                            <span>{'00:55'}</span>
                        </div>
                        
                        {/* <div className={`${styles.label} ${styles.labelSuccess}`}>
                            <FontAwesomeIcon icon="dollar-sign" />

                            <span>{'Paga'}</span>
                        </div> */}
                        
                        <div className={`${styles.label} ${isPaymentDone ? styles.labelSuccess : styles.labelIssue}`}>
                            <FontAwesomeIcon icon="dollar-sign" />

                            <span>{isPaymentDone ? 'Pago' : 'Em aberto'}</span>
                        </div>
                    </div>
                    
                    <FontAwesomeIcon 
                        icon="chevron-down" 
                        className={`${isDeliveryCardOpened ? (
                            `${styles.showDeliveryCard} ${styles.label}`
                        ) : (
                            `${styles.hideDeliveryCard}`
                        )}`}
                    />
                </section>

                

                <section className={`${styles.titleDelivery} ${styles.idDelivery}`} style={{display: `${displayDeliveryCardItems}`}}>
                    <FontAwesomeIcon icon="hashtag" />
                    <strong>1973</strong>
                </section>

                <div className={styles.profileLink} >
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

                    <button>
                        <FontAwesomeIcon icon="clone" />
                        <span>Chave PIX</span>
                    </button>
                </div>

                <div className={styles.rateDeliveryman}>
                    <span>Por favor, deixe a sua avalia????o</span>

                    <ul>
                        <li><FontAwesomeIcon icon="star" /></li>
                        <li><FontAwesomeIcon icon="star" /></li>
                        <li><FontAwesomeIcon icon="star" /></li>
                        <li><FontAwesomeIcon icon="star" /></li>
                        <li><FontAwesomeIcon icon="star" /></li>
                    </ul>

                    <button>Enviar</button>
                </div>

                <section id="address" className={styles.addressContainer} >
                    <h3 className={styles.titleDelivery} style={{display: `${displayDeliveryCardItems}`}}>
                        <FontAwesomeIcon icon="map-marker-alt" />
                        <strong>Endere??o da entrega</strong>
                    </h3>
                    
                    <p>Rua Do Endere??o Da Entrega, 345</p>

                    <span style={{display: `${displayDeliveryCardItems}`}}>Refer??ncia:</span>

                    <p style={{display: `${displayDeliveryCardItems}`}}>Pr??ximo ao Bar Do Z??, Casa amarela de port??o azul.</p>
                </section>

                <section id="description" className={styles.descriptionContainer} style={{display: `${displayDeliveryCardItems}`}}>
                    <h3 className={styles.titleDelivery}>
                        <FontAwesomeIcon icon="align-left" />
                        <strong>Descri????o</strong>
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
                        <FontAwesomeIcon icon="stopwatch" />
                        <strong>Tempo de preparo</strong>
                    </h3>
                    
                    <p>15 min</p>
                </section>

                <section id="payment" style={{display: `${displayDeliveryCardItems}`}}>
                    <h3 className={styles.titleDelivery}>
                        <FontAwesomeIcon icon="dollar-sign" />
                        <strong>Valor a pagar ao entregador</strong>
                    </h3>
                    <p>R$ 6,75</p>
                </section>

                <div className={styles.paymentContainer}>
                    <p>
                        {isPaymentDone ? "Pagamento j?? foi efetuado." : "Pagamento est?? pendente"}
                    </p>
                    <div className={`${isPaymentDone ? (
                        `${styles.toggleOn}`
                    ) : (
                        `${styles.toggleOff}`
                    )}`}               
                    onClick={switchToggle}
                    >
                    <div className={styles.toggleCircle} />
                    </div>
                </div>

                {/* <div className={`${styles.btnsContainer} `}>
                    <button>
                        <FontAwesomeIcon icon="dollar-sign" />

                        Ainda n??o paguei
                    </button>

                    <button className={styles.finalizeBtn}>
                        <FontAwesomeIcon icon="dollar-sign" />

                        J?? paguei
                    </button>
                </div> */}
            </div>

            {/* ------------------ DESKTOP ----------------- */}
            <div className={styles.deliveryCardDesktopContainer}>
                <div className={styles.statusContainer}>
                    <div className={`${styles.dataItem} ${styles.deliverymanContainer}`}>
                        <Image 
                            width={28} 
                            height={28} 
                            src="/img/icons/profile-user.svg"
                            alt="Profile"
                        />

                        <div className={styles.deliveryman}>
                            <p>
                                Nome do Entregador
                                <div className={styles.currentRate}>
                                    <FontAwesomeIcon icon="star" />
                                    <span>4.8</span>
                                </div>
                            </p>

                            {/* <span>Avalia????o pendente</span> */}
                            
                            <div className={styles.clientRate}>
                                <ul>
                                    <li><FontAwesomeIcon icon="star" /></li>
                                    <li><FontAwesomeIcon icon="star" /></li>
                                    <li><FontAwesomeIcon icon="star" /></li>
                                    <li><FontAwesomeIcon icon="star" /></li>
                                    <li><FontAwesomeIcon icon="star" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className={`${styles.label} ${styles.labelTime}`}>
                        <FontAwesomeIcon icon="clock" />

                        <span>{'Hoje - 14:23'}</span>
                    </div>

                    <div className={`${styles.label} ${styles.labelSuccess}`}>
                        <FontAwesomeIcon icon="check" />

                        <span>{'Finalizada com sucesso'}</span>
                    </div>

                    <div className={`${styles.label} ${styles.labelTime}`}>
                        <FontAwesomeIcon icon="hourglass-end" />

                        <span>{'00:55'}</span>
                    </div>
                </div>
                

                <div className={styles.dataContainer}>
                    <div className={` ${styles.id}`}>
                        <FontAwesomeIcon icon="hashtag" />

                        <p>1973</p>
                    </div>

                    {/* <div className={`${styles.dataItem} ${styles.deliverymanContainer}`}>
                        <Image 
                            width={28} 
                            height={28} 
                            src="/img/icons/profile-user.svg"
                            alt="Profile"
                        />

                        <div className={styles.deliveryman}>
                            <p>
                                Nome do Entregador
                            </p>

                            <div className={styles.currentRate}>
                                <FontAwesomeIcon icon="star" />
                                <span>4.8</span>
                            </div>
                        </div>
                    </div> */}

                    <div className={`${styles.dataItem} `} >
                        <FontAwesomeIcon icon="map-marker-alt" />

                        <div className={styles.address}>
                            <p>Rua Do Endere??o Da Entrega, 345</p>

                            <span>Pr??ximo ao Bar Do Z??, Casa amarela de port??o azul.</span>
                        </div>                  
                    </div>

                    <div className={`${styles.dataItem} ${styles.description}`}>
                        <FontAwesomeIcon icon="align-left" />

                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt ullam quas praesentium animi placeat beatae magni dolore a maiores.</p>
                    </div>

                    <div className={`${styles.dataItem} `}>
                        <FontAwesomeIcon icon="stopwatch" />

                        <p>15 min</p>
                    </div>

                    <div className={`${styles.dataItem} `}>
                        <FontAwesomeIcon icon="dollar-sign" />
                        
                        <p>R$ 6,75</p>
                    </div>
                
                    <div className={`${styles.btnsContainer} `}>
                        <button className={styles.shuffle} onClick={openConfirmCancel}>
                            <FontAwesomeIcon icon="star" />

                            Avaliar entregador
                        </button>
                        {/*class issueRequestBtnViewed quando for visualizada*/}
                        {/* <button onClick={openIssueRequest} className={styles.issueRequestBtn}> 
                            <FontAwesomeIcon icon="exclamation-circle" />
                            <span>Houve 1 imprevisto</span>
                        </button> */}
                    </div>
                </div>
            </div>

            {isModalConfirmCancelOpened ? (
                <RateDeliveryman 
                    onClose={() => setIsModalConfirmCancelOpened(false)}
                />
            ) : null}
        </>
    )
}