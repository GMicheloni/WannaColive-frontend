// components/Card.tsx
import Link from "next/link";

interface CardProps {
  title: string;
  icon: React.ReactNode;
  href: string;
}

export const Card = ({ title, icon, href }: CardProps) => {
  return (
    <Link href={href} className="w-48">
      <div className="flex flex-col items-center justify-center gap-2 p-6 transition border border-gray-400 shadow-md cursor-pointer rounded-2xl hover:shadow-lg hover:scale-105">
        <div className="text-4xl">{icon}</div>
        <span className="text-lg font-semibold">{title}</span>
      </div>
    </Link>
  );
};
