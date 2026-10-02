# London Homecare

Premium UK domestic and tenancy cleaning services web application built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**, configured for **Vercel** deployment at **[https://london-homecare.vercel.app](https://london-homecare.vercel.app)**.

## Core Features & Architecture

- **Home (`/`)**: Minimal, refined UK hero banner, service overview cards, trust guarantees (DBS vetting, £2M insurance), verified UK testimonials.
- **Services (`/services`)**:
  - **Regular Home Cleaning**: Recurring domestic housekeeping, bathroom/kitchen sanitisation, bed linen change (from £18.50/hr).
  - **Deep Cleaning**: Top-to-bottom scrub, lime scale elimination, tile grout, behind furniture, skirting boards (from £145).
  - **End of Tenancy Cleaning**: 100% deposit return guarantee, strict letting agent checklist, oven dip-tank degrease included, 72-hour re-clean safety net (from £180).
  - **Interactive Instant Price & Time Estimator**: Real-time calculator estimating duration and price in £ GBP.
- **About (`/about`)**: UK company story, living wage commitment, 4-stage cleaner vetting protocol, management team bios, and Companies Act registration.
- **Contact (`/contact`)**:
  - Interactive booking & enquiry form with UK postcode input and confirmation state.
  - Head office address: `71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom`.
  - Telephone: `+44 (0) 20 7946 0912`
  - Email: `enquiries@londonhomecare.co.uk`
  - London & surrounding counties coverage breakdown and client FAQ accordion.

## Local Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website locally.

## Production Build

```bash
npm run build
npm start
```

## Push to GitHub

1. Create a repository named `london-homecare` on GitHub under your account (`devsharp-dev`):
   - Direct link: [https://github.com/new](https://github.com/new)
2. Push the local code:
   ```bash
   git push -u origin main
   ```

## Deploy to Vercel (https://london-homecare.vercel.app)

### Option 1: Vercel Dashboard (Recommended)
1. Go to [https://vercel.com/new](https://vercel.com/new).
2. Import the `devsharp-dev/london-homecare` repository.
3. In **Project Name**, enter: `london-homecare`.
4. Click **Deploy**. Vercel will deploy to `https://london-homecare.vercel.app`.

### Option 2: Vercel CLI
```bash
npx vercel
```
- When prompted for project name, specify `london-homecare`.
