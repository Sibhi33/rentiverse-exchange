
import { motion } from "framer-motion";
import { SearchBar } from "@/components/SearchBar";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const featuredProducts = [
  {
    title: "Professional DSLR Camera",
    price: 499,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80",
    rating: 4.8,
    category: "Electronics",
    owner: {
      name: "Priya Photography",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      rating: 4.9
    }
  },
  {
    title: "Designer Wedding Lehenga",
    price: 2999,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80",
    rating: 4.9,
    category: "Fashion",
    owner: {
      name: "Ethnic Rentals",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
      rating: 4.7
    }
  },
  {
    title: "Banquet Hall - 500 Capacity",
    price: 15000,
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80",
    rating: 4.7,
    category: "Venues",
    owner: {
      name: "Grand Celebrations",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      rating: 4.8
    }
  },
  {
    title: "Royal Enfield Meteor 350",
    price: 799,
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80",
    rating: 4.6,
    category: "Vehicles",
    owner: {
      name: "Bike Rentals",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
      rating: 4.5
    }
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="font-montserrat text-xl font-bold text-accent">RentSocial</h1>
          <div className="flex-1 max-w-xl mx-4">
            <SearchBar />
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" /> List Item
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 md:py-12">
        {/* Feed Navigation */}
        <div className="flex items-center justify-center mb-8 space-x-4">
          <Button variant="ghost" className="font-semibold">For You</Button>
          <Button variant="ghost" className="font-semibold">Following</Button>
          <Button variant="ghost" className="font-semibold">Near You</Button>
        </div>

        {/* Product Feed */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Items
          </Button>
        </div>
      </main>

      {/* Float Action Button - Mobile */}
      <Button 
        className="fixed bottom-6 right-6 rounded-full shadow-lg md:hidden w-14 h-14 p-0"
      >
        <Plus className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default Index;
