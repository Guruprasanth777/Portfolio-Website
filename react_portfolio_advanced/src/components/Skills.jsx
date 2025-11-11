import skills from '../data/skills'
import Badge from './ui/Badge'
import { motion } from 'framer-motion'

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((s, i) => (
            <motion.div key={s} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }} viewport={{ once: true }}>
              <Badge>{s}</Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
