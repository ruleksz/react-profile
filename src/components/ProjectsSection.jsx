import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    image: "/caraousel/1.png",
    title: "Landing Page | Twinscc",
    description:
      "Landing page responsif dengan animasi interaktif menggunakan JavaScript. Dirancang mobile-friendly dan cepat diakses pada semua perangkat.",
    tags: ["HTML", "TailwindCSS", "MySQL"],
    demoUrl: "https://ruleksz.github.io/landing-page-ads/",
    githubUrl: "https://github.com/ruleksz/landing-page-ads",
  },
  {
    id: 2,
    image: "/caraousel/5.png",
    title: "Company Profile | Warung Berkah",
    description:
      "Company Profile Website HTML, CSS, JavaScript | Web statis responsif untuk menampilkan informasi perusahaan secara profesional.",
    tags: ["HTML", "TailwindCSS", "MySQL"],
    demoUrl: "https://ruleksz.github.io/webInfras/",
    githubUrl: "https://github.com/ruleksz/webInfras",
  },
  {
    id: 3,
    image: "/caraousel/8.png",
    title: "Portfolio",
    description:
      "Portofolio responsif yang dilengkapi dengan efek animasi ringan, filter project, dan tampilan dark mode. Dikembangkan tanpa library eksternal, mengutamakan performa dan estetika.",
    tags: ["HTML", "TailwindCSS", "MySQL"],
    demoUrl: "https://ruleksz.github.io/portfolio-03/",
    githubUrl: "https://github.com/ruleksz/portfolio-03",
  },
  {
    id: 4,
    image: "/caraousel/10.png",
    title: "Sistem Akademik",
    description:
      "Aplikasi Sistem Akademik fullstack menggunakan Laravel sebagai backend dan Blade templating engine untuk frontend.Fitur utama meliputi CRUD data mahasiswa, relasi antara dosen dan mahasiswa, penjadwalan mata kuliah. Dengan menggunakan template AdminLTE.",
    tags: ["Laravel", "TailwindCSS", "MySQL"],
    demoUrl: "https://github.com/ruleksz/uas-laravel",
    githubUrl: "https://github.com/ruleksz/uas-laravel",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 text-justify">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ruleksz"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
