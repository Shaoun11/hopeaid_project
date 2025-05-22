import React from 'react';
import AppLayout from "../layout/AppLayout.jsx";
import Hero from "../components/Hero.jsx";
import Navbar from "../components/Navbar.jsx";
import Services from "../components/Services.jsx";
import Donation from "../components/Donation.jsx";
import Features from "../components/Features.jsx";
import Goal from "../components/Goal.jsx";
import Volunteer from "../components/Volunteer.jsx";
import Testimonial from "../components/Testimonial.jsx";
import Blog from "../components/Blog.jsx";
import FAQ from "../components/FAQ.jsx";
import AdvertiseBanner from "../components/AdvertiseBanner.jsx";
import Footer from "../components/Footer.jsx";
import ChatComponent from '../components/ChatbotComponent.jsx';
import ImpactStats from '../components/ImpactStats.jsx';
import Testimonials from '../components/TestimonialForHelp.jsx';
import VolunteerCTA from '../components/TestimonialForHelp.jsx';
import Partners from '../components/TestimonialForHelp.jsx';
import Newsletter from '../components/TestimonialForHelp.jsx';
import DonationProgress from '../components/TeamMember.jsx';
import FeaturedCauses from '../components/TeamMember.jsx';
import MeetTheTeam from '../components/TeamMember.jsx';
const HomePage = () => {
    return (
        <AppLayout>
            <Navbar></Navbar>
            
            <Hero></Hero>
            <ImpactStats></ImpactStats>
            <Services></Services>
            <Donation></Donation>
            <Features></Features>
            <Goal></Goal>
            <Volunteer></Volunteer>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <MeetTheTeam></MeetTheTeam>
            <Newsletter></Newsletter>

            <FAQ></FAQ>
            <AdvertiseBanner></AdvertiseBanner>
            <ChatComponent />
            <Footer></Footer>
        </AppLayout>
    );
};

export default HomePage;