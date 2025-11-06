# InfoHub Design Guidelines

## Design Approach
**System-Based Approach** using **Material Design 3** principles - chosen for its excellent handling of information-dense interfaces, card-based layouts, and clear visual hierarchy. This approach ensures clarity and usability while maintaining modern aesthetics.

## Layout Architecture

**Single-Page Dashboard Layout**
- Fixed header with app branding "InfoHub" and tagline "Your Daily Utilities Hub"
- Tab navigation bar immediately below header for switching between modules (Weather / Currency / Quotes)
- Main content area with generous padding displaying active module
- Compact footer with attribution and quick links

**Spacing System**
Primary spacing units: `p-4`, `p-6`, `p-8`, `gap-4`, `gap-6`
Consistent use of `p-6` for card interiors, `p-8` for main containers, `gap-4` for form elements

## Typography Hierarchy

**Font Stack**
- Primary: Inter (Google Fonts) - clean, modern, excellent readability
- Weights: 400 (regular), 600 (semibold), 700 (bold)

**Type Scale**
- App Title: text-2xl font-bold
- Section Headers: text-xl font-semibold
- Data Display (temperature, rates): text-4xl font-bold
- Labels: text-sm font-medium uppercase tracking-wide
- Body text: text-base
- Helper text: text-sm text-gray-600

## Component Library

### Navigation Tabs
- Horizontal tab bar with three equal-width tabs
- Active tab: underline indicator (4px thick), bold text
- Inactive tabs: medium weight text, subtle hover background
- Icons paired with labels (cloud, currency symbol, quote marks)

### Module Cards
Each utility displayed in elevated card container:
- Rounded corners (rounded-xl)
- Subtle shadow (shadow-lg)
- White background with border
- Internal padding of p-6 to p-8

### Weather Module Components
- Search input with city name (full-width, with search icon)
- Large temperature display (text-4xl)
- Weather condition text (text-xl)
- Grid layout for additional metrics: humidity, wind speed, feels-like (3-column grid on desktop, stack on mobile)
- Weather icon visualization (sunny, cloudy, rainy)

### Currency Converter Components
- Amount input field with INR prefix
- Two result cards displaying USD and EUR conversions
- Each result card shows: flag emoji, currency code, converted amount (text-3xl), and exchange rate (text-sm)
- Results displayed in 2-column grid (desktop) or stacked (mobile)
- Last updated timestamp

### Quote Generator Components
- Large quote display with decorative quotation marks
- Author attribution (text-lg, italic)
- "Get New Quote" button (prominent, centered)
- Subtle background pattern or illustration in quote card

### Input Fields
- Full-width with clear labels above
- Border with focus state highlight
- Helper text below for guidance
- Error states with red border and message

### Buttons
**Primary Action Buttons**
- Rounded (rounded-lg)
- Medium size padding (px-6 py-3)
- Font weight 600
- Examples: "Search Weather", "Get New Quote"

**Secondary Actions**
- Outlined style or ghost style
- Same sizing as primary

### Loading States
- Skeleton loaders for data areas
- Spinner with "Loading..." text
- Blur effect on card during fetch

### Error States
- Alert-style message boxes with icon
- Clear error description
- "Try Again" action button
- Graceful fallback content

## Visual Elements

### Icons
**Heroicons** (via CDN) for all interface icons:
- Weather: cloud-sun, cloud-rain icons
- Currency: currency-dollar, banknotes icons  
- Quotes: chat-bubble-left-right icon
- Search, refresh, close icons as needed

### Illustrations
Add subtle decorative elements:
- Weather module: light cloud illustrations in background
- Currency module: subtle globe or exchange arrows graphic
- Quote module: decorative quotation mark watermark

**No Hero Image** - This is a utility dashboard focused on immediate functionality. Visual interest comes from well-designed cards, data visualization, and subtle background patterns.

### Animations
Minimal and purposeful only:
- Tab switching: smooth content fade (200ms)
- Data loading: gentle fade-in when results appear
- Button hover: subtle scale (1.02)

## Responsive Behavior

**Desktop (lg and above)**
- 3-column grid for weather metrics
- 2-column grid for currency results
- Horizontal tab navigation
- Max-width container (max-w-6xl) centered

**Tablet (md)**
- 2-column grids become single column where appropriate
- Maintain horizontal tabs

**Mobile (base)**
- All grids stack vertically
- Full-width cards
- Tabs remain horizontal (scrollable if needed)
- Reduced padding (p-4 instead of p-6)

## Accessibility
- All interactive elements have focus states
- Sufficient color contrast (WCAG AA minimum)
- Semantic HTML structure
- ARIA labels for icon-only buttons
- Form labels always visible (no placeholder-only inputs)