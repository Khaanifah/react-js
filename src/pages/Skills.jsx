import figmaLogo from '../assets/figma.png'
import canvaLogo from '../assets/canva.png'
import vscodeLogo from '../assets/vscode.png'
import githubLogo from '../assets/github.png'

const skillGroups = [
  {
    title: 'UI/UX Design',
    description:
      'Exploring the balance between visual design and usability to create clear, intuitive, and engaging digital experiences.',
    tools: [{ name: 'Figma', image: figmaLogo }],
  },
  {
    title: 'Graphic Design',
    description:
      'Transforming ideas into visual compositions through color, typography, imagery, and thoughtful layouts.',
    tools: [{ name: 'Canva', image: canvaLogo }],
  },
  {
    title: 'Web Development',
    description:
      'Bringing visual concepts to life through web development, combining creativity and technology to build responsive and functional web experiences.',
    tools: [
      { name: 'VS Code', image: vscodeLogo },
      { name: 'GitHub', image: githubLogo },
    ],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full px-8 pb-24 pt-40 text-white md:px-16 md:pb-32 md:pt-48"
    >
      <h2
        className="text-5xl font-bold"
        style={{ fontFamily: "'Sora', sans-serif" }}
      >
        Skills
      </h2>

      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3
              className="mb-3 text-xl font-bold tracking-wider"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {group.title}
            </h3>

            <p
              className="text-justify text-[15px] font-light leading-relaxed text-white/80"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {group.description}
            </p>

            <div className="mt-10 flex flex-col gap-4">
              {group.tools.map(({ name, image }) => (
                <div key={name} className="flex items-center gap-3">
                  <img src={image} alt={name} className="h-6 w-6 object-contain" />
                  <span
                    className="text-lg font-semibold tracking-wide"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
