import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode; 
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <Link href="/" className="flex gap-2 items-center justify-center hover:bg-slate-800 p-2 bg-red-600 rounded-lg shadow-lg text-white font-medium text-base border">
      {children}
    </Link>
  );
};

export default Button;