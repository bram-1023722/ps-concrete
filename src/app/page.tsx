import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main>
            <Hero />
            <Services />
            <Gallery />
            <ContactForm />
            <Footer />
        </main>
    );
}