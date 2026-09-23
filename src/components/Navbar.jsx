import { useEffect, useState } from 'react'
import logo from '../assets/logo.svg'

const sections = [
  { id: 'main', label: 'Main' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [activeId, setActiveId] = useState('main')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Section dianggap "aktif" kalau melewati garis tengah layar
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        // Trigger area cuma di sekitar tengah layar (bisa disesuaikan)
        rootMargin: '-45% 0px -45% 0px',
      }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    // Bersihkan observer kalau komponen unmount
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-8 py-8 md:px-16">
      <a
        href="#main"
        className="block h-10 w-10 shrink-0"
        aria-label="Kembali ke halaman utama"
      >
        <img src={logo} alt="Logo" className="h-full w-full" />
      </a>

      <nav>
        <ul
          className="flex gap-10 text-[15px] font-light tracking-wide"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`transition-colors hover:text-white ${
                  activeId === id ? 'text-white' : 'text-white/60'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
