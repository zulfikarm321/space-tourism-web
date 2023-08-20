import './destination.style.scss';
import { useState, useEffect } from 'react';
import { DATA_DESTINATIONS } from '../../lib/data';

function Destination() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const currentData = DATA_DESTINATIONS[currentIndex];

  const handleOption = (index) => {
    setCurrentIndex(index);
    setAnimate(true); // Aktifkan animasi
  };

  useEffect(() => {
    if (animate) {
      // Setelah beberapa waktu, nonaktifkan animasi
      setTimeout(() => {
        setAnimate(false);
      }, 300); // Sesuaikan waktu sesuai kebutuhan Anda
    }
  }, [animate]);

  return (
    <div id="destination">
      <p className="page-header">
        <span>01</span> PICK YOUR DESTINATION
      </p>
      <main>
        <div className={`destination-image ${animate ? 'animate' : ''}`}>
          <img src={currentData.images.webp} alt={currentData.name} />
        </div>
        <div className={`destination-content ${animate ? 'animate' : ''}`}>
          <div className="option">
            {DATA_DESTINATIONS.map((data, index) => (
              <div
                className={currentIndex === index ? 'active' : ''}
                key={data.name}
                onClick={() => handleOption(index)}
              >
                {data.name}
              </div>
            ))}
          </div>
          <h2 className="bellefair">{currentData.name}</h2>
          <p>{currentData.description}</p>
          <hr />
          <div className="details">
            <div>
              <span>AVG. DISTANCE</span>
              <h4 className="bellefair">{currentData.distance}</h4>
            </div>
            <div>
              <span>EST. TRAVEL TIME</span>
              <h4 className="bellefair">{currentData.travel}</h4>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Destination;
