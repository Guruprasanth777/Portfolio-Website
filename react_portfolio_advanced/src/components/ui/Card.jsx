export default function Card({ children, className='' }) {
  return <div className={`rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-soft bg-white/70 dark:bg-slate-900/60 backdrop-blur ${className}`}>{children}</div>
}
