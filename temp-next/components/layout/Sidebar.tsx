'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, LifeBuoy, Repeat, ChevronRight } from "lucide-react";
import { NAV_ITEMS, APP } from "@/lib/constants";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

export function Sidebar({ open = true, onNavigate }) {
  const path = usePathname();

  const isActive = (to: string) =>
    to === "/dashboard" ? path === "/dashboard" : path.startsWith(to);

  return (
    <aside>
      {/* ...unchanged code */}

      <nav>
        <ul>
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.to);

            return (
              <li key={item.to}>
                <Link
                  href={item.to}
                  onClick={onNavigate}
                  className={cn(
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-sidebar-foreground"
                  )}
                >
                  <Icon />
                  <span>{item.title}</span>
                  {active && <ChevronRight />}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}