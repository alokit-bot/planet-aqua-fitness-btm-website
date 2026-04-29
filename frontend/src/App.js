import "@/App.css";
import useReveal from "@/hooks/useReveal";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import WhyUs from "@/components/site/WhyUs";
import Facilities from "@/components/site/Facilities";
import Membership from "@/components/site/Membership";
import Schedule from "@/components/site/Schedule";
import Testimonials from "@/components/site/Testimonials";
import Location from "@/components/site/Location";
import Footer from "@/components/site/Footer";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";

function App() {
    useReveal();
    return (
        <div className="App relative">
            <Navbar />
            <main>
                <Hero />
                <WhyUs />
                <Facilities />
                <Membership />
                <Schedule />
                <Testimonials />
                <Location />
            </main>
            <Footer />
            <WhatsAppFloat />
        </div>
    );
}

export default App;
