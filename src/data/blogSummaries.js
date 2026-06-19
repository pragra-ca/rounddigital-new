export const blogSummaries = [
  {
    "id": 1,
    "title": "The Rise of Autonomous AI Agents in Enterprise Software",
    "excerpt": "Explore how autonomous AI agents are revolutionizing business operations, from customer service to complex decision-making processes.",
    "slug": "rise-of-autonomous-ai-agents",
    "author": "Dr. Sarah Chen",
    "publishDate": "2025-01-15",
    "tags": [
      "AI Agents",
      "Enterprise Software",
      "Automation",
      "Machine Learning"
    ]
  },
  {
    "id": 2,
    "title": "5 Critical Steps for Successful Digital Transformation in 2025",
    "excerpt": "A comprehensive guide to navigating digital transformation, avoiding common pitfalls, and achieving measurable business impact.",
    "slug": "digital-transformation-critical-steps-2025",
    "author": "Michael Rodriguez",
    "publishDate": "2025-01-10",
    "tags": [
      "Digital Transformation",
      "Enterprise Strategy",
      "Change Management",
      "Cloud Migration"
    ]
  },
  {
    "id": 3,
    "title": "Building Production-Ready AI Agent Systems: Lessons from the Field",
    "excerpt": "Practical insights on deploying, monitoring, and scaling AI agents in production environments.",
    "slug": "production-ready-ai-agent-systems",
    "author": "Dr. Sarah Chen",
    "publishDate": "2025-01-08",
    "tags": [
      "AI Agents",
      "Production Systems",
      "DevOps",
      "System Architecture"
    ]
  },
  {
    "id": 4,
    "title": "The Economics of AI Agents: ROI Analysis and Cost Optimization",
    "excerpt": "Understanding the true cost and return on investment of implementing AI agents in your organization.",
    "slug": "economics-of-ai-agents-roi-analysis",
    "author": "Emily Thompson",
    "publishDate": "2025-01-05",
    "tags": [
      "AI Agents",
      "ROI",
      "Business Strategy",
      "Cost Optimization"
    ]
  },
  {
    "id": 5,
    "title": "From Legacy Systems to Cloud-Native: A Digital Transformation Playbook",
    "excerpt": "Step-by-step guide to modernizing legacy applications while maintaining business continuity.",
    "slug": "legacy-to-cloud-native-transformation-playbook",
    "author": "James Mitchell",
    "publishDate": "2024-12-28",
    "tags": [
      "Digital Transformation",
      "Cloud Migration",
      "Legacy Modernization",
      "DevOps"
    ]
  },
  {
    "id": 6,
    "title": "Multi-Agent Systems: Coordinating AI Agents for Complex Workflows",
    "excerpt": "Design patterns and best practices for building systems where multiple AI agents work together.",
    "slug": "multi-agent-systems-coordination-patterns",
    "author": "Dr. Sarah Chen",
    "publishDate": "2024-12-20",
    "tags": [
      "AI Agents",
      "System Architecture",
      "Distributed Systems",
      "Design Patterns"
    ]
  },
  {
    "id": 7,
    "title": "Measuring Success: KPIs for Digital Transformation Initiatives",
    "excerpt": "Key metrics and measurement frameworks to track progress and demonstrate value in transformation projects.",
    "slug": "measuring-success-digital-transformation-kpis",
    "author": "Michael Rodriguez",
    "publishDate": "2024-12-15",
    "tags": [
      "Digital Transformation",
      "KPIs",
      "Metrics",
      "Performance Management"
    ]
  },
  {
    "id": 8,
    "title": "Security and Compliance in AI Agent Deployments",
    "excerpt": "Essential security considerations and compliance requirements for enterprise AI agent systems.",
    "slug": "security-compliance-ai-agent-deployments",
    "author": "Emily Thompson",
    "publishDate": "2024-12-10",
    "tags": [
      "AI Agents",
      "Security",
      "Compliance",
      "GDPR",
      "Data Privacy"
    ]
  }
];

export function toBlogListItem(post) {
  return {
    _id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    description: post.excerpt,
    slug: { current: post.slug },
    author: { name: post.author },
    publishedAt: post.publishDate,
    tags: post.tags || [],
    category: post.tags?.[0] || 'Insights',
  };
}
