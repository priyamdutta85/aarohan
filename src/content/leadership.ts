import type { Person } from "@/types/content";

export const leadership = {
  president: [{ name: "Monojit Gupta", role: "President" }],
  vicePresidents: [
    { name: "Avijit Das", role: "Vice President" },
    { name: "Sourav Shirsha Banerjee", role: "Vice President" },
    { name: "Sarat Santra", role: "Vice President" },
    { name: "Soumou Chatterjee", role: "Vice President" },
    { name: "Anirban Dutta", role: "Vice President" },
    { name: "Open / To be filled", role: "Vacant Vice President Position", note: "Open" },
  ],
  officers: [
    { name: "Ujjal Samanta", role: "General Secretary" },
    { name: "Prasanjeet Kar", role: "Treasurer" },
  ],
  assistantSecretaries: [
    { name: "Jayanta Bose", role: "Assistant General Secretary" },
    { name: "Smriti Sarkar", role: "Assistant General Secretary" },
    { name: "Ritwik Chatterjee", role: "Assistant Treasurer" },
  ],
  culturalLeadership: [
    { name: "Tanima Boral", role: "Cultural Secretary" },
    { name: "Jaydeep Chakraborty", role: "Assistant Cultural Secretary" },
  ],
  committee: [
    { name: "Diptendu Konar", role: "Executive Committee Member" },
    { name: "Dalia Ray", role: "Executive Committee Member" },
    { name: "Kaveri Sau", role: "Executive Committee Member" },
    { name: "Mala Kar", role: "Executive Committee Member" },
    { name: "Arka Prabha Ghosh", role: "Executive Committee Member" },
    { name: "Priyam Dutta", role: "Executive Committee Member" },
    { name: "Shreya Pal", role: "Executive Committee Member" },
    { name: "Ankita Hui", role: "Executive Committee Member" },
    { name: "Sayan Datta", role: "Executive Committee Member" },
    { name: "Sudip Dey", role: "Executive Committee Member" },
    { name: "Biswarup Bose", role: "Executive Committee Member" },
  ],
  advisors: [
    { name: "Subrata Datta", role: "Advisor" },
    { name: "Saswata Ray", role: "Advisor" },
    { name: "Saurabh Chakraborty", role: "Advisor" },
  ],
} satisfies Record<string, Person[]>;

export const governanceNotes = [
  "Aarohan Cultural Society is based in Hyderabad, Telangana, India.",
  "The current registration reference is Registration No. 353 of 2024.",
  "The society is presented with organizational governance, bye-laws, defined roles and responsibilities.",
  "The public site avoids unnecessary personal details while showing stewardship and accountability.",
] as const;
