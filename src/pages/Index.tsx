import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RouteSelector from "@/components/RouteSelector";
import CargoForm from "@/components/CargoForm";
import TruckGallery from "@/components/TruckGallery";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <RouteSelector />
      <CargoForm />
      <TruckGallery />
      <ContactForm />
    </div>
  );
};

export default Index;
