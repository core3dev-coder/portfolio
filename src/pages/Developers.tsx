import { ArrowUpRight, Github } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const developers = [
    {
        name: "Kaustubh",
        role: "Full Stack Developer",
        bio: "Passionate about building scalable web applications and exploring new technologies.",
        portfolio: "https://kaustubh7-portfolio.netlify.app",
        initials: "K",
        github: "",
    },
    {
        name: "Victorraj",
        role: "Full Stack Web Developer",
        bio: "Focused on creating immersive digital experiences with modern web technologies.",
        portfolio: "https://myportfoliorepo.netlify.app",
        initials: "V",
        github: "https://github.com/Victorraj020",
    },
    {
        name: "Piyush Nirmal",
        role: "Backend Developer",
        bio: "Specializing in server-side logic, database architecture, and data-driven solutions.",
        portfolio: "https://piyushnirmalportfolio.netlify.app/",
        initials: "PN",
        github: "https://github.com/piyush-nirmal",
    },
];

const DevelopersPage = () => {
    return (
        <main className="space-y-0 text-white min-h-screen">
            <SEO
                title="Our Developers | Core3 Digital Team"
                description="Meet the talented developers behind Core3 Digital. Explore their portfolios and skills."
                canonical="/developers"
            />

            <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative">
                <div className="container px-6 space-y-20">
                    <AnimatedSection animation="fade-up" className="text-center space-y-6 max-w-4xl mx-auto">
                        <p className="eyebrow tracking-widest text-primary/80">The Minds Behind the Code</p>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight uppercase">
                            Meet Our <span className="text-gradient">Developers</span>
                        </h1>
                        <p className="section-subheading text-lg max-w-2xl mx-auto text-white/60">
                            A team of passionate individuals dedicated to crafting exceptional digital experiences.
                            We let our code speak for itself.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {developers.map((dev, index) => (
                            <AnimatedSection
                                key={dev.name}
                                animation="fade-up"
                                delay={index * 150}
                                className="group"
                            >
                                <div className="relative p-8 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-primary/50 hover:bg-white/10 hover:-translate-y-2">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                                        {/* Access Face / Avatar Placeholder */}
                                        <div className="relative w-32 h-32 rounded-full flex items-center justify-center bg-gradient-to-tr from-gray-800 to-black border border-white/20 shadow-xl group-hover:scale-110 transition-transform duration-500">
                                            <span className="text-4xl font-light tracking-widest text-gray-400 group-hover:text-white transition-colors">
                                                {dev.initials}
                                            </span>
                                            <div className="absolute inset-0 rounded-full border border-white/10 border-dashed animate-spin-slow opacity-30 group-hover:opacity-60" />
                                        </div>

                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-medium tracking-wide first-letter:text-3xl">
                                                {dev.name}
                                            </h3>
                                            <p className="text-sm tracking-widest uppercase text-primary/80 font-semibold">
                                                {dev.role}
                                            </p>
                                        </div>

                                        <p className="text-white/60 leading-relaxed text-sm">
                                            {dev.bio}
                                        </p>

                                        <div className="flex gap-3 w-full mt-4">
                                            <Button
                                                variant="outline"
                                                className="rounded-full flex-1 border-white/20 hover:border-primary hover:text-primary group/btn"
                                                asChild
                                            >
                                                <a href={dev.portfolio} target="_blank" rel="noopener noreferrer">
                                                    Portfolio
                                                    <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                                                </a>
                                            </Button>

                                            {dev.github && (
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    className="rounded-full border-white/20 hover:border-primary hover:text-primary group/git"
                                                    asChild
                                                >
                                                    <a href={dev.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                                                        <Github className="w-4 h-4 transition-transform group-hover/git:scale-110" />
                                                    </a>
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    <div className="text-center mt-20">
                        <Button variant="ghost" className="rounded-full px-8 text-white/50 hover:text-white hover:bg-white/5" asChild>
                            <Link to="/">Back to Home</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default DevelopersPage;
