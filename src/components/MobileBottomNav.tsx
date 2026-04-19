import { Card } from "@/components/ui/card"
import { mobileNavItems } from "@/lib/constants/mobileNavItems" // adjust path
import { Link } from "react-router-dom"

export function MobileBottomNav() {
  return (
    <Card className="md:hidden fixed bottom-0 left-0 w-full border-t shadow-md z-50 py-3 rounded-none">
      <div className="flex justify-around items-center">
        {mobileNavItems.map((item: any) => {
          const Icon = item.icon

          return (
            <Link
              key={item.title}
              to={item.url}
              className="text-xs text-muted-foreground hover:text-primary transition"
            >
              <Icon size={22} />
            </Link>
          )
        })}
      </div>
    </Card>
  )
}