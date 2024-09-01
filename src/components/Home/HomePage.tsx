import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import './Style.css'; // Assume you have your styles defined here

export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const PAGE_SIZE = 15; // Number of products per page

interface HomePageProps {
  addToCart: (product: Product) => void;
}

const HomePage: React.FC<HomePageProps> = ({ addToCart }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [cartItemCount, setCartItemCount] = useState(0); // State to hold cart item count
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageInput, setPageInput] = useState('');

  const navigate = useNavigate(); // Use navigate from react-router-dom

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const fetchProducts = (page: number) => {
    const skip = (page - 1) * PAGE_SIZE;
    fetch(`https://dummyjson.com/products?limit=${PAGE_SIZE}&skip=${skip}&select=title,price,thumbnail`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setTotalPages(Math.ceil(data.total / PAGE_SIZE));
      })
      .catch((error) => console.error('Error fetching products:', error));
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleJumpToPage = () => {
    const pageNumber = parseInt(pageInput);
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    } else {
      alert('Invalid page number');
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleAddToCart = (product: Product) => {
    console.log('Added to cart:', product);
    addToCart(product);
    setCartItemCount((prevCount) => prevCount + 1); // Increment cart count
  };

  const handleViewMore = (productId: number) => {
    navigate(`/product/${productId}`); // Navigate to product details page
  };

  return (
    <div className="app">
      <Sidebar 
        isSidebarOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar} 
        cartItemCount={cartItemCount} // Pass cart item count
      />

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} className="product-thumbnail" />
            <div className="product-details">
              <h3>{product.title}</h3>
              <p>${product.price.toFixed(2)}</p>
              <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
              <button className="view-more-btn" onClick={() => handleViewMore(product.id)}>View More</button>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>

      <div className="jump-to-page">
        <input
          type="number"
          value={pageInput}
          onChange={(e) => setPageInput(e.target.value)}
          placeholder="Page number"
        />
        <button onClick={handleJumpToPage}>Go</button>
      </div>
    </div>
  );
};

export default HomePage;