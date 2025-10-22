import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle.jsx'
import { Menu } from 'lucide-react'

const linkBase = 'px-3 py-2 rounded-xl text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800'
const linkActive = 'text-slate-900 bg-slate-100 dark:text-white dark:bg-slate-800'

export default function Navbar() {
  const navClass = ({ isActive }) => isActive ? `${linkBase} ${linkActive}` : linkBase
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-slate-900/70 dark:border-slate-800">
      <div className="container-xl flex items-center justify-between py-3">
        <Link className="flex items-center gap-3" to="/">
          <img src="/src/assets/logo.png" alt="Micro Informatic Systems SA" className="h-8 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" end className={navClass}>Accueil</NavLink>
          <NavLink to="/a-propos" className={navClass}>À propos</NavLink>
          <NavLink to="/solutions" className={navClass}>Solutions</NavLink>
          <NavLink to="/technologies" className={navClass}>Technologies</NavLink>
          <NavLink to="/references" className={navClass}>Références</NavLink>
          <NavLink to="/carrieres" className={navClass}>Carrières</NavLink>
          <NavLink to="/contact" className={navClass}>Contact</NavLink>
          <ThemeToggle />
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setOpen(v => !v)} className="rounded-xl p-2 border border-slate-300 dark:border-slate-700" aria-label="Menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800">
          <div className="container-xl py-2 flex flex-col gap-1">
            <NavLink to="/" end className={navClass} onClick={() => setOpen(false)}>Accueil</NavLink>
            <NavLink to="/a-propos" className={navClass} onClick={() => setOpen(false)}>À propos</NavLink>
            <NavLink to="/solutions" className={navClass} onClick={() => setOpen(false)}>Solutions</NavLink>
            <NavLink to="/technologies" className={navClass} onClick={() => setOpen(false)}>Technologies</NavLink>
            <NavLink to="/references" className={navClass} onClick={() => setOpen(false)}>Références</NavLink>
            <NavLink to="/carrieres" className={navClass} onClick={() => setOpen(false)}>Carrières</NavLink>
            <NavLink to="/contact" className={navClass} onClick={() => setOpen(false)}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
