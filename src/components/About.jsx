export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-10 flex items-center bg-cream text-gray-800 text-lg font-josefin-sans sm:text-xl">
      <div className="container flex flex-col items-center mx-auto px-5 py-20 md:gap-10 lg:gap-20 md:flex-row md:px-10 xl:px-40">
        <div className="hidden md:block m-auto sm:w-1/2 lg:w-1/3">
          <img
            className="object-cover object-center rounded"
            src="/images/self-01.jpg"
            alt="An image of Shoaib eating cake in the park"
          />
        </div>
        <div className="flex flex-col items-center text-center mb-10 md:w-1/2 md:items-start md:text-left md:mb-0 lg:flex-grow lg:w-2/3">
          <h1 className="text-4xl mb-2 sm:text-5xl">About Me</h1>
          <p className="mb-4 leading-relaxed md:mb-8">
            Hi, I'm Shoaib. A full stack web developer based in London.{" "}
          </p>
          <img
            className="max-w-[300px] mb-4 object-cover object-center rounded md:hidden"
            src="/images/self-01.jpg"
            alt="An image of Shoaib eating cake in the park"
          />
          <p className="mb-8 leading-relaxed">
            As a software engineer with a first-class degree in mathematics and
            a 10-year track record in education I combine clear thinking, hard
            work and empathy to deliver high quality software solutions.
          </p>
          <p className="mb-8 leading-relaxed">
            I'm in the process of completing a fullstack bootcamp with{" "}
            <a
              href="https://thejump.tech"
              className="hover:underline"
              target="_blank">
              The Jump
            </a>
            , which I am doing alongside learning from{" "}
            <a
              href="https://www.theodinproject.com"
              className="hover:underline"
              target="_blank">
              The Odin Project
            </a>
            . I'm currently open to new roles in either fullstack or frontend
            web development.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-dark-rose border-0 py-2 px-6 hover:bg-dark-rose-hover rounded text-lg">
              Contact Me
            </a>
            <a
              href="#portfolio"
              className="ml-4 inline-flex text-white bg-gray-800 border-0 py-2 px-6 hover:bg-gray-600 rounded text-lg">
              See My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
