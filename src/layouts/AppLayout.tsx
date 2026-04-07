import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "@/components/Sidebar";

const AppLayout = () => {
  return (
    <div className="w-screen h-screen">
      <div className="max-w-screen-2xl h-full mx-auto">
        <div className="w-3/4 mx-auto h-full">
          <SidebarProvider>
            <AppSidebar />
            <main className="w-full h-screen grid grid-cols-[65%_35%]">
              <section className="h-screen w-full border-r">
                <Outlet />
              </section>
              <section className="w-full h-screen">
                <div className="h-full p-2 grid grid-rows-[40%_60%]">
                  <div>Activity</div>
                  <div>Footer</div>
                </div>
              </section>
            </main>
          </SidebarProvider>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
