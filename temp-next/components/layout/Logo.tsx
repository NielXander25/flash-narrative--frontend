import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/flash-narrative-logo.png";
import { cn } from "@/lib/utils";

interface LogoProps {
  withText?: boolean;
  className?: string;
  size?: number;
}

export function Logo({ withText = true, className, size = 32 }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5", className)} aria-label="Flash Narrative home">
      <Image
        src={logo}
        alt="Flash Narrative logo"
        width={size}
        height={size}
        className="rounded-md"
      />
      {withText && (
        <div className="leading-tight">
          <div className="text-xs font-bold tracking-[0.18em] text-primary">FLASH</div>
          <div className="text-[10px] font-semibold tracking-[0.22em] text-muted-foreground">
            NARRATIVE
          </div>
        </div>
      )}
    </Link>
  );
}
