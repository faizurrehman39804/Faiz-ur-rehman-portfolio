import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";

export default function App() {
  return (
    <div className="text-foreground selection:bg-primary/30">
      <Navbar />
      <main className="pt-24 md:pt-32 pb-20">
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="flex-1 relative">
                
                {/* Massive Heading */}
                <div className="leading-[0.9] tracking-wide heading-font" style={{ fontSize: 'clamp(3rem, 18vw, 12rem)' }}>
                  <div className="overflow-hidden">
                    <span className="text-primary inline-block">SOFTWARE</span>
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-foreground inline-block ml-4 md:ml-8">DEVELOPER</span>
                  </div>
                </div>

                {/* Animated SVG Graphic */}
                <div className="hidden lg:block absolute right-0 top-0 -translate-y-1/4 pointer-events-none opacity-50 lg:opacity-100">
                  <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
                    <circle cx="200" cy="200" r="180" stroke="#00f541" strokeWidth="1" strokeDasharray="10 10">
                      <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="60s" repeatCount="indefinite"></animateTransform>
                    </circle>
                    <circle cx="200" cy="200" r="120" stroke="#00f541" strokeWidth="0.5" strokeDasharray="5 5">
                      <animateTransform attributeName="transform" type="rotate" from="360 200 200" to="0 200 200" dur="45s" repeatCount="indefinite"></animateTransform>
                    </circle>
                    <circle cx="200" cy="200" r="60" stroke="#00d4f5" strokeWidth="0.5">
                      <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="30s" repeatCount="indefinite"></animateTransform>
                    </circle>
                    <line x1="20" y1="200" x2="380" y2="200" stroke="#00f541" strokeWidth="0.3"></line>
                    <line x1="200" y1="20" x2="200" y2="380" stroke="#00f541" strokeWidth="0.3"></line>
                    <circle cx="200" cy="200" r="4" fill="#00f541"></circle>
                    <circle cx="320" cy="200" r="3" fill="#00d4f5"></circle>
                    <circle cx="80" cy="200" r="3" fill="#00d4f5"></circle>
                  </svg>
                </div>

                <div className="mt-8 md:mt-12 max-w-[544px] relative z-10">
                  <p className="text-muted text-base md:text-lg leading-relaxed mb-8">
                    Hi! I'm <span className="text-foreground font-medium">Faiz Ur Rehman</span>. I'm a software developer with about a year of experience shipping MERN and Next.js products, and AI-powered development features end to end.
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4">
                    <a href="mailto:faiz@example.com" className="inline-flex items-center gap-2 bg-[#00f541] text-[#000000] px-6 py-3 rounded-md font-semibold text-sm tracking-widest uppercase hover:opacity-90 transition-opacity">
                      LET'S TALK
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                    </a>
                    <div className="inline-flex items-center gap-2 text-sm ml-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                      </span>
                      <span className="text-muted text-xs md:text-sm">Available for full-time opportunities</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats / Info */}
              <div className="flex lg:flex-col gap-8 md:gap-10 lg:gap-14 lg:items-end mt-12 lg:mt-0 relative z-10">
                <div className="text-left lg:text-right">
                  <h5 className="heading-font text-3xl md:text-4xl text-primary leading-none">1+</h5>
                  <p className="text-sm text-muted mt-2">Years of Experience</p>
                </div>
                <div className="text-left lg:text-right">
                  <h5 className="heading-font text-3xl md:text-4xl text-primary leading-none">13+</h5>
                  <p className="text-sm text-muted mt-2">GitHub Projects</p>
                </div>
                <div className="text-left lg:text-right">
                  <h5 className="heading-font text-3xl md:text-4xl text-primary leading-none">22</h5>
                  <p className="text-sm text-muted mt-2">Years Old</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id="about" className="py-20 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="mb-20 max-w-[800px]">
              <h2 className="heading-font text-2xl md:text-4xl lg:text-5xl text-foreground leading-snug">
                I build reliable full-stack software with a focus on clear UX, solid architecture, and shipping features that actually get used.
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">This is me.</p>
                <h3 className="heading-font text-3xl md:text-5xl text-foreground mb-6">Hi, I'm Faiz Ur Rehman.</h3>
                <div className="space-y-5 text-muted leading-relaxed">
                  <p>I'm based in Pakistan and currently in my 2nd Year of education. I work as a junior full-stack developer and care about end-to-end delivery: APIs, databases, frontend polish, and modern architecture.</p>
                  <p>Day to day I use Next.js, React, Node.js, Express, MongoDB, and Tailwind CSS to build web experiences, along with AI-assisted tools like Claude AI and Antigravity to accelerate workflows across the stack.</p>
                </div>
              </div>
              <div className="relative w-full aspect-[3/4] min-h-[280px] overflow-hidden rounded-2xl border border-border bg-[#1a1a1a]">
                {/* Fallback pattern since we don't have an exact portrait image yet */}
                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
                <div className="pointer-events-none absolute inset-0 z-10 opacity-[0.04]">
                  <div className="h-full w-full grid-overlay"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="heading-font text-6xl text-muted/20">FAIZ</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <div className="max-w-6xl mx-auto px-4 md:px-8 mt-20 space-y-32">
          <Skills />
          <Experience />
          <Projects />
          <Blog />
        </div>
      </main>
    </div>
  );
}
