import React from 'react';
import '../styles/PriceCards.css';

const PriceCards = () => {
  const tracks = [
    {
      name: 'Full Stack Development',
      price1: '₹289',
      price2: '₹487'
    },
    {
      name: 'AI & Machine Learning',
      price1: '₹329',
      price2: '₹587'
    },
    {
      name: 'Full Stack with AI',
      price1: '₹329',
      price2: '₹587'
    },
    {
      name: 'Full Stack + AI + ML',
      price1: '₹329',
      price2: '₹587'
    },
    {
      name: 'Full Stack + AI + ML + IoT',
      price1: '₹379',
      price2: '₹597'
    },
    {
      name: 'Data Analytics',
      price1: '₹289',
      price2: '₹487'
    },
    {
      name: 'AI with Data Analytics',
      price1: '₹329',
      price2: '₹587'
    }
  ];

  const handleCardClick = () => {
    window.open('https://forms.gle/cLpjJuXjsezAYgcf7', '_blank');
  };

  return (
    <div className="price-cards-container">
      <h2 className="section-title">What We Offer</h2>
      <div className="price-cards-wrapper">
        {tracks.map((track, index) => (
          <div 
            key={index} 
            className="price-card" 
            onClick={handleCardClick}
            style={{ cursor: 'pointer' }}
          >
            <h3>{track.name}</h3>
            <div className="price-details">
              <div className="price-period">
                <span>1 Month</span>
                <span className="price">{track.price1}</span>
              </div>
              <div className="price-period">
                <span>2 Months</span>
                <span className="price">{track.price2}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="offer-details">
        <h3>🔥 Top 5 Performers every month get:</h3>
        <ul>
          <li>Exclusive Goodies</li>
          <li>Certificates</li>
          <li>Prizes worth ₹10,000!</li>
        </ul>
        <h3>📦 What Students Will Get:</h3>
        <ul>
          <li>✅ Industry-Level Projects</li>
          <li>✅ Best Resource Material curated by experts</li>
          <li>✅ 1-on-1 Mentorship Sessions</li>
          <li>✅ Project Review + Certification</li>
          <li>✅ Real Resume & GitHub Portfolio Building</li>
          <li>✅ Community Access + Hackathon Support</li>
        </ul>
      </div>
    </div>
  );
};

export default PriceCards;