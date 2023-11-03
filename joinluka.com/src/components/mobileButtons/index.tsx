import { Box } from '@mui/material'
import React from 'react'
import Image from "next/image";
import googlePlay from '@/assets/mobileButtons/googleplay.svg'
import appStore from '@/assets/mobileButtons/appstore.svg'
import styles from './mobilebuttons.module.css'

const MobileButtons = () => {
  return (
    <Box
      className={styles['mobile-buttons-container']}
    >
      <Box
        component={'figure'}
        className={styles['mobile-buttons-figure']}
      >
        <Image
          src={googlePlay}
          alt="Google Play"
          style={{ width: "100%", height: "100%" }}
          onClick={() => window.open('https://play.google.com/store/apps/details?id=com.luka.vpos&pli=1', '_blank')}
        />
      </Box>
      <Box
        component={'figure'}
        className={styles['mobile-buttons-figure']}
      >
        <Image
          src={appStore}
          alt="App Store"
          style={{ width: "100%", height: "100%" }}
          onClick={() => window.open('https://apps.apple.com/us/app/luka-vpos/id6449679850', '_blank')}
        />
      </Box>
    </Box>
  )
}

export default MobileButtons