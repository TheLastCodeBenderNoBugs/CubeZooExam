import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import logo from '/public/HiveLogowhiteText.png';
import shoppingIcon from '/public/shoppingcart.png';
import checkIcon from '/public/check.png';
import hiveImg from '/public/hivestation.png';
import imgHiveObservationCenter from '/public/hiveObservationCenter.png';
import hexWaiting from '/public/hexwaiting.png';
import twitterIcon from '/public/social_media_img/x-twitter.png';
import facebookIcon from '/public/social_media_img/Facebook.png';
import instagramIcon from '/public/social_media_img/Instagram.png';
import linkedinIcon from '/public/social_media_img/Linkedin.png';
import youtubeIcon from '/public/social_media_img/Youtube.png';
import searchIcon from '/public/searchIcon.png'

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="min-h-screen bg-[#121619] text-gray-100">
                <nav className="bg-gradient-to-r from-[#FFFFFF20] to-[#121619] p-4 border-1">
                    <div className="container mx-auto flex justify-between items-center">
                        <div className="flex-1">
                            <Link
                                href=""
                                className="inline-block px-3 py-1.5 font-bold text-lg leading-normal text-[#B4CAD5]">
                                <img src={logo} alt="Logo" />
                            </Link>
                        </div>
                        <ul className="hidden md:flex flex-1 justify-center space-x-6">
                            <li><a href="#" className="hover:text-[#F4BF31]">Home</a></li>
                            <li><a href="#" className="hover:text-[#F4BF31]">Browse</a></li>
                            <li><a href="#" className="hover:text-[#F4BF31]">Pricing</a></li>
                        </ul>
                        <div className="flex-1 flex justify-end space-x-4">
                            <Link
                                    href={route('register')}
                                    className="inline-block px-3 py-1.5 font-bold text-lg leading-normal text-[#B4CAD5] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b] justify-end"
                                >
                                    <img src={shoppingIcon} alt="shopping_icon" />
                            </Link>
                            <button className="bg-transparent border-1 border-[#B4CAD5] hover:border-[#F4BF31] hover:bg-[#F4BF31] hover:text-white text-[#B4CAD5] px-3 py-1.5 font-bold rounded-sm">
                                Login
                            </button>
                            <button className="bg-[#F4BF31] hover:bg-[#ffffff] text-[#542D00] px-3 py-1.5 rounded-sm font-bold">
                                Sign Up
                            </button>
                            
                        </div>
                    </div>
                </nav>
                <section className="bg-gradient-to-r from-[#FFFFFF20] to-[#121619] py-16">
                    <div className="container mx-auto px-6 md:px-12 lg:px-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            <div>
                                <h2 className="text-4xl font-medium text-[61px] text-[#B4CAD5] mb-6">
                                    Your Ultimate Destination for <span className="text-[#F4BF31] font-bold">High-Quality Edits</span>
                                </h2>
                                <span className="text-[#ffffff] text-[17.83px] font-normal underline inline-flex gap-4 mt-4">
                                    <img src={checkIcon} alt="check_icon" /> Royalty Free
                                </span>
                                <span className="text-[#ffffff] text-[17.83px] font-normal underline inline-flex gap-4 mt-4">
                                    <img src={checkIcon} alt="check_icon" />High-Quality
                                </span>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            
                                </div>
                                <div className="relative">
                                    <input 
                                        type="text" 
                                        placeholder="Search" 
                                        className="bg-gradient-to-r from-[#121619] to-[#FFFFFF05] w-full p-3 pl-4 pr-10 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl"><img 
                                    src={searchIcon}
                                    alt="searchIcon" 
                                    className="rounded-lg shadow-lg w-full md:max-w-sm"
                                /></span>
                                </div>
                                <div className="mt-6 gap-4">
                                <Link
                                    href=""
                                    className="bg-[#B4CAD580] inline-block rounded-sm border border-transparent px-[12px] py-1 font-normal text-lg leading-normal text-[#F0FFFF] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A] mx-1 my-1"
                                >
                                    Lifestyle
                                </Link>
                                <Link
                                    href=""
                                    className="bg-[#B4CAD580] inline-block rounded-sm border border-transparent px-[12px] py-1 font-normal text-lg leading-normal text-[#F0FFFF] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A] mx-1 my-1"
                                >
                                    Urban Landscape
                                </Link>
                                <Link
                                    href=""
                                    className="bg-[#B4CAD580] inline-block rounded-sm border border-transparent px-[12px] py-1 font-normal text-lg leading-normal text-[#F0FFFF] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A] mx-1 my-1"
                                >
                                    Business
                                </Link>
                                <Link
                                    href=""
                                    className="bg-[#B4CAD580] inline-block rounded-sm border border-transparent px-[12px] py-1 font-normal text-lg leading-normal text-[#F0FFFF] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A] mx-1 my-1"
                                >
                                    People
                                </Link>
                                <Link
                                    href=""
                                    className="bg-[#B4CAD580] inline-block rounded-sm border border-transparent px-[12px] py-1 font-normal text-lg leading-normal text-[#F0FFFF] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A] mx-1 my-1"
                                >
                                    Technology
                                </Link>
                            </div>
                            </div>
                            <div className="">
                                <img src={hiveImg} alt="imgHive" />
                            </div>
                            
                        </div>
                    </div>
                </section>
                <section className=" bg-gradient-to-r from-[#FFFFFF20] to-[#121619] py-16">
                    <div className="container mx-auto py-6 px-6 md:px-12 lg:px-16 border-1 border-[#B4CAD514] rounded-sm bg-[radial-gradient(circle,_#B4CAD514,_#FFFFFF00)]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            <div className="space-y-6">
                                <h2 className="text-4xl font-bold text-[#B4CAD5]">Turn <span className="text-[#F4BF31]">Your Work</span> into <span className="text-[#F4BF31]">Revenue</span></h2>
                                <p className="text-gray-300">
                                    This section is built with Tailwind CSS. It adapts to all screen sizes, making it responsive and user-friendly.
                                </p>
                                <a href="#" className="bg-[#F4BF31] hover:bg-[#ffffff] text-[#542D00] px-3 py-1.5 rounded-sm font-bold inline-block">
                                    Learn More
                                </a>
                            </div>
                            <div className="flex justify-center">
                                <img src={imgHiveObservationCenter} alt="hiveObservationCenterImg" className="rounded-sm shadow-lg w-full md:max-w-sm"/>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="text-center py-20 bg-[url(/public/hiveDirectorimage.png)] bg-cover ">
                    <h2 className="text-4xl font-bold text-[#B4CAD5]">Explore a world of <span className="text-[#F4BF31]">Unique Edits</span></h2>
                        <p className="mt-4 font-normal text-[16px] text-[#ffffff] dark:text-gray-300">
                        Subscribe to HIVE and gain access to a library of unique and beautiful fully edited videos contributed by video editors from all around the world!!
                        </p>
                        <button className="mt-6 bg-[#F4BF31] hover:bg-[#ffffff] text-[#542D00] px-3 py-1.5 rounded-sm font-bold">
                            Explore Now
                        </button>
                </section>
                

                <section className="bg-gradient-to-r from-[#FFFFFF20] to-[#121619] py-16 ">
                    <div className="container mx-auto px-6 md:px-12 lg:px-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            <div className="flex justify-center">
                                <img src={hexWaiting} alt="Observation_Img" className="rounded-lg shadow-lg w-full md:max-w-sm"/>
                            </div>
                            <div className="space-y-6">
                                <h2 className="text-4xl font-bold text-[#B4CAD5]">Get only the <span className="text-[#F4BF31]">Best</span></h2>
                                    <p className="mt-4 font-normal text-[16px] text-[#ffffff] dark:text-gray-300">
                                        Subscribe to HIVE and gain access to a library of unique and beautiful fully edited videos contributed by video editors from all around the world!!
                                    </p>
                                    <a href="#" className="mt-6 bg-[#F4BF31] hover:bg-[#ffffff] text-[#542D00] px-3 py-1.5 rounded-sm font-bold">
                                        Learn More
                                    </a>
                            </div>

                        </div>
                    </div>
                </section>
                <footer className="text-white pt-10 bg-[#262A2D] ">
                <div className="max-w-7xl mx-auto px-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <Link
                            href=""
                            className="inline-block px-3 py-1.5 font-bold text-lg leading-normal text-[#B4CAD5]">
                            <img src={logo} alt="Logo" />
                            </Link>
                            
                            <div className="flex space-x-5 items-center justify-center">
                                <a href="#" className="text-gray-400 hover:text-white w-8 h-8">
                                    <img src={twitterIcon} alt="twitterIcon" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white w-8 h-8">
                                    <img src={linkedinIcon} alt="linkedinIcon" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white w-8 h-8">
                                    <img src={instagramIcon} alt="instagramIcon" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white w-8 h-8">
                                    <img src={facebookIcon} alt="facebookIcon" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white w-8 h-8">
                                    <img src={youtubeIcon} alt="youtubeIcon" />
                                </a>
                               
                            </div>

                    </div>
                    <div>
                    <h5 className="text-lg font-bold text-[#F4BF31]">Company</h5>
                    <ul className="mt-2 space-y-2">
                        <li><a href="#" className="text-[#C6CACD] font-normal hover:text-white">Become a contributor</a></li>
                        <li><a href="#" className="text-[#C6CACD] font-normal hover:text-white">Terms and Conditions</a></li>
                        <li><a href="#" className="text-[#C6CACD] font-normal hover:text-white">Privacy Policy</a></li>
                    </ul>
                    </div>
                    <div>
                    <h5 className="text-lg font-bold text-[#F4BF31]">Pricing and Plans</h5>
                    <ul className="mt-2 space-y-2">
                        <li><a href="#" className="text-[#C6CACD] font-normal hover:text-white">Individual Plan</a></li>
                        <li><a href="#" className="text-[#C6CACD] font-normal hover:text-white">Company</a></li>
                        <li><a href="#" className="text-[#C6CACD] font-normal hover:text-white">Subcription</a></li>
                    </ul>
                    </div>
                    <div>
                    <h5 className="text-lg font-bold text-[#F4BF31]">Customer Support</h5>
                    <div className="mt-2 flex space-x-4">
                    <ul className="mt-2 space-y-2">
                        <li><a href="#" className="text-[#C6CACD] font-normal hover:text-white">Contact Us</a></li>
                        <li><a href="#" className="text-[#C6CACD] font-normal hover:text-white">FAQs</a></li>
                    </ul>
                    </div>
                    </div>

                </div>

                <div className="text-right text-white-400 mt-10 py-6 px-36 bg-[#121619]">
                    <p>© 2024 Hive | Designed by CubeZoo</p>
                </div>
                </footer>

            </div>
        </>
    );
}
