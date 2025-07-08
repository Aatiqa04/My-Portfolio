import Image from "next/image";
import AatiqaImage from "../../images/aatiqa.jpg"; // adjust path if needed

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 ">
      <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-20 gap-10">

        {/* Left Side: Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-[250px] h-[250px] rounded-full bg-gradient-to-tr from-purple-600 via-blue-400 to-pink-500 p-[3px]">
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

        {/* Right Side: About Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-purple-400 mb-4">About Me</h1>
          
          <p className="text-gray-400 mt-4">
            I'm Aatiqa Hussain, a dedicated full-stack developer with 2 years of hands-on experience in building web applications.
            I specialize in creating modern, responsive UIs and scalable backend systems using tools like <span className="text-purple-400">React, Node.js, Next.js, Firebase, MongoDB</span> and more.
          </p>

          <p className="text-gray-400 mt-4">
            I hold a Bachelor's degree in Computer Science from <span className="text-purple-400 ">FAST National University (NUCES), Lahore</span>. 
            My education has built a strong foundation in software engineering principles, while my professional experience sharpened my real-world development skills.
          </p>

          <p className="text-gray-400 mt-4">
            I enjoy turning complex problems into intuitive user experiences. My focus is on writing clean, efficient, and maintainable code while continuously learning and adapting to new technologies.
          </p>
        </div>
      </section>
    </div>
  );
}
