import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const [status, setStatus] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    document.getElementById("form").style.display = "none";
    setStatus("📩 Sending your message ...");

    const formData = new FormData(e.target);
    formData.append("access_key", "71b08955-2aee-4518-adbc-fe7cbd599e6f");

    const result = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((result) => result.json());

    if (result.success) {
      setStatus(
        "✅ Your message was sent! I will get back to you as soon as I can."
      );
    } else {
      setStatus("😟 Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-10 flex items-center bg-dark-rose text-cream text-lg font-josefin-sans lg:text-xl">
      <div className="text-center mx-auto px-5 py-20 md:w-2/3 lg:px-30">
        <h1 className="text-4xl sm:text-5xl font-medium mb-4">Contact Me</h1>
        <p className="leading-relaxed mb-5">
          {status
            ? status
            : "Please get in touch if you know of any opportunities for work, or want to collaborate on a project."}
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
        <form
          id="form"
          name="contact"
          className="flex flex-col md:ml-auto w-full mt-5"
          onSubmit={onSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <div className="mb-4">
            <label htmlFor="name" className="leading-7 text-sm">
              Name
            </label>
            <br />
            <input
              required
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
              required
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
              required
              id="message"
              name="message"
              className="w-full md:w-8/12 h-[150px] bg-gray-800 rounded focus:ring-2 focus:ring-cream text-base outline-none text-cream py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <input
            type="submit"
            className="w-6/12 lg:w-3/12 m-auto text-gray-800 bg-mauve border-0 py-2 px-6 hover:bg-mauve-hover rounded text-lg"
          />
        </form>
      </div>
    </section>
  );
}
