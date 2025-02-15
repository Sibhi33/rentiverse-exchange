
import { motion } from "framer-motion";
import { Star, Heart, MessageSquare, Share2 } from "lucide-react";
import { Button } from "./ui/button";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  rating: number;
  category: string;
  owner?: {
    name: string;
    avatar: string;
    rating: number;
  };
}

export const ProductCard = ({ title, price, image, rating, category, owner }: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {owner && (
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-black/50 rounded-full p-2">
          <img src={owner.avatar} alt={owner.name} className="w-6 h-6 rounded-full" />
          <span className="text-white text-sm">{owner.name}</span>
        </div>
      )}
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="inline-block px-2 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
            {category}
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm text-gray-600">{rating}</span>
          </div>
        </div>
        <h3 className="font-montserrat font-semibold text-lg truncate mb-2">{title}</h3>
        <p className="text-accent font-semibold mb-4">₹{price}/day</p>
        
        <div className="flex items-center justify-between border-t pt-4">
          <Button variant="outline" size="sm" className="flex-1 mr-2">
            Rent Now
          </Button>
          <Button variant="ghost" size="sm" className="p-2">
            <Heart className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="p-2">
            <MessageSquare className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="p-2">
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
