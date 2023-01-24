import React from "react";
import "./Skills.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <>
      <Container>
        <h1>SKILLS</h1>
        <div className="skills">
          <div class="photo-grid-container">
            <div class="photo-grid">
              <div class="photo-grid-item first-item">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">HTML - CSS</div>
                    <div class="flip-card-back">
                      <p>Click to se the project</p>
                      <Link to="/skills">click</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div class="photo-grid-item first-item">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">JAVASCRIPT</div>
                    <div class="flip-card-back">
                      <p>Click to se the project</p>
                      <Link to="/skills">click</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div class="photo-grid-item first-item">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">REACT</div>
                    <div class="flip-card-back">
                      <p>Click to se the project</p>
                      <Link to="/skills">click</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div class="photo-grid-item first-item">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">REACT NATIVE</div>
                    <div class="flip-card-back">
                      <p>Click to se the project</p>
                      <Link to="/skills">click</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div class="photo-grid-item first-item">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">PYTHON</div>
                    <div class="flip-card-back">
                      <p>Click to se the project</p>
                      <Link to="/skills">click</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Skills;
