import React, { useState } from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

import styles from './styles.module.scss'
import NewCollectAddress from './NewCollectAddress'
import Image from 'next/image'
import MenuEllipsis from '../../MenuEllipsis'

export default function CollectAddress({onClose = () => {}}) {
    const [isNewCollectAddressVisible, setIsNewCollectAddressVisible] = useState(false)
    const [isMenuEllipsisVisible, setIsMenuEllipsisVisible] = useState(false)

    const openNewCollectAddressModal = () => {
        setIsNewCollectAddressVisible(true)
    }

    const showMenuEllipsis = () => {
        setIsMenuEllipsisVisible(true)
    }

    return(
        <>
            <div className={styles.newDeliveryContainer}>
                <section className={styles.headerContainer}>
                    <div className={styles.backTitle}>
                        <button onClick={onClose}>
                            <FontAwesomeIcon icon="arrow-left" />
                        </button>
                        <h1>Solicitar entregador</h1>
                    </div>

                    {/* <button onClick={onClose}>
                        <FontAwesomeIcon icon="times" />
                    </button> */}
                </section> 

                <section className={styles.prevData}>
                    <div className={styles.title}>
                        <FontAwesomeIcon icon="box-open" />
                        <h3>Informações da entrega</h3>
                    </div>
                    <span>Endereço da entrega</span>
                    <p>Rua Do Endereço Da Entrega, 123 - Assis SP</p>
                    {/* <span>Referência</span>
                    <p>Próximo ao Bar do Zé</p>
                    <span>Forma de pagamento</span>
                    <p>Cartão</p>
                    <span>Descrição</span>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus in aliquam nostrum.</p> */}
                </section>

                <section className={styles.collectAddress}>
                    <div className={styles.title}>
                        <FontAwesomeIcon icon="map-marker-alt" />
                        <h3>Endereço de coleta</h3>
                    </div>

                    <div className={styles.collectAddressCardContainer}>
                        <div className={styles.collectAddressCardOnPressed}>
                            <div className={styles.addressInfo}>
                                <strong>Apelido</strong>
                                <p>Rua Endereço do Restaurante, 1234</p>
                                <span>Ao lado da Outra Loja</span>
                            </div>
                            
                            <button 
                                className={styles.menuEllipsis}
                                onClick={showMenuEllipsis}
                            >
                                <FontAwesomeIcon icon="ellipsis-v" />
                            </button>
                        </div>

                        {isMenuEllipsisVisible ? (
                            <MenuEllipsis 
                                onClose={() => setIsMenuEllipsisVisible(false)}
                            />
                        ) : null}
                    </div>

                    <button onClick={openNewCollectAddressModal}>+ Adicionar novo endereço</button>
                </section>

                <section>
                    <div className={styles.title}>
                        <FontAwesomeIcon icon="motorcycle" />
                        <h3>Entregador</h3>
                    </div>
                    {/* <select placeholder="Nome do Entregador Atual" >
                        <option value="">
                            Nome do Entregador Atual
                        </option>
                        <option value="">Escolher entregador aleatório</option>
                    </select>  */}
                    <div className={styles.deliveryman}>
                        <div className={styles.cardOnPressed}>
                            <div>
                                <Image
                                    width={36} 
                                    height={36} 
                                    src="/img/icons/profile-user.svg"
                                    alt="Profile"
                                />
                                <h1>Nome Do Entregador</h1>
                            </div>

                            <FontAwesomeIcon icon="check" />                            
                        </div>

                        <div className={styles.card}>
                            <div>
                                <FontAwesomeIcon icon="random" />
                                <h1>Escolher entregador aleatóriamente</h1>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section className={styles.btnsContainer}>
                    <button className={styles.cancel}>Cancelar</button>
                    <button className={styles.continue}>Solicitar entregador</button>
                    <button className={styles.disabled}>Selecione o endereço de coleta</button>
                </section> */}

                <section className={styles.confirm}>
                    <div className={styles.distanceAndPrice}>
                        <div className={styles.distance}>
                            <span>Distância</span>
                            <p>12Km</p>
                        </div>

                        <strong>R$ <h3>9,75</h3></strong>
                    </div>

                    <div className={styles.btnsContainer}>
                        <button className={styles.cancel}>Cancelar</button>
                        <button className={styles.continue}>Solicitar entregador</button>
                        {/* <button className={styles.recharge}>Saldo insuficiente: R$ 0,00. Clique para recarregar</button> */}
                        {/* <button className={styles.disabled}>Preencha todas as informações para continuar</button> */}
                    </div>
                </section>
            </div>

            {isNewCollectAddressVisible ? <NewCollectAddress onClose={() => setIsNewCollectAddressVisible(false)} /> : null}
        </>
    )
}