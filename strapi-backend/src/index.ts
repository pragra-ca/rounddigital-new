export default {
  register({ strapi }) {
    // Register phase
  },

  async bootstrap({ strapi }) {
    // Bootstrap phase - seed initial data
    console.log('🌱 Checking for initial data...');
    
    // Check if services already exist
    const servicesCount = await strapi.db.query('api::service.service').count();
    
    if (servicesCount === 0) {
      console.log('📝 Seeding initial services...');
      
      const services = [
        {
          title: "AI Agent Development",
          subtitle: "Intelligent Automation",
          description: "Build custom AI agents that automate complex workflows, enhance decision-making, and drive business efficiency.",
          slug: "ai-agent-development",
          bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
          textColor: "text-gray-900",
          badgeBg: "bg-purple-500",
          badgeText: "text-white",
          order: 1,
          publishedAt: new Date(),
        },
        {
          title: "AI Product Integration",
          subtitle: "Embed Intelligence",
          description: "Seamlessly integrate AI capabilities into your existing products with machine learning, NLP, and computer vision.",
          slug: "ai-product-integration",
          bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
          textColor: "text-gray-900",
          badgeBg: "bg-blue-500",
          badgeText: "text-white",
          order: 2,
          publishedAt: new Date(),
        },
        {
          title: "Cybersecurity",
          subtitle: "Enterprise Protection",
          description: "Advanced threat detection, compliance management, and proactive security solutions to safeguard your business.",
          slug: "cybersecurity",
          bgColor: "bg-gradient-to-br from-red-50 to-orange-50",
          textColor: "text-gray-900",
          badgeBg: "bg-red-500",
          badgeText: "text-white",
          order: 3,
          publishedAt: new Date(),
        },
        {
          title: "Cloud Solutions",
          subtitle: "Scalable Infrastructure",
          description: "Cloud-native architecture, migration services, and optimization for AWS, Azure, and Google Cloud Platform.",
          slug: "cloud-solutions",
          bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
          textColor: "text-gray-900",
          badgeBg: "bg-indigo-500",
          badgeText: "text-white",
          order: 4,
          publishedAt: new Date(),
        },
        {
          title: "Custom Software Development",
          subtitle: "Tailored Solutions",
          description: "Enterprise-grade software designed specifically for your business needs with modern tech stacks.",
          slug: "custom-software-development",
          bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
          textColor: "text-gray-900",
          badgeBg: "bg-green-500",
          badgeText: "text-white",
          order: 5,
          publishedAt: new Date(),
        },
        {
          title: "Digital Transformation",
          subtitle: "Modernize Operations",
          description: "Strategic consulting and implementation to modernize legacy systems and adopt cutting-edge technologies.",
          slug: "digital-transformation",
          bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
          textColor: "text-gray-900",
          badgeBg: "bg-yellow-500",
          badgeText: "text-white",
          order: 6,
          publishedAt: new Date(),
        },
      ];

      for (const service of services) {
        await strapi.db.query('api::service.service').create({ data: service });
      }
      
      console.log('✅ Services seeded successfully');
    }

    // Seed job positions
    const jobsCount = await strapi.db.query('api::job-position.job-position').count();
    
    if (jobsCount === 0) {
      console.log('📝 Seeding job positions...');
      
      const jobs = [
        {
          title: 'Senior Full Stack Developer',
          department: 'Engineering',
          location: 'Remote / Mississauga',
          type: 'Full-time',
          description: 'Build scalable web applications using React, Node.js, and cloud technologies.',
          slug: 'senior-full-stack-developer',
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
          order: 1,
          publishedAt: new Date(),
        },
        {
          title: 'AI/ML Engineer',
          department: 'AI & Data Science',
          location: 'Remote / Texas',
          type: 'Full-time',
          description: 'Develop machine learning models and AI solutions for enterprise clients.',
          order: 2,
          publishedAt: new Date(),
        },
        {
          title: 'Cybersecurity Consultant',
          department: 'Security',
          location: 'Hybrid',
          type: 'Full-time',
          description: 'Assess security posture, conduct penetration testing, and implement security solutions.',
          order: 3,
          publishedAt: new Date(),
        },
        {
          title: 'Cloud Solutions Architect',
          department: 'Cloud & Infrastructure',
          location: 'Remote',
          type: 'Full-time',
          description: 'Design and implement cloud-native architectures on AWS, Azure, or GCP.',
          order: 4,
          publishedAt: new Date(),
        },
        {
          title: 'DevOps Engineer',
          department: 'Engineering',
          location: 'Remote / Mississauga',
          type: 'Full-time',
          description: 'Build and maintain CI/CD pipelines, infrastructure as code, and automated deployments.',
          order: 5,
          publishedAt: new Date(),
        },
        {
          title: 'Technical Project Manager',
          department: 'Project Management',
          location: 'Hybrid',
          type: 'Full-time',
          description: 'Lead technical projects, coordinate teams, and ensure successful delivery.',
          order: 6,
          publishedAt: new Date(),
        },
      ];

      for (const job of jobs) {
        await strapi.db.query('api::job-position.job-position').create({ data: job });
      }
      
      console.log('✅ Job positions seeded successfully');
    }

    // Set public permissions for job positions
    try {
      const publicRole = await strapi.query('plugin::users-permissions.role').findOne({
        where: { type: 'public' },
      });

      if (publicRole) {
        await strapi.query('plugin::users-permissions.permission').updateMany({
          where: {
            role: publicRole.id,
            action: 'api::job-position.job-position.find',
          },
          data: { enabled: true },
        });
        
        await strapi.query('plugin::users-permissions.permission').updateMany({
          where: {
            role: publicRole.id,
            action: 'api::job-position.job-position.findOne',
          },
          data: { enabled: true },
        });
        
        console.log('✅ Job positions API made public');
      }
    } catch (error) {
      console.log('⚠️ Could not set public permissions:', error.message);
    }

    console.log('🎉 Data seeding completed!');
  },
};
