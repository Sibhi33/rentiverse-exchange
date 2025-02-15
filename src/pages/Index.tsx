
import { motion } from "framer-motion";
import { SearchBar } from "@/components/SearchBar";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";

const categories = [
  {
    title: "Vehicles",
    icon: "car",
    description: "Cars, bikes, and more for your journey",
  },
  {
    title: "Spaces",
    icon: "home",
    description: "Find the perfect venue for your event",
  },
  {
    title: "Fashion",
    icon: "shirt",
    description: "Designer clothes and accessories",
  },
  {
    title: "Accessories",
    icon: "watch",
    description: "Watches, jewelry, and more",
  },
];

const featuredProducts = [
  {
    title: "Luxury SUV",
    price: 150,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80",
    rating: 4.8,
    category: "Vehicles",
  },
  {
    title: "Event Space",
    price: 500,
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
    rating: 4.9,
    category: "Spaces",
  },
  {
    title: "Designer Watch",
    price: 75,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80",
    rating: 4.7,
    category: "Accessories",
  },
  {
    title: "Professional Camera",
    price: 45,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&q=80",
    rating: 4.9,
    category: "Electronics",
  },
  {
    title: "Classic Blazer",
    price: 25,
    image: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&q=80",
    rating: 4.6,
    category: "Fashion",
  },
  {
    title: "Mountain Bike",
    price: 35,
    image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&q=80",
    rating: 4.8,
    category: "Vehicles",
  },
  {
    title: "DJ Equipment",
    price: 120,
    image: "https://images.unsplash.com/photo-1571266014386-d60451387c87?auto=format&fit=crop&q=80",
    rating: 4.7,
    category: "Electronics",
  },
  {
    title: "Book Collection",
    price: 15,
    image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&q=80",
    rating: 4.5,
    category: "Books",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary to-accent text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/40" />
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-montserrat text-4xl md:text-6xl font-bold mb-6"
          >
            Rent Anything, Anywhere
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl mb-12 max-w-2xl mx-auto"
          >
            From vehicles to venues, find exactly what you need
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <SearchBar />
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat text-3xl font-bold text-center mb-12">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CategoryCard {...category} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat text-3xl font-bold text-center mb-4">
            Featured Rentals
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Making everything available for everyone - from books to bikes, blazers to equipment
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat text-3xl font-bold mb-12">
            Rent with Confidence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-accent/10">
                <motion.svg
                  className="w-8 h-8 text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </motion.svg>
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-2">Secure Payments</h3>
              <p className="text-gray-600">Protected transactions for peace of mind</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-accent/10">
                <motion.svg
                  className="w-8 h-8 text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </motion.svg>
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-2">Verified Users</h3>
              <p className="text-gray-600">Trusted community of renters and owners</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-accent/10">
                <motion.svg
                  className="w-8 h-8 text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </motion.svg>
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-2">24/7 Support</h3>
              <p className="text-gray-600">Always here to help when you need us</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
