"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathname = usePathname();

    if(pathname === '/login' || pathname === '/register' || pathname === '/forgot-password' || pathname === '/user-profile'){
        return null;
    }

  return (
    <div className="w-full bg-gray-300">

        <div className="mx-auto flex max-w-7xl rounded-bl-2xl rounded-br-2xl flex-wrap items-center justify-between p-6 lg:px-8 lg:h-[50vh]">
        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between gap-24">
            {/* LEFT */}
            <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
            <Link href="/">
                <div className="text-2xl tracking-wide uppercase">
                    <Image
                        src="/Images/Gemini_Generated_Image_jvn550jvn550jvn5-removebg-preview (1).png"
                        alt="Your Company Logo"
                        className="h-12 w-auto"
                        width={100}
                        height={100}
                    />
            </div>
            </Link>
            <p>
                3252 Winding Way, Central Plaza, Willowbrook, CA 90210, United
                States
            </p>
            <span className="font-semibold">info@moparts.co.za</span>
            <span className="font-semibold">+1 234 567 890</span>
            <div className="flex gap-6">
                <Image src="/facebook.png" alt="" width={16} height={16} />
                <Image src="/instagram.png" alt="" width={16} height={16} />
                <Image src="/youtube.png" alt="" width={16} height={16} />
                <Image src="/pinterest.png" alt="" width={16} height={16} />
                <Image src="/x.png" alt="" width={16} height={16} />
            </div>
            </div>
            {/* CENTER */}
            <div className="hidden lg:flex justify-between w-1/2">
            <div className="flex flex-col justify-between">
                <h1 className="font-medium text-lg">COMPANY</h1>
                <div className="flex flex-col gap-6">
                <Link href="/about">About Us</Link>
                <Link href="/careers">Careers</Link>
                <Link href="/affiliates">Affiliates</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact Us</Link>
                </div>
            </div>
            <div className="flex flex-col justify-between">
                <h1 className="font-medium text-lg">SHOP</h1>
                <div className="flex flex-col gap-6">
                <Link href="">New Arrivals</Link>
                <Link href="">Accessories</Link>
                <Link href="">Men</Link>
                <Link href="">Women</Link>
                <Link href="">All Products</Link>
                </div>
            </div>
            <div className="flex flex-col justify-between">
                <h1 className="font-medium text-lg">HELP</h1>
                <div className="flex flex-col gap-6">
                <Link href="/customer-service">Customer Service</Link>
                <Link href="/profile">My Account</Link>
                <Link href="/supplier">Become a supplier</Link>
                <Link href="legal">Legal & Privacy</Link>
                <Link href="/returns-policy">Returns Policy</Link>
                </div>
            </div>
            </div>
            {/* RIGHT */}
            <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
            <h1 className="font-medium text-lg">SUBSCRIBE</h1>
            <p>
                Be the first to get the latest news about trends, promotions, and
                much more!
            </p>
            <div className="flex">
                <input
                type="text"
                placeholder="Email address"
                className="p-4 w-3/4"
                />
                <button className="w-1/4 bg-black text-white">JOIN</button>
            </div>
            <span className="font-semibold">Secure Payments</span>
            <div className="flex justify-between">
                <Image src="/discover.png" alt="" width={40} height={20} />
                <Image src="/skrill.png" alt="" width={40} height={20} />
                <Image src="/paypal.png" alt="" width={40} height={20} />
                <Image src="/mastercard.png" alt="" width={40} height={20} />
                <Image src="/visa.png" alt="" width={40} height={20} />
            </div>
            </div>
        </div>
        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
            <div className="">© 2024 MO & CO PTY LTD</div>
            <div className="flex flex-col gap-8 md:flex-row">
            <div className="">
                <span className="text-gray-500 mr-4">Language</span>
                <span className="font-medium">English</span>
            </div>
            <div className="">
                <span className="text-gray-500 mr-4">Currency</span>
                <span className="font-medium">R ZAR</span>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Footer;
