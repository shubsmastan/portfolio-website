import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-dark-rose text-center px-5 py-10 lg:px-40 text-cream font-josefin-sans"
    >
      <h1 className="sm:text-4xl text-3xl mb-1 font-medium title-font">
        Contact Me
      </h1>
      <p className="leading-relaxed mb-3">
        Please get in touch if you have any questions, know of any
        opportunities, or want to collaborate on a project.
      </p>
      <div className="flex gap-5 justify-center">
        <a href="https://www.github.com/shubsmastan">
          <img
            src="/src/assets/icons/github.svg"
            className="w-10 invert"
            alt=""
          />
        </a>
        <a href="https://www.linkedin.com/in/shoaibmastan/">
          <img
            src="/src/assets/icons/linkedin.svg"
            className="w-10 invert"
            alt=""
          />
        </a>
      </div>
      <form
        // netlify
        name="contact"
        className="flex flex-col md:ml-auto w-full mt-7"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="mb-4">
          <label htmlFor="name" className="leading-7 text-sm">
            Name
          </label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            className="w-full md:w-6/12 bg-gray-800 rounded focus:border-indigo-500 focus:ring-2 focus:ring-cream text-base outline-none text-cream py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm">
            Email
          </label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            className="w-full md:w-6/12 bg-gray-800 rounded focus:border-indigo-500 focus:ring-2 focus:ring-cream text-base outline-none text-cream py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm">
            Message
          </label>
          <br />
          <textarea
            id="message"
            name="message"
            className="w-full md:w-6/12 bg-gray-800 rounded focus:border-indigo-500 focus:ring-2 focus:ring-cream text-base outline-none text-cream py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button
          type="submit"
          className="w-6/12 md:w-2/12 m-auto text-gray-800 bg-mauve border-0 py-2 px-6 hover:bg-mauve-hover rounded text-lg"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
