import React, { useRef, useState } from 'react';
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
const notify = () => toast.custom((t) => (
    <div
        className={`${t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-md w-full bg-stone-200 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
        <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
                <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-black">
                        Thank's for reaching out!👏
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                        we wil Recive your Message
                    </p>
                </div>
            </div>
        </div>
        <div className="flex border-l border-gray-200">
            <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-[#30978e] hover:text-red-500"
            >
                Close
            </button>
        </div>
    </div>
))
const HelpContact = () => {
    const [message, setMessage] = useState(false);
    const formRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
        emailjs
            .sendForm(
                'service_ta7o9cj',
                'template_9i9f8s9',
                formRef.current,
                'gTT2DiVB2vzsOO652'
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        e.target.reset();
    };
    return (
        <div>
            <Toaster />
            <Navbar />
            <section className='mb-[120px]'>
                <div className="relative w-full h-96">
                    <img className="absolute h-full w-full object-cover object-center" src="https://i.ibb.co/1rL3v85/2210-q702-010-S-m005-c12-charity.jpg" alt="nature image" />
                    <div className="absolute inset-0 h-full w-full bg-black/50"></div>
                    <div className="relative pt-28 text-center">
                        <h2 className="block antialiased tracking-normal font-sans font-semibold leading-[1.3] text-white mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">HopeAid Contact Information</h2>
                        <p className="block antialiased font-sans text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-white mb-9 opacity-70">
                            HopeAid is a compassionate and dedicated organization committed to making a <br className="hidden sm:block" /> meaningful impact on the lives of those in need.
                        </p>
                    </div>
                </div>
                <div className="-mt-16 mb-8 px-4 sm:px-8 md:px-12 lg:px-16">
                    <div className="container mx-auto">
                        <div className="py-12 flex flex-col sm:flex-row justify-center rounded-xl border border-white bg-white shadow-md shadow-black/5 saturate-200">
                            <div className="my-8 grid gap-6 px-4">
                                <div className="flex items-center gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6 text-[#30978e]">
                                        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
                                    </svg>
                                    <p className="block antialiased font-sans text-sm sm:text-base md:text-base font-medium leading-relaxed text-inherit ">123 Main Street, Los Angeles, CA</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6 text-[#30978e]">
                                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd"></path>
                                    </svg>
                                    <p className="block antialiased font-sans text-sm sm:text-base md:text-base font-medium leading-relaxed text-inherit \">+1 123 456 7890</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6 text-[#30978e]">
                                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path>
                                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path>
                                    </svg>
                                    <p className="block antialiased font-sans text-sm sm:text-base md:text-base font-medium leading-relaxed text-inherit ">support@hopeaid.com</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6 text-[#30978e]">
                                        <path fillRule="evenodd" d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 01-.375.65 2.249 2.249 0 000 3.898.75.75 0 01.375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 17.625v-3.026a.75.75 0 01.374-.65 2.249 2.249 0 000-3.898.75.75 0 01-.374-.65V6.375zm15-1.125a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0v.75a.75.75 0 001.5 0v-.75zm-.75 3a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-.75zM6 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H6.75A.75.75 0 016 12zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd"></path>
                                    </svg>
                                    <p className="block antialiased font-sans text-sm sm:text-base md:text-base font-medium leading-relaxed text-inherit ">Open Support Ticket</p>
                                </div>
                            </div>
                            <div className="py-4">
                                <form ref={formRef} onSubmit={handleSubmit} action="#">
                                    <div className="mb-4 lg:w-[400px]">
                                        <div className="relative">
                                            <input type="text" name="user_name" className="w-full px-3 py-2 text-sm text-blue-gray-700 bg-white border border-blue-gray-200 rounded-lg focus:outline-none focus:border-[#30978e]" placeholder="Your Name" />
                                        </div>
                                    </div>
                                    <div className="mb-4 lg:w-[400px]">
                                        <div className="relative">
                                            <input type="email" name="user_email" className="w-full px-3 py-2 text-sm text-blue-gray-700 bg-white border border-blue-gray-200 rounded-lg focus:outline-none focus:border-[#30978e]" placeholder="Your Email Address" />
                                        </div>
                                    </div>
                                    <div className="mb-4 lg:w-[400px]">
                                        <div className="relative">
                                            <input type="text" name="subject" className="w-full px-3 py-2 text-sm text-blue-gray-700 bg-white border border-blue-gray-200 rounded-lg focus:outline-none focus:border-[#30978e]" placeholder="Subject" />
                                        </div>
                                    </div>
                                    <div className="mb-4 lg:w-[400px]">
                                        <div className="relative">
                                            <textarea name="message" rows="4" className="w-full px-3 py-2 text-sm text-blue-gray-700 bg-white border border-blue-gray-200 rounded-lg focus:outline-none focus:border-[#30978e]" placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={notify} className="bg-[#068278] hover:border-[#068278] hover:border text-[#FFF] hover:bg-[#FFF] btn rounded-xl px-8 py-4 hover:text-[#068278] border-transparent">

                                            Send Message
                                        </button>
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default HelpContact;
