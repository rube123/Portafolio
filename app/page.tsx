import {
  Github,
  Mail,
  ExternalLink,
  Download,
  Briefcase,
  GraduationCap,
  User,
} from "lucide-react";

export default function Portfolio() {
  const profile = {
    name: "Rubén Eliezer Rivera López",
    title: "Ingeniero en Sistemas Computacionales · Industria 4.0",
    tagline:
      "Construyo experiencias digitales que sí sirven: web, móvil y backend con despliegue real.",
    availability: "Disponible para prácticas / residencias",
    location: "Celaya, Gto.",
    email: "benrublu34@gmail.com",
    github: "https://github.com/rube123",
    avatarUrl:
      "https://avatars.githubusercontent.com/u/160934860?v=4",
  };

  const stats = [
    { label: "Años exp.", value: "2+" },
    { label: "Proyectos", value: "4+" },
    { label: "Deploys", value: "3+" },
    { label: "Enfoque", value: "Full‑stack" },
  ];

  const projects = [
    {
      title: "Sistema Integral Web",
      description:
        "Sistema web para gestión estructurada de datos con control de versiones y buenas prácticas.",
      repo: "https://github.com/rube123/Sistema-Integral-2",
      demo: "http://topicosweb.celaya.tecnm.mx:4121/",
      tags: ["Web", "Git/GitHub"],
    },
    {
      title: "API REST – Fraccionamiento",
      description:
        "API REST en Rust con Supabase y Render. Implementación completa de operaciones CRUD.",
      repo: "https://github.com/rube123/API_Rust_Fraccionamiento",
      demo: "https://apifracc-1.onrender.com/",
      tags: ["Rust", "Supabase", "Render", "CRUD"],
    },
    {
      title: "ERP Web – Fraccionamiento",
      description:
        "Aplicación web tipo ERP desarrollada con Next.js y enfoque en escalabilidad y organización.",
      repo: "https://github.com/rube123/ERPfraccionamientoWeb",
      tags: ["Next.js", "Web"],
    },
    {
      title: "App Móvil – Fraccionamiento",
      description:
        "Aplicación móvil multiplataforma en Flutter integrada con Firebase/Supabase y API REST.",
      repo: "https://github.com/rube123/App-Movil-Fraccionamiento",
      tags: ["Flutter", "Firebase", "Supabase"],
    },
  ];

  const techPills = [
    "Rust",
    "Next.js",
    "Node.js",
    "JavaScript",
    "Dart",
    "Flutter",
    "PostgreSQL",
    "Supabase",
    "Firebase",
    "SQL Server",
    "MongoDB",
    "Git/GitHub",
    "Power BI",
    "ESP32",
  ];

  const skillBars = [
    { label: "Backend (APIs REST)", value: 85 },
    { label: "Frontend (Web)", value: 78 },
    { label: "Mobile (Flutter)", value: 82 },
    { label: "Bases de datos", value: 88 },
  ];

  const workHistory = [
    {
      role: "Proyectos académicos / personales",
      org: "TecNM Celaya",
      place: "Celaya, Gto.",
      range: "2021 – Actual",
      bullets: [
        "Desarrollo de sistemas web y móviles con repositorios públicos.",
        "Diseño e implementación de bases de datos relacionales y NoSQL.",
        "Despliegue de servicios (Render) e integración con Supabase/Firebase.",
      ],
    },
    {
      role: "Backend + DB (API REST)",
      org: "Proyecto Fraccionamiento",
      place: "Remoto",
      range: "2024 – 2025",
      bullets: [
        "API REST en Rust con operaciones CRUD y estructura de servicios.",
        "Integración con Postgres en Supabase y endpoints listos para consumo.",
        "Deploy público para pruebas y consumo desde web/móvil.",
      ],
    },
    {
      role: "Frontend (ERP Web)",
      org: "Proyecto Fraccionamiento",
      place: "Remoto",
      range: "2024 – 2025",
      bullets: [
        "UI de dashboards y páginas administrativas con Next.js.",
        "Enfoque en organización del proyecto, componentes reutilizables y routing.",
        "Conexión con servicios backend y mejora de UX con estados de carga/errores.",
      ],
    },
  ];

  const education = [
    {
      title: "Ingeniería en Sistemas Computacionales (Industria 4.0)",
      org: "Instituto Tecnológico de Celaya",
      meta: "2021 – Actual",
      icon: GraduationCap,
    },
    {
      title: "Inglés (TOEFL)",
      org: "Certificación previa",
      meta: "Intermedio–Avanzado",
      icon: User,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white text-slate-900">
      <Nav name={profile.name} />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Hero */}
        <section
          id="about"
          className="pt-16 sm:pt-20 pb-10 sm:pb-14 grid lg:grid-cols-2 gap-10 items-center"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              {profile.availability}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Construyendo <span className="text-blue-600">soluciones</span>
              <br className="hidden sm:block" />
              digitales que <span className="text-slate-900">importan</span>.
            </h1>

            <p className="text-lg text-slate-600 max-w-xl">
              {profile.title}. {profile.tagline}
            </p>

            <div className="flex flex-wrap gap-3">

              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-slate-700 shadow-sm hover:shadow hover:bg-slate-50 transition"
              >
                Ver Portafolio <ExternalLink size={18} />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-sm text-slate-500">
              <span>{profile.location}</span>
              <span className="h-1 w-1 rounded-full bg-slate-300" />
              <a
                href={profile.github}
                target="_blank"
                className="inline-flex items-center gap-2 hover:text-slate-700"
              >
                <Github size={16} /> github.com/rube123
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 sm:-inset-6 rounded-[2.5rem] bg-gradient-to-tr from-blue-50 via-white to-slate-50" />
            <div className="relative rounded-[2.5rem] border border-slate-200 bg-white shadow-sm p-6 sm:p-8">
              <div className="flex items-center gap-5">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-full bg-blue-100" />
                  <img
                    src={profile.avatarUrl}
                    alt="Foto de perfil"
                    className="relative h-28 w-28 rounded-full object-cover ring-4 ring-white"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-semibold">{profile.name}</p>
                  <p className="text-slate-600">Full‑stack (Web · Mobile · Backend)</p>
                  <div className="pt-2 flex flex-wrap gap-2">
                    <Chip>Rust</Chip>
                    <Chip>Next.js</Chip>
                    <Chip>Flutter</Chip>
                    <Chip>PostgreSQL</Chip>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {stats.map((s) => (
                  <Stat key={s.label} label={s.label} value={s.value} />
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/cv.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                  title="Descargar CV (pon tu PDF en /public/cv.pdf)"
                >
                  <Download size={16} /> Descargar CV
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800"
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About card */}
        <section className="pb-10" aria-label="Resumen">
          <div className="rounded-[2.25rem] border border-slate-200 bg-white shadow-sm p-6 sm:p-8 grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold">Sobre mí</h2>
              <p className="text-slate-600 leading-relaxed">
                Estudiante de Ingeniería en Sistemas (Industria 4.0) con enfoque en
                desarrollo de software, bases de datos y despliegue en la nube.
                Me gusta entregar cosas que funcionen: APIs consumibles, UIs claras
                y apps móviles integradas.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <MiniStat value="CRUD" label="APIs REST" />
              <MiniStat value="DB" label="Relacional/NoSQL" />
              <MiniStat value="Deploy" label="Render/Supabase" />
              <MiniStat value="Apps" label="Web/Móvil" />
            </div>
          </div>
        </section>

        {/* Core Competencies */}
        <section id="skills" className="py-10 space-y-6">
          <SectionTitle title="Core Competencies" />

          <div className="grid lg:grid-cols-2 gap-6">
            <Card title="Technical Stack" icon={User}>
              <div className="flex flex-wrap gap-2">
                {techPills.map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>
            </Card>

            <Card title="Fortalezas" icon={User}>
              <div className="space-y-4">
                {skillBars.map((s) => (
                  <Bar key={s.label} label={s.label} value={s.value} />
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Projects / Work History style */}
        <section id="projects" className="py-10 space-y-6">
          <SectionTitle title="Portafolio" />
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </section>

        {/* Work History (timeline look) */}
        <section id="experience" className="py-10 space-y-6">
          <SectionTitle title="Work History" />
          <div className="grid gap-6">
            {workHistory.map((w) => (
              <TimelineItem key={w.role} item={w} />
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="py-10 space-y-6">
          <SectionTitle title="Education" />
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((e) => (
              <EduCard key={e.title} {...e} />
            ))}
          </div>
        </section>
      </div>

      {/* Footer CTA */}
      <footer className="mt-16 bg-slate-900 text-slate-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-14 text-center space-y-4">
          <h3 className="text-3xl sm:text-4xl font-bold">Hagamos equipo</h3>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Disponible para prácticas, residencias o proyectos. Si quieres que te
            mande mi CV en PDF o ver un demo, escríbeme.
          </p>
          <a
            className="inline-flex items-center justify-center text-lg font-semibold text-blue-300 hover:text-blue-200"
            href={`mailto:${profile.email}`}
          >
            {profile.email}
          </a>
          <div className="flex items-center justify-center gap-3 pt-2">
            <CircleIconLink href={profile.github} label="GitHub">
              <Github size={18} />
            </CircleIconLink>
            <CircleIconLink href={`mailto:${profile.email}`} label="Correo">
              <Mail size={18} />
            </CircleIconLink>
          </div>
          <p className="text-xs text-slate-500 pt-6">© {new Date().getFullYear()} {profile.name}</p>
        </div>
      </footer>
    </main>
  );
}

function Nav({ name }: { name: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#about" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
            &lt;/&gt;
          </div>
          <span className="font-semibold text-slate-900 truncate max-w-[220px] sm:max-w-none">
            {name}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a className="hover:text-slate-900" href="#about">
            About
          </a>
          <a className="hover:text-slate-900" href="#skills">
            Skills
          </a>
          <a className="hover:text-slate-900" href="#experience">
            Experience
          </a>
          <a className="hover:text-slate-900" href="#education">
            Education
          </a>
        </nav>

        <a
          href="/cv.pdf"
          download
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm text-white shadow-sm hover:bg-blue-700"
          title="Download CV (pon tu PDF en /public/cv.pdf)"
        >
          <Download size={16} /> Download CV
        </a>
      </div>
    </header>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-6 w-1.5 rounded-full bg-blue-600" />
      <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">{title}</h2>
    </div>
  );
}

function Card({ title, icon: Icon, children }: any) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white shadow-sm p-6 sm:p-7">
      <div className="flex items-center gap-2 text-slate-900">
        <span className="h-9 w-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
          <Icon size={18} />
        </span>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function ProjectCard({ title, description, repo, demo, tags }: any) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white shadow-sm p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="mt-2 text-slate-600">{description}</p>
        </div>
        <span className="h-10 w-10 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
          <Briefcase size={18} />
        </span>
      </div>

      {tags?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t: string) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-3">
        {repo && (
          <a
            href={repo}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
          >
            <ExternalLink size={16} /> Repo
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
          >
            <ExternalLink size={16} /> Demo
          </a>
        )}
      </div>
    </div>
  );
}

function TimelineItem({ item }: any) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white shadow-sm p-6 sm:p-7">
      <div className="flex items-start gap-4">
        <div className="mt-1 h-10 w-10 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
          <Briefcase size={18} />
        </div>
        <div className="w-full">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">{item.role}</h3>
              <p className="text-sm text-slate-600">
                {item.org} · {item.place}
              </p>
            </div>
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
              {item.range}
            </span>
          </div>
          <ul className="mt-4 space-y-2 text-slate-600 list-disc pl-5">
            {item.bullets.map((b: string) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function EduCard({ title, org, meta, icon: Icon }: any) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white shadow-sm p-6 sm:p-7">
      <div className="flex items-start gap-4">
        <div className="mt-1 h-10 w-10 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
          <Icon size={18} />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="text-sm text-slate-600">{org}</p>
          <p className="text-sm text-slate-500">{meta}</p>
        </div>
      </div>
    </div>
  );
}

function Bar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-700">{label}</span>
        <span className="text-slate-500">{value}%</span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-slate-100 overflow-hidden">
        <div className="h-full rounded-full bg-blue-600" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-center">
      <div className="text-xl font-bold text-slate-900">{value}</div>
      <div className="text-xs text-slate-500">{label}</div>
    </div>
  );
}

function MiniStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-center">
      <div className="text-2xl font-bold text-blue-700">{value}</div>
      <div className="mt-1 text-xs text-slate-500">{label}</div>
    </div>
  );
}

function Pill({ children }: any) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
      {children}
    </span>
  );
}

function Chip({ children }: any) {
  return (
    <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
      {children}
    </span>
  );
}

function CircleIconLink({ href, label, children }: any) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href?.startsWith("http") ? "_blank" : undefined}
      className="h-11 w-11 rounded-full bg-slate-800 hover:bg-slate-700 inline-flex items-center justify-center"
    >
      {children}
    </a>
  );
}
