import React from 'react';
import Layout from '@/components/layout';
import Seo from '@/components/seo';
import Link from 'next/link';
import { SparklesIcon, CpuChipIcon, ChatBubbleLeftRightIcon, EyeIcon } from '@heroicons/react/24/outline';

export default function AIMachineLearningPage() {
  const subServices = [
    {
      icon: SparklesIcon,
      title: 'AI Agent Development',
      description: 'Build intelligent agents that automate complex workflows, make decisions, and learn from interactions to continuously improve business operations.',
    },
    {
      icon: CpuChipIcon,
      title: 'Machine Learning Integration',
      description: 'Embed predictive models and ML capabilities into your products to enable data-driven decision making and intelligent automation.',
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Natural Language Processing',
      description: 'Implement text analysis, chatbots, sentiment analysis, and language understanding solutions to enhance customer interactions.',
    },
    {
      icon: EyeIcon,
      title: 'Computer Vision',
      description: 'Deploy image recognition, object detection, and visual AI solutions for quality control, security, and automation.',
    },
  ];

  const benefits = [
    { title: 'Increased Efficiency', description: 'Automate repetitive tasks and free up your team for strategic work' },
    { title: 'Better Decisions', description: 'Make data-driven decisions with predictive analytics and insights' },
    { title: 'Enhanced Customer Experience', description: 'Deliver personalized experiences at scale with AI' },
    { title: 'Competitive Advantage', description: 'Stay ahead with cutting-edge AI technologies' },
  ];

  const faqs = [
    {
      question: 'What is AI Agent Development?',
      answer: 'AI Agent Development involves creating intelligent software systems that can perceive their environment, make decisions, and take actions autonomously to achieve specific goals. These agents can automate complex workflows, learn from interactions, and continuously improve their performance.'
    },
    {
      question: 'How long does it take to implement AI solutions?',
      answer: 'Implementation timelines vary based on project complexity, data availability, and integration requirements. Typically, a proof-of-concept can be developed in 4-6 weeks, while full production deployment may take 3-6 months.'
    },
    {
      question: 'Do I need large amounts of data for AI?',
      answer: 'While more data generally improves AI performance, we can work with various data volumes. We employ techniques like transfer learning, data augmentation, and pre-trained models to achieve results even with limited datasets.'
    },
  ];

  return (
    <Layout>
      <Seo
        title="AI & Machine Learning Services | RoundDigital"
        description="Transform your business with custom AI agents, machine learning models, NLP, and computer vision solutions."
        keywords="AI development, machine learning, AI agents, NLP, computer vision, artificial intelligence"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
              <SparklesIcon className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold text-purple-600 uppercase tracking-wide">AI & Machine Learning</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#191a23] mb-6 leading-tight">
              Transform Your Business with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Intelligent AI Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Harness the power of artificial intelligence and machine learning to automate workflows, extract insights from data, and create intelligent experiences that drive business growth.
            </p>
            <Link href="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300">
                Schedule AI Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#191a23] mb-6">Unlock the Power of AI for Your Business</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  At RoundDigital, we specialize in developing cutting-edge AI and machine learning solutions that transform how businesses operate. Our team of AI experts combines deep technical knowledge with industry experience to deliver intelligent systems that drive real business value.
                </p>
                <p>
                  From custom AI agents that automate complex decision-making to machine learning models that predict customer behavior, we help you leverage AI to gain competitive advantages, reduce costs, and create new revenue streams.
                </p>
                <p>
                  We handle the entire AI lifecycle - from data preparation and model development to deployment and ongoing optimization - ensuring your AI solutions deliver measurable ROI.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-12 h-96 flex items-center justify-center">
              <div className="text-center">
                <SparklesIcon className="w-32 h-32 text-purple-600 mx-auto mb-4" />
                <p className="text-2xl font-bold text-[#191a23]">AI-Powered Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Services */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#191a23] mb-4">Our AI & ML Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subServices.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#191a23] mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#191a23] mb-4">Why Choose Our AI Solutions?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-[#191a23] mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#191a23] mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#191a23] mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform with AI?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how AI can revolutionize your business operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300">
                Get Started
              </button>
            </Link>
            <Link href="/industries">
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                View Industries
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
