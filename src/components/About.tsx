import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>

        <p className="para">
          I’m a Machine Learning Engineer with around 5 years of experience building production-ready ML systems.
        </p>

        <p className="para">
          I work mainly on fraud detection and credit risk problems, where I take business ideas and convert them into real-world machine learning pipelines, feature engineering systems, and real-time decision services.
        </p>

        <p className="para">
          My focus is not just on building models, but on making them reliable, fast, and scalable in production environments using Python, SQL, and distributed data systems.
        </p>

        <p className="para">
          I enjoy simplifying complex systems — turning messy notebooks into structured pipelines, improving latency, and making ML systems easy for teams to use and maintain.
        </p>
      </div>
    </div>
  );
};

export default About;