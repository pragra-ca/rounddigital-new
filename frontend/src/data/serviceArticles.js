import blog1 from "@/assets/service/images/blog1.png";
import blog2 from "@/assets/service/images/blog2.png";
import blog3 from "@/assets/service/images/blog3.png";
import blog4 from "@/assets/service/images/blog4.png";
import blog5 from "@/assets/service/images/blog5.png";
import blog6 from "@/assets/service/images/blog6.png";

export const serviceArticles = [
  {
    slug: "cybersecurity-best-practices-2025",
    tag: "CYBERSECURITY",
    title: "Essential Cybersecurity Best Practices for Small Businesses in 2025",
    desc: "Protect your business from cyber threats with these proven security strategies and implementation guidelines...",
    image: blog1,
    category: "CYBERSECURITY",
    date: "January 15, 2025",
    author: "Andy Smith",
    authorImage: "/images/th.jpeg",
    heroImage: "/images/tech1.png",
    img: blog1,
    description:
      "Learn the essential cybersecurity practices every small business needs to implement in 2025 to protect against evolving threats.",
    content: `
      <h3>Why Cybersecurity Matters for Small Businesses</h3>
      <p>Small businesses are increasingly targeted by cybercriminals. Here's how to protect your organization with essential security practices.</p>
      <ul>
        <li>Multi-factor authentication implementation</li>
        <li>Regular security awareness training</li>
        <li>Data backup and recovery strategies</li>
        <li>Network security best practices</li>
      </ul>
      <h3>Implementation Guide</h3>
      <p>Follow our step-by-step guide to implement these security measures in your organization.</p>
    `,
    tags: ["cybersecurity", "small business", "data protection", "security"],
    readingTime: "8 min read",
  },
  {
    slug: "cloud-migration-guide-2025",
    tag: "CLOUD SOLUTIONS",
    title: "Complete Guide to Cloud Migration: Strategy, Planning & Execution",
    desc: "Step-by-step guide to successfully migrate your business to the cloud with minimal downtime and maximum benefits...",
    image: blog2,
    category: "CLOUD SOLUTIONS",
    date: "January 12, 2025",
    author: "Sarah Chen",
    authorImage: "/images/th.jpeg",
    heroImage: "/images/tech2.png",
    img: blog2,
    description:
      "A comprehensive guide to planning and executing a successful cloud migration strategy for your business.",
    content: `
      <h3>Planning Your Cloud Migration</h3>
      <p>Successful cloud migration requires careful planning and execution. Here's our proven methodology.</p>
      <ul>
        <li>Assessment of current infrastructure</li>
        <li>Cloud platform selection criteria</li>
        <li>Migration timeline and phases</li>
        <li>Risk mitigation strategies</li>
      </ul>
      <h3>Best Practices</h3>
      <p>Learn from our experience migrating hundreds of businesses to the cloud successfully.</p>
    `,
    tags: [
      "cloud migration",
      "infrastructure",
      "digital transformation",
      "planning",
    ],
    readingTime: "10 min read",
  },
  {
    slug: "custom-software-development-trends-2025",
    tag: "SOFTWARE DEVELOPMENT",
    title: "Top Custom Software Development Trends to Watch in 2025",
    desc: "Discover the latest trends in custom software development that will drive business innovation and competitive advantage...",
    image: blog3,
    category: "SOFTWARE DEVELOPMENT",
    date: "January 10, 2025",
    author: "Michael Torres",
    authorImage: "/images/th.jpeg",
    heroImage: "/images/tech3.png",
    img: blog3,
    description:
      "Stay ahead of the curve with these emerging trends in custom software development for 2025.",
    content: `
      <h3>Emerging Development Trends</h3>
      <p>The software development landscape is evolving rapidly. Here are the key trends shaping 2025.</p>
      <ul>
        <li>AI-powered development tools</li>
        <li>Low-code/No-code platforms</li>
        <li>Microservices architecture</li>
        <li>DevOps and CI/CD integration</li>
      </ul>
      <h3>Implementation Strategies</h3>
      <p>Learn how to leverage these trends in your next software development project.</p>
    `,
    tags: ["software development", "trends", "AI", "microservices"],
    readingTime: "7 min read",
  },
  {
    slug: "enterprise-content-management-systems",
    tag: "ENTERPRISE SOLUTIONS",
    title: "Choosing the Right Enterprise Content Management System",
    desc: "Compare ECM solutions and learn how to select the best system for your organization's content management needs...",
    image: blog4,
    category: "ENTERPRISE SOLUTIONS",
    date: "January 8, 2025",
    author: "James Rodriguez",
    authorImage: "/images/th.jpeg",
    heroImage: "/images/mkt1.png",
    img: blog4,
    description:
      "A detailed comparison of enterprise content management systems to help you make the right choice for your organization.",
    content: `
      <h3>Understanding ECM Systems</h3>
      <p>Enterprise Content Management systems help organizations capture, manage, and deliver content efficiently.</p>
      <ul>
        <li>Document management capabilities</li>
        <li>Workflow automation features</li>
        <li>Security and compliance requirements</li>
        <li>Integration with existing systems</li>
      </ul>
      <h3>Selection Criteria</h3>
      <p>Use our comprehensive checklist to evaluate ECM solutions for your organization.</p>
    `,
    tags: ["ECM", "enterprise", "content management", "workflow"],
    readingTime: "9 min read",
  },
  {
    slug: "it-consulting-digital-transformation",
    tag: "IT CONSULTING",
    title: "How IT Consulting Drives Successful Digital Transformation",
    desc: "Learn how professional IT consulting services can accelerate your digital transformation journey and deliver measurable results...",
    image: blog5,
    category: "IT CONSULTING",
    date: "January 5, 2025",
    author: "Lisa Wang",
    authorImage: "/images/th.jpeg",
    heroImage: "/images/mkt2.png",
    img: blog5,
    description:
      "Discover how strategic IT consulting can transform your business operations and drive growth through digital innovation.",
    content: `
      <h3>The Role of IT Consulting</h3>
      <p>Professional IT consulting provides the expertise and strategy needed for successful digital transformation.</p>
      <ul>
        <li>Technology assessment and roadmap</li>
        <li>Change management strategies</li>
        <li>ROI optimization techniques</li>
        <li>Risk mitigation planning</li>
      </ul>
      <h3>Success Metrics</h3>
      <p>Measure the impact of your digital transformation initiatives with these key performance indicators.</p>
    `,
    tags: ["IT consulting", "digital transformation", "strategy", "ROI"],
    readingTime: "6 min read",
  },
  {
    slug: "web-application-security-testing",
    tag: "SOFTWARE TESTING",
    title: "Comprehensive Guide to Web Application Security Testing",
    desc: "Master the essential techniques for testing web application security and protecting against common vulnerabilities...",
    image: blog6,
    category: "SOFTWARE TESTING",
    date: "January 3, 2025",
    author: "David Park",
    authorImage: "/images/th.jpeg",
    heroImage: "/images/mkt3.png",
    img: blog6,
    description:
      "Learn the critical security testing methods to ensure your web applications are protected against threats.",
    content: `
      <h3>Security Testing Fundamentals</h3>
      <p>Comprehensive security testing is essential for protecting web applications from cyber threats.</p>
      <ul>
        <li>Vulnerability assessment techniques</li>
        <li>Penetration testing methodologies</li>
        <li>Automated security scanning tools</li>
        <li>Code review best practices</li>
      </ul>
      <h3>Testing Checklist</h3>
      <p>Use our detailed checklist to ensure comprehensive security testing coverage.</p>
    `,
    tags: [
      "security testing",
      "web applications",
      "vulnerabilities",
      "penetration testing",
    ],
    readingTime: "8 min read",
  },
];
