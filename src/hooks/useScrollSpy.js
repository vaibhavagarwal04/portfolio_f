import { useEffect, useMemo, useState } from 'react'

export function useScrollSpy(sectionIds, options) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')
  const idsKey = useMemo(() => sectionIds.join('|'), [sectionIds])

  useEffect(() => {
    if (!sectionIds.length) return
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el) => Boolean(el))
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id)
      },
      {
        root: null,
        rootMargin: options?.rootMargin ?? '-20% 0px -70% 0px',
        threshold: options?.threshold ?? [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    )

    for (const el of elements) observer.observe(el)
    return () => observer.disconnect()
  }, [idsKey])

  return activeId
}
