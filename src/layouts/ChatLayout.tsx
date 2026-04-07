import { AppSidebar } from "@/components/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const ChatLayout = () => {
  return (
    <div className="w-screen h-screen">
      <div className="max-w-screen-2xl h-full mx-auto">
        <div className="w-3/4 mx-auto h-full bg-green-500">
          <SidebarProvider>
            <AppSidebar />
            <main>
              <Outlet />
            </main>
          </SidebarProvider>
        </div>
      </div>
    </div>
  );
};

export default ChatLayout;
