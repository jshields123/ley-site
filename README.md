## LEY - a fictional recruitment and HR consultancy.

This web app was created to utilize the newest version of Next.js and familiarize myself with the new Next.js v13 updates. The site is a single-page website with animated elements that appear on scroll and is fully mobile-responsive. At the bottom of the page, there is a sign-up form that uses Resend.js to trigger a welcome email and an email to the business owner to flag the contact details. The contact details are also added to a Google Sheet using the Google Spreadsheet API.

The code is structured into React components written with TypeScript interface files and CSS modules. These components make up several page sections, which are then used to compose the `page.tsx` file. The styling has been done using CSS modules to avoid naming conflicts and with basic CSS due to it's simplicity and readability compared to more "complex" styling solutions such as scss or tailwind.

The majority of the code is server-side rendered (SSR), ensuring quick load times. The API calls are the only client-side files as needed. The site has been performance-tested through Lighthouse for performance, accessibility, best practices, and SEO, achieving a score of 98/100.

The automated emailing functionality was implemented after a couple of test runs with other solutions including a spike on react-email and others that turned out not to be as intuitive as Resend.js. I was super impressed with the set up and ease of use of this service with the resulting emails looking very clean after creating some simple email templates.

The backend of the app was initially using a mongodb db that I was then intending on linking up with the google sheet api as the client would use that as their platform to contact the prospective clients and contacts. After setting up the database I realized that there was a way of cutting out the database step and instead linking directly with the google sheets api. This not only streamlined the steps for myself it also meant the project had a MVP quicker than anticipated.

The site's design was created by myself on Figma. While I am not a web designer, I have attempted to select a color palette that aligns with the client's brief, representing classic, high-quality, and professional work that the consultancy provides.

Areas where the codebase could still benefit from improvement include consolidating and refactoring some of the components and cleaning up the styling. Basic tests for the API calls are in place, and I am also working on achieving test coverage for the components through unit testing.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployed on Vercel

This application has been deployed on vercel and the live version can be accessed at https://ley-site.vercel.app/.
