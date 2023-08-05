import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import './MultiTab.css';
import img1 from './assets/image-5.jpeg';
import img2 from './assets/image-6.jpg';
import img3 from './assets/image-7.jpeg';

const MultiTab = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const images = [
    {
      id: 1,
      img: img1,
      alt: 'Image 1',
    },
    {
      id: 2,
      img: img2,
      alt: 'Image 2',
    },
    {
      id: 3,
      img: img3,
      alt: 'Image 3',
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (currentImageIndex === images.length - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(images.length - 1);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  // Auto slide interval time in milliseconds
  const autoSlideInterval = 3000;

  useEffect(() => {
    // Function to automatically slide images
    const autoSlideImages = () => {
      nextImage();
    } ;

    // Set up the interval to slide images automatically
    const intervalId = setInterval(autoSlideImages, autoSlideInterval);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <div className="container background-image">
      <div className="tab-nav">
        <div
          className={classnames('tab-link', { active: activeTab === '1' })}
          onClick={() => {
            toggle('1');
          }}
        >
          Menu
        </div>
        <div
          className={classnames('tab-link', { active: activeTab === '2' })}
          onClick={() => {
            toggle('2');
          }}
        >
          Reach Us
        </div>
        <div
          className={classnames('tab-link', { active: activeTab === '3' })}
          onClick={() => {
            toggle('3');
          }}
        >
          About Us
        </div>
      </div>
      <div className="tab-content">
        {activeTab === '1' && (
          <div>
            <h4>Menu</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod ipsum sed nunc laoreet, quis tincidunt velit varius. Fusce at est in enim efficitur malesuada. Donec euismod ex ut turpis mollis, a tincidunt ipsum faucibus. Curabitur eget metus euismod, molestie ipsum id, vehicula odio. Nam ultricies, risus quis bibendum hendrerit, tellus enim placerat mauris, vel molestie mauris eros at purus. Sed euismod quam at ante suscipit, a ultrices odio tincidunt. Sed porta justo eget massa commodo, at imperdiet massa sagittis. Aliquam erat volutpat. Nullam euismod nunc vel erat finibus, ac sodales dolor elementum. Duis ac velit eu nibh bibendum blandit vel a sem.
            </p>
          </div>
        )}
        {activeTab === '2' && (
          <div>
            <h4>Reach Us</h4>
            <p>
              Ut in nunc vitae augue luctus gravida. Etiam non sapien ac enim mollis bibendum eget quis ex. Aliquam erat volutpat. Aliquam erat volutpat. Praesent vel tortor eget enim dictum hendrerit vel eget nibh. Curabitur blandit justo eu tellus fermentum, vel gravida est fermentum. Sed lacinia non quam eget bibendum.
            </p>
          </div>
        )}
        {activeTab === '3' && (
          <div>
            <h4>About Us</h4>
            <p>
              Proin vitae nulla vel quam aliquam luctus. Suspendisse potenti. Mauris in orci vel sapien fringilla posuere. Nullam auctor nulla eget diam vulputate, a condimentum lacus bibendum. Donec nec neque nec nisl bibendum bibendum a et nisi. Donec interdum mi ut elit dignissim, eget tincidunt nibh feugiat. Donec pharetra diam quis ligula porttitor maximus.
            </p>
          </div>
        )}
      </div>
      <div className="slider-container">
        <button className="slider-button prev-button" onClick={prevImage}>{'<'}</button>
        <img className="slider-image" src={images[currentImageIndex].img} alt={images[currentImageIndex].alt} />
        <button className="slider-button next-button" onClick={nextImage}>{'>'}</button>
      </div>
      <div className="form-container">
        <form>
          <label htmlFor="destination">Destination:</label>
          <input type="text" id="destination" name="destination" />

          <label htmlFor="departure-date">Departure Date:</label>
          <input type="date" id="departure-date" name="departure-date" />

          <label htmlFor="return-date">Return Date:</label>
          <input type="date" id="return-date" name="return-date" />

          <label htmlFor="travelers">Number of Travelers:</label>
          <select id="travelers" name="travelers">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MultiTab;
