import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "@/components/Sidebar";
import RightSidebar from "@/components/RightSidebar";
import { MobileBottomNav } from "@/components/MobileBottomNav";

const AppLayout = () => {
  return (
    <div className="w-screen h-screen">
      <div className="max-w-screen-2xl h-full mx-auto">
        <div className="xl:w-3/4 md:w-full mx-auto h-full">
          <SidebarProvider>
            <div className="hidden md:block">
              <AppSidebar />
            </div>
            <main className="w-full h-screen lg:grid lg:grid-cols-[65%_35%]">
              <Outlet />
              <RightSidebar />
            </main>
            <MobileBottomNav />
          </SidebarProvider>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
