import { useState } from 'react'
import Button from './ui/Button'
export default function Contact(){
  const [status,setStatus]=useState('idle')
  const [error,setError]=useState('')
  const [form,setForm]=useState({name:'',email:'',message:'',company:''})
  const onChange=e=>setForm(f=>({...f,[e.target.name]:e.target.value}))
  async function onSubmit(e){
    e.preventDefault(); setStatus('loading'); setError('')
    if(form.company){ setStatus('success'); return }
    try{
      const res = await fetch('/api/contact',{ method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({name:form.name,email:form.email,message:form.message}) })
      if(!res.ok) throw new Error(await res.text())
      setStatus('success'); setForm({name:'',email:'',message:'',company:''})
    }catch(err){ setStatus('error'); setError(err.message||'Something went wrong') }
  }
  return (
    <section id="contact" className="py-20">
      <div className="max-w-md mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <form className="space-y-4" onSubmit={onSubmit}>
          <input name="name" value={form.name} onChange={onChange} className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-700" placeholder="Your Name" required />
          <input name="email" type="email" value={form.email} onChange={onChange} className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-700" placeholder="Email" required />
          <textarea name="message" value={form.message} onChange={onChange} className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-700" placeholder="Message" rows="5" required />
          <input name="company" value={form.company} onChange={onChange} className="hidden" tabIndex="-1" autoComplete="off" />
          <Button className="w-full bg-sky-500 text-white" disabled={status==='loading'}>{status==='loading'?'Sending...':'Send'}</Button>
          {status==='success' && <p className="text-green-600">Thanks! I'll get back to you soon.</p>}
          {status==='error' && <p className="text-red-600">Error: {error}</p>}
        </form>
      </div>
    </section>
  )
}
