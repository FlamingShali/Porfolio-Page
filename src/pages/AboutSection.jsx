
const AboutSection = () => {
  return (
    <div className="text-3xl flex flex-col bg-transparent justify-items-center text-center">
      <h1 className="self-center m-10 font-semibold animate-core-appear">Something about me</h1>
      <div className="relative animate-appear-down justify-items-center text-center text-lg m-11 p-3">
        <p className="mb-3">
          Hello! I'am very happy you reached here. My name is Michał, an
          aspiring programmer.
        </p>

        <p className="mb-3">
          I'm a passionate and dedicated front-end developer with a strong
          foundation in HTML, CSS, JavaScript, and React. I enjoy building
          responsive, user-friendly websites and web applications that not only
          look great but also provide an intuitive experience for users.
        </p>
        <p className="mb-3">
          I'm always eager to learn and grow as a developer. In the future, I
          plan to expand my skill set by diving into Python, C#, and SQL to
          explore full-stack development and backend technologies.
        </p>
        <p className="mb-3">
          When I'm not coding, you can find me exploring new tech trends,
          solving coding challenges, or brainstorming ideas for innovative
          projects. I'm excited about creating meaningful digital experiences
          and contributing to projects that make a difference.
        </p>
      </div>
      
    </div>
  );
};

export default AboutSection;
