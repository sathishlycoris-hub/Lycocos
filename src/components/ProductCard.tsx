import { ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  id?: string;
  name: string;
  price: number;
  image: string;
}

const ProductCard = ({ id, name, price, image }: ProductCardProps) => {
  const navigate = useNavigate();
  const { addItem } = useCart();

  const productId = id || name.toLowerCase().replace(/\s+/g, "-");

  const handleCardClick = () => {
    navigate(`/product/${productId}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({
      id: productId,
      name,
      price,
      image,
    });
  };

  return (
    <div className="group cursor-pointer" onClick={handleCardClick}>
      <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 right-4 w-10 h-10 bg-charcoal rounded-full flex items-center justify-center text-muted hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <ShoppingBag size={18} />
        </button>
      </div>
      <div className="mt-3">
        <h3 className="font-body text-sm font-medium text-foreground">{name}</h3>
        <p className="font-body text-sm text-primary font-semibold mt-1">
          ₹{price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
