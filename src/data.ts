export const profile = {
  name: 'Chetan Kadadi',
  fullName: 'Chetan Ramanna Kadadi',
  email: 'chetankadadi07@gmail.com',
  phone: '+91 9110433730',
  location: 'Bangalore, Karnataka, India',
  linkedin: '',
  github: '',
  college: 'Dayananda Sagar Academy of Technology and Management',
  degree: 'B.E. Computer Science & Engineering — Cybersecurity',
  graduation: '2027',
  cgpa: '9.00',
}
export const skills = [
  { name: 'Java', group: 'Programming', icon: '☕' },
  { name: 'C', group: 'Programming', icon: 'C' },
  { name: 'HTML', group: 'Development', icon: '🌐' },
  { name: 'CSS', group: 'Development', icon: '🎨' },
  { name: 'JavaScript', group: 'Programming', icon: 'JS' },
  { name: 'Node.js', group: 'Development', icon: '⬢' },
  { name: 'Express.js', group: 'Development', icon: 'EX' },
  { name: 'REST APIs', group: 'Development', icon: '⇄' },
  { name: 'Spring Boot', group: 'Development', icon: '🍃' },
  { name: 'MVC', group: 'Development', icon: '▥' },
  { name: 'Hibernate', group: 'Database', icon: 'H' },
  { name: 'JPA', group: 'Database', icon: 'J' },
  { name: 'JWT', group: 'Cybersecurity', icon: '🔐' },
  { name: 'MySQL', group: 'Database', icon: '▤' },
  { name: 'Git', group: 'Tools', icon: '⌘' },
  { name: 'GitHub', group: 'Tools', icon: '⌂' },
  { name: 'Linux', group: 'Cybersecurity', icon: '🐧' },
  { name: 'Computer Networks', group: 'Cybersecurity', icon: '⌁' },
  { name: 'Data Structures & Algorithms', group: 'Core Concepts', icon: '◇' },
  { name: 'Object-Oriented Programming', group: 'Core Concepts', icon: '◎' },
  { name: 'Operating Systems', group: 'Core Concepts', icon: '▣' },
]
export const projects = [
  {
    number: '01', title: 'Deep Packet Inspection Engine', category: 'Development',
    description: 'A network traffic analysis engine that parses PCAP packets, tracks five-tuple flows and extracts TLS SNI / HTTP Host data to classify network applications.',
    details: ['Rule-based IP, domain and application blocking', 'Multithreaded packet processing with load balancers', 'Thread-safe queues for packet processing'],
    tags: ['Networking', 'PCAP', 'DPI', 'Multithreading'],
    visual: 'packet'
  },
  {
    number: '02', title: 'TRUSTFLOW — Adaptive Zero Trust Risk Engine', category: 'Cybersecurity',
    description: 'An in-development adaptive Zero Trust security engine combining dynamic risk scoring, behavioral analysis and policy-based access control.',
    details: ['Adaptive sessions and trust decay', 'Permission-graph analysis', 'Explainable security decisions'],
    tags: ['Zero Trust', 'Risk Scoring', 'Security', 'In Development'],
    visual: 'trust'
  },
  {
    number: '03', title: 'API Gateway — Centralized Request Routing', category: 'Development',
    description: 'An API Gateway project concept focused on providing a single entry point for client requests and coordinating access to backend services.',
    details: ['Centralized request routing to backend services', 'JWT-based authentication and request validation as planned capabilities', 'Designed around a Spring Boot backend architecture'],
    tags: ['Java', 'Spring Boot', 'REST APIs', 'JWT', 'API Gateway'],
    visual: 'gateway'
  }
]
