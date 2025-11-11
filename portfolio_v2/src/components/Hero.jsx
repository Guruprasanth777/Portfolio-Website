import { motion } from 'framer-motion'
import Button from './ui/Button'
export default function Hero(){
  return (
    <section id="home" className="min-h-[90vh] grid place-items-center pt-24">
      <div className="max-w-4xl mx-auto text-center px-4">
        <motion.h1 className="text-5xl md:text-6xl font-extrabold tracking-tight"
          initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}>
          Hi, I'm <span className="text-sky-500">Your Name</span>
        </motion.h1>
        <motion.p className="mt-4 text-lg opacity-80" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}}>
          I craft fast, accessible React apps with delightful UX.
        </motion.p>
        <motion.div className="mt-8 flex gap-4 justify-center" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}}>
          <Button className="bg-sky-500 text-white" onClick={()=>location.assign('#projects')}>View Projects</Button>
          <Button className="border border-slate-300 dark:border-slate-700" onClick={()=>location.assign('#contact')}>Contact Me</Button>
        </motion.div>
      </div>
    </section>
  )
}
