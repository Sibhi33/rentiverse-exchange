
import { motion } from "framer-motion";
import { Car, Home, Watch, Shirt } from "lucide-react";

interface CategoryCardProps {
  title: string;
  icon: string;
  description: string;
}

const icons = {
  car: Car,
  home: Home,
  watch: Watch,
  shirt: Shirt,
};

export const CategoryCard = ({ title, icon, description }: CategoryCardProps) => {
  const Icon = icons[icon as keyof typeof icons];

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-3 bg-accent/10 rounded-full">
          <Icon className="w-8 h-8 text-accent" />
        </div>
        <h3 className="font-montserrat font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};
