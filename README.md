# MUSA Plan Architect

Build a polished hackathon-grade web application called MUSA CodeX.

MUSA CodeX is an intelligent scholarship planning system. It does NOT simply recommend scholarships. Its key purpose is to analyze which scholarships a student is eligible for, determine which scholarships can be combined, detect conflicts between scholarships, generate compatible scholarship plans, calculate potential benefits, and clearly explain every decision.

IMPORTANT:
For this first version, focus on the frontend UI/UX and realistic mock data only. Do not build the backend, authentication, database, or AI PDF extraction yet. Structure the frontend so APIs can be connected later.

PRODUCT POSITIONING

MUSA CodeX should feel like a scholarship decision/analysis command center, not a generic AI chatbot or typical SaaS dashboard.

The visual identity should communicate:

technical

intelligent

trustworthy

structured

data-driven

modern

premium

academic/financial decision support

Avoid:

purple-blue AI gradients

glowing brains

excessive glassmorphism

cyberpunk aesthetics

generic AI chatbot layouts

excessive rounded cards

meaningless decorative graphics

Use a clean technical interface with a subtle blueprint/grid feeling, strong typography, thin borders, structured panels, restrained colors, and purposeful motion.

PRIMARY USER FLOW

The main demo journey should be:

Student Profile
→ Eligibility Analysis
→ Eligible Scholarships
→ Compatibility Network
→ Conflict Detection
→ Compatible Scholarship Plans
→ Benefit Comparison
→ Explainable Results

The experience should feel like one connected system rather than separate pages.

PAGE 1 — LANDING PAGE

Create a premium landing page.

Hero:

"MUSA CodeX"

Headline:

"Find scholarships. Understand conflicts. Build your plan."

Supporting text:

"MUSA analyzes your profile, maps scholarship compatibility, detects conflicts, and helps you understand the scholarship combinations available to you."

Primary CTA:
"Build My Scholarship Plan"

Secondary CTA:
"Explore Compatibility"

Include a visual preview of the scholarship compatibility network in the hero.

Show a small technical flow:

PROFILE → ELIGIBILITY → COMPATIBILITY → PLANS

Below the hero, show 3–4 key capabilities:

Eligibility Intelligence

Scholarship Compatibility

Explainable Decisions

Benefit Planning

Add a short section explaining that MUSA is designed around multi-scholarship compatibility rather than simple scholarship search.

PAGE 2 — STUDENT PROFILE

Create a clean multi-section profile form.

Sections:

PERSONAL

Name

Age

Gender

Category

Domicile

ACADEMIC

Course

Year/Semester

Percentage/CGPA

Institution

FINANCIAL

Annual Family Income

Income Certificate Status

ADDITIONAL

Disability Status

Rural/Urban

Special Categories

Use realistic form controls and validation.

At the bottom:

"Analyze My Eligibility"

When clicked, transition to the dashboard using mock data.

PAGE 3 — MAIN SCHOLARSHIP DASHBOARD

This is the most important screen.

Create a professional command-center style dashboard.

Top header:

"MUSA Scholarship Intelligence"

Show summary metrics:

Eligible Scholarships: 8

Compatible Plans: 5

Potential Benefit: ₹92,000

Conflicts Detected: 4

These are DEMO values only.

Main area should contain:

A. SCHOLARSHIP COMPATIBILITY NETWORK

This must be the visual centerpiece.

Create an interactive network graph showing scholarship nodes and relationships.

Example:

Scholarship A
Scholarship B
Scholarship C
Scholarship D
Scholarship E
Scholarship F

Connections should communicate:

✓ Compatible
✕ Conflict
— Related/neutral

Clicking a scholarship node should open its details.

The graph should support:

hover state

selected node

highlighted connected nodes

conflict highlighting

compatibility highlighting

zoom/pan if practical

Do NOT make the graph look like a decorative graphic. It should feel like an actual analytical tool.

Add a legend:

✓ Compatible
✕ Conflict
● Selected
○ Eligible

B. SCHOLARSHIP LANDSCAPE

Below or beside the graph show a structured list/table:

Scholarship
Provider
Benefit
Eligibility
Compatibility
Status

Example:

Maharashtra Merit Scholarship
₹30,000
Eligible
Compatible

Future Scholars Program
₹25,000
Eligible
Conflict with SCH-04

Digital Student Grant
₹40,000
Eligible
Compatible

PAGE 4 — SCHOLARSHIP DETAILS

When the user clicks a scholarship node/card, open a detailed panel or page.

Show:

Scholarship name
Provider
Potential benefit

Eligibility:

✓ Income requirement
✓ Percentage requirement
✓ Category
✓ Course
✓ Domicile

Compatibility:

✓ Compatible with SCH-001
✓ Compatible with SCH-003
✕ Conflicts with SCH-004

Documents:

Income Certificate

Marksheet

Domicile Certificate

Add:

"Why am I eligible?"

and

"View Compatibility"

buttons.

PAGE 5 — SCHOLARSHIP PLANS

Create a page called:

"Compatible Scholarship Plans"

Explain:

"MUSA generated these plans from scholarships you are eligible for and removed combinations that violate detected compatibility rules."

Show several plans.

Example:

PLAN A
3 Scholarships
₹85,000 potential benefit
✓ No detected conflicts
✓ Eligibility satisfied

[View Plan]

PLAN B
4 Scholarships
₹72,000 potential benefit
✓ No detected conflicts

PLAN C
2 Scholarships
₹55,000 potential benefit
✓ Low documentation requirement

Do NOT label one plan universally "Best".

Instead allow users to compare plans according to:

Total Benefit

Number of Scholarships

Documentation Required

Conflicts

Eligibility Confidence

PAGE 6 — PLAN DETAILS / EXPLANATION

Create a detailed explanation view.

Example:

PLAN A

Scholarship A
₹30,000

Scholarship B
₹25,000

Scholarship C
₹30,000

TOTAL POTENTIAL BENEFIT
₹85,000

Compatibility Analysis:

A + B ✓
A + C ✓
B + C ✓

Eligibility:

Scholarship A ✓
Scholarship B ✓
Scholarship C ✓

Documents:

✓ Marksheet
✓ Income Certificate
⚠ Domicile Certificate

Add an expandable section:

"Why is this plan valid?"

Show a clear rule-based explanation.

Also show an example invalid combination:

Scholarship B + Scholarship D

❌ Conflict detected

Reason:
Both scholarships belong to the same support category and cannot be combined according to the stored rule.

Make explanations factual and transparent.

PAGE 7 — WHAT-IF SIMULATOR

Create a dedicated interactive feature called:

"What If?"

The student can modify profile values and see how the scholarship landscape changes.

Controls:

Family Income
Percentage
Category
Course
Domicile

Show before/after results:

Eligible Scholarships
Compatible Plans
Potential Benefit

Example:

Before:
8 eligible scholarships
5 compatible plans
₹72,000 potential benefit

After changing income:
11 eligible scholarships
7 compatible plans
₹92,000 potential benefit

Use clearly labeled DEMO DATA.

The interface should visually show which scholarships became available or unavailable.

NAVIGATION

Use a clean sidebar/top navigation:

MUSA CodeX

Dashboard
My Profile
Scholarships
Compatibility Network
Plans
What If?
Documents

At the bottom:

Profile
Settings

The current page should be clearly highlighted.

INTERACTION DESIGN

Add meaningful interactions:

Hover scholarship node → show mini information

Click node → open scholarship details

Click conflict → show conflict explanation

Click compatible connection → show compatibility reason

Filter scholarships by status

Search scholarships

Sort plans

Expand explanations

Smooth transitions

Loading state for "Analyze My Eligibility"

Empty states

Error states

Avoid excessive animation.

DESIGN SYSTEM

Use:

professional dark/light neutral interface

white/charcoal/slate base

one restrained accent color

clear success/error states

thin technical borders

subtle grid/background pattern

strong typography hierarchy

compact data tables

minimal rounded corners

consistent spacing

The interface should resemble a technical decision-support system / analytical command center, not a finance app or AI chatbot.

Make it responsive for desktop and tablet.

TECHNICAL REQUIREMENTS

Use:

React

Tailwind CSS

reusable components

clean component architecture

mock JSON data

local state for interactions

Keep scholarship data separate from UI components so it can later be replaced with API data.

Create reusable components such as:

StudentProfileForm
ScholarshipCard
ScholarshipTable
CompatibilityGraph
ScholarshipNode
ConflictPanel
PlanCard
PlanComparison
ExplanationPanel
WhatIfSimulator
DashboardStats
Sidebar
Header

For the compatibility graph, use an appropriate React graph/visualization library if available rather than drawing a fake static image.

Make the application functional with mock data.

The most important screen is the Scholarship Compatibility Network + Scholarship Plans dashboard.

Build this as a serious hackathon prototype, not a simple CRUD dashboard.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ef27b674-364f-5e28-93f0-6fdf0868da7a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
