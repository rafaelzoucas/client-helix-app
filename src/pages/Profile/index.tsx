import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import styles from './styles.module.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export default function Profile() {

    return(
        <div className={styles.settingsContainer}>
            <section className={styles.headerContainer}>
                <h1>Perfil</h1>

                <Link href="/">
                    <button>
                        <FontAwesomeIcon icon="times" />
                    </button>
                </Link>
            </section>

            <div className={styles.infoContainer}>
                <div className={styles.info}>
                    <FontAwesomeIcon icon="user-circle" className={styles.profPic} />
                </div>

                <div className={styles.info}>
                    <span>Nome</span>
                    <input type="text" placeholder="Estabelecimento" disabled />
                </div>

                <div className={styles.info}>
                    <span>Endereço</span>
                    <input type="text" placeholder="Rua Do Estabelecimento, 123" disabled />
                </div>

                <div className={styles.info}>
                    <span>Telefone (WhatsApp)</span>
                    <input type="text" placeholder="18 9 9999-9999" disabled />
                </div>

                <div className={styles.info}>
                    <span>E-mail</span>
                    <input type="text" placeholder="exemplo@exemplo.com" />
                </div>

                <div className={styles.info}>
                    <span>Senha</span>
                    <input type="password" placeholder="*******" />
                </div>

                <div className={styles.info}>
                    <span>Confirmar senha</span>
                    <input type="password" placeholder="*******" />
                </div>

                <div className={styles.btns}>
                    {/* <button>
                        <FontAwesomeIcon icon="edit" />
                        Editar informações
                    </button> */}
                    <button className={styles.cancel}>Cancelar</button>
                    <button className={styles.save}>Salvar</button>
                </div>
            </div>    
        </div>
    )
}