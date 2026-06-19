import React from "react";

const SectionHeader = ({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className = "",
}) => {
  const isCenter = align === "center";

  return (
    <div
      className={`${isCenter ? "text-center max-w-3xl mx-auto" : "max-w-2xl"} mb-14 ${className}`}
    >
      {eyebrow && (
        <div className={`section-eyebrow mb-6 ${isCenter ? "mx-auto" : ""}`}>
          <span className="section-eyebrow-dot" />
          <span className="text-sm font-semibold text-primary uppercase tracking-wide">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="section-title mb-5">
        {title}
        {highlight && <span className="block text-primary mt-1">{highlight}</span>}
      </h2>
      {description && <p className="section-subtitle">{description}</p>}
    </div>
  );
};

export default SectionHeader;
