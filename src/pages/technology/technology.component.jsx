import { useState, useEffect } from 'react';
import './technology.style.scss';
import { DATA_TECH } from '../../lib/data';

const tech = [
  {
    name: 'Launch vehicle',
    images: {
      portrait: './technology/image-launch-vehicle-portrait.jpg',
      landscape: './technology/image-launch-vehicle-landscape.jpg'
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
  },
  {
    name: 'Spaceport',
    images: {
      portrait: './technology/image-spaceport-portrait.jpg',
      landscape: './technology/image-spaceport-landscape.jpg'
    },
    description:
      'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.'
  },
  {
    name: 'Space capsule',
    images: {
      portrait: './technology/image-space-capsule-portrait.jpg',
      landscape: './technology/image-space-capsule-landscape.jpg'
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
  }
];

function Technology() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageType, setImageType] = useState('portrait');

  const currentData = DATA_TECH[currentIndex];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setImageType('portrait');
      } else {
        setImageType('landscape');
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [imageType]);

  return (
    <div id="technology">
      <p className="page-header">
        <span>03</span>SPACE LAUNCH 101
      </p>
      <main>
        <div className="tech-content">
          <div className="option bellefair">
            {tech.map((val, index) => {
              if (index == currentIndex) {
                return (
                  <div
                    className="active"
                    onClick={() => setCurrentIndex((prev) => index)}
                    key={index}
                  >
                    {index + 1}
                  </div>
                );
              }
              return (
                <div
                  onClick={() => setCurrentIndex((prev) => index)}
                  key={index}
                >
                  {index + 1}
                </div>
              );
            })}
          </div>
          <div className="tech-content-main">
            <span className="bellefair">The Terminology...</span>
            <h1 className="bellefair">{currentData.name}</h1>
            <p className="paragraph">{currentData.description}</p>
          </div>
        </div>
        <div className="tech-image">
          <img src={currentData.images[imageType]} alt="tech image" />
        </div>
      </main>
    </div>
  );
}

export default Technology;
