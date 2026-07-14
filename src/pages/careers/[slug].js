import React, { useState } from "react";
import Layout from "@/components/rd/Layout";
import Seo from "@/components/seo";
import Link from "next/link";
import {
  BriefcaseIcon,
  MapPinIcon,
  ClockIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
  CheckCircleIcon,
  ArrowLeftIcon,
  DocumentArrowUpIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { getJobBySlug, getRelatedJobs } from "@/data/jobPositions";

export async function getServerSideProps({ params }) {
  const jobData = getJobBySlug(params.slug);

  if (!jobData) {
    return { notFound: true };
  }

  return {
    props: {
      job: jobData,
      relatedJobs: getRelatedJobs(params.slug),
    },
  };
}

const hiringSteps = [
  { step: "01", title: "Apply", desc: "Submit your resume and tell us why you're a fit." },
  { step: "02", title: "Review", desc: "Our team reviews applications within 5 business days." },
  { step: "03", title: "Interview", desc: "Technical and culture conversations with the team." },
  { step: "04", title: "Offer", desc: "Welcome aboard — let's build something great." },
];

function DetailSection({ title, items, icon: Icon }) {
  if (!items?.length) return null;

  return (
    <div className="card-surface p-7 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-ink">{title}</h2>
      </div>
      <ul className="space-y-3.5">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <CheckCircleIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-slate-600 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function JobDetailPage({ job, relatedJobs }) {
  const [isApplying, setIsApplying] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedIn: "",
    portfolio: "",
    coverLetter: "",
  });
  const [resume, setResume] = useState(null);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const metaItems = [
    { icon: BriefcaseIcon, label: job.department },
    { icon: MapPinIcon, label: job.location },
    { icon: ClockIcon, label: job.type },
    job.experience && { icon: AcademicCapIcon, label: job.experience },
    job.salary && { icon: CurrencyDollarIcon, label: job.salary },
  ].filter(Boolean);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      setErrors({ ...errors, resume: "File size must be less than 5MB" });
      return;
    }
    if (
      !["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file.type)
    ) {
      setErrors({ ...errors, resume: "Only PDF and DOC files are allowed" });
      return;
    }
    setResume(file);
    setErrors({ ...errors, resume: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!resume) newErrors.resume = "Resume is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");
    const formDataToSend = new FormData();
    formDataToSend.append(
      "data",
      JSON.stringify({ ...formData, jobPosition: job.title })
    );
    if (resume) formDataToSend.append("files.resume", resume);

    try {
      const response = await fetch("/api/apply", { method: "POST", body: formDataToSend });
      if (response.ok) {
        setStatus("success");
        setFormData({ fullName: "", email: "", phone: "", linkedIn: "", portfolio: "", coverLetter: "" });
        setResume(null);
        setTimeout(() => setIsApplying(false), 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
      errors[field] ? "border-red-400" : "border-slate-200"
    }`;

  return (
    <Layout>
      <Seo
        title={`${job.title} | Careers at RoundDigital`}
        description={job.description}
        keywords={`${job.title}, ${job.department}, jobs, careers, RoundDigital`}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ink via-[#22232e] to-ink text-white">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

        <div className="section-container relative z-10 py-8 md:py-10">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-8 transition-colors text-sm font-semibold"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Careers
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2">
              <div className="section-eyebrow !bg-white/10 !border-white/10 mb-6">
                <span className="section-eyebrow-dot" />
                <span className="text-sm font-medium text-white/90">{job.department}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">{job.title}</h1>

              {job.tagline && (
                <p className="text-lg md:text-xl text-primary-light font-medium mb-6">{job.tagline}</p>
              )}

              <p className="text-slate-300 leading-relaxed max-w-2xl mb-8">{job.description}</p>

              {job.skills?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/15 text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="card-surface !bg-white/95 backdrop-blur p-6 md:p-7">
              <h3 className="text-lg font-bold text-ink mb-5">Role Snapshot</h3>
              <div className="space-y-4">
                {metaItems.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">{label}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setIsApplying(true)}
                className="btn-primary w-full mt-6"
              >
                Apply Now
              </button>
              <p className="text-xs text-slate-500 text-center mt-3">Typical response within 5 business days</p>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-14 md:py-16 bg-slate-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <DetailSection title="What You'll Do" items={job.responsibilities} icon={BriefcaseIcon} />
              <DetailSection title="What We're Looking For" items={job.requirements} icon={ShieldCheckIcon} />
              <DetailSection title="What You Get" items={job.benefits} icon={SparklesIcon} />
            </div>

            <div className="space-y-6">
              <div className="card-surface p-7 sticky top-24">
                <h3 className="text-lg font-bold text-ink mb-5 flex items-center gap-2">
                  <UserGroupIcon className="w-5 h-5 text-primary" />
                  Hiring Process
                </h3>
                <div className="space-y-5">
                  {hiringSteps.map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-md h-fit">
                        {item.step}
                      </span>
                      <div>
                        <p className="font-semibold text-ink text-sm">{item.title}</p>
                        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button onClick={() => setIsApplying(true)} className="btn-primary w-full mt-6">
                  Apply for this Role
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related roles */}
      {relatedJobs.length > 0 && (
        <section className="py-14 bg-white border-t border-slate-100">
          <div className="section-container">
            <h2 className="text-2xl font-bold text-ink mb-6">Other Open Roles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedJobs.map((related) => (
                <Link
                  key={related.slug}
                  href={`/careers/${related.slug}`}
                  className="group card-surface p-6 hover:-translate-y-1 hover:border-primary/20"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
                    {related.department}
                  </p>
                  <h3 className="text-lg font-bold text-ink group-hover:text-primary transition-colors mb-2">
                    {related.title}
                  </h3>
                  <p className="text-sm text-slate-500 line-clamp-2 mb-4">{related.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    View role <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Application modal */}
      {isApplying && (
        <div
          className="fixed inset-0 bg-ink/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => status !== "submitting" && setIsApplying(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full my-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-7 md:p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-1">Apply</p>
                  <h2 className="text-2xl font-bold text-ink">{job.title}</h2>
                </div>
                <button
                  onClick={() => setIsApplying(false)}
                  className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-ink transition-colors"
                  aria-label="Close"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>

              {status === "success" ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircleIcon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-2">Application Submitted!</h3>
                  <p className="text-slate-600 text-sm">
                    Thanks for applying. We&apos;ll review your application and get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-2">Full Name *</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className={inputClass("fullName")} placeholder="John Doe" />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-ink mb-2">Email *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass("email")} placeholder="john@example.com" />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink mb-2">Phone *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass("phone")} placeholder="+1 905-407-5009" />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-ink mb-2">LinkedIn</label>
                      <input type="url" name="linkedIn" value={formData.linkedIn} onChange={handleChange} className={inputClass("linkedIn")} placeholder="https://linkedin.com/in/you" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink mb-2">Portfolio</label>
                      <input type="url" name="portfolio" value={formData.portfolio} onChange={handleChange} className={inputClass("portfolio")} placeholder="https://yoursite.com" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-ink mb-2">Resume *</label>
                    <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" id="resume-upload" />
                    <label
                      htmlFor="resume-upload"
                      className={`flex items-center justify-center gap-2 w-full px-4 py-4 border-2 rounded-xl cursor-pointer transition-colors ${
                        errors.resume ? "border-red-400" : "border-dashed border-slate-200 hover:border-primary"
                      }`}
                    >
                      <DocumentArrowUpIcon className="w-5 h-5 text-slate-400" />
                      <span className="text-sm text-slate-600">
                        {resume ? resume.name : "Upload PDF or DOC (max 5MB)"}
                      </span>
                    </label>
                    {errors.resume && <p className="text-red-500 text-xs mt-1">{errors.resume}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-ink mb-2">Cover Letter</label>
                    <textarea
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      rows="4"
                      className={`${inputClass("coverLetter")} resize-none`}
                      placeholder="Why are you excited about this role?"
                    />
                  </div>

                  {status === "error" && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <button type="submit" disabled={status === "submitting"} className="btn-primary w-full disabled:opacity-50">
                    {status === "submitting" ? "Submitting..." : "Submit Application"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
