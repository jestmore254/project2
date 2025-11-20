# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.









Sample Data (MongoDB)
Sample Farmer
{
  "name": "John Mwangi",
  "phone": "254712345678",
  "password": "password123",
  "role": "farmer"
}

Sample Admin
{
  "name": "Admin User",
  "phone": "254700000000",
  "password": "admin123",
  "role": "admin"
}

7️⃣ Run Backend
cd coffee-care-backend
npm run dev


Port: 5000

Endpoints:

/auth/register

/auth/login

/farmers (admin only)

/deliveries (CRUD)

/payments/mpesa/stkpush (admin only)

/payments/mine (farmer only)


Coffee Care Frontend Project Structure
coffee-care-frontend/
├─ package.json
├─ vite.config.js
├─ tailwind.config.js
├─ postcss.config.js
├─ .env
├─ node_modules/
└─ src/
   ├─ main.jsx             # Entry point
   ├─ index.css            # Tailwind & global styles
   ├─ App.jsx              # Main app with routes
   ├─ components/          # Reusable components
   │   ├─ Navbar.jsx       # Top navigation bar
   │   ├─ Footer.jsx       # Footer component
   │   ├─ Sidebar.jsx      # Collapsible dark-mode sidebar
   │   ├─ DeliveryCard.jsx # Individual delivery card with status badge
   │   └─ PaymentCard.jsx  # Individual payment card with status badge
   ├─ pages/               # Page components
   │   ├─ Home.jsx                 # Dashboard landing page with stats cards
   │   ├─ FarmerDashboard.jsx      # Farmer dashboard with sidebar & content
   │   ├─ AdminDashboard.jsx       # Admin dashboard with sidebar & content
   │   ├─ Payments.jsx             # Payments page with search/filter & cards
   │   ├─ Deliveries.jsx           # Deliveries page with search/filter & status update
   │   ├─ Login.jsx                # Login form with validation & dark mode
   │   └─ Register.jsx             # Register form with validation & dark mode
   └─ assets/              # Optional folder for images, icons, or static files

Highlights of this structure

Modular Components

Navbar, Footer, Sidebar, PaymentCard, DeliveryCard are reusable.

Page Separation

Each page has a single responsibility, making it easy to maintain.

Dark Mode & Responsive Design

Sidebar and all pages respond to dark/light mode toggle.

Layout is mobile-first, responsive, and professional.

Future-proof

assets/ folder ready for images/icons.

Pages and components easily scalable.

Environment-ready

.env contains API URL for backend integration.
Coffee Care Frontend Navigation Flow
                    ┌────────────┐
                    │   Navbar   │
                    └─────┬──────┘
                          │
                          ▼
                       ┌─────┐
                       │Home │
                       │Stats│
                       └─────┘
                          │
          ┌───────────────┼────────────────┐
          ▼                               ▼
 ┌─────────────────┐               ┌─────────────────┐
 │FarmerDashboard  │               │AdminDashboard   │
 │Sidebar + Cards  │               │Sidebar + Cards  │
 └────────┬────────┘               └────────┬────────┘
          │                               │
  ┌───────┼─────────┐             ┌───────┼─────────┐
  ▼                 ▼             ▼                 ▼
┌────────────┐   ┌────────────┐ ┌────────────┐   ┌────────────┐
│Payments.jsx│   │Deliveries.jsx││Payments.jsx│   │Deliveries.jsx│
│PaymentCard │   │DeliveryCard ││PaymentCard │   │DeliveryCard │
└────────────┘   └────────────┘ └────────────┘   └────────────┘
          │
          ▼
      ┌─────────┐
      │Status   │
      │Updates  │
      └─────────┘

          ┌────────────┐
          │Login.jsx   │
          │Form       │
          └─────┬──────┘
                │
                ▼
          ┌────────────┐
          │Register.jsx│
          │Form       │
          └────────────┘

Legend / Notes

Navbar: Present on all pages for quick navigation.

Sidebar: Collapsible on mobile, contains links to Dashboards, Payments, Deliveries, and Dark Mode toggle.

Home: Shows stats cards for Total Farmers, Deliveries, Payments, and Pending Payments.

Dashboards: Farmer/Admin dashboards use Sidebar + main content cards.

Payments & Deliveries:

Cards display data (PaymentCard/DeliveryCard)

Deliveries have status update buttons

Search/filter works for both pages

Authentication:

Login & Register pages are integrated into the sidebar layout for consistent UX.

Dark Mode:

Works across all pages via sidebar toggle

Responsive Layout:

Mobile-first, adjusts sidebar and content grids automatically

This visual map shows user flow:

User starts at Home → chooses Farmer/Admin Dashboard → navigates to Payments or Deliveries → can update statuses.

Login/Register are separate but use the same sidebar layout for consistency.