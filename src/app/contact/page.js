import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import Image from 'next/image';
import yourImage from '@/images/aatiqa.jpg'; // Update path if needed

export default function Contact() {
  return (
    <section className="flex flex-col items-center justify-center text-white mt-20 px-4">
      {/* 🔆 Profile Image */}
      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-600 shadow-[0_0_25px_rgba(168,85,247,0.7)] mb-8">
        <Image
          src={yourImage}
          alt="Aatiqa Hussain"
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* 📝 Contact Information */}
      <div className="bg-black border border-purple-700 rounded-xl p-6 text-center shadow-md hover:shadow-[0_0_20px_4px_rgba(168,85,247,0.3)] transition space-y-4">
        <p className="flex justify-center items-center gap-2 text-lg">
          <MdEmail className="text-purple-400" />
          hussainaatiqa99@gmail.com
        </p>
        <p className="flex justify-center items-center gap-2 text-lg">
          <MdPhone className="text-purple-400" />
          +92-333-1438458
        </p>
        <p className="flex justify-center items-center gap-2 text-lg">
          <FaLinkedin className="text-purple-400" />
          <a
            href="https://www.linkedin.com/in/aatiqa-hussain-275930278"
            className="text-purple-300 hover:underline"
            target="_blank"
          >
            linkedin/aatiqa-hussain
          </a>
        </p>
        <p className="flex justify-center items-center gap-2 text-lg">
          <FaGithub className="text-purple-400" />
          <a
            href="https://github.com/Aatiqa04"
            className="text-purple-300 hover:underline"
            target="_blank"
          >
            github.com/Aatiqa04
          </a>
        </p>
      </div>
    </section>
  );
}
