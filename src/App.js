import React from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import alpukat from './img/Alpukat.png';
import dragon from './img/buah naga.png';
import mangga from './img/Mangga.png';
import banner from './img/banner.png';
import { RevealDownOne, RevealDownTwo, RevealDownThree, RevealDownTwoText } from './assets/components/Reveal.tsx';



function App() {
return (
    <div className="App">
    <Header className="z-50"></Header>
    <div className='flex flex-col min-h-screen font-poppins'>
        <main className='flex-1'>
        <section id='hero' className="w-full md:py-28 py-36 bg-[#bc3dfd]">
            <div className="container mx-auto">
                <div className="items-center flex gap-4 px-4 sm:px-6 md:px-10 md:gap-8 md:flex-row flex-col-reverse">
                    <div className='flex flex-col md:w-1/2 md:pl-20 px-8 pt-16'>
                        <RevealDownOne>
                        <div><h1 className='md:text-4xl text-3xl pb-5 text-yellow-200'>Segarkan hidupmu dengan, <span className='font-bold'>FreshSmoothies</span></h1></div>
                        </RevealDownOne>
                        <RevealDownTwoText>
                        <div><h3 className='md:text-2xl text-xl  text-white'>Rasakan Nikmatnya Kesehatan di Setiap Teguknya.</h3></div>
                        </RevealDownTwoText>
                    </div>
                    <div className='flex flex-row'>
                        <div className='flex flex-col'>
                            <RevealDownOne>
                                <div className='aspect-square md:w-[16vw] w-[40vw]'>
                                    <img draggable='false' src={alpukat} alt='alpukat' className='object-cover h-full w-full p-2'/>
                                </div>
                            </RevealDownOne>
                            <RevealDownTwo>
                                <div className='aspect-3/4 md:w-[16vw] w-[40vw]'>
                                    <img draggable='false' src={dragon} alt='dragonfruit' className='object-cover h-full w-full p-2'/>
                                </div>
                            </RevealDownTwo>
                        </div>
                        <div>
                            <RevealDownThree>
                            <div className='aspect-3/4 md:w-[16vw] w-[40vw]'>
                                <img draggable='false' src={mangga} alt='mangga' className='object-cover h-full w-full p-2'/>
                            </div>
                            </RevealDownThree>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id='aboutus' className='w-full md:min-h-[80vh] min-h-[125vh] bg-white justify-center items-center flex'>
            <div className=''>
                        <RevealDownOne>
                <div className='grid md:grid-flow-col grid-flow-row max-w-[83vw] justify-center h-auto'>
                    <div className='order-2 bg-[#80e5ff] p-6 text-[#1b7a9f] md:rounded-r-3xl rounded-b-3xl flex items-center flex-col justify-center md:w-[36vw]'>
                        <h1 className='text-3xl font-semibold'>
                            About Us
                        </h1>
                        <p className='my-5 w-3/4 items-center'>
                        <span className='font-semibold text-lg'>Segarnya Buah Segar, Sehatnya Gak Kira-kira!</span>
                        <br></br>
                        <span>Minuman segar dan sehat dari buah-buahan premium untuk semua kalangan.</span>
                        <br></br>
                        <br></br>
                        <span className='font-semibold text-lg'>Cuaca panas bikin gampang sakit?</span>
                        <br></br>

                        Tingkatkan daya tahan tubuhmu dengan Fresh Smoothies! Dibuat dari buah-buahan segar dan premium seperti mangga, alpukat, dan stroberi, Fresh Smoothies kaya akan vitamin dan nutrisi penting.
                        <br></br>
                        <br></br>
                        <span className='font-semibold text-lg'>Lebih dari sekadar segar:</span>
                        <br></br>

                        • Parutan keju dan whipcream menambah cita rasa unik dan creamy.
                        <br></br>
                        • Harga terjangkau untuk semua kalangan.
                        Fresh Smoothies: Sehatnya gak kira-kira!
                        <br></br>
                        <br></br>

                        <strong className='text-lg'>Pesan sekarang dan rasakan segarnya!</strong>
                        {/* Fresh Smoothies adalah sebuah minuman yang berasal dari buah- buahan segar yang bisa dinikmati semua kalangan yang bertujuan untuk menyehatkan, seiring dengan cuaca yang sangat panas dan banyak orang yang sakit karena kekurangan vitamin kami membuat minuman yang menyegarkan sekaligus menyehatkan di minuman ini kami menyediakan buah- buahan yang segar dan premium untuk mendapatkan kualitas terbaik dengan harga yang terjangkau semua kalangan. Didalam minuman ini kami menyediakan beberapa buah- buahan yang banyak mengandung vitamin seperti buah Mangga, avocado, strawberry dan masih banyak jenis buah lainnya. Didalam buah mangga terdapat banyak nutrisi yang dapat menyehatkan tubuh contohnya: vitamin B, vitamin K, vitamin A, vitamin C dan vitamin E. Di dalam smoothies ini terdapat parutan keju dan whipcream yang membuat dia berbeda dari smoothies biasanya. */}
                        </p>
                    </div>
                    <img src={banner} alt='about-us' className='md:rounded-l-3xl rounded-t-3xl w-full h-full'/>
                </div>
                        </RevealDownOne>
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
                        <p className='text-sm text-justify mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor pretium viverra suspendisse potenti.</p>
                        <button className='mt-2 border-none bg-[#e56ffe] py-2 px-4 rounded-xl'>Order</button>
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
                        <p className='text-sm text-justify mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor pretium viverra suspendisse potenti.</p>
                        <button className='mt-2 border-none bg-[#e56ffe] py-2 px-4 rounded-xl'>Order</button>
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
                        <p className='text-sm text-justify mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor pretium viverra suspendisse potenti.</p>
                        <button className='mt-2 border-none bg-[#e56ffe] py-2 px-4 rounded-xl'>Order</button>
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
