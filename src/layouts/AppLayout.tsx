import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "@/components/Sidebar";
import { Bell, Home, MessageSquare, Settings, User } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const AppLayout = () => {
  return (
    <div className="w-screen h-screen">
      <div className="max-w-screen-2xl h-full mx-auto">
        <div className="xl:w-3/4 md:w-full mx-auto h-full">
          <SidebarProvider>
            <div className="hidden md:block">
              <AppSidebar />
            </div>
            {/* MOBILE HEADER (Instagram Style) */}
            <Card className="md:hidden fixed top-0 left-0 w-full border-b z-50">
              <div className="flex items-center justify-between px-4 h-3">
                <h1 className="text-lg font-semibold tracking-tight">
                  Instagram
                </h1>

                <div className="flex items-center gap-4">
                  <button>
                    <Bell className="h-6 w-6" />
                  </button>
                  <button>
                    <MessageSquare className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </Card>
            <main className="w-full h-screen lg:grid lg:grid-cols-[65%_35%]">
              <Outlet />
              <section className="hidden lg:block py-4">
                <Card className="py-3">
                  <CardHeader>Comments</CardHeader>
                  <CardContent className="h-64 border-t-2">

                    <section className="hidden overflow-x-hidden no-scrollbar scroll-auto">hello</section>

                    <div className="w-full h-full flex justify-center items-center">
                      <p className="text-xs font-semibold text-center py-5 px-2">
                        No comments on this post
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <footer className="py-4">
                  <h3 className="text-xl font-semibold text-center px-2">
                    Edvora
                  </h3>
                  <h5 className="text-md font-semibold text-center px-2">
                    Social Media Platform
                  </h5>
                  <p className="text-xs font-semibold text-center py-5 px-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta, excepturi?
                  </p>
                </footer>
              </section>
            </main>
            {/* MOBILE BOTTOM NAV */}
            <Card className="md:hidden fixed bottom-0 left-0 w-full border-t shadow-md z-50">
              <div className="flex justify-around items-center h-3">
                <button className="flex flex-col items-center text-xs">
                  <Home size={20} />
                  Home
                </button>
                <button className="flex flex-col items-center text-xs">
                  <User size={20} />
                  Profile
                </button>
                <button className="flex flex-col items-center text-xs">
                  <Settings size={25} />
                  Settings
                </button>
              </div>
            </Card>
          </SidebarProvider>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
