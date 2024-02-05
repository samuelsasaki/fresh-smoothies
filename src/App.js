import './App.css';
import Header from './Header';
import Footer from './Footer';
import alpukat from './img/Alpukat.png';
import dragon from './img/buah naga.png';
import mangga from './img/Mangga.png';
import banner from './img/banner.png';

function App() {
return (
    <div className="App">
    <Header/>
    <div className='flex flex-col min-h-screen font-poppins'>
        <main className='flex-1'>
        <section className="w-full py-44 bg-pink-400">
            <div className="">
            <div className="items-center grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 grid-cols-2 md:gap-16">
                <div className=''>
                <h1 className='text-4xl pb-5 text-green-300'>Segarkan hidupmu dengan, FreshSmoothies</h1>
                <h3 className='text-xl'>Rasakan Nikmatnya Kesehatan di Setiap Teguknya.</h3>
                </div>
                <div className='flex'>
                <div className=''>
                    <img draggable='false' src={alpukat} alt='alpukat' className='' />
                    <img draggable='false' src={dragon} alt='alpukat' />
                </div>
                <div><img draggable='false' src={mangga} alt='alpukat' /></div>
                </div>
            </div>
            </div>
        </section>
        <section id='aboutus' className='w-full min-h-[75vh] bg-white justify-center items-center flex'>
            <div className=''>
                <div className='grid grid-flow-col max-w-[1500px] justifycenter'>
                    <div className='order-2 bg-[#80e5ff] bg-blend-saturation p-6 text-pink-400'>
                        <h1 className='text-4xl font-semibold'>
                            About Us
                        </h1>
                        <p className='text-justify my-5'>
                        Fresh Smoothies adalah sebuah minuman yang berasal dari buah- buahan segar yang bisa dinikmati semua kalangan yang bertujuan untuk menyehatkan, seiring dengan cuaca yang sangat panas dan banyak orang yang sakit karena kekurangan vitamin kami membuat minuman yang menyegarkan sekaligus menyehatkan di minuman ini kami menyediakan buah- buahan yang segar dan premium untuk mendapatkan kualitas terbaik dengan harga yang terjangkau semua kalangan. Didalam minuman ini kami menyediakan beberapa buah- buahan yang banyak mengandung vitamin seperti buah Mangga, avocado, strawberry dan masih banyak jenis buah lainnya. Didalam buah mangga terdapat banyak nutrisi yang dapat menyehatkan tubuh contohnya: vitamin B, vitamin K, vitamin A, vitamin C dan vitamin E. Di dalam smoothies ini terdapat parutan keju dan whipcream yang membuat dia berbeda dari smoothies biasanya.
                        </p>
                    </div>
                    <img src={banner} alt='about-us' className=''/>
                </div>
            </div>
        </section>
        <section className='py-20 bg-blue-200 flex flex-col box-border items-center justify-center h-screen w-full'>
            <h1 className='text-center text-5xl my-10 text-pink-400 font-semibold'>
            Menu
            </h1>
           {/* Card Group */}
            <div className='flex gap-12 text-white'>
                {/* Card */}
                <div className='overflow-hidden aspect-3/4  relative group card'>
                    {/* Image */}
                    <img alt='smoothie' src={mangga} className='object-cover h-full w-full pointer-events-none group-hover:scale-110 transition-all duraiton-300'/>
                    {/* Overlay */}
                    <div className='absolute bg-gradient-to-t from-black to-transparent bottom-0 w-full h-3/4 opacity-0 group-hover:opacity-100 transition-all duration-300'></div>
                    {/* Content */}
                    <div className='absolute bottom-[-50%] p-4 group-hover:bottom-0 transition-bottom duration-500 opacity-0 group-hover:opacity-100'>
                        <h1 className='text-2xl font-semibold text-pink-400'>Mangga Smoothie <span className='text-white'>•</span> <span className='text-xl'>Rp. 15,000</span></h1>
                        <p className='text-sm text-justify mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor pretium viverra suspendisse potenti.</p>
                        <button className='mt-2 border-none bg-pink-400 py-2 px-4'>Order</button>
                    </div>
                </div>
                {/* Card */}
                <div className='overflow-hidden aspect-3/4 relative group card'>
                    {/* Image */}
                    <img alt='smoothie' src={dragon} className='object-cover h-full w-full pointer-events-none group-hover:scale-110 transition-all duraiton-300'/>
                    {/* Overlay */}
                    <div className='absolute bg-gradient-to-t from-black to-transparent bottom-0 w-full h-3/4 opacity-0 group-hover:opacity-100 transition-all duration-300'></div>
                    {/* Content */}
                    <div className='absolute bottom-[-50%] p-4 group-hover:bottom-0 transition-bottom duration-500 opacity-0 group-hover:opacity-100'>
                        <h1 className='text-2xl font-semibold text-pink-400'>Dragonfruit Smoothie <span className='text-white'>•</span> <span className='text-xl'>Rp. 15,000</span></h1>
                        <p className='text-sm text-justify mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor pretium viverra suspendisse potenti.</p>
                        <button className='mt-2 border-none bg-pink-400 py-2 px-4'>Order</button>
                    </div>
                </div>
                {/* Card */}
                <div className='overflow-hidden aspect-3/4  relative group card'>
                    {/* Image */}
                    <img alt='smoothie' src={alpukat} className='object-cover h-full w-full pointer-events-none group-hover:scale-110 transition-all duraiton-300'/>
                    {/* Overlay */}
                    <div className='absolute bg-gradient-to-t from-black to-transparent bottom-0 w-full h-3/4 opacity-0 group-hover:opacity-100 transition-all duration-300'></div>
                    {/* Content */}
                    <div className='absolute bottom-[-50%] p-4 group-hover:bottom-0 transition-bottom duration-500 opacity-0 group-hover:opacity-100'>
                        <h1 className='text-2xl font-semibold text-pink-400'>Alpukat Smoothie <span className='text-white'>•</span> <span className='text-xl'>Rp. 15,000</span></h1>
                        <p className='text-sm text-justify mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor pretium viverra suspendisse potenti.</p>
                        <button className='mt-2 border-none bg-pink-400 py-2 px-4 '>Order</button>
                    </div>
                </div>
            </div>
        </section>
        </main>
    </div>
    <Footer/>
    </div>
);
}

export default App;
