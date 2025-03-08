import Link from "next/link";
import React from "react";
import { tv, type VariantProps } from 'tailwind-variants';
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

const buttonVariants = tv({
    base: "cursor-pointer flex justify-center place-items-center rounded-default",
    variants: {
        color: {
            primary: "bg-primary text-primary-foreground hover:bg-primary/90",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            ghost: "bg-transparent text-primary-foreground hover:bg-primary/10",
            outline: "bg-transparent text-primary-foreground border border-primary hover:bg-primary/10",
        },
        size: {
            md: "py-2 px-4",
            lg: "py-3 px-6",
            sm: "py-1 px-2",
            icon: "p-2",
        }
    },
    defaultVariants: {
        color: "primary",
        size: "md",
    }
})

type ButtonColor = VariantProps<typeof buttonVariants>["color"];
type ButtonSize = VariantProps<typeof buttonVariants>["size"];

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement> & {
    color?: ButtonColor,
    size?: ButtonSize,
}

export default function Button({ children, href, className, color = "primary", size = "md", ...props }: ButtonProps) {
    return href ? (
        <Link
            href={href}
            className={`p-2 bg-primary text-primary-foreground cursor-pointer hover:bg-primary/90 flex justify-center place-items-center rounded-default ${className}`}
            {...props}
        >
            {children}
        </Link>
    ) : (
        <button
            className={buttonVariants({ color, size, className })}
            {...props}
        >
            {children}
        </button>
    )
}