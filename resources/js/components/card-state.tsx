import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

import { ReactNode } from "react";

interface CardStateData {
    title: string;
    background: string;
    className?: string;
    icon?: React.ComponentType<{ className?: string }>;
    iconClassName?: string;
}

export default function CardState({ data, children }: { data: CardStateData; children: ReactNode }) {
    const { title, background, className = '', icon: Icon, iconClassName = '' } = data

    return (
        <Card className={cn(background, className)}>
            <CardHeader className="flex flex-row items-center justify-between space-y-8 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                {Icon && <Icon className={cn('size-5', iconClassName)}/>}
            </CardHeader>
            <CardContent>{ children }</CardContent>
        </Card>
    )
}
