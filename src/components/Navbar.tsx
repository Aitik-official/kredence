import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NavLink } from "@/components/NavLink";
import { Menu, ChevronDown, Search, X } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { products } from "@/pages/ProductsPage";

// Filter products into Fence and Metals categories
const fenceProducts = products.filter(
  (product) => 
    product.category === "Fencing" || 
    product.category === "Mesh" ||
    product.id === "fencing-panels" ||
    product.id === "pvc-fence" ||
    product.id === "wire-mesh" ||
    product.id === "chain-link-fence"
);

const metalsProducts = products.filter(
  (product) => 
    product.category !== "Fencing" && 
    product.category !== "Mesh" &&
    product.id !== "fencing-panels" &&
    product.id !== "pvc-fence" &&
    product.id !== "wire-mesh" &&
    product.id !== "chain-link-fence"
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsHovered, setIsProductsHovered] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Filter products based on search query
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return products.filter(
      (product) =>
        product.title.toLowerCase().includes(query) ||
        product.description?.toLowerCase().includes(query) ||
        product.fullDescription?.toLowerCase().includes(query) ||
        product.category?.toLowerCase().includes(query)
    ).slice(0, 5); // Limit to 5 results
  }, [searchQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      navigate(`/${searchResults[0].id}`);
      setSearchQuery("");
      setIsSearchFocused(false);
    }
  };

  const handleProductClick = (productId: string) => {
    navigate(`/${productId}`);
    setSearchQuery("");
    setIsSearchFocused(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-white shadow-elegant">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center min-h-[70px] gap-3">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/kredence%20logo.png"
                alt="Kredence logo"
                className="h-[100px] w-[120px]"
              />
            </Link>
          </div>

          {/* Search Bar - Between Logo and Navigation */}
          <div className="hidden md:block relative flex-1 max-w-md mx-4">
            <form onSubmit={handleSearchSubmit} className="relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#4A5459]" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                  className="pl-10 pr-10 w-full h-11 text-base border-[#2E6A92]/20 focus:border-[#2E6A92] focus:ring-[#2E6A92]/20 rounded-lg"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4A5459] hover:text-[#2E6A92]"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              
              {/* Search Results Dropdown */}
              {isSearchFocused && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 rounded-xl bg-white shadow-2xl border border-gray-100 overflow-hidden z-50 max-h-96 overflow-y-auto">
                  <div className="py-2">
                    {searchResults.map((product) => (
                      <button
                        key={product.id}
                        type="button"
                        onClick={() => handleProductClick(product.id)}
                        className="w-full text-left px-6 py-3 text-base font-medium text-[#4A5459] transition-all duration-200 hover:bg-[#2E6A92]/5 hover:text-[#2E6A92] flex items-start gap-3"
                      >
                        <div className="flex-1">
                          <div className="font-semibold text-[#2E6A92]">{product.title}</div>
                          <div className="text-sm text-[#4A5459]/70 mt-1 line-clamp-1">
                            {product.description || product.fullDescription}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </form>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 mr-16">
            {/* Home */}
            <NavLink
              to="/"
              className="group relative inline-flex items-center text-lg font-semibold text-[#4A5459] transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#2E6A92]/70 after:transition-all after:duration-300 hover:text-[#2E6A92] hover:after:w-full"
              activeClassName="text-[#2E6A92] after:w-full after:bg-[#2E6A92]"
            >
              Home
            </NavLink>

            {/* About Us */}
            <NavLink
              to="/why-us"
              className="group relative inline-flex items-center text-lg font-semibold text-[#4A5459] transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#2E6A92]/70 after:transition-all after:duration-300 hover:text-[#2E6A92] hover:after:w-full"
              activeClassName="text-[#2E6A92] after:w-full after:bg-[#2E6A92]"
            >
              About Us
            </NavLink>
            
            {/* Products Dropdown - Hover Based */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsHovered(true)}
              onMouseLeave={() => setIsProductsHovered(false)}
            >
              <button className="group relative inline-flex items-center text-lg font-semibold text-[#4A5459] transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#2E6A92]/70 after:transition-all after:duration-300 hover:text-[#2E6A92] hover:after:w-full focus:outline-none">
                Products
                <ChevronDown className={`ml-2 h-5 w-5 transition-transform duration-300 ${isProductsHovered ? "rotate-180" : ""}`} />
              </button>
              
              {/* Dropdown Content */}
              <div
                className={`absolute top-full right-0 mt-2 w-[700px] rounded-xl bg-white shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 z-50 ${
                  isProductsHovered ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="grid grid-cols-2 divide-x divide-gray-100">
                  {/* Fence Section */}
                  <div className="py-2">
                    <div className="px-6 py-2 text-xs font-bold uppercase tracking-wider text-[#2E6A92] bg-[#2E6A92]/5 border-b border-gray-100">
                      Fence
                    </div>
                    <div className="py-1 max-h-[500px] overflow-y-auto">
                      {fenceProducts.map((product) => (
                        <Link
                          key={product.id}
                          to={`/${product.id}`}
                          onClick={() => setIsProductsHovered(false)}
                          className="block px-6 py-2.5 text-sm text-[#4A5459] transition-all duration-200 hover:bg-[#2E6A92]/5 hover:text-[#2E6A92] hover:pl-8"
                        >
                          {product.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Metals Section */}
                  <div className="py-2">
                    <div className="px-6 py-2 text-xs font-bold uppercase tracking-wider text-[#2E6A92] bg-[#2E6A92]/5 border-b border-gray-100">
                      Metals
                    </div>
                    <div className="py-1 max-h-[500px] overflow-y-auto">
                      {metalsProducts.map((product) => (
                        <Link
                          key={product.id}
                          to={`/${product.id}`}
                          onClick={() => setIsProductsHovered(false)}
                          className="block px-6 py-2.5 text-sm text-[#4A5459] transition-all duration-200 hover:bg-[#2E6A92]/5 hover:text-[#2E6A92] hover:pl-8"
                        >
                          {product.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <NavLink
              to="/contact"
              className="group relative inline-flex items-center text-lg font-semibold text-[#4A5459] transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#2E6A92]/70 after:transition-all after:duration-300 hover:text-[#2E6A92] hover:after:w-full"
              activeClassName="text-[#2E6A92] after:w-full after:bg-[#2E6A92]"
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#2E6A92] hover:bg-[#2E6A92]/10"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden space-y-3 bg-white py-4 shadow-elegant">
            {/* Search Bar for Mobile */}
            <div className="relative px-4">
              <form onSubmit={handleSearchSubmit} className="relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#4A5459]" />
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                    className="pl-10 pr-10 w-full h-11 text-base border-[#2E6A92]/20 focus:border-[#2E6A92] focus:ring-[#2E6A92]/20 rounded-lg"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4A5459] hover:text-[#2E6A92]"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
                
                {/* Search Results Dropdown for Mobile */}
                {isSearchFocused && searchResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 rounded-xl bg-white shadow-2xl border border-gray-100 overflow-hidden z-50 max-h-96 overflow-y-auto">
                    <div className="py-2">
                      {searchResults.map((product) => (
                        <button
                          key={product.id}
                          type="button"
                          onClick={() => handleProductClick(product.id)}
                          className="w-full text-left px-6 py-3 text-base font-medium text-[#4A5459] transition-all duration-200 hover:bg-[#2E6A92]/5 hover:text-[#2E6A92] flex items-start gap-3"
                        >
                          <div className="flex-1">
                            <div className="font-semibold text-[#2E6A92]">{product.title}</div>
                            <div className="text-sm text-[#4A5459]/70 mt-1 line-clamp-1">
                              {product.description || product.fullDescription}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Home */}
            <NavLink
              to="/"
              className="block py-2 text-lg font-semibold text-[#4A5459] transition-colors hover:text-[#2E6A92]"
              activeClassName="text-[#2E6A92]"
            >
              Home
            </NavLink>

            {/* About Us */}
            <NavLink
              to="/why-us"
              className="block py-2 text-lg font-semibold text-[#4A5459] transition-colors hover:text-[#2E6A92]"
              activeClassName="text-[#2E6A92]"
            >
              About Us
            </NavLink>
            
            {/* Products Dropdown for Mobile */}
            <div className="space-y-2">
              <div className="py-2 text-lg font-semibold text-[#4A5459]">Products</div>
              
              {/* Fence Section */}
              <div className="pl-4 space-y-1">
                <div className="py-1 text-xs font-bold uppercase tracking-wider text-[#2E6A92]">Fence</div>
                {fenceProducts.map((product) => (
                  <NavLink
                    key={product.id}
                    to={`/${product.id}`}
                    className="block py-1.5 pl-4 text-sm text-[#4A5459] transition-colors hover:text-[#2E6A92]"
                    activeClassName="text-[#2E6A92]"
                  >
                    {product.title}
                  </NavLink>
                ))}
              </div>

              {/* Metals Section */}
              <div className="pl-4 space-y-1 mt-3">
                <div className="py-1 text-xs font-bold uppercase tracking-wider text-[#2E6A92]">Metals</div>
                {metalsProducts.map((product) => (
                  <NavLink
                    key={product.id}
                    to={`/${product.id}`}
                    className="block py-1.5 pl-4 text-sm text-[#4A5459] transition-colors hover:text-[#2E6A92]"
                    activeClassName="text-[#2E6A92]"
                  >
                    {product.title}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Contact */}
            <NavLink
              to="/contact"
              className="block py-2 text-lg font-semibold text-[#4A5459] transition-colors hover:text-[#2E6A92]"
              activeClassName="text-[#2E6A92]"
            >
              Contact
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
