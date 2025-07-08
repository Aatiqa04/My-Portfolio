import Image from "next/image";
import AatiqaImage from "../images/aatiqa.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-20">

        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-lg text-gray-400">Hello, It's Me</h2>
          <h1 className="text-5xl font-bold mt-2 text-white">Aatiqa Hussain</h1>
          <h3 className="text-2xl mt-4">
            And I'm a <span className="text-purple-400 font-semibold">Mern Stack Developer</span>
          </h3>
          <p className="mt-4 text-gray-400">
           I'm a passionate MERN Stack Developer skilled in building full-stack web applications using MongoDB, Express.js, React, and Node.js. I love turning ideas into clean, scalable, and responsive interfaces with a focus on performance and user experience. From designing front-end UIs to crafting robust backend APIs, I enjoy building modern web solutions that make an impact.
          </p>
        </div>

        {/* Right Side */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <div className="relative w-[250px] h-[250px] rounded-full bg-gradient-to-tr from-purple-600 via-blue-400 to-pink-500 p-[3px]">
            <div className="rounded-full overflow-hidden w-full h-full bg-black">
              <Image
                src={AatiqaImage}
                alt="Aatiqa Hussain"
                width={250}
                height={250}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
