import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Real-time Fraud Detection System",
    category: "Machine Learning System",
    tools: ["Python", "Kafka", "FastAPI", "XGBoost"],
    image: "/images/Solidx.png",
  },
  {
    title: "Credit Risk Decision Engine",
    category: "ML Decisioning System",
    tools: ["Python", "scikit-learn", "SQL"],
    image: "/images/radix.png",
  },
  {
    title: "Streaming ML Pipeline",
    category: "Data Engineering + ML",
    tools: ["PySpark", "Kafka", "Airflow"],
    image: "/images/bond.png",
  },
  {
    title: "Model Monitoring System",
    category: "MLOps",
    tools: ["Prometheus", "Grafana", "Python"],
    image: "/images/sapphire.png",
  },
  {
    title: "ML API Platform",
    category: "Model Serving",
    tools: ["FastAPI", "Docker", "Microservices"],
    image: "/images/Maxlife.png",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        
        {/* TITLE */}
        <h2>
          ML <span>Projects</span>
        </h2>

        <div className="carousel-wrapper">

          {/* ARROWS */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>

          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* SLIDES */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">

                    {/* LEFT CONTENT */}
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>

                      <div className="carousel-details">
                        <h4>{project.title}</h4>

                        <p className="carousel-category">
                          {project.category}
                        </p>

                        <div className="carousel-tools">
                          <span className="tools-label">Tech Stack</span>

                          {/* ✅ SAFE RENDER */}
                          <p>
                            {Array.isArray(project.tools)
                              ? project.tools.join(", ")
                              : "ML Tools"}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                      />
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DOTS */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                data-cursor="disable"
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Work;