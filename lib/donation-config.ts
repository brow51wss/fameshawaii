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
  
  // Stripe payment links for each preset amount
  stripeLinks: {
    50: "https://buy.stripe.com/cNi4gzcUI5QEcY781zbZe0d",
    100: "https://buy.stripe.com/5kQcN5g6U7YM8HRdlTbZe0c",
    250: "https://buy.stripe.com/eVqfZh6wk92Q5vF6XvbZe0b",
    500: "https://buy.stripe.com/14AeVd2g4ena0bldlTbZe0a",
  } as Record<number, string>,
  
  // Impact calculations (per dollar)
  impact: {
    mentorshipHoursPerDollar: 1 / 25, // $25 = 1 hour
    studentsPerDollar: 1 / 50, // $50 = 1 student
  }
}

export type DonationFrequency = "one-time" | "monthly"

