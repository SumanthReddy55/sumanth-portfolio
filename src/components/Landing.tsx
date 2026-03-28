import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">

          {/* LEFT SIDE */}
          <div className="landing-intro">
            <h2>Hello! I'm</h2>

            <h1>
              SUMANTH
              <br />
              <span>BOMMIREDDY</span>
            </h1>
          </div>

          {/* RIGHT SIDE */}
          <div className="landing-info">
            <h3>A Machine Learning</h3>

            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Engineer</div>
              <div className="landing-h2-2">Specialist</div>
            </h2>

            <h2>
              <div className="landing-h2-info">ML Engineer</div>
              <div className="landing-h2-info-1">AI Systems</div>
            </h2>

            {/* 🔥 NEW LINE (IMPORTANT) */}
            <p className="landing-description">
              Building real-time ML systems for fraud detection, credit risk, and scalable decision pipelines using Python and distributed data systems.
            </p>
          </div>

        </div>

        {children}
      </div>
    </>
  );
};

export default Landing;