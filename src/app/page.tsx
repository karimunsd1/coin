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
      <div className="flex gap-6 mt-4">
        <Image src="/safe.png" alt="Safe" width={60} height={60} />
        <Image src="/sandglass.png" alt="Sandglass" width={60} height={60} />
      </div>
    </div>
  );
}
