import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">

          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* PNC */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Machine Learning Engineer</h4>
                <h5>PNC</h5>
              </div>
              <h3>2024 - Present</h3>
            </div>

            <p>
              Built real-time fraud detection systems with sub-100ms latency using Python and streaming pipelines.
              Designed end-to-end ML workflows from business rules to production deployment.
              Worked with event-driven systems (Kafka) and built monitoring dashboards for model performance and drift.
            </p>
          </div>

          {/* Vivma */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Machine Learning Engineer</h4>
                <h5>Vivma Software</h5>
              </div>
              <h3>2020 - 2023</h3>
            </div>

            <p>
              Developed and deployed ML models for fraud detection using Python, pandas, and scikit-learn.
              Rebuilt prediction services and modular ML pipelines for better scalability and maintainability.
              Optimized scoring systems to reduce latency and improve reliability in production environments.
            </p>
          </div>

          {/* Optional Early Career / Project */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Machine Learning Projects</h4>
                <h5>Independent Work</h5>
              </div>
              <h3>Projects</h3>
            </div>

            <p>
              Built deep learning projects including license plate recognition and AI-based fraud detection systems.
              Worked with TensorFlow, OpenCV, and HuggingFace to design end-to-end ML solutions with explainability.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;