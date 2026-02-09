import { useEffect, useRef, useState } from 'react'

export function useRevealOnScroll(options) {
  const ref = useRef(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { root: null, rootMargin: options?.rootMargin ?? '0px 0px -10% 0px', threshold: [0, 0.1] },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [options?.rootMargin])

  return { ref, revealed }
}
