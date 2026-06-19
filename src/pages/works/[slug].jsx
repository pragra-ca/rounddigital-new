import Layout from "@/components/layout";
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
import Seo from "@/components/seo";

const WorkDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const stored = localStorage.getItem("selectedWork");
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.slug === slug) {
        setProject(parsed);
      }
    }
  }, [slug]);

  if (!project) return <p className="text-center py-16">Loading project...</p>;

  return (
    <Layout>
      <Seo
        title={`${project?.title} | Project by RoundDigital`}
        description={
          project?.description ||
          "Explore how RoundDigital delivered tailored digital solutions to help clients achieve measurable growth through tech, design, and strategy."
        }
        keywords={`RoundDigital, ${project?.title}, project case study, web development, mobile app, MVP development, branding, digital marketing, startup tech solutions`}
      />

      <div className="max-w-4xl mx-auto py-16 space-y-10 px-5 mt-12">
        {/* Title */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <p className="text-lg text-gray-600">{project.subtitle}</p>
          <div className="text-sm text-gray-500 space-x-4">
            <span>Client: {project.client}</span>
            <span>Year: {project.year}</span>
            <span>Service: {project.service}</span>
          </div>
        </div>

        {/* Case Study Image */}
        <div className="w-full h-[440px] relative rounded-xl overflow-hidden shadow-md">
          <Image
            src={project.caseStudyImage}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Description */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700 leading-relaxed">{project.description}</p>
        </div>

        {/* Technology Stack */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Technology Stack</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {project.technologyStack.map((tech, idx) => (
              <li key={idx}>{tech}</li>
            ))}
          </ul>
        </div>

        {/* Key Features */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {project.keyFeatures.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Impact Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Results & Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(project.impact).map(([key, value]) => (
              <div
                key={key}
                className="bg-gray-100 p-4 rounded-md shadow text-center"
              >
                <p className="text-2xl font-bold">{value}</p>
                <p className="text-sm text-gray-600 capitalize">
                  {key.replace(/([A-Z])/g, " $1")}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-red-50 p-6 rounded-md">
          <blockquote className="italic text-lg text-red-800 mb-2">
            “{project.testimonial.quote}”
          </blockquote>
          <p className="font-semibold text-red-700">
            {project.testimonial.name}
          </p>
          <p className="text-sm text-gray-600">{project.testimonial.role}</p>
        </div>
      </div>
    </Layout>
  );
};

export default WorkDetail;
