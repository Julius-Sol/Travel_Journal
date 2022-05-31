import React from "react";
import "./JournalEntry.css";

const JournalEntry = ({ entry }) => {
  return (
    <section>
      <div className="card-entry">
        <div className="image-container">
          <img className="entry-image" src={entry.imageUrl} alt={entry.title} />
        </div>
        <div className="card-entry-info">
          <div className="entry-title">
            <div className="entry-title-icon">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1200 1200">
                <path
                  fill="red"
                  d="M600 0C350.178 0 147.656 202.521 147.656 452.344c0 83.547 16.353 169.837 63.281 232.031L600 1200l389.062-515.625c42.625-56.49 63.281-156.356 63.281-232.031C1052.344 202.521 849.822 0 600 0zm0 261.987c105.116 0 190.356 85.241 190.356 190.356C790.356 557.46 705.116 642.7 600 642.7s-190.356-85.24-190.356-190.356S494.884 261.987 600 261.987z"
                />
              </svg>
              <h3 className="entry-location">{entry.location}</h3>
            </div>
            <a href={entry.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h1 className="entry-title-text">{entry.title}</h1>
          <p className="entry-date">{`${entry.startDate} - ${entry.endDate}`}</p>
          <p className="desc">{entry.description}</p>
        </div>
      </div>
      <hr></hr>
    </section>
  );
};

export default JournalEntry;
