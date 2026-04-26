'use client'

import { useEffect, useState } from 'react'

export function useIsMobile(breakpoint: number = 768) {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    checkMobile()

    const listener = () => checkMobile()
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  }, [breakpoint])

  return isMobile
}
