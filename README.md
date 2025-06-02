# Kollegio Frontend Dashboard

This project is a Next.js 14 (App Router) dashboard using [shadcn/ui](https://ui.shadcn.com/) components, TypeScript, and Tailwind CSS.  
It displays user and log data fetched from a local API and provides analytics cards, a data table, and interactive charts.

## Features

- **Dashboard UI** with sidebar, header, and responsive layout
- **User Table**: Displays ID, Name, Company, Email, and Phone
- **Section Cards**: Shows total, successful, failed requests, and success rate
- **Server-side Data Fetching**: Uses Next.js server components for SSR
- **Type-safe**: Uses Zod for schema validation

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- [pnpm](https://pnpm.io/) or npm

### Installation

1. **Clone the repo:**

   ```sh
   git clone https://github.com/Ingila185/kollegio-frontend.git
   cd kollegio-frontend
   ```

2. **Install dependencies:**

   ```sh
   npm install
   # or
   pnpm install
   ```

3. **Start the local API server** (must be running on `http://localhost:3001`):

   - The API should provide `/users` and `/logs` endpoints.
   - Example user object:
     ```json
     {
       "id": 1,
       "name": "Leanne Graham",
       "username": "Bret",
       "email": "Sincere@april.biz",
       "phone": "1-770-736-8031 x56442",
       "website": "hildegard.org",
       "company": {
         "name": "Romaguera-Crona",
         "catchPhrase": "Multi-layered client-server neural-net",
         "bs": "harness real-time e-markets"
       }
     }
     ```

4. **Run the development server:**

   ```sh
   npm run dev
   # or
   pnpm dev
   ```

5. **Open [http://localhost:3000/dashboard](http://localhost:3000/dashboard)** in your browser.

## Project Structure

- `app/dashboard/page.tsx` - Main dashboard page, fetches users and logs, renders layout
- `components/data-table.tsx` - Table component for displaying user data
- `components/section-cards.tsx` - Analytics cards for request stats
- `components/chart-area-interactive.tsx` - Chart component (if present)
- `components/app-sidebar.tsx`, `components/site-header.tsx` - Layout components

## Customization

- **API Endpoints:**  
  Update the URLs in `getUsers` and `getLogs` in `app/dashboard/page.tsx` if your API runs elsewhere.

- **Table Columns:**  
  Edit `columns` in `components/data-table.tsx` to change which user fields are shown.

- **Analytics Cards:**  
  The logic for success/failure is in `components/section-cards.tsx` and expects each log to have a `success` boolean.

## Scripts

- `npm run dev` - Start the Next.js development server
- `npm run build` - Build for production
- `npm run start` - Start the production server

## License

MIT

---

**Built with [shadcn/ui](https://ui.shadcn.com/) and Next.js**
