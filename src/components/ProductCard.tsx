
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  rating: number;
  category: string;
}

export const ProductCard = ({ title, price, image, rating, category }: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <div className="inline-block px-2 py-1 mb-2 text-xs font-medium bg-accent/10 text-accent rounded-full">
          {category}
        </div>
        <h3 className="font-montserrat font-semibold text-lg truncate">{title}</h3>
        <div className="flex items-center justify-between mt-2">
          <p className="text-accent font-semibold">${price}/day</p>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="ml-1 text-sm text-gray-600">{rating}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
