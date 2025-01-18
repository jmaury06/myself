"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { GrLinkedin } from "react-icons/gr";
import { ImGithub } from "react-icons/im";

export default function Home() {
  const formRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter()

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleExternalLink = (url: string) => {
    router.push(url)
  }

  return (
    <div className=" min-h-screen bg-cover bg-center bg-fixed">
      <main >
        <section className="h-screen relative flex justify-center items-center">
          {/* background image */}
          <div
            className="absolute opacity-50 inset-0 bg-cover bg-center grayscale"
            style={{
              backgroundImage: "url('/img/yo.jpg')",
              zIndex: -1,
            }}
          ></div>

          <div className="absolute top-12 left-12 text-white">
            <a href="/about">
              <a className="text-lg font-semibold hover:text-cyan-400">ABOUT ME</a>
            </a>
          </div>
          <div className="absolute top-12 right-12 text-white">
            <a href="/mywork">
              <a className="text-lg font-semibold hover:text-cyan-400">MY WORK</a>
            </a>
          </div>

          <div className="text-center text-cyan-400 z-50 bg-['#10C8D4'];
]">
            <h2 className="text-8xl font-extrabold">JAIRO MAURY</h2>
            <p className="text-3xl">FullStack Developer</p>
          </div>

          <div className="absolute bottom-12 left-12">
            <button
              onClick={scrollToForm}
              className="text-white border border-white px-4 py-2 rounded-full hover:bg-cyan-400 hover:border-cyan-400 hover:font-semibold transition duration-300"
            >
              LET'S WORK TOGETHER
            </button>
          </div>
          <div className="absolute flex flex-col bottom-12 right-12 gap-y-2">
            <p
              onClick={scrollToForm}
              className="text-white"
            >
              FIND ME AT
            </p>
            <div className="flex justify-around gap-x-4">
              <GrLinkedin
                className="hover:text-cyan-400 cursor-pointer size-6"
                onClick={() => handleExternalLink('https://www.linkedin.com/in/jmauryh/')}
              />
              <ImGithub
                className="hover:text-cyan-400 cursor-pointer size-6"
                onClick={() => handleExternalLink('https://github.com/jmaury06')}
              />
            </div>

          </div>
        </section>

        <section className="h-screen relative bg-slate-500/40">
          {/* Formulario */}
          <div ref={formRef} className="absolute w-6/12 bottom-16 right-[50%] translate-x-[50%] mt-20 max-w-2xl mx-auto p-8 bg-black bg-opacity-75 text-white rounded-lg shadow-lg">
            <div className="flex flex-col w-full">
              <h2 className="text-2xl text-cyan-400 font-semibold mb-4">I CAN BE YOUR DEVELOPER</h2>
              <p className="mb-6">{`Tell me a bit about your project. I'll contact you as soon as possible.`}</p>

              {/* Inputs del formulario */}
              <form>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 mb-4 bg-gray-700 border border-gray-600 rounded-md text-white"
                />
                <textarea
                  placeholder="Tell me about your project"
                  className="w-full p-3 h-32 bg-gray-700 border border-gray-600 rounded-md text-white"
                ></textarea>
                <button
                  type="submit"
                  className="flex w-24 mx-auto justify-center text-white border border-white px-4 py-2 mt-4 rounded-full hover:bg-white hover:text-black transition duration-300"
                >
                  SEND
                </button>
              </form>

              {/* Botón Back to Top */}
              <button
                onClick={scrollToTop}
                className="flex w-40 mx-auto justify-center text-white border border-white px-4 py-2 mt-4 rounded-full hover:bg-white hover:text-black transition duration-300"
              >
                ▲ Back to top
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
