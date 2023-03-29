import { ReactNode } from "react";

interface ButtonProps {
    title: string;
    icon?: ReactNode;
    theme?: "primary" | "secondary";
    className?: string;
}

const Button = (props: ButtonProps) => {
    const { theme, icon, title, className } = props;

    let buttonClassNames: string =
        "flex py-3 px-5 rounded-md ring-1 ring-inset gap-x-2 text-sm font-semibold items-center ";

    if (theme === "primary") {
        buttonClassNames += "ring-brown text-white bg-brown border border-brown";
    }

    if (theme === "secondary") {
        buttonClassNames += "ring-dark-brown text-dark-brown bg-white border border-dark-brown";
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
