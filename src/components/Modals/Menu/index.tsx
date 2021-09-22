import React from 'react'
import styles from './styles.module.scss'

import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Link from 'next/link'

export default function Menu({id = 'modal', onClose = () => {}}) {

    const handleOutSideClick = (e) => {
        if(e.target.id === id) onClose()
    }

    return(
        <>
            <div id={id} className={styles.modalContainer} onClick={handleOutSideClick}>
                <div className={styles.menuContainer}>
                    <section className={styles.profile}>
                        <Image 
                            width={60} 
                            height={60} 
                            src="/img/icons/profile-user.svg"
                            alt="Profile"
                        />

                        <h1>Estabelecimento</h1>
                    </section>

                    <section className={styles.menu}>
                        <div className={styles.menuItems}>
                            <Link href="/ExclusiveDeliveryman">
                                <button>
                                    <FontAwesomeIcon icon="motorcycle" />

                                    <span>
                                        Entregador exclusivo
                                    </span>
                                </button>
                            </Link>

                            <Link href="/Feedback">
                                <button>
                                    <FontAwesomeIcon icon="comment-dots" />

                                    <span>
                                        Sugestões
                                    </span>
                                </button>
                            </Link>
                        </div>

                        <div className={styles.menuFooter}>
                            <button>
                                <FontAwesomeIcon icon="sign-out-alt" />

                                <span>
                                    Sair
                                </span>
                            </button>

                            <button 
                                className={styles.closeMenu}
                                onClick={onClose}
                            >
                                <FontAwesomeIcon icon="times" />
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}