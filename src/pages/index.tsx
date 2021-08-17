import React, { useState } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import styles from './home.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import NewDelivery from '../components/Modals/NewDelivery'
import Deliveries from '../components/Tabs/Deliveries'
import History from '../components/Tabs/History'
import Finance from '../components/Tabs/Finance'
import Header from '../components/Header'
import Menu from '../components/Modals/Menu'

export default function Home() {
  const [isModalNewDeliveryVisible, setIsModalNewDeliveryVisible] = useState(false)
  const [isModalMenuVisible, setIsModalMenuVisible] = useState(false)
  const [currentTab, setCurrentTab] = useState('Entregas')

  const [displayDeliveries, setDisplayDeliveries] = useState('')
  const [displayHistory, setDisplayHistory] = useState('none')
  const [displayFinance, setDisplayFinance] = useState('none')

  const [isDeliveriesVisible, setIsDeliveriesVisible] = useState(true)
  const [isHistoryVisible, setIsHistoryVisible] = useState(false)
  const [isFinanceVisible, setIsFinanceVisible] = useState(false)
  const displayBtn = '#ff5a1f'

  function showDeliveries() {
    setDisplayHistory('none')
    setDisplayFinance('none')
    setDisplayDeliveries('')
    setIsDeliveriesVisible(true)
    setIsHistoryVisible(false)
    setIsFinanceVisible(false)
    setCurrentTab('Entregas')
  }

  function showHistory() {
    setDisplayDeliveries('none')
    setDisplayFinance('none')
    setDisplayHistory('')
    setIsDeliveriesVisible(false)
    setIsHistoryVisible(true)
    setIsFinanceVisible(false)
    setCurrentTab('Histórico')
  }
  
  function showFinance() {
    setDisplayDeliveries('none')
    setDisplayHistory('none')
    setDisplayFinance('')
    setIsDeliveriesVisible(false)
    setIsHistoryVisible(false)
    setIsFinanceVisible(true)
    setCurrentTab('Financeiro')
  }

  const openModalNewDelivery = () => {
    setIsModalNewDeliveryVisible(true)
    disableBodyScroll(document)
  }

  const openModalMenu = () => {
    setIsModalMenuVisible(true)
    disableBodyScroll(document)
  }  

  return (
    <div className={styles.homepage}>
      <Header title={currentTab} />
      <main>
        <div id="tabs">
          {/* ------TABLINKS PARA MOBILE------ */}
          <div className={styles.tabLinksMobile}>
            <button 
              onClick={openModalMenu} 
              className={styles.navbarBtn}
            >
              <FontAwesomeIcon icon="bars" />
            </button>

            <button 
              onClick={showDeliveries}
              className={styles.navbarBtn} 
              style={isDeliveriesVisible ? (
                {color: `${displayBtn}`}
              ) : (
                {color: ''}
              )}
            >
              <div className={styles.badgeNotification} />

              <FontAwesomeIcon icon="motorcycle" />
            </button>

            <button 
              onClick={showHistory} 
              className={styles.navbarBtn} 
              style={isHistoryVisible ? (
                {color: `${displayBtn}`}
              ) : (
                {color: ''}
              )}
            >
              {/* <div className={styles.badgeNotification} /> */}

              <FontAwesomeIcon icon="history" />
            </button>

            <button 
              onClick={showFinance} 
              className={styles.navbarBtn} 
              style={isFinanceVisible ? (
                {color: `${displayBtn}`}
              ) : (
                {color: ''}
              )}
            >
              {/* <div className={styles.badgeNotification} /> */}

              <FontAwesomeIcon icon="coins" />
            </button>

            <button 
              onClick={openModalNewDelivery} 
              className={styles.newDelivery}
            >
                <span>+</span>
            </button>

            {isModalNewDeliveryVisible ? (
              <NewDelivery 
                onClose={() => {
                  setIsModalNewDeliveryVisible(false)
                  enableBodyScroll(document)
                }} 
              />
            ) : null}

          </div>

          {isModalMenuVisible ? (
            <Menu 
              onClose={() => {
                setIsModalMenuVisible(false)
                enableBodyScroll(document)
              }} 
            />
          ) : null}

          {/* ------TABLINKS PARA DESKTOP------ */}
          <div className={styles.tabLinksDesktop}>
            <button 
              onClick={openModalMenu} 
              className={styles.navbarBtn}
            >
              <FontAwesomeIcon icon="bars" />
            </button>
            <div className={styles.tabButtons}>
              <button 
                onClick={showDeliveries}
                className={styles.navbarBtn} 
                style={isDeliveriesVisible ? (
                  {color: `${displayBtn}`}
                ) : (
                  {color: ''}
                )}
              >
                <FontAwesomeIcon icon="motorcycle" />
              </button>

              <button 
                onClick={showHistory} 
                className={styles.navbarBtn} 
                style={isHistoryVisible ? (
                  {color: `${displayBtn}`}
                ) : (
                  {color: ''}
                )}
              >
                <FontAwesomeIcon icon="history" />
              </button>

              <button 
                onClick={showFinance} 
                className={styles.navbarBtn} 
                style={isFinanceVisible ? (
                  {color: `${displayBtn}`}
                ) : (
                  {color: ''}
                )}
              >
                <FontAwesomeIcon icon="coins" />
              </button>
            </div>

            <button 
              onClick={showHistory} 
              className={styles.navbarBtn} 
              style={isHistoryVisible ? (
                {color: `${displayBtn}`}
              ) : (
                {color: ''}
              )}
            >
              <FontAwesomeIcon icon="sign-out-alt" />
            </button>

            {isModalNewDeliveryVisible ? (
              <NewDelivery 
                onClose={() => {
                  setIsModalNewDeliveryVisible(false)
                  enableBodyScroll(document)
                }} 
              />
            ) : null}

          </div>

          {isModalMenuVisible ? (
            <Menu 
              onClose={() => {
                setIsModalMenuVisible(false)
                enableBodyScroll(document)
              }} 
            />
          ) : null}
          
          <div className={styles.tabContent}>
            <section 
              id="deliveries"
              style={{display: `${displayDeliveries}`}}
            >
              <Deliveries />
            </section>

            <section
              id="history"
              style={{display: `${displayHistory}`}}
            >
              <History />
            </section>

            <section
              id="finance"
              style={{display: `${displayFinance}`}}
            >
              <Finance />
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
