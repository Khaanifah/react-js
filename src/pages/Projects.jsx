import brandingInstagram from '../assets/branding-hima.png'
import buletinHima from '../assets/bulletin.png'
import kosId from '../assets/kos-id.png'
import portalMaba from '../assets/sistempmb.png'
import dssRankdept from '../assets/rankdept.png'
import Fade from '../components/Fade'

const projects = [
  {
    title: 'Branding Instagram',
    category: 'Graphic Design',
    description:
      'Berperan sebagai PIC untuk desain feeds Instagram HIMA ILKOM UNNES 2025 sekaligus PIC untuk Grand Launching dan Grand Closing HIMA ILKOM UNNES 2025.',
    image: brandingInstagram,
  },
  {
    title: 'Bulletin HIMA ILKOM 2025',
    category: 'Graphic Design',
    description:
      'Berperan sebagai anggota tim desain pada agenda Bulletin HIMA ILKOM UNNES 2025 yang bertajuk "Aetherie".',
    image: buletinHima,
  },
  {
    title: 'KOS ID',
    category: 'UI/UX Design',
    description:
      'Sebuah desain aplikasi mobile untuk pencarian kos yang menghubungkan pemilik utama kos dengan para pengguna yang menjadi calon penghuni kos.',
    image: kosId,
  },
  {
    title: 'Portal Registrasi MABA',
    category: 'UI/UX Design',
    description:
      'Sebuah desain halaman website yang digunakan sebagai pusat informasi kampus sekaligus portal registrasi bagi calon mahasiswa baru.',
    image: portalMaba,
  },
  {
    title: 'DSS RankDept',
    category: 'Web Development',
    description:
      'Berperan sebagai front-end developer yang bertugas untuk menyusun desain interface serta menerapkannya dalam bentuk website interaktif.',
    image: dssRankdept,
  },
]

export default function Projects() {
  return (
    <Fade id="projects" className="w-full px-8 pb-24 pt-40 text-white md:px-16 md:pb-32 md:pt-48">
      <Fade>
        <h2 className="mb-12 text-4xl font-bold" style={{ fontFamily: "'Sora', sans-serif" }}>
          Selected Projects
        </h2>
      </Fade>

      <div className="flex flex-col">
        {projects.map((project, index) => (
          <Fade key={project.title}>
            <div className="flex flex-col gap-6 py-8 md:flex-row md:items-start md:gap-10">
              {/* Thumbnail */}
              <img
                src={project.image}
                alt={project.title}
                className="h-[130px] w-full max-w-[220px] rounded-md object-cover shadow-lg"
              />

              {/* Detail project */}
              <div className="flex-1">
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <h3
                    className="text-lg font-semibold"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {project.title}
                  </h3>
                  <span
                    className="text-sm font-light text-white/70"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {project.category}
                  </span>
                </div>

                <p
                  className="mt-2 max-w-xl text-sm font-light leading-relaxed text-white/70"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {project.description}
                </p>
              </div>
            </div>

            {/* Garis pemisah — nggak muncul setelah project terakhir */}
            {index < projects.length - 1 && (
              <div className="h-px w-full bg-white/15" />
            )}
          </Fade>
        ))}
      </div>
    </Fade>
  )
}

