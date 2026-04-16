import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <Navbar />
      <Sidebar />
      <main className="flex-1 ml-64 pt-16 h-screen overflow-y-auto overflow-x-hidden">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
