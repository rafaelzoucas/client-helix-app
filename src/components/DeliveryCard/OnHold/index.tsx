import React, { useState } from 'react'
import styles from './styles.module.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

import CancelDelivery from '../../Modals/CancelDelivery'

export default function OnHold() {
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
                    <div className={styles.dateTimeId}>
                        <span className={styles.dateTime}>Hoje - 14:53</span>

                        <span 
                            id="idDelivery" 
                            className={`${styles.titleDelivery} ${styles.idDelivery}`}
                        >
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
                    <div className={styles.labelStatusSuccess}>
                        <FontAwesomeIcon icon="spinner" className={styles.loading} />
                        
                        <span>{'Procurando entregadores'}</span>
                    </div>
                    <div className={styles.labelTime}>
                        <FontAwesomeIcon icon="clock" />
                        <span>{'00:55'}</span>
                    </div>
                </section>

                <section id="address" className={styles.addressContainer} >
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
                        <FontAwesomeIcon icon="coins" />
                        <strong>Forma de pagamento</strong>
                    </h3>
                    <p>Cartão</p>
                </section>

                <div id="actionButtons" className={styles.actionButtonsContainer}>
                    <div className={styles.progressBtns}>
                        <button className={styles.cancelBtn} onClick={openConfirmCancel}>Cancelar</button>
                    </div>
                </div>
            </div>

            {isModalConfirmCancelOpened ? (
                <CancelDelivery 
                    onClose={() => setIsModalConfirmCancelOpened(false)}
                />
            ) : null}

            {/* ------------------ DESKTOP ----------------- */}
            <div className={styles.deliveryCardDesktopContainer}>
                <div className={`${styles.container} ${styles.col8}`}>
                    <section 
                        id="header" 
                        className={`${styles.headerContainer} ${styles.col1}`}
                    >
                        <span className={styles.dateTime}>Hoje - 14:53</span>

                        <span 
                            id="idDelivery" 
                            className={`${styles.titleDelivery} ${styles.idDelivery}`}
                        >
                            <FontAwesomeIcon icon="hashtag" />
                            <strong>1973</strong>
                        </span>
                    </section>

                    <section 
                        id="address" 
                        className={`${styles.addressContainer} ${styles.col4}`}
                    >
                        <p>Rua Do Endereço Da Entrega, 345</p>

                        <span className={styles.reference}>Próximo ao Bar Do Zé, Casa amarela de portão azul.</span>
                    </section>

                    <section 
                        id="description" 
                        className={`${styles.descriptionContainer} ${styles.col4}`}
                    >
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt ullam quas praesentium animi placeat beatae magni dolore a maiores.</p>

                    </section>

                    <section 
                        id="payment"
                        className={styles.col2}    
                    >
                        <p>Cartão</p>
                    </section>
                </div>

                <section id="status" className={styles.statusContainer}>
                    <div className={styles.labelStatusSuccess}>
                        <FontAwesomeIcon icon="spinner" className={styles.loading} />
                        
                        <span>{'Procurando entregadores'}</span>
                    </div>
                    <div className={styles.labelTime}>
                        <FontAwesomeIcon icon="clock" />
                        <span>{'00:55'}</span>
                    </div>
                </section>

                <div 
                    id="actionButtons" 
                    className={`${styles.actionButtonsContainer}`}
                >
                    <div className={styles.progressBtns}>
                        <button 
                            className={styles.cancelBtn} 
                            onClick={openConfirmCancel}
                        >
                            Cancelar
                        </button>
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