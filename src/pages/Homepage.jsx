import photo from '../assets/pasphoto.jpg'

export default function Home() {
  return (
      <section
        className="relative min-h-screen w-full overflow-hidden bg-[#0b0f0c] text-white"
      >
        {/* Mesh gradient background — layered radial gradients to mimic the grainy green mesh */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 15% 18%, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0) 32%),
              radial-gradient(circle at 68% 10%, rgba(70,95,68,0.55) 0%, rgba(70,95,68,0) 42%),
              radial-gradient(circle at 58% 58%, rgba(224,231,182,0.6) 0%, rgba(224,231,182,0) 42%),
              radial-gradient(circle at 92% 45%, rgba(38,66,46,0.9) 0%, rgba(38,66,46,0) 48%),
              radial-gradient(circle at 18% 72%, rgba(74,98,66,0.7) 0%, rgba(74,98,66,0) 45%),
              linear-gradient(135deg, #3f4f3a 0%, #93a46b 55%, #cdd9a4 100%)
            `,
          }}
        />

        {/* Grain / noise overlay for texture */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18] mix-blend-overlay"
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

        {/* Hero content */}
        <div className="relative z-10 flex min-h-[120vh] items-start px-8 pt-40 md:px-70 md:pt-50">
          <div className="max-w-xl">
            <p className="mb-1 text-lg font-light text-white/90" style={{ fontFamily: "'Sora', sans-serif" }}>
              Bits and Pieces of my
            </p>

            <h1 className="-mt-2 flex flex-nowrap items-end">
              <span className="text-[300px] leading-none text-white" style={{ fontFamily: "'Pinyon Script', cursive", marginRight: "-0.5rem", marginBottom: "-5rem" }}>
                P
              </span>
              <span className="pb-3 flex flex-nowrap text-[70px] font-regular tracking-tight text-white md:text-[64px]" style={{ fontFamily: "'Sora', sans-serif", marginBottom: "-0.5rem" }}>
                roject
              </span>
            </h1>

            <p className="mt-2 flex flex-nowrap text-base font-light text-white/85" style={{ fontFamily: "'Sora', sans-serif", marginLeft: "10rem" }}>
              [ as Computer Science Student ]
            </p>
          </div>
          <p className="absolute top-50 right-50 animate-bounce text-base font-light text-white/85" style={{ fontFamily: "'Sora', sans-serif", marginLeft: "35rem", marginTop: "30rem" }}>
              Get to know me↓
            </p>
        </div>

        {/* ===== About content — tetap di atas background hijau yang sama ===== */}
        <div className="relative z-10 flex flex-col items-center gap-12 px-8 pb-24 pt-8 md:flex-row md:items-center md:gap-16 md:px-16">
          {/* Tumpukan foto ala polaroid */}
          <div className="relative h-[400px] w-full max-w-[300px] shrink-0 translate-x-60 -translate-y-40">
            <div className="absolute inset-0 rounded-xl border-4 border-white bg-white p-1 shadow-xl">
              <img
                src={photo}
                alt="Foto profil"
                className="h-full w-full rounded-md object-cover"
              />
            </div>
          </div>

          {/* Teks bio */}
          <div className="flex-1 translate-x-60 -translate-y-45">
            <p className="mb-4 text-3xl font-regular text-white/90" style={{ fontFamily: "'Sora', sans-serif" }}>
              [ About <span className="font-bold">Me</span> ]
            </p>

            <p className="max-w-3xl text-justify text-[20px] font-regular leading-relaxed text-white/80" style={{ fontFamily: "'Sora', sans-serif" }}>
              I'm <span className="font-semibold text-[20px] text-white tracking-widest">Itsnan Nur Khanifah</span>, a
              third-year Information Systems student with great interest in{' '}
              <span className="font-semibold text-[20px] text-white tracking-widest">graphic design</span> and{' '}
              <span className="font-semibold text-[20px] text-white tracking-widest">UI/UX design</span>. I'd describe
              myself as a <span className="font-semibold text-[20px] text-white tracking-widest">curious</span>,{' '}
              <span className="font-semibold text-[20px] text-white tracking-widest">imaginative</span>, and{' '}
              <span className="font-semibold text-[20px] text-white tracking-widest">spontaneous</span> person who's
              constantly seeking inspiration and opportunities to grow my
              potential.
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=itsnaankhaanifaah@gmail.com&su=Halo%20Itsnan&body=Halo%2C%20saya%20tertarik%20untuk%20bekerja%20sama..."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-md bg-[#373d20] px-8 py-3 text-sm font-medium text-[#ffffff] shadow-md transition-colors hover:bg-[#ffffff] hover:text-[#373d20]"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Hire me!
            </a>
          </div>
        </div>
      </section>
  );
}