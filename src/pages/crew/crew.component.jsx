import { useState, useEffect } from 'react';
import './crew.style.scss';
import { DATA_CREWS } from '../../lib/data';

function Crew() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const currentData = DATA_CREWS[currentIndex];

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
    <div id="crew">
      <p className="page-header">
        <span>02</span> MEET YOUR CREW
      </p>
      <main>
        <div className={`crew-content ${animate ? 'animate' : ''}`}>
          <div>
            <span className="bellefair">{currentData.role}</span>
            <h1 className="bellefair">{currentData.name}</h1>
            <p className="paragraph">{currentData.bio}</p>
          </div>
          <div className="option">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className={`circle ${currentIndex === index ? 'active' : ''}`}
                onClick={() => handleOption(index)}
              ></div>
            ))}
          </div>
        </div>
        <div className={`crew-image ${animate ? 'animate' : ''}`}>
          <img src={currentData.images.webp} alt={currentData.name} />
        </div>
      </main>
    </div>
  );
}

export default Crew;
