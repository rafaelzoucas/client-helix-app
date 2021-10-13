import React from 'react'
import { useState } from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)


import styles from './styles.module.scss'
import CollectAddress from './CollectAddress'
import NewDeliveryForm from '../../NewDeliveryForm'

export default function NewDelivery({onClose = () => {}}) {
    const [isCollectAddressVisible, setIsCollectAddressVisible] = useState(false)
    const [isDeliverymenVisible, setIsDeliverymenVisible] = useState(false)

    const openCollectAddressModal = () => {
        setIsCollectAddressVisible(true)
    }

    const openDeliverymenModal = () => {
        setIsDeliverymenVisible(true)
    }

    return(
        <>
            <div className={styles.newDeliveryContainer}>
                {isCollectAddressVisible ? (
                    <CollectAddress />
                ) : (
                    isDeliverymenVisible ? (
                        <div></div>
                    ) : (
                        <NewDeliveryForm />
                    )
                )}
            </div>
            {isCollectAddressVisible ? <CollectAddress onClose={() => setIsCollectAddressVisible(false)} /> : null}
        </>
    )
}