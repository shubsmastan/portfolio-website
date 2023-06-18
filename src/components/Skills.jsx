import skills from "../data/skills.json";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen py-10 flex items-center bg-cream text-gray-800 text-lg font-josefin-sans lg:text-xl">
      <div className="container px-5 py-20 mx-auto text-center xl:px-40">
        <h1 className="text-4xl sm:text-5xl font-medium mb-4">Tech Stack</h1>
        <div className="grid grid-cols-2 sm:grid-cols-7">
          {skills.map((skill) => (
            <div key={skill.name}>
              <img className="m-auto" src={skill.icon} alt="gallery" />
              <p className="text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
