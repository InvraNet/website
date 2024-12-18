import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset"; // HTML button type
  variant?: "primary" | "secondary" | "danger" | "outline"; // Button variants
  size?: "sm" | "md" | "lg"; // Button size
  disabled?: boolean; // If the button is disabled
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
}) => {
  // Define button style based on the variant and size
  const baseStyles = "rounded-lg font-semibold focus:outline-none";
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
    outline:
      "bg-transparent border-2 border-gray-500 text-gray-500 hover:bg-gray-100",
  };
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  // Combine all classes
  const buttonClassNames = `${baseStyles} ${variantStyles[variant]} ${
    sizeStyles[size]
  } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

  return (
    <button
      type={type}
      className={buttonClassNames}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
