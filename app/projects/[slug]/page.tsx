import { projects } from "@/data/projects";
import Image from "next/image";
import { notFound } from "next/navigation";

type Params = Promise<{ slug: string }>;

export default async function Page({ params }: { params: Params }) {
  // Await the params
  const { slug } = await params;

  // Find the project based on slug
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound(); // 404 if not found
  }

  return (
    <main className="min-h-screen bg-black text-white px-4 md:px-16 py-20 lg:mx-30">
      {/* Title Section */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {project.title}
        </h1>
      </section>

      {/* Hero Image */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="relative w-full h-[400px] md:h-[520px] rounded-xl overflow-hidden">
          <Image
            src={project.images.primary}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Project Overview */}
      <section className="flex flex-col md:flex-row justify-between gap-10 mb-20">
        <div className="md:w-[650px]">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Overview</h2>
          <p className="text-white/75 sm:text-lg leading-relaxed">
            {project.overview}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Key Highlights</h2>
          <ul className="space-y-3 text-white/75">
            {project.bullets.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-white">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      

      {/* Secondary Image */}
      <section className="max-w-6xl mx-auto">
        <div className="relative w-full h-[360px] md:h-[480px] rounded-xl overflow-hidden">
          <Image
            src={project.images.hover}
            alt={`${project.title} preview`}
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mt-24">
        <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-white/10 text-sm uppercase tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </main>
  );

}
