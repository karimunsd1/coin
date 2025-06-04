import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white space-y-6">
      
      {/* App Logo */}
      <Image src="/bitcoin.png" alt="Bitcoin Logo" width={80} height={80} />

      {/* Brand Name */}
      <div className="text-orange-500 font-bold text-2xl">
        Coin<span className="text-white">eX</span>
      </div>

      {/* Icon Row */}
      
    </div>
  );
}
