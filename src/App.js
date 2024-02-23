import React from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import alpukat from './img/Alpukat.png';
import dragon from './img/buah naga.png';
import mangga from './img/Mangga.png';
import banner from './img/banner.png';
import mangga2 from './img/unnamed-removebg-preview.png';
import mangga3 from './img/mangga3.png';
import { RevealDownOne, RevealDownTwo, RevealDownThree, RevealDownTwoText, RevealDownOneImage, RevealDownOneText } from './assets/components/Reveal.tsx';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { InstagramEmbed } from 'react-social-media-embed';
import ReactWhatsapp from 'react-whatsapp';



function App() {
return (
    <div className="App">
    <Header className="z-50"></Header>
    <div className='font-fredoka'>
        <main className='flex-1'>
        <section id='hero' className="w-full min-h-screen flex justify-center items-center bg-[#bc3dfd]">
            <div className="">
                <div className="flex gap-4 px-4 sm:px-6 md:px-10 md:gap-44 md:flex-row flex-col-reverse items-center justify-center">
                    <div className='flex flex-col md:w-1/2 md:pl-20 px-8 pt-8'>
                        <RevealDownOne>
                            <div>
                                <h1 className='md:text-4xl text-3xl pb-5 text-yellow-200'>Segarkan hidupmu dengan, <span className='font-bold'>FreshSmoothies</span></h1>
                            </div>
                        </RevealDownOne>
                        <RevealDownTwoText>
                        <div>
                            <h3 className='md:text-2xl text-xl  text-white'>Rasakan Nikmatnya Kesehatan di Setiap Teguknya.</h3>
                        </div>
                        </RevealDownTwoText>
                    </div>
                    <div>
                            <img draggable='false' src={mangga3} alt='mangga' className='w-[55dvh] rounded-3xl md:pt-0 mt-20 '/>
                    </div>
                </div>
            </div>
        </section>
        <section id='aboutus' className='w-full md:min-h-[100vh] min-h-[125vh] bg-white justify-center items-center flex'>
            <div className='flex flex-col items-center justify-center gap-10 m-20'>
                <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#bc3dfd] relative inline-block before:shadow-md'>

                <h1 className='text-5xl font-semibold text-white relative italic'>About Us</h1>
                </span>
                {/* <div className='flex flex-row gap-32 items-center justify-center'> */}
                    {/* <img src={banner} alt='banner' className='w-1/2 rounded-3xl'></img> */}
                    <div className='flex justify-center'>
                        <InstagramEmbed url="https://www.instagram.com/p/CyYj-_5Roas/" width={328} />
                    </div>
                {/* </div> */}
                <div className='flex md:flex-row flex-col gap-28 md:items-start items-center text-center text-base flex-wrap justify-center'>
                    <div className='flex flex-col items-center'>
                        <CheckCircleIcon className='text-[#bc3dfd] w-10'/>
                        <p className='md:w-[30rem] w-80'>
                            <span className='font-semibold text-lg'>Mau Sehat?</span>
                            <br></br>
                            Segarnya Buah Segar, Sehatnya Gak Kira-kira! Minuman segar dan sehat dari buah-buahan premium untuk semua kalangan.
                        </p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <CheckCircleIcon className='text-[#bc3dfd] w-10'/>
                        <p className='md:w-[30rem] w-80'>
                        <span className='font-semibold text-lg'>Cuaca panas bikin gampang sakit? </span>
                        <br></br>
                        Tingkatkan daya tahan tubuhmu dengan Fresh Smoothies! Dibuat dari buah-buahan segar dan premium seperti mangga, alpukat, dan stroberi, Fresh Smoothies kaya akan vitamin dan nutrisi penting.
                        </p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <CheckCircleIcon className='text-[#bc3dfd] w-10'/>
                        <p className='md:w-[30rem] w-80'>
                        <span className='font-semibold text-lg'>Lebih dari sekadar segar:</span>
                        <br></br>
                        • Parutan keju dan whipcream menambah cita rasa unik dan creamy.
                        <br></br>
                        • Harga terjangkau untuk semua kalangan. Fresh Smoothies: Sehatnya gak kira-kira!
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section id='menu' className='py-20 bg-[#ab0afc] flex flex-col box-border items-center justify-center min-h-screen w-full'>
            <h1 className='text-center text-5xl my-10 text-white font-semibold'>
            Menu
            </h1>
           {/* Card Group */}
            <div className='flex gap-12 text-white flex-wrap md:flex-nowrap'>
                <RevealDownOne>
                {/* Card */}
                <div className='overflow-hidden aspect-3/4  relative group card rounded-3xl m-5'>
                    {/* Image */}
                    <img alt='smoothie' src={mangga} className='object-cover h-full w-full pointer-events-none md:group-hover:scale-110 transition-all duration-300'/>
                    {/* Overlay */}
                    <div className='absolute bg-gradient-to-t from-black to-transparent bottom-0 w-full h-3/4 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300'></div>
                    {/* Content */}
                    <div className='absolute md:bottom-[-50%] p-4 bottom-0 md:group-hover:bottom-0 transition-bottom duration-500 md:opacity-0 md:group-hover:opacity-100'>
                        <h1 className='text-2xl font-semibold text-[#e56ffe]'>Mangga Smoothie <span className='text-white'>•</span> <span className='text-xl'>Rp. 15,000</span></h1>
                        <p className='text-sm text-justify mt-1'>Sunshine in a glass! Smoothie mangga ini penuh dengan cita rasa tropis yang segar. Dibuat dengan buah mangga asli, ini adalah cara sempurna untuk menyejukkan hari yang panas atau menikmati camilan yang lezat dan sehat.</p>
                        <ReactWhatsapp number='+62 856-0282-9156' message="Hi kak, mau pesen smoothie mangga nya dong" className='mt-2 border-none bg-[#e56ffe] py-2 px-4 rounded-xl'>Order</ReactWhatsapp>
                    </div>
                </div>
                </RevealDownOne>
                <RevealDownTwo>
                {/* Card */}
                <div className='overflow-hidden aspect-3/4 relative group card rounded-3xl m-5'>
                    {/* Image */}
                    <img alt='smoothie' src={dragon} className='object-cover h-full w-full pointer-events-none md:group-hover:scale-110 transition-all duration-300'/>
                    {/* Overlay */}
                    <div className='absolute bg-gradient-to-t from-black to-transparent bottom-0 w-full h-3/4 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300'></div>
                    {/* Content */}
                    <div className='absolute md:bottom-[-50%] p-4 bottom-0 md:group-hover:bottom-0 transition-bottom duration-500 md:opacity-0 md:group-hover:opacity-100'>
                        <h1 className='text-2xl font-semibold text-[#e56ffe]'>Dragonfruit Smoothie <span className='text-white'>•</span> <span className='text-xl'>Rp. 15,000</span></h1>
                        <p className='text-sm text-justify mt-1'>Purple paradise! Smoothie naga buah yang memikat ini dipenuhi dengan rasa eksotis dan tampilan yang menakjubkan. Dibuat dengan buah naga segar, susu, dan yogurt, ini adalah cara sempurna untuk mendinginkan diri di hari yang panas atau menikmati camilan yang lezat dan sehat.</p>
                        <ReactWhatsapp number='+62 856-0282-9156' message="Hi kak, mau pesen smoothie buah naga nya dong" className='mt-2 border-none bg-[#e56ffe] py-2 px-4 rounded-xl'>Order</ReactWhatsapp>
                    </div>
                </div>
                </RevealDownTwo>
                <RevealDownThree>
                {/* Card */}
                <div className='overflow-hidden aspect-3/4  relative group card rounded-3xl m-5'>
                    {/* Image */}
                    <img alt='smoothie' src={alpukat} className='object-cover h-full w-full pointer-events-none md:group-hover:scale-110 transition-all duration-300'/>
                    {/* Overlay */}
                    <div className='absolute bg-gradient-to-t from-black to-transparent bottom-0 w-full h-3/4 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300'></div>
                    {/* Content */}
                    <div className='absolute md:bottom-[-50%] p-4 bottom-0 md:group-hover:bottom-0 transition-bottom duration-500 md:opacity-0 md:group-hover:opacity-100'>
                        <h1 className='text-2xl font-semibold text-[#e56ffe]'>Alpukat Smoothie <span className='text-white'>•</span> <span className='text-xl'>Rp. 15,000</span></h1>
                        <p className='text-sm text-justify mt-1'>Creamy dream! Smoothie alpukat yang dekaden ini bagaikan spa untuk lidah Anda. Terbuat dari alpukat matang, susu, dan sentuhan manis, ini adalah cara sempurna untuk menikmati camilan yang sehat dan mengenyangkan.</p>
                        <ReactWhatsapp number='+62 856-0282-9156' message="Hi kak, mau pesen smoothie alpukat nya dong" className='mt-2 border-none bg-[#e56ffe] py-2 px-4 rounded-xl'>Order</ReactWhatsapp>
                    </div>
                </div>
                </RevealDownThree>
            </div>
        </section>
        </main>
    </div>
    <Footer/>
    </div>
);
}

export default App;
