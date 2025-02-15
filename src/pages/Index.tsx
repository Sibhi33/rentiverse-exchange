
import { motion } from "framer-motion";
import { SearchBar } from "@/components/SearchBar";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";

const categories = [
  {
    title: "Vehicles",
    icon: "car",
    description: "From Royal Enfields to Family Cars",
  },
  {
    title: "Spaces",
    icon: "home",
    description: "Venues for Weddings & Celebrations",
  },
  {
    title: "Fashion",
    icon: "shirt",
    description: "Traditional & Modern Attire",
  },
  {
    title: "Accessories",
    icon: "watch",
    description: "Jewelry & Modern Accessories",
  },
];

const featuredProducts = [
  {
    title: "Royal Enfield Classic",
    price: 35,
    image: "https://images.unsplash.com/photo-1615813967515-e1838c1c5116?auto=format&fit=crop&q=80",
    rating: 4.8,
    category: "Vehicles",
  },
  {
    title: "Wedding Venue",
    price: 1200,
    image: "https://images.unsplash.com/photo-1561533102-76b0a0b64e18?auto=format&fit=crop&q=80",
    rating: 4.9,
    category: "Spaces",
  },
  {
    title: "Designer Lehenga",
    price: 45,
    image: "https://images.unsplash.com/photo-1585938389612-a552a28d6914?auto=format&fit=crop&q=80",
    rating: 4.7,
    category: "Fashion",
  },
  {
    title: "DSLR Camera",
    price: 40,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&q=80",
    rating: 4.9,
    category: "Electronics",
  },
  {
    title: "Wedding Sherwani",
    price: 35,
    image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80",
    rating: 4.6,
    category: "Fashion",
  },
  {
    title: "Electric Scooter",
    price: 25,
    image: "https://images.unsplash.com/photo-1632312527047-61e8c31aaa5e?auto=format&fit=crop&q=80",
    rating: 4.8,
    category: "Vehicles",
  },
  {
    title: "Sound System",
    price: 100,
    image: "https://images.unsplash.com/photo-1520766607168-d6a082dc8a67?auto=format&fit=crop&q=80",
    rating: 4.7,
    category: "Electronics",
  },
  {
    title: "Study Material",
    price: 10,
    image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&q=80",
    rating: 4.5,
    category: "Books",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary to-accent text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/40" />
          <img
            src="https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?auto=format&fit=crop&q=80"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-montserrat text-3xl md:text-6xl font-bold mb-4 md:mb-6"
          >
            किराए पर लें, कहीं से भी
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto"
          >
            From Traditional to Modern, Rent What You Need
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="px-4 md:px-0"
          >
            <SearchBar />
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
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
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-center mb-3 md:mb-4">
            Featured Rentals
          </h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto px-4 md:px-0">
            Making everything available for everyone - from traditional wear to modern gadgets
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
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
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-8 md:mb-12">
            Rent with Confidence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-4 md:p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-accent/10">
                <motion.svg
                  className="w-6 h-6 md:w-8 md:h-8 text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </motion.svg>
              </div>
              <h3 className="font-montserrat font-semibold text-lg md:text-xl mb-2">Secure Payments</h3>
              <p className="text-gray-600 text-sm md:text-base">UPI & Secure payment options</p>
            </div>
            <div className="p-4 md:p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-accent/10">
                <motion.svg
                  className="w-6 h-6 md:w-8 md:h-8 text-accent"
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
              <h3 className="font-montserrat font-semibold text-lg md:text-xl mb-2">Verified Users</h3>
              <p className="text-gray-600 text-sm md:text-base">ID verified community members</p>
            </div>
            <div className="p-4 md:p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-accent/10">
                <motion.svg
                  className="w-6 h-6 md:w-8 md:h-8 text-accent"
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
              <h3 className="font-montserrat font-semibold text-lg md:text-xl mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm md:text-base">Customer support in local languages</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
