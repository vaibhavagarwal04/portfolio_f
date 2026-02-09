import { useEffect } from 'react'
import { cn } from '../../lib/cn'

export function Modal(props) {
  useEffect(() => {
    if (!props.open) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') props.onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [props])

  if (!props.open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={props.title ?? 'Dialog'}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <button
        aria-label="Close dialog"
        className="absolute inset-0 cursor-default bg-black/60"
        onClick={props.onClose}
      />

      <div
        className={cn(
          'relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b0c18] shadow-2xl',
          'animate-[modalIn_180ms_ease-out]',
        )}
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/10 p-5 sm:p-6">
          <div>
            {props.title ? <div className="text-base font-semibold text-white/90">{props.title}</div> : null}
            <div className="mt-1 text-sm text-white/55">Press Esc to close</div>
          </div>
          <button
            className="rounded-lg border border-white/10 bg-white/3 px-3 py-1.5 text-sm text-white/80 hover:border-white/20 hover:bg-white/6"
            onClick={props.onClose}
          >
            Close
          </button>
        </div>
        <div className="p-5 sm:p-6">{props.children}</div>
      </div>
    </div>
  )
}
