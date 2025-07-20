'use client'

import React, { useEffect, useState } from 'react'

export function useDevice() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)

    return () => {
      window.removeEventListener('resize', checkDevice)
    }
  }, [])

  return { isMobile }
}

export function withMobileDetection<P extends object>(
  DesktopComponent: React.ComponentType<P>,
  MobileComponent: React.ComponentType<P>
) {
  return function WrappedComponent(props: P) {
    const [mounted, setMounted] = useState(false)
    const { isMobile } = useDevice()

    useEffect(() => {
      setMounted(true)
    }, [])

    if (!mounted) {return null}

    if (isMobile) {
      return React.createElement(MobileComponent, props)
    }
    return React.createElement(DesktopComponent, props)
  }
}
