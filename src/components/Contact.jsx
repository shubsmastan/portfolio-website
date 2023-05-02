import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen py-20 bg-dark-rose text-lg text-cream font-josefin-sans lg:text-xl"
    >
      <div className="text-center mx-auto px-5 py-10 md:w-2/3 lg:px-30">
        <h1 className="text-4xl sm:text-5xl font-medium mb-4">Contact Me</h1>
        <p className="leading-relaxed mb-3">
          Please get in touch if you have any questions, know of any
          opportunities, or want to collaborate on a project.
        </p>
        <div className="flex gap-10 justify-center">
          <a href="https://www.github.com/shubsmastan">
            <FontAwesomeIcon
              icon={faGithub}
              size="2xl"
              style={{ color: "#f8ede3" }}
            />
          </a>
          <a href="https://www.linkedin.com/in/shoaibmastan/">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2xl"
              style={{ color: "#f8ede3" }}
            />
          </a>
        </div>
        {/* <img
          src="/images/self-02.jpg"
          className="h-[400px] w-auto pt-4 m-auto"
          alt="hero"
        /> */}
        <form
          netlify
          name="contact"
          className="flex flex-col md:ml-auto w-full mt-5"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="mb-4">
            <label htmlFor="name" className="leading-7 text-sm">
              Name
            </label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              className="w-full md:w-8/12 bg-gray-800 rounded focus:ring-2 focus:ring-cream text-base outline-none text-cream py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
              className="w-full md:w-8/12 bg-gray-800 rounded focus:ring-2 focus:ring-cream text-base outline-none text-cream py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
              className="w-full md:w-8/12 h-[150px] bg-gray-800 rounded focus:ring-2 focus:ring-cream text-base outline-none text-cream py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="w-6/12 lg:w-3/12 m-auto text-gray-800 bg-mauve border-0 py-2 px-6 hover:bg-mauve-hover rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
