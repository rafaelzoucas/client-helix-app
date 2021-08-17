import React from 'react'
import styles from './styles.module.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)


export default function HistoryDetails({onClose = () => {}}) {

    return(
        <>
            <div className={styles.detailsContainer}>
                <section className={styles.headerContainer}>
                    <div className={styles.backTitle}>
                        <button onClick={onClose}>
                            <FontAwesomeIcon icon="arrow-left" className={styles.faIcon} />
                        </button>
                        <h1>{'Histórico'}</h1>
                    </div>

                    <div className={styles.buttonsHeader}>
                        <button>
                            <FontAwesomeIcon icon="search" className={styles.faIcon} />
                        </button>

                        <button>
                            <FontAwesomeIcon icon="bell"  className={styles.faIcon} />
                        </button>
                    </div>
                </section>

                <section className={styles.resumeContainer}>
                    <h1>Qua 16 Jan</h1>                
                    <h1>Qua 16 Jan</h1>                
                    <h1>Qua 16 Jan</h1>                
                    <h1>Qua 16 Jan</h1>                
                </section> 
            </div>
        </>
    )
}