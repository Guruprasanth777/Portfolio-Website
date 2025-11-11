import projects from '../data/projects'
import Card from './ui/Card'
import { motion } from 'framer-motion'

function Tag({ children }) {
  return <span className="text-xs px-2 py-1 rounded bg-sky-500/10 border border-sky-500/30">{children}</span>
}

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }}>
              <Card className="hover:shadow-lg transition">
                <img src={p.image} alt={p.title} loading="lazy" className="rounded-xl w-full h-48 object-cover" />
                <div className="mt-4">
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="opacity-80 mt-2">{p.description}</p>
                  <div className="mt-3 flex gap-2 flex-wrap">{p.tags?.map(t => <Tag key={t}>{t}</Tag>)}</div>
                  <a href={p.link} className="text-sky-600 underline mt-3 block">View Project</a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
