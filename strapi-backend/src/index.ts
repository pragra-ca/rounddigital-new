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

    console.log('🎉 Data seeding completed!');
  },
};
