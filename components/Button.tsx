import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  onClick?: () => void; // Function type
};

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
    aria-label={title}
      className={`flexCenter gap-3 rounded-full ${variant} ${full && "w-full"}`}
      type={type}
    >
      {icon && <Image src={icon} alt={`${title} icon`} width={24} height={24} />}
      <span className="bold-20 whitespace-nowrap cursor-pointer capitalize">
        {title}
      </span>
    </button>
  );
};

export default Button;
