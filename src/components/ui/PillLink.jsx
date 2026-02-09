import { motion } from 'framer-motion'

export function PillLink(props) {
  const isDisabled = !props.href
  const className =
    'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ' +
    (isDisabled
      ? 'cursor-not-allowed border-white/10 bg-white/5 text-white/40'
      : 'border-sky-400/30 bg-sky-400/10 text-sky-300 hover:border-sky-400/60 hover:bg-sky-400/20 hover:shadow-lg hover:shadow-sky-500/20')

  const content = (
    <>
      {props.icon ? <span className="text-base">{props.icon}</span> : null}
      <span>{props.label}</span>
    </>
  )

  if (isDisabled)
    return <span className={className}>{content}</span>

  return (
    <motion.a
      className={className}
      href={props.href}
      title={props.title}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {content}
    </motion.a>
  )
}
