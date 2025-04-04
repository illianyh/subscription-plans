# Subscription Plans UI Redesign

## Overview

This project implements an improved subscription plan selection UI focused on driving more customers toward longer-term plans.

## Implementation Approach

I've created a clear visual hierarchy that guides users toward longer subscription plans. The 6-month plan is strategically positioned as "MOST POPULAR" to leverage social proof.

The pricing structure transparently shows both monthly rates and total billing amounts, making the value proposition immediately clear. By highlighting specific savings amounts (like "Save £60" on the 6-month plan), I've tapped into loss aversion - people are more motivated by avoiding loss than gaining something of equal value. The annual billing toggle offering an additional 20% discount which makes the standard longer plans seem even more reasonable by comparison.

Feature differentiation between plans creates a natural progression of value. Users can clearly see that each plan offers more features than the one below it. The 12-month plan includes additional premium features that justify the longer commitment.

Trust elements at the bottom of the page help reduce purchase anxiety (I think particularly important in healthcare).

### Essential Events to Track

- `subscription_page_viewed` - Track basic page loads with referral source and user segment
- `plan_selected` - When a user selects a plan (with plan_id, duration, price properties)
- `plan_changed` - Captures when users switch between plans and which direction they move (shorter to longer or vice versa)
- `billing_toggle_switched` - When the annual/monthly toggle is used, showing price sensitivity
- `checkout_initiated` - When the primary CTA is clicked (with selected plan properties)
- `checkout_completed` or `checkout_abandoned` - Final conversion events

These events would allow us to build conversion funnels, analyse drop-off points, identify which elements drive conversions to longer plans, and determine whether certain user segments respond differently to various elements.

## Experimentation Approach

### Key Metrics

- Primary: Conversion rate by plan length
- Secondary: Average order value, retention rate at renewal points
- Leading indicators: Time spent on page, plan switching behavior

### Success Criteria

- Statistical significance in plan length distribution
- No negative impact on overall conversion rate
- Improved customer lifetime value

While I've built the technical foundation and applied conversion principles, I recognise the importance of specialised copywriting expertise to further optimise the messaging.
