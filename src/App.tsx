import { useState, useEffect } from "react";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { EXPERIENCE } from "./data/experience";
import { PROJECTS } from "./data/project";

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("about");
  const [loading, setLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  // const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ["about", "experience", "projects"];
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    const timer = setTimeout(() => setLoading(false), 1500);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // const toggleTheme = () => setIsDarkMode(!isDarkMode);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#050505] z-9999 flex flex-col items-center justify-center">
        <div className="relative overflow-hidden group cursor-none">
          <h2 className="text-[12vw] font-black tracking-tighter text-white animate-reveal-up">
            JACK<span className="text-[#D4C4A8]">.</span>
          </h2>
        </div>
        <div className="mt-4 flex items-center space-x-3 overflow-hidden">
          <div className="h-px w-12 bg-[#D4C4A8] animate-width-reveal"></div>
          <p className="text-[8px] font-bold tracking-[1em] text-white/40 uppercase">
            System Initializing
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-[#0a0a0a] relative min-h-screen text-slate-600 dark:text-[#94a3b8] font-sans selection:bg-[#D4C4A8] selection:text-black antialiased transition-colors duration-700`}
    >
      <div
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none flex items-center justify-center opacity-[0.03] dark:opacity-[0.05]"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <span className="text-[25vw] font-black tracking-tighter uppercase whitespace-nowrap text-transparent outline-text">
          Developer
        </span>
      </div>

      <div
        className="fixed inset-0 z-10 pointer-events-none transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(212, 196, 168, 0.12), transparent 80%)`,
        }}
      />

      {/* <button
        onClick={toggleTheme}
        className="fixed bottom-8 right-8 z-100 p-4 rounded-full bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-[#D4C4A8] transition-all hover:scale-110 active:scale-95"
        aria-label="Toggle Theme"
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button> */}

      <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 relative z-20">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 animate-fade-in-left">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-5xl uppercase">
                <a href="/">
                  Jack<span className="text-[#D4C4A8]">.</span>
                </a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-800 dark:text-slate-200 sm:text-xl italic font-serif opacity-80">
                Software Developer
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-slate-900 dark:text-slate-400 text-sm">
                I build accessible, inclusive products and digital experiences
                for the web
              </p>

              <nav
                className="nav hidden lg:block"
                aria-label="In-page jump links"
              >
                <ul className="mt-16 w-max">
                  {["about", "experience", "projects"].map((item) => (
                    <li key={item}>
                      <a
                        className="group flex items-center py-3"
                        href={`#${item}`}
                      >
                        <span
                          className={`mr-4 h-px transition-all group-hover:w-16 group-hover:bg-[#D4C4A8] ${activeSection === item ? "w-16 bg-[#D4C4A8]" : "w-8 bg-slate-300 dark:bg-slate-600"}`}
                        ></span>
                        <span
                          className={`text-xs font-bold uppercase tracking-widest transition-colors group-hover:text-[#D4C4A8] ${activeSection === item ? "text-[#D4C4A8]" : "text-slate-400 dark:text-slate-500"}`}
                        >
                          {item}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex flex-col gap-8">
              <ul
                className="ml-1 mt-8 flex items-center gap-5"
                aria-label="Social media"
              >
                {[
                  {
                    icon: <Github size={20} />,
                    link: "https://github.com/Jack-WebDev",
                  },
                  {
                    icon: <Linkedin size={20} />,
                    link: "https://www.linkedin.com/in/katlegomabaso/",
                  },
                ].map((social, i) => (
                  <li
                    key={i}
                    className="text-slate-400 dark:text-slate-400 hover:text-[#D4C4A8] dark:hover:text-[#D4C4A8] transition-colors"
                  >
                    <a href={social.link} target="_blank">
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </header>

          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 animate-reveal"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-white/80 dark:bg-[#0a0a0a]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-[#D4C4A8] lg:sr-only">
                  About
                </h2>
              </div>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  I'm a software developer with a specialty in building
                  intuitive user interfaces. I most enjoy building software in
                  the sweet spot where{" "}
                  <span className="text-slate-900 dark:text-[#D4C4A8] font-medium">
                    design
                  </span>{" "}
                  and{" "}
                  <span className="text-slate-900 dark:text-[#D4C4A8] font-medium">
                    engineering
                  </span>{" "}
                  meet, things that look good but are also built well under the
                  hood.
                </p>
                <p>
                  My main focus these days is building software for our clients
                  at{" "}
                  <span className="text-slate-900 dark:text-[#D4C4A8] font-medium">
                    New Dawn Technologies
                  </span>
                  . In this role, I collaborate closely with business analysts
                  and fellow developers to ensure high-performance standards are
                  part of our core architecture.
                </p>
                <p>
                  Outside of code, I’m interested in digital minimalism,
                  philosophy, and the arts.
                </p>
              </div>
            </section>

            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 animate-reveal-delayed"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-white/80 dark:bg-[#0a0a0a]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-[#D4C4A8] lg:sr-only">
                  Experience
                </h2>
              </div>
              <ol className="group/list space-y-12">
                {EXPERIENCE.map((item, i) => (
                  <li key={i}>
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-200/50 dark:lg:group-hover:bg-[#ffffff03] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"></div>
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500 sm:col-span-2">
                        {item.period}
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-900 dark:text-slate-200">
                          <div>
                            <div className="inline-flex items-baseline font-medium leading-tight text-slate-900 dark:text-slate-200 hover:text-[#D4C4A8] dark:hover:text-[#D4C4A8] group/link text-base">
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                {item.role} ·{" "}
                                <span className="inline-block">
                                  {item.company}{" "}
                                </span>
                              </span>
                            </div>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-slate-500 dark:text-slate-400">
                          {item.description}
                        </p>
                        <ul
                          className="mt-4 flex flex-wrap gap-2"
                          aria-label="Technologies used"
                        >
                          {item?.tech?.map((tech) => (
                            <li key={tech}>
                              <div className="flex items-center rounded-full bg-[#D4C4A8]/10 px-3 py-1 text-xs font-medium leading-5 text-[#D4C4A8] border border-[#D4C4A8]/20">
                                {tech}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section
              id="projects"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 animate-reveal-delayed-2"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-white/80 dark:bg-[#0a0a0a]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-[#D4C4A8] lg:sr-only">
                  Projects
                </h2>
              </div>
              <ul className="group/list space-y-12">
                {PROJECTS.map((project, i) => (
                  <li key={i}>
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-200/50 dark:lg:group-hover:bg-[#ffffff03] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"></div>
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-900 dark:text-slate-200 hover:text-[#D4C4A8] dark:hover:text-[#D4C4A8] group/link text-base"
                            href={project.link}
                            target="_blank"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              {project.name}{" "}
                              <ArrowUpRight className="inline-block ml-1 h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-slate-500 dark:text-slate-400">
                          {project.description}
                        </p>
                      </div>
                      <div className="rounded border border-slate-200 dark:border-white/10 overflow-hidden sm:order-1 sm:col-span-2 sm:translate-y-1 transition-all group-hover:border-[#D4C4A8]/30">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <footer className="max-w-md pb-16 text-xs text-slate-400 sm:pb-24">
              <p>
                Crafted by Jack. Built with{" "}
                <span className="text-slate-900 dark:text-[#D4C4A8] font-medium">
                  React
                </span>{" "}
                and{" "}
                <span className="text-slate-900 dark:text-[#D4C4A8] font-medium">
                  Tailwind CSS
                </span>
                .
              </p>
            </footer>
          </main>
        </div>
      </div>

      <style>{`
        @keyframes loadingBar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-loading-bar {
          animation: loadingBar 1.5s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-left {
          animation: fadeInRight 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes reveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-reveal { animation: reveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-reveal-delayed { animation: reveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s; opacity: 0; }
        .animate-reveal-delayed-2 { animation: reveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.4s; opacity: 0; }
        
        .outline-text {
          -webkit-text-stroke: 1px currentColor;
          font-family: serif;
        }
        html {
          scroll-behavior: smooth;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: #D4C4A844;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #D4C4A8;
        }
      `}</style>
    </div>
  );
}
