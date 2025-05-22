'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';


export default function ErrorPage() {
    const router = useRouter();

    const handleBackToHome = () => {
        router.push('/dashboard');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#111] text-white px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Error image */}
                <div className="mt-6 md:mt-12">
                    <Image
                        src="/error.png"
                        alt="Error"
                        width={200}
                        height={200}
                        className="mb-6"
                    />
                </div>

                {/* Error text */}
                <div className="text-center md:text-left max-w-md">
                    <h1 className="text-7xl font-extrabold mb-2">404</h1>
                    <h2 className="text-2xl font-semibold mb-3">Page Not Found</h2>
                    <p className="text-gray-400 mb-6">
                        The page you're looking for doesn't exist or has been moved.
                    </p>

                    <div className="flex justify-center md:justify-start">
                        <button
                            onClick={handleBackToHome}
                            className="bg-orange-500 hover:bg-orange-600 transition-colors text-white py-2 px-6 rounded-md"
                        >
                            Back to Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
