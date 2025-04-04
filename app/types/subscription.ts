export interface SubscriptionPlan {
  id: string
  name: string
  price: number
  description: string
  features: string[]
  popular?: boolean
  billingCycle: {
    monthly: number
    quarterly?: number
    biannual?: number
    annual: number
  }
}

