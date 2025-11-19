"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollAnimation(options = {}) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        ...options,
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [options])

  return { ref, isVisible }
}
