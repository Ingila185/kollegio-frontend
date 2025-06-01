import { AppSidebar } from "@/components/app-sidebar";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

async function getUsers() {
  const res = await fetch("http://localhost:3001/users", { cache: "no-store" });
  const data = await res.json();
  const users = Array.isArray(data) ? data : data.users; // Handles both array and object
  const mappedUsers = users.map((user: any) => ({
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    phone: user.phone,
    website: user.website,
    company: user.company ?? { name: "", catchPhrase: "", bs: "" }, // fallback if company missing
  }));

  return mappedUsers;
}

async function getLogs() {
  const res = await fetch("http://localhost:3001/logs", { cache: "no-store" });
  const data = await res.json();
  console.log("Logs data:", data); // Debugging log
  return data.logs || [];
}

export default async function Page() {
  const users = await getUsers();
  const logs = await getLogs();

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards data={logs} />
              <DataTable data={users} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
