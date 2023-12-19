import { useState, useEffect } from 'react'

export function useScroll(): {
  scrollY: number
  scrollX: number
  scrollDirection: string
} {
  const [lastScrollTop, setLastScrollTop] = useState<number>(0)
  const [bodyOffset, setBodyOffset] = useState<DOMRect | null>(null)
  const [scrollY, setScrollY] = useState<number>(0)
  const [scrollX, setScrollX] = useState<number>(0)
  const [scrollDirection, setScrollDirection] = useState<string>('down')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const listener = () => {
        const newBodyOffset = document.body.getBoundingClientRect()
        setBodyOffset(newBodyOffset)
        setScrollY(-newBodyOffset.top)
        setScrollX(newBodyOffset.left)
        setScrollDirection(lastScrollTop > -newBodyOffset.top ? 'down' : 'up')
        setLastScrollTop(-newBodyOffset.top)
      }

      window.addEventListener('scroll', listener)

      return () => {
        window.removeEventListener('scroll', listener)
      }
    }
  }, [lastScrollTop])

  return {
    scrollY,
    scrollX,
    scrollDirection
  }
}
