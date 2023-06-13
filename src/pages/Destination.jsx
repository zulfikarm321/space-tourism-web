import './destination.scss';
import { useState } from 'react';

const destination = [
    {
        name: 'Moon',
        images: {
            png: './destination/image-moon.png',
            webp: './destination/image-moon.webp'
        },
        description:
            'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        distance: '384,400 km',
        travel: '3 days'
    },
    {
        name: 'Mars',
        images: {
            png: './destination/image-mars.png',
            webp: './destination/image-mars.webp'
        },
        description:
            'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        distance: '225 mil. km',
        travel: '9 months'
    },
    {
        name: 'Europa',
        images: {
            png: './destination/image-europa.png',
            webp: './destination/image-europa.webp'
        },
        description:
            'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        distance: '628 mil. km',
        travel: '3 years'
    },
    {
        name: 'Titan',
        images: {
            png: './destination/image-titan.png',
            webp: './destination/image-titan.webp'
        },
        description:
            'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        distance: '1.6 bil. km',
        travel: '7 years'
    }
];

function Destination() {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="destination">
            <header>
                <p className="content-sub-heading">
                    <span>01</span>PICK YOUR DESTINATION
                </p>
                <div className="planet-image">
                    <img src={destination[currentIndex].images.webp} alt="" />
                </div>
            </header>
            <main>
                <div className="destination-option">
                    {destination.map((val, index) => {
                        if (index == currentIndex) {
                            return (
                                <p
                                    className="active"
                                    onClick={() =>
                                        setCurrentIndex((prev) => index)
                                    }
                                    key={index}
                                >
                                    {val.name}
                                </p>
                            );
                        }
                        return (
                            <p
                                onClick={() => setCurrentIndex((prev) => index)}
                                key={index}
                            >
                                {val.name}
                            </p>
                        );
                    })}
                </div>
                <div className="destination-content">
                    <h1 className="head">{destination[currentIndex].name}</h1>
                    <div className="paragraph">
                        {destination[currentIndex].description}
                    </div>
                </div>

                <div className="divider"></div>

                <div className="destination-details">
                    <li>
                        <p className="detail-head">AVG. DISTANCE</p>
                        <p className="detail-text">
                            {destination[currentIndex].distance}
                        </p>
                    </li>
                    <li>
                        <p className="detail-head">EST. DISTANCE</p>
                        <p className="detail-text">
                            {destination[currentIndex].travel}
                        </p>
                    </li>
                </div>
            </main>
        </div>
    );
}

export default Destination;
