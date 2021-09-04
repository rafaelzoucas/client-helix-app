import React, { useState } from 'react'
import styles from './styles.module.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

import CancelDelivery from '../../Modals/CancelDelivery'
import Image from 'next/image'

export default function InProgress() {
    const [isDeliveryCardOpened, setIsDeliveryCardOpened] = useState(true)
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
                            <FontAwesomeIcon icon="spinner" className={styles.loading} />

                            <span>{'Entregador a caminho'}</span>
                        </div>

                        <div className={`${styles.label} ${styles.labelTime}`}>
                            <FontAwesomeIcon icon="hourglass-half" />

                            <span>{'00:55'}</span>
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

                <section className={`${styles.titleDelivery} ${styles.idDelivery}`}>
                    <FontAwesomeIcon icon="hashtag" />
                    <strong>1973</strong>
                </section>

                <div className={styles.profileLink} style={{display: `${displayDeliveryCardItems}`}}>
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

                <section id="address" className={styles.addressContainer} >
                    <h3 className={styles.titleDelivery} style={{display: `${displayDeliveryCardItems}`}}>
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
                        <strong>Forma de pagamento</strong>
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

                <div className={`${styles.btnsContainer} `}>
                    <button className={styles.issue} onClick={openConfirmCancel}>
                        <FontAwesomeIcon icon="exclamation-triangle" />

                        Imprevisto
                    </button>
                    {/* <button className={styles.finalizeBtn} onClick={openConfirmCancel}>
                        <FontAwesomeIcon icon="check" />

                        Finalizar
                    </button> */}

                    {/*class issueRequestBtnViewed quando for visualizada*/}
                    <button className={styles.issueRequestBtn}> 
                        <FontAwesomeIcon icon="exclamation-circle" />
                        <span>Houve 1 imprevisto</span>
                    </button>
                </div>
            </div>

            {isModalConfirmCancelOpened ? (
                <CancelDelivery 
                    onClose={() => setIsModalConfirmCancelOpened(false)}
                />
            ) : null}

            {/* ------------------ DESKTOP ----------------- */}
            <div className={styles.deliveryCardDesktopContainer}>
                <div className={styles.statusContainer}>
                    <div className={`${styles.label} ${styles.labelTime}`}>
                        <FontAwesomeIcon icon="clock" />
                        <span>{'Hoje - 14:23'}</span>
                    </div>

                    <div className={`${styles.label} ${styles.labelSuccess}`}>
                        <FontAwesomeIcon icon="spinner" className={styles.loading} />
                        <span>{'Entregador a caminho'}</span>
                    </div>

                    <div className={`${styles.label} ${styles.labelTime}`}>
                        <FontAwesomeIcon icon="hourglass-half" />

                        <span>{'00:55'}</span>
                    </div>
                </div>

                <div className={styles.dataContainer}>
                    <div className={` ${styles.id}`}>
                        <FontAwesomeIcon icon="hashtag" />

                        <p>1973</p>
                    </div>

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
                            </p>

                            <div className={styles.currentRate}>
                                <FontAwesomeIcon icon="star" />
                                <span>4.8</span>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.dataItem} `} >      
                        <FontAwesomeIcon icon="map-marker-alt" />

                        <div className={styles.address}>
                            <p>Rua Do Endereço Da Entrega, 345</p>

                            <span>Próximo ao Bar Do Zé, Casa amarela de portão azul.</span>
                        </div>                  
                    </div>

                    <div className={`${styles.dataItem} `}>
                        <FontAwesomeIcon icon="align-left" />

                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt ullam quas praesentium animi placeat beatae magni dolore a maiores.</p>
                    </div>

                    <div className={styles.dataItem}>
                        <FontAwesomeIcon icon="exclamation-triangle" />
                        <p>Faltou um item do pedido.</p>
                    </div>

                    <div className={`${styles.dataItem} `}>
                        <FontAwesomeIcon icon="dollar-sign" />

                        <p>Cartão</p>
                    </div>

                    <div className={`${styles.dataItem} `}>
                        <FontAwesomeIcon icon="dollar-sign" />
                        
                        <p>R$ 6,75</p>
                    </div>
                
                    <div className={`${styles.btnsContainer} `}>
                        <button className={styles.issue} onClick={openConfirmCancel}>
                            <FontAwesomeIcon icon="exclamation-triangle" />

                            Imprevisto
                        </button>
                        <button className={styles.finalizeBtn} onClick={openConfirmCancel}>
                            <FontAwesomeIcon icon="check" />

                            Finalizar
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
                <CancelDelivery 
                    onClose={() => setIsModalConfirmCancelOpened(false)}
                />
            ) : null}
        </>
    )
}