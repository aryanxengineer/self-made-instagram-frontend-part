import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { sidebarItems, chatSidebarItems } from "@/configs/sidebar";
import { Link, useLocation } from "react-router-dom";

export function AppSidebar() {
  const { pathname } = useLocation();

  const isChat = pathname.endsWith("/chat");
  let items;

  if (isChat) {
    items = chatSidebarItems;
  } else {
    items = sidebarItems;
  }

  return (
    <Sidebar collapsible="icon" className="border-r">
      {/* LOGO */}
      <SidebarHeader className="h-16 flex items-center px-4 text-xl font-semibold">
        {
          isChat ? "Conversations" : "Edvora"
        }
      </SidebarHeader>

      {/* MAIN NAV */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {items.map((item) => {
              const isActive = pathname === item.url;

              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive}
                    className="justify-start gap-4 px-4 py-3"
                  >
                    <Link to={item.url}>
                      <item.icon className="w-6 h-6" />
                      <span className="text-base">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* FOOTER */}
      <SidebarFooter className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="justify-start gap-4 px-4 py-3"
            >
              <Link to="/settings">
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
