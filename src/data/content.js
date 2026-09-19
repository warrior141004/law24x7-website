// All copy sourced from the Law24x7 pitch deck (28 July).

export const brand = {
  name: 'Law24x7',
  tagline: 'From Legal Information to Legal Intelligence',
  sub: 'Transforming judgments, statutes and legal knowledge into actionable intelligence.',
  goal:
    'Connecting every legal document, every legal entity and every legal professional into one intelligent platform that makes law accessible, connected and actionable.',
}

export const pillars = [
  { key: 'Search', desc: 'Find the right legal information.' },
  { key: 'Connect', desc: 'Reveal relationships across the legal ecosystem.' },
  { key: 'Understand', desc: 'Actionable legal intelligence.' },
  { key: 'Act', desc: 'Draft with confidence.' },
]

// Where the platform is built to be used — kept generic to the kind of venue
// or practice, not a specific institution's name, since none is a verified customer.
export const venues = [
  { label: 'District Courts', icon: 'Landmark' },
  { label: 'High Courts', icon: 'Landmark' },
  { label: 'Tribunals', icon: 'Scale' },
  { label: 'Law Chambers & Firms', icon: 'Building2' },
  { label: 'Corporate Legal Teams', icon: 'Briefcase' },
  { label: 'Law Schools & Moot Courts', icon: 'GraduationCap' },
]

export const comparison = [
  { from: 'Scattered data', to: 'Unified coverage' },
  { from: 'Manual keyword search', to: 'Intelligent legal search' },
  { from: 'Read long PDFs', to: 'Instant AI summaries' },
  { from: 'Manual citation checks', to: 'Citation intelligence' },
  { from: 'Manual drafting', to: 'Source-backed drafting' },
]

export const impact = [
  { n: 1, title: 'Save hours every day', desc: 'AI-powered search and summaries', stat: '80–90%', label: 'faster research', value: 90, suffix: '%' },
  { n: 2, title: 'Find the right precedents', desc: 'Relevance, citation intelligence and filters', stat: '100%', label: 'relevant & authoritative', value: 100, suffix: '%' },
  { n: 3, title: 'Reduce litigation risk', desc: 'Linked cases, acts and sections', stat: 'HIGH', label: 'confidence' },
  { n: 4, title: 'Increase productivity', desc: 'Focus on strategy, not repetitive research', stat: 'MORE', label: 'billable work' },
]

export const users = [
  { title: 'Advocates', sub: 'Daily legal research', points: ['Relevant precedents', 'Cited summaries', 'Argument drafting'], icon: 'Scale' },
  { title: 'Law Firms', sub: 'Shared firm knowledge', points: ['Team research', 'Matter collaboration', 'Admin controls'], icon: 'Building2' },
  { title: 'Law Students', sub: 'Learn and prepare', points: ['Case summaries', 'Bare acts', 'Moot research'], icon: 'GraduationCap' },
  { title: 'Corporate Legal', sub: 'Research and compliance', points: ['Regulatory research', 'Policy insights', 'Due diligence'], icon: 'Briefcase' },
]

export const platform = [
  { title: 'AI Legal Search', desc: 'Search by facts, issues and provisions.', icon: 'Search', span: 2 },
  { title: 'Case Summaries', desc: 'Facts, issues, ratio and key paragraphs.', icon: 'FileText' },
  { title: 'Citation Graph', desc: 'Connected cases and authority signals.', icon: 'Network' },
  { title: 'Acts & Sections Search', desc: 'Bare acts linked to relevant judgments.', icon: 'BookOpen' },
  { title: 'Legal Contract Drafting', desc: 'Draft the legal contract without missing little details.', icon: 'PenLine' },
  { title: 'PDF Repository', desc: 'Source PDFs, notes and saved matters.', icon: 'FolderOpen' },
  { title: 'Legal Consultation', desc: 'Move research to expert review.', icon: 'Users' },
  { title: 'AI Assistant', desc: 'Draft, compare and answer with citations.', icon: 'Sparkles', span: 2 },
]

export const usps = [
  {
    n: '01',
    eyebrow: 'AI Legal Search',
    title: 'Search that understands legal context.',
    desc: 'Go beyond exact keywords to issue-based legal discovery.',
    points: [
      'Natural-language search for facts, issues and legal questions.',
      'Boolean and exact-citation search for professional users.',
      'Court, date, judge, act, section and topic filters.',
      'Results ranked by legal relevance, not only keyword density.',
    ],
    footer: 'Fast answers • Verified sources • Linked citations',
    visual: 'search',
  },
  {
    n: '02',
    eyebrow: 'Legal Document Repository',
    title: 'A unified, searchable legal corpus.',
    desc: 'A large-scale, unified and searchable legal repository across judgments, acts, sections and other legal documents.',
    points: ['50 lakh+ High Court judgments', 'Bare acts with section-level navigation', 'Source PDFs, notes and saved matters'],
    footer: 'Judgments • Acts • Sections • PDFs',
    visual: 'repository',
  },
  {
    n: '03',
    eyebrow: 'Instant Case Summaries',
    title: 'Lengthy judgments, understood in minutes.',
    desc: 'Law24x7 instantly transforms lengthy judgments into concise, structured summaries using advanced AI and legal understanding.',
    points: [
      'Reduce research time by over 90%.',
      'Understand lengthy legal judgments in minutes.',
      'Improve legal research productivity.',
      'AI-generated, legally structured summaries.',
    ],
    footer: 'Facts • Issues • Ratio • Key paragraphs',
    visual: 'summary',
  },
  {
    n: '04',
    eyebrow: 'Citation Graph',
    title: 'See how authorities connect, not just where keywords appear.',
    desc: 'A graph-first research experience helps lawyers avoid missing connected cases and weak authorities.',
    points: ['Connected cases and authority signals', 'Spot weak or overruled authorities', 'Trace every section to the judgments that apply it'],
    footer: 'Connected cases • Authority signals',
    visual: 'graph',
  },
  {
    n: '05',
    eyebrow: 'AI Assistant',
    title: 'Plain English in. Cited authority out.',
    desc: 'One conversation moves from research to a cited answer and an editable draft.',
    points: [
      'Source-backed answers — cases and paragraphs remain visible.',
      'Draft from approved research — review and edit before saving.',
      'Guardrail: every answer links back to source documents; final legal advice remains lawyer-reviewed.',
    ],
    footer: 'Similar cases → Cited answer → Linked acts',
    visual: 'assistant',
  },
]

export const pricing = [
  { tier: 'Student', price: '₹299–₹499', per: '/ month', points: ['AI summaries', 'Bare acts', 'Basic search'] },
  { tier: 'Advocate', price: '₹999–₹1,499', per: '/ month', points: ['AI legal search', 'Citations & PDFs', 'Saved matters'], featured: true },
  { tier: 'Law Firm', price: '₹7,999–₹12,999', per: '/ month', points: ['Multi-user', 'Shared knowledge', 'Admin controls'] },
  { tier: 'University', price: '₹1.5L–₹3L', per: '/ year', points: ['Campus access', 'Dashboards', 'Training'] },
  { tier: 'Enterprise / API', price: 'Custom', per: '', points: ['Research APIs', 'Private knowledge', 'SLA & support'] },
]

export const nav = [
  { label: 'Why', href: '#why' },
  { label: 'Platform', href: '#platform' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
]
