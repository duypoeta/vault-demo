import { ReactNode } from "react";

interface ButtonProps {
    title: string;
    icon?: ReactNode;
    theme?: "primary" | "secondary";
    className?: string;
}

const Button = (props: ButtonProps) => {
    const { theme, icon, title, className } = props;

    let buttonClassNames: string = "flex rounded-md ring-1 ring-inset gap-x-2 text-sm font-semibold items-center ";

    if (theme === "primary") {
        buttonClassNames += "ring-background text-text-button bg-background border border-border-button";
    }

    if (theme === "secondary") {
        buttonClassNames += "ring-background-1 text-text-button-secondary bg-white border border-border-button-1";
    }

    buttonClassNames += ` ${className}`;

    return (
        <button type="button" className={buttonClassNames}>
            {title}
            {icon}
        </button>
    );
};

export default Button;
