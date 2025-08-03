import React, { useState, useRef, useEffect } from 'react';

const MentorCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselInnerRef = useRef<HTMLDivElement>(null);

  const mentorData = [
    {
      name: 'Adv. Dr. Kriss Venugopal',
      image: '62f9a321f483e51faac1c31187afa51022c0185a.png',
      description: `Adv. Dr. Kriss Venugopal is a practicing clinical hypnotherapist, legal scholar, voice coach and actor with a PhD in Media Psychology. His work bridges mental health, voice coaching, and public policy, offering unique insight into how reform can be both systemic and deeply personal. He has worked extensively with students, professionals, and institutions to drive meaningful change. "SMILE's model is bold, compassionate, and necessary - and I'm excited to support this new wave of mental health leadership driven by young changemakers", he states.`
    },
    {
      name: 'Adv. Dr. Kriss Venugopal',
      image: '62f9a321f483e51faac1c31187afa51022c0185a.png',
      description: `Adv. Dr. Kriss Venugopal is a practicing clinical hypnotherapist, legal scholar, voice coach and actor with a PhD in Media Psychology. His work bridges mental health, voice coaching, and public policy, offering unique insight into how reform can be both systemic and deeply personal. He has worked extensively with students, professionals, and institutions to drive meaningful change. "SMILE's model is bold, compassionate, and necessary - and I'm excited to support this new wave of mental health leadership driven by young changemakers", he states.`
    }
  ];

  const getCardWidth = () => {
    const card = carouselInnerRef.current?.querySelector('.mentor-card') as HTMLElement;
    if (!card) return 0;
    const cardRect = card.getBoundingClientRect();
    const cardStyle = window.getComputedStyle(card);
    const marginRight = parseFloat(cardStyle.marginRight);
    return cardRect.width + marginRight;
  };

  const updateCarousel = () => {
    const offset = -getCardWidth() * currentIndex;
    if (carouselInnerRef.current) {
      carouselInnerRef.current.style.transform = `translateX(${offset}px)`;
    }
  };

  const showNextMentor = () => {
    setCurrentIndex((prev) => (prev + 1) % mentorData.length);
  };

  const showPreviousMentor = () => {
    setCurrentIndex((prev) => (prev - 1 + mentorData.length) % mentorData.length);
  };

  useEffect(() => {
    updateCarousel();
  }, [currentIndex]);

  useEffect(() => {
    window.addEventListener('resize', updateCarousel);
    return () => {
      window.removeEventListener('resize', updateCarousel);
    };
  }, []);

  return (
    <div className="carousel-container">
      <button className="arrow-button arrow-left" onClick={showPreviousMentor}>
        &#x276E;
      </button>
      <button className="arrow-button arrow-right" onClick={showNextMentor}>
        &#x276F;
      </button>

      <div className="carousel-viewport">
        <div className="carousel-inner" ref={carouselInnerRef}>
          {mentorData.map((mentor, idx) => (
            <div className="mentor-card" key={idx}>
              <div className="mentor-text">
                <div className="section-header">
                  Meet the <span>Mentors</span>
                </div>
                <div className="mentor-name">{mentor.name}</div>
                <div className="mentor-description">{mentor.description}</div>
              </div>
              <div className="mentor-photo">
                <img src={mentor.image} alt={mentor.name} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .carousel-container {
          max-width: 1440px;
          width: 100%;
          min-height: 604px;
          background-color: #001612;
          overflow: hidden;
          position: relative;
          margin: 0 auto;
          padding: 2.8vw 4.2vw;
          color: white;
          font-family: 'Helvetica Neue', sans-serif;
        }

        @media (min-width: 1440px) {
          .carousel-container {
            padding: 40px 60px;
          }
        }

        .carousel-viewport {
          overflow: hidden;
          width: 100%;
        }

        .carousel-inner {
          display: flex;
          transition: transform 0.6s ease;
        }

        .mentor-card {
          width: 83.33%;
          min-width: 300px;
          margin-right: 4.2vw;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2.8vw;
          background-color: rgba(255, 255, 255, 0.03);
          border-radius: 1.4vw;
          box-shadow: 0 0.7vw 2.1vw rgba(90, 158, 148, 0.1);
          flex-shrink: 0;
          transition: transform 0.3s ease;
          flex-direction: row;
        }

        @media (min-width: 1440px) {
          .mentor-card {
            width: 1200px;
            margin-right: 60px;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(90, 158, 148, 0.1);
          }
        }

        @media (max-width: 768px) {
          .mentor-card {
            flex-direction: column;
            text-align: center;
            width: 90%;
            margin-right: 5%;
          }
        }

        .mentor-text {
          max-width: 60%;
          flex: 1;
        }

        @media (max-width: 768px) {
          .mentor-text {
            max-width: 100%;
            margin-bottom: 2rem;
          }
        }

        .section-header {
          font-size: clamp(14px, 1.25vw, 18px);
          letter-spacing: 0.07vw;
          margin-bottom: 0.83vw;
        }

        @media (min-width: 1440px) {
          .section-header {
            font-size: 18px;
            letter-spacing: 1px;
            margin-bottom: 12px;
          }
        }

        .section-header span {
          color: #5a9e94;
          font-weight: bold;
        }

        .mentor-name {
          font-size: clamp(24px, 2.5vw, 36px);
          font-weight: 700;
          margin: 0.7vw 0 1.4vw;
        }

        @media (min-width: 1440px) {
          .mentor-name {
            font-size: 36px;
            margin: 10px 0 20px;
          }
        }

        .mentor-description {
          font-size: clamp(14px, 1.11vw, 16px);
          line-height: 1.6;
          color: #c9c9c9;
        }

        @media (min-width: 1440px) {
          .mentor-description {
            font-size: 16px;
          }
        }

        .mentor-photo {
          width: clamp(200px, 24.75vw, 356px);
          height: clamp(200px, 24.75vw, 356px);
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #5a9e94;
          flex-shrink: 0;
          box-shadow: 0 0.56vw 1.39vw rgba(90, 158, 148, 0.3);
        }

        @media (min-width: 1440px) {
          .mentor-photo {
            width: 356px;
            height: 356px;
            box-shadow: 0 8px 20px rgba(90, 158, 148, 0.3);
          }
        }

        .mentor-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .arrow-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: clamp(40px, 3.47vw, 50px);
          height: clamp(40px, 3.47vw, 50px);
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(6px);
          color: #5a9e94;
          font-size: clamp(18px, 1.67vw, 24px);
          border: 1px solid #5a9e94;
          cursor: pointer;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 0.28vw 0.83vw rgba(90, 158, 148, 0.2);
        }

        @media (min-width: 1440px) {
          .arrow-button {
            width: 50px;
            height: 50px;
            font-size: 24px;
            box-shadow: 0 4px 12px rgba(90, 158, 148, 0.2);
          }
        }

        .arrow-button:hover {
          background-color: #5a9e94;
          color: #001612;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 0.42vw 1.39vw rgba(90, 158, 148, 0.4);
        }

        @media (min-width: 1440px) {
          .arrow-button:hover {
            box-shadow: 0 6px 20px rgba(90, 158, 148, 0.4);
          }
        }

        .arrow-left {
          left: 0.7vw;
        }

        @media (min-width: 1440px) {
          .arrow-left {
            left: 10px;
          }
        }

        .arrow-right {
          right: 0.7vw;
        }

        @media (min-width: 1440px) {
          .arrow-right {
            right: 10px;
          }
        }

        @media (max-width: 480px) {
          .carousel-container {
            padding: 20px 15px;
          }

          .mentor-card {
            padding: 20px;
            border-radius: 15px;
          }

          .arrow-button {
            width: 40px;
            height: 40px;
            font-size: 18px;
          }

          .arrow-left {
            left: 5px;
          }

          .arrow-right {
            right: 5px;
          }
        }
      `}</style>
    </div>
  );
};

export default MentorCarousel;
