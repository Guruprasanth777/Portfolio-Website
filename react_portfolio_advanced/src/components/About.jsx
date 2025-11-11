import { motion } from 'framer-motion'
import Card from './ui/Card'
export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2 className="text-3xl font-bold" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>About Me</motion.h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <Card>
            <p className="opacity-80">I'm a React developer focused on UI engineering, performance, and accessibility. I enjoy motion design and building design systems.</p>
          </Card>
          <Card>
            <ul className="list-disc list-inside opacity-80 space-y-1">
              <li>Performance-first mindset (Lighthouse 90+)</li>
              <li>Component-driven, testable UIs</li>
              <li>Great docs & DX</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}
