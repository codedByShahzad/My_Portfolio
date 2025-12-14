import { projects } from "@/data/projects";
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
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-6">{project.title}</h1>
      <p className="text-lg text-white/80 whitespace-pre-line">{project.subtitle}</p>
    </main>
  );
}
