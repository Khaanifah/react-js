import Fade from '../components/Fade'

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  )
}

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <line x1="7.5" y1="10" x2="7.5" y2="17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="7.5" cy="6.8" r="1.1" fill="currentColor" />
      <path
        d="M11.5 17V10M11.5 13c0-1.7 1.2-3 2.8-3s2.7 1.1 2.7 3v4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function Contact() {
  return (
    <Fade id="contact" className="w-full px-8 pb-24 pt-40 text-white md:px-16 md:pb-32 md:pt-48">
      <Fade className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        {/* Kiri: judul + ajakan */}
        <Fade>
          <h2
            className="text-4xl font-bold"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Contact
          </h2>
          <p
            className="mt-4 max-w-sm font-light leading-relaxed text-white/80"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Have an idea, a project, or just want to say hello? I'd love to
            hear from you.
          </p>
        </Fade>

        {/* Kanan: Email & Socials */}
        <Fade className="flex flex-col gap-10">
          <Fade>
            <h3
              className="mb-1 text-lg font-bold"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Email
            </h3>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=itsnaankhaanifaah@gmail.com&su=Halo%20Itsnan&body=Halo%2C%20saya%20tertarik%20untuk%20bekerja%20sama..."
              className="text-white/80 transition-colors hover:text-white"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              itsnaankhaanifaah@gmail.com
            </a>
          </Fade>

          <Fade>
            <h3
              className="mb-2 text-lg font-bold"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Socials
            </h3>

            <Fade className="flex flex-col gap-2">
              <a
                href="https://instagram.com/khaanfhn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 transition-colors hover:text-white"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                <InstagramIcon className="h-4 w-4" />
                @khaanfhn
              </a>

              <a
                href="https://linkedin.com/in/itsnan-nur-khanifah"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 transition-colors hover:text-white"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                <LinkedInIcon className="h-4 w-4" />
                Itsnan Nur Khanifah
              </a>
            </Fade>
          </Fade>
        </Fade>
      </Fade>
    </Fade>
  )
}
