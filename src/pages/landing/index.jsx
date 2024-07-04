import Footer from "../../components/Footer"
import NavBar from "../../components/NavBar"
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import EventListings from "./components/EventListings"
import Hero from "./components/Hero"
import OurCustomers from "./components/OurCustomers"

const LandingPage = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <EventListings />
            
            <AboutUs />
            <ContactUs />
            <OurCustomers />
            <Footer />
        </div>
    )
}

export default LandingPage