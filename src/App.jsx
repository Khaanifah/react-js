import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="relative w-full overflow-hidden bg-[#0b0f0c] text-white">
      {/* Background utama — satu lapisan yang membentang di BELAKANG semua section.
          Makin ke bawah, warnanya otomatis memudar ke gelap (lihat linear-gradient paling atas). */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(11,15,12,0) 0%, rgba(11,15,12,0) 30%, rgba(11,15,12,0.9) 65%, #0b0f0c 85%),
            radial-gradient(circle at 15% 6%, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0) 16%),
            radial-gradient(circle at 68% 4%, rgba(70,95,68,0.55) 0%, rgba(70,95,68,0) 20%),
            radial-gradient(circle at 58% 16%, rgba(224,231,182,0.6) 0%, rgba(224,231,182,0) 16%),
            radial-gradient(circle at 92% 14%, rgba(38,66,46,0.9) 0%, rgba(38,66,46,0) 20%),
            radial-gradient(circle at 18% 22%, rgba(74,98,66,0.7) 0%, rgba(74,98,66,0) 18%),
            linear-gradient(180deg, #3f4f3a 0%, #93a46b 12%, #cdd9a4 20%, #0b0f0c 40%)
          `,
        }}
      />

      {/* Grain / noise overlay — ikut membentang penuh juga */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.15] mix-blend-overlay"
        aria-hidden="true"
      >
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      {/* Semua konten (Navbar + section-section) duduk di lapisan atas, transparan */}
      <div className="relative z-10">
        <Navbar />
        <Homepage />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
