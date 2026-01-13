import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import CartSheet from "@/components/CartSheet";
import { useCart } from "@/context/CartContext";
import Index from "./pages/Index";
import Products from "./pages/Products";
import CareClinic from "./pages/CareClinic";
import Partners from "./pages/Partners";
import ProductDetail from "./pages/ProductDetail";
import TreatmentDetail from "./pages/TreatmentDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const CartSheetWrapper = () => {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeItem } = useCart();
  return (
    <CartSheet
      open={isCartOpen}
      onOpenChange={setIsCartOpen}
      items={items}
      onUpdateQuantity={updateQuantity}
      onRemoveItem={removeItem}
    />
  );
};

const AppContent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/care-clinic" element={<CareClinic />} />
        <Route path="/treatment/:treatmentId" element={<TreatmentDetail />} />
        <Route path="/partners" element={<Partners />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CartSheetWrapper />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
