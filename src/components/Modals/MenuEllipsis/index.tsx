import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './styles.module.scss'

export default function MenuEllipsis({id = 'modal', onClose = () => {}}) {

    const handleOutSideClick = (e) => {
        if(e.target.id === id) onClose()
    }
    return(
        <div id={id} className={styles.modalContainer} onClick={handleOutSideClick}>
            <div className={styles.menuEllipsisContainer}>
                <section className={styles.title}>
                    <strong>Apelido</strong>
                    <p>Rua Endereço do Restaurante, 1234</p>
                    <span>Ao lado da Outra Loja</span>
                </section>

                <section className={styles.actionBtns}>
                    <button onClick={onClose}>
                        <FontAwesomeIcon icon="trash-alt" />
                        Excluir
                    </button>
                    <button onClick={onClose}>
                        <FontAwesomeIcon icon="edit" />
                        Editar
                    </button>
                </section>
            </div>
        </div>
    )
}