import Greeting from "../Greeting";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <Greeting name="Alex" />
      
      <ProductCard 
        title="Wireless Headphones" 
        price={99} 
        inStock={true} 
      />

      <ProductCard 
        title="Mechanical Keyboard" 
        price={149} 
        inStock={false} 
      />
    </main>
  );
}
