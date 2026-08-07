const variants = {
  success: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",

  danger: "bg-red-500/15 text-red-400 border border-red-500/30",

  warning: "bg-yellow-500/15 text-yellow-400 border border-yellow-500/30",

  info: "bg-sky-500/15 text-sky-400 border border-sky-500/30",

  primary: "bg-lime-400/15 text-lime-400 border border-lime-400/30",

  secondary: "bg-zinc-800 text-zinc-300 border border-zinc-700",
};

const sizes = {
  sm: "px-2.5 py-1 text-xs",
  md: "px-3 py-1 text-sm",
  lg: "px-4 py-1.5 text-sm",
};

const Badge = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
}) => {
  return (
    <span
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        font-medium
        whitespace-nowrap
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;
