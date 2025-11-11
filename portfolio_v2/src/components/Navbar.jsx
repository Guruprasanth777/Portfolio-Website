import { useTheme } from '../theme'
import Button from './ui/Button'
export default function Navbar(){
  const { theme, setTheme } = useTheme()
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="text-lg font-bold">YourName<span className="text-sky-500">.dev</span></a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#projects" className="hover:opacity-80">Projects</a>
          <a href="#skills" className="hover:opacity-80">Skills</a>
          <a href="#contact" className="hover:opacity-80">Contact</a>
          <Button onClick={() => setTheme(theme==='dark'?'light':'dark')} className="bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900">
            {theme==='dark'?'Light':'Dark'}
          </Button>
        </div>
      </div>
    </nav>
  )
}
