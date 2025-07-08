import Link from "next/link";
import Image from "next/image";
import profilePic from "@/images/aatiqa.jpg"; // ✅ Update this path if needed

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-b from-black to-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* 🔆 Logo Area with Picture + Name */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-purple-400">
            <Image
              src={profilePic}
              alt="Aatiqa Hussain"
              width={32}
              height={32}
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-2xl font-bold text-purple-400 tracking-wide">
            Aatiqa Hussain
          </h1>
        </div>

        {/* 🔗 Navigation Links */}
        <div className="space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-purple-400 transition">Home</Link>
          <Link href="/about" className="hover:text-purple-400 transition">About</Link>
          <Link href="/projects" className="hover:text-purple-400 transition">Projects</Link>
          <Link href="/contact" className="hover:text-purple-400 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
