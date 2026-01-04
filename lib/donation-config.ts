// Donation configuration - edit these values to update across all donation forms

export const DONATION_CONFIG = {
  // Preset donation amounts shown as quick-select buttons
  presets: [50, 100, 250, 500],
  
  // Default selected amount
  defaultAmount: "100",
  
  // Minimum donation amount
  minAmount: 1,
  
  // Default frequency
  defaultFrequency: "one-time" as const,
  
  // Impact calculations (per dollar)
  impact: {
    mentorshipHoursPerDollar: 1 / 25, // $25 = 1 hour
    studentsPerDollar: 1 / 50, // $50 = 1 student
  }
}

export type DonationFrequency = "one-time" | "monthly"

