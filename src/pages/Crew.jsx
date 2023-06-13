import { useState } from 'react';
import './crew.scss';

const crew = [
    {
        name: 'Douglas Hurley',
        images: {
            png: './crew/image-douglas-hurley.png',
            webp: './crew/image-douglas-hurley.webp'
        },
        role: 'Commander',
        bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
    },
    {
        name: 'Mark Shuttleworth',
        images: {
            png: './crew/image-mark-shuttleworth.png',
            webp: './crew/image-mark-shuttleworth.webp'
        },
        role: 'Mission Specialist',
        bio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
    },
    {
        name: 'Victor Glover',
        images: {
            png: './crew/image-victor-glover.png',
            webp: './crew/image-victor-glover.webp'
        },
        role: 'Pilot',
        bio: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.'
    },
    {
        name: 'Anousheh Ansari',
        images: {
            png: './crew/image-anousheh-ansari.png',
            webp: './crew/image-anousheh-ansari.webp'
        },
        role: 'Flight Engineer',
        bio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.'
    }
];

function Crew() {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="crew">
            <p className="content-sub-heading">
                <span>02</span>PICK YOUR CREW
            </p>

            <main>
                <div className="crew-image">
                    <img src={crew[currentIndex].images.webp} alt="" />
                    <div className="divider"></div>
                </div>
                <div className="content">
                    <div className="crew-option">
                        {crew.map((val, index) => {
                            if (index == currentIndex) {
                                return (
                                    <div
                                        className="circle active"
                                        onClick={() =>
                                            setCurrentIndex((prev) => index)
                                        }
                                        key={index}
                                    ></div>
                                );
                            }
                            return (
                                <div
                                    className="circle"
                                    onClick={() =>
                                        setCurrentIndex((prev) => index)
                                    }
                                    key={index}
                                ></div>
                            );
                        })}
                    </div>
                    <div className="crew-content">
                        <p className="crew-content-role">
                            {crew[currentIndex].role}
                        </p>
                        <div className="crew-content-name">
                            {crew[currentIndex].name}
                        </div>
                        <div className="paragraph">
                            {crew[currentIndex].bio}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Crew;
