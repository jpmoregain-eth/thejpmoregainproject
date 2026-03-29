import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  slug: string;
  image?: string;
  isComingSoon?: boolean;
}

export default function ProjectCard({
  title,
  description,
  tags,
  link,
  slug,
  image,
  isComingSoon = false,
}: ProjectCardProps) {
  if (isComingSoon) {
    return (
      <div className="glass-card coming-soon-card p-6 flex flex-col h-full">
        {/* Image placeholder */}
        <div
          className="aspect-[3/2] w-full rounded-lg mb-4 flex items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(50, 50, 60, 0.3) 0%, rgba(30, 30, 40, 0.3) 100%)",
          }}
          data-project={slug}
        >
          <span className="text-4xl text-[#E5E5E5]/30">?</span>
        </div>

        {/* Content */}
        <h3 className="font-mono text-lg font-semibold text-[#E5E5E5]/50 mb-2">
          {title}
        </h3>
        <p className="text-[#E5E5E5]/40 text-sm flex-1">{description}</p>
      </div>
    );
  }

  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card p-6 flex flex-col h-full group cursor-pointer"
    >
      {/* Project image */}
      <div
        className="aspect-[3/2] w-full rounded-lg mb-4 overflow-hidden"
        data-project={slug}
      >
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(212, 168, 67, 0.15) 0%, rgba(10, 10, 15, 0.8) 100%)",
            }}
          >
            <span className="font-mono text-[#D4A843]/30 text-sm">
              {slug.toUpperCase()}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <h3 className="font-mono text-lg font-semibold text-[#E5E5E5] mb-2 group-hover:text-[#D4A843] transition-colors">
        {title}
      </h3>
      <p className="text-[#E5E5E5]/70 text-sm flex-1 mb-4">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="tech-tag">
            {tag}
          </span>
        ))}
      </div>

      {/* Link button */}
      <div className="flex items-center text-[#D4A843] font-mono text-sm group-hover:translate-x-2 transition-transform">
        Explore
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </Link>
  );
}
