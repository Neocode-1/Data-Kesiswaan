import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";

export default function AppLogo({ colorText }) {
    return (
        <Link href="#" className={cn('flex flex-row items-center gap-x-2')}>
            <div className={cn('grid flex-1 text-left leading-tight', colorText)}>
                <span className="font-bold truncate">Data Kesiswaan</span>
            </div>
        </Link>
    );
}
