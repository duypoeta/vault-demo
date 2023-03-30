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
        const textStyles = "text-text-infomation hover:text-text-infomation-hover";
        const borderStyle = "border border-4 border-borderColor-primary hover:border-borderColor "
        buttonClassNames += `ring-primary bg-primary ${textStyles} ${borderStyle}`;
    }

    if (theme === "secondary") {
        buttonClassNames += "ring-primary-1 text-primary-1 bg-white border border-primary-1";
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
