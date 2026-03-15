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
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Video editor & Graphic Designer</h4>
                <h5>Laburnum Developers Pvt. Ltd</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently working as a Video editor & Graphic Designer, creating engaging visual content and delivering high-quality video productions and graphic designs for various projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Video editor & Graphic Designer</h4>
                <h5>Realty Smartz Pvt. Ltd</h5>
              </div>
              <h3>2023-2025</h3>
            </div>
            <p>
              Worked as a Video editor & Graphic Designer for 2 years and 3 months, creating compelling visual content for real estate marketing, including promotional videos, social media content, and graphic design materials.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Video editor & Graphic Designer</h4>
                <h5>Parksmart Pvt. Ltd</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Started career as an intern Video editor & Graphic Designer for 3 months, learning professional video editing techniques and graphic design principles while working on various client projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
