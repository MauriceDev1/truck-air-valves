import Image from "next/image";
import Link from "next/link";

export default function Hero () {
    return (
        <div className="mx-auto flex max-w-7xl rounded-bl-2xl rounded-br-2xl flex-wrap items-center justify-between p-6 lg:px-8 bg-gray-300 lg:h-[50vh]">
            <div className="lg:w-1/2 m-auto px-32 flex flex-col gap-5">
                <h1 className="text-6xl font-bold text-gray-700">
                    Affordable Quality Truck Parts
                </h1>
                <p>

                </p>
                <Link href="/products" className="bg-black text-white py-3 rounded-md w-56 hover:bg-gray-500 duration-500">
                    <p className="text-center">
                        Browse Parts
                    </p>
                </Link>
            </div>
            <div className="mt-10 lg:w-1/2">
                <Image
                    src="/Images/iveco-s-way.png"
                    alt=""
                    width={1000}
                    height={1000}
                />
            </div>
        </div>
    )
}
