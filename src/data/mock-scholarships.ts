export type ScholarshipStatus = "Compatible" | "Conflict" | "Review";

export interface Scholarship {
  id: string;
  shortId: string;
  name: string;
  provider: string;
  benefit: number;
  eligibility: number;
  status: ScholarshipStatus;
  conflictWith?: string;
  requirements: string[];
  documents: string[];
  category: string;
  description: string;
}

export const scholarships: Scholarship[] = [
  { id: "sch-001", shortId: "SCH-001", name: "Maharashtra Merit Scholarship", provider: "Govt. of Maharashtra", benefit: 30000, eligibility: 96, status: "Compatible", requirements: ["Income requirement", "Percentage requirement", "Category", "Course", "Domicile"], documents: ["Income Certificate", "Marksheet", "Domicile Certificate"], category: "Merit", description: "State merit support for high-performing undergraduate students." },
  { id: "sch-002", shortId: "SCH-002", name: "Future Scholars Program", provider: "Tata Education Trust", benefit: 25000, eligibility: 91, status: "Conflict", conflictWith: "SCH-004", requirements: ["Income requirement", "Percentage requirement", "Course"], documents: ["Income Certificate", "Marksheet", "Admission Letter"], category: "Need-based", description: "Private need-linked award for students in professional degree programs." },
  { id: "sch-003", shortId: "SCH-003", name: "Digital Student Grant", provider: "Digital India Foundation", benefit: 40000, eligibility: 94, status: "Compatible", requirements: ["Income requirement", "Course", "Domicile"], documents: ["Income Certificate", "Marksheet", "Domicile Certificate"], category: "Technology", description: "Technology education grant for students in computing disciplines." },
  { id: "sch-004", shortId: "SCH-004", name: "National Access Fellowship", provider: "Ministry of Education", benefit: 32000, eligibility: 88, status: "Conflict", conflictWith: "SCH-002", requirements: ["Income requirement", "Category", "Course"], documents: ["Income Certificate", "Category Certificate", "Marksheet"], category: "Need-based", description: "National support for students from underrepresented communities." },
  { id: "sch-005", shortId: "SCH-005", name: "Women in STEM Award", provider: "STEM India Council", benefit: 20000, eligibility: 93, status: "Compatible", requirements: ["Gender", "Percentage requirement", "Course"], documents: ["Marksheet", "Admission Letter"], category: "STEM", description: "Merit award supporting women pursuing science and technology." },
  { id: "sch-006", shortId: "SCH-006", name: "Rural Talent Support", provider: "Bharat Development Fund", benefit: 18000, eligibility: 86, status: "Review", requirements: ["Rural residence", "Income requirement", "Percentage requirement"], documents: ["Income Certificate", "Residence Certificate", "Marksheet"], category: "Regional", description: "Targeted support for talented students from rural districts." },
  { id: "sch-007", shortId: "SCH-007", name: "Campus Excellence Fund", provider: "University Grants Council", benefit: 15000, eligibility: 89, status: "Compatible", requirements: ["Institution", "Percentage requirement", "Year"], documents: ["Institution Certificate", "Marksheet"], category: "Merit", description: "Institution-nominated award for consistent academic achievement." },
  { id: "sch-008", shortId: "SCH-008", name: "NextGen Learner Grant", provider: "NASSCOM Foundation", benefit: 22000, eligibility: 84, status: "Review", requirements: ["Course", "Income requirement", "Year"], documents: ["Income Certificate", "Admission Letter"], category: "Technology", description: "Industry-backed support for emerging technology learners." },
];

export type RelationType = "compatible" | "conflict" | "related";
export interface ScholarshipRelation { source: string; target: string; type: RelationType; reason: string }
export const relations: ScholarshipRelation[] = [
  { source: "sch-001", target: "sch-002", type: "compatible", reason: "Different funding sources and support categories permit combination." },
  { source: "sch-001", target: "sch-003", type: "compatible", reason: "State merit and technology grants have no exclusion rule." },
  { source: "sch-001", target: "sch-005", type: "compatible", reason: "Merit and targeted STEM awards may be held together." },
  { source: "sch-002", target: "sch-004", type: "conflict", reason: "Both are need-based living support awards and prohibit duplicate support." },
  { source: "sch-002", target: "sch-005", type: "compatible", reason: "Private need support and a targeted STEM award can be combined." },
  { source: "sch-003", target: "sch-004", type: "compatible", reason: "Technology and access funding cover distinct support categories." },
  { source: "sch-003", target: "sch-005", type: "compatible", reason: "The program rules contain no mutual-exclusion clause." },
  { source: "sch-003", target: "sch-008", type: "related", reason: "Both fund technology study; final provider confirmation is recommended." },
  { source: "sch-004", target: "sch-006", type: "conflict", reason: "Both claim the same regional access allowance." },
  { source: "sch-005", target: "sch-007", type: "compatible", reason: "Targeted STEM and institutional merit funding are stackable." },
  { source: "sch-006", target: "sch-008", type: "compatible", reason: "Regional and industry grants cover different needs." },
  { source: "sch-007", target: "sch-008", type: "related", reason: "No explicit conflict found; institutional approval may be needed." },
];

export const plans = [
  { id: "plan-a", label: "PLAN A", scholarshipIds: ["sch-001", "sch-002", "sch-003"], benefit: 85000, documents: 5, confidence: 94, note: "Highest verified benefit", accent: "benefit" },
  { id: "plan-b", label: "PLAN B", scholarshipIds: ["sch-001", "sch-003", "sch-005", "sch-007"], benefit: 72000, documents: 6, confidence: 91, note: "Broadest coverage", accent: "coverage" },
  { id: "plan-c", label: "PLAN C", scholarshipIds: ["sch-002", "sch-005"], benefit: 55000, documents: 3, confidence: 96, note: "Low documentation", accent: "documents" },
  { id: "plan-d", label: "PLAN D", scholarshipIds: ["sch-003", "sch-006", "sch-008"], benefit: 80000, documents: 5, confidence: 86, note: "Technology focused", accent: "technology" },
  { id: "plan-e", label: "PLAN E", scholarshipIds: ["sch-001", "sch-005", "sch-008"], benefit: 70000, documents: 4, confidence: 89, note: "Balanced requirements", accent: "balanced" },
];

export const formatMoney = (value: number) => `₹${value.toLocaleString("en-IN")}`;
