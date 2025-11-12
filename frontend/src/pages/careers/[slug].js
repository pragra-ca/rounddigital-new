import React, { useState } from 'react';
import Layout from '@/components/layout';
import Seo from '@/components/seo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
  BriefcaseIcon, 
  MapPinIcon, 
  ClockIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
  CheckCircleIcon,
  ArrowLeftIcon,
  DocumentArrowUpIcon
} from '@heroicons/react/24/outline';

export async function getServerSideProps({ params }) {
  const { slug } = params;
  
  // Fallback job data
  const fallbackJob = {
    attributes: {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / Mississauga',
      type: 'Full-time',
      description: 'Build scalable web applications using React, Node.js, and cloud technologies.',
      experience: '5+ years',
      salary: '$100,000 - $140,000',
      responsibilities: [
        'Design and develop scalable web applications',
        'Lead technical discussions and architectural decisions',
        'Mentor junior developers',
        'Collaborate with cross-functional teams',
        'Write clean, maintainable code with proper documentation',
      ],
      requirements: [
        'Strong proficiency in React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS/Azure/GCP)',
        'Knowledge of microservices architecture',
        'Excellent problem-solving skills',
        'Strong communication skills',
      ],
      benefits: [
        'Competitive salary and equity',
        'Health and dental insurance',
        'Remote work flexibility',
        'Professional development budget',
        'Flexible vacation policy',
      ],
    }
  };

  try {
    const res = await fetch(`http://localhost:1337/api/job-positions?filters[slug][$eq]=${slug}&populate=*`);
    const data = await res.json();
    
    if (data.data && data.data.length > 0) {
      return {
        props: {
          job: data.data[0],
        },
      };
    }
  } catch (error) {
    console.error('Error fetching job:', error);
  }

  return {
    props: {
      job: fallbackJob,
    },
  };
}

export default function JobDetailPage({ job }) {
  const router = useRouter();
  const [isApplying, setIsApplying] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedIn: '',
    portfolio: '',
    coverLetter: '',
  });
  const [resume, setResume] = useState(null);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const jobData = job.attributes;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors({ ...errors, resume: 'File size must be less than 5MB' });
        return;
      }
      if (!['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
        setErrors({ ...errors, resume: 'Only PDF and DOC files are allowed' });
        return;
      }
      setResume(file);
      setErrors({ ...errors, resume: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!resume) newErrors.resume = 'Resume is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');

    const formDataToSend = new FormData();
    formDataToSend.append('data', JSON.stringify({
      ...formData,
      jobPosition: jobData.title,
    }));
    if (resume) {
      formDataToSend.append('files.resume', resume);
    }

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          linkedIn: '',
          portfolio: '',
          coverLetter: '',
        });
        setResume(null);
        setTimeout(() => setIsApplying(false), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <Layout>
      <Seo
        title={`${jobData.title} | Careers at RoundDigital`}
        description={jobData.description}
        keywords={`${jobData.title}, ${jobData.department}, jobs, careers`}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-white pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/careers" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#e14242] mb-6 transition-colors">
            <ArrowLeftIcon className="w-5 h-5" />
            <span className="font-semibold">Back to Careers</span>
          </Link>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-[#191a23] mb-4">{jobData.title}</h1>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <BriefcaseIcon className="w-5 h-5" />
                    <span>{jobData.department}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPinIcon className="w-5 h-5" />
                    <span>{jobData.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <ClockIcon className="w-5 h-5" />
                    <span>{jobData.type}</span>
                  </div>
                  {jobData.experience && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <AcademicCapIcon className="w-5 h-5" />
                      <span>{jobData.experience}</span>
                    </div>
                  )}
                  {jobData.salary && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <CurrencyDollarIcon className="w-5 h-5" />
                      <span>{jobData.salary}</span>
                    </div>
                  )}
                </div>

                <p className="text-lg text-gray-700">{jobData.description}</p>
              </div>

              <button
                onClick={() => setIsApplying(true)}
                className="px-8 py-4 bg-[#e14242] text-white font-semibold rounded-lg hover:bg-[#c93838] transition-all duration-300 shadow-lg whitespace-nowrap"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Responsibilities */}
              {jobData.responsibilities && jobData.responsibilities.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-[#191a23] mb-4">Responsibilities</h2>
                  <ul className="space-y-3">
                    {jobData.responsibilities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircleIcon className="w-6 h-6 text-[#e14242] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Requirements */}
              {jobData.requirements && jobData.requirements.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-[#191a23] mb-4">Requirements</h2>
                  <ul className="space-y-3">
                    {jobData.requirements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircleIcon className="w-6 h-6 text-[#e14242] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Benefits */}
              {jobData.benefits && jobData.benefits.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-[#191a23] mb-4">Benefits</h2>
                  <ul className="space-y-3">
                    {jobData.benefits.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircleIcon className="w-6 h-6 text-[#e14242] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 sticky top-24">
                <h3 className="text-xl font-bold text-[#191a23] mb-6">Job Overview</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">Department</p>
                    <p className="text-gray-900">{jobData.department}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">Location</p>
                    <p className="text-gray-900">{jobData.location}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">Employment Type</p>
                    <p className="text-gray-900">{jobData.type}</p>
                  </div>
                  {jobData.experience && (
                    <div>
                      <p className="text-sm font-semibold text-gray-500 mb-1">Experience</p>
                      <p className="text-gray-900">{jobData.experience}</p>
                    </div>
                  )}
                  {jobData.salary && (
                    <div>
                      <p className="text-sm font-semibold text-gray-500 mb-1">Salary Range</p>
                      <p className="text-gray-900">{jobData.salary}</p>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setIsApplying(true)}
                  className="w-full mt-6 px-6 py-3 bg-[#e14242] text-white font-semibold rounded-lg hover:bg-[#c93838] transition-all duration-300"
                >
                  Apply for this Position
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {isApplying && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full my-8 relative">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-[#191a23]">Apply for {jobData.title}</h2>
                <button
                  onClick={() => setIsApplying(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircleIcon className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#191a23] mb-2">Application Submitted!</h3>
                  <p className="text-gray-600">Thank you for applying. We'll review your application and get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-[#191a23] mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-[#e14242]`}
                      placeholder="John Doe"
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#191a23] mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-[#e14242]`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#191a23] mb-2">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-[#e14242]`}
                        placeholder="+1 (234) 567-8900"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* LinkedIn & Portfolio */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#191a23] mb-2">LinkedIn Profile</label>
                      <input
                        type="url"
                        name="linkedIn"
                        value={formData.linkedIn}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#e14242]"
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#191a23] mb-2">Portfolio/Website</label>
                      <input
                        type="url"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#e14242]"
                        placeholder="https://yourportfolio.com"
                      />
                    </div>
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <label className="block text-sm font-semibold text-[#191a23] mb-2">Upload Resume *</label>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                        id="resume-upload"
                      />
                      <label
                        htmlFor="resume-upload"
                        className={`flex items-center justify-center gap-2 w-full px-4 py-3 border-2 ${errors.resume ? 'border-red-500' : 'border-dashed border-gray-300'} rounded-lg cursor-pointer hover:border-[#e14242] transition-colors`}
                      >
                        <DocumentArrowUpIcon className="w-6 h-6 text-gray-400" />
                        <span className="text-gray-600">
                          {resume ? resume.name : 'Click to upload (PDF, DOC - Max 5MB)'}
                        </span>
                      </label>
                    </div>
                    {errors.resume && <p className="text-red-500 text-xs mt-1">{errors.resume}</p>}
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <label className="block text-sm font-semibold text-[#191a23] mb-2">Cover Letter (Optional)</label>
                    <textarea
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#e14242] resize-none"
                      placeholder="Tell us why you're interested in this position..."
                    ></textarea>
                  </div>

                  {status === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-700 text-sm">Something went wrong. Please try again.</p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full px-8 py-4 bg-[#e14242] text-white font-semibold rounded-lg hover:bg-[#c93838] transition-all duration-300 disabled:opacity-50"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
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
