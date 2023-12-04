// SliderComponent.tsx
import React from 'react';
import Slider from 'react-slick';

interface SliderProps {
  items: {
    id: number;
    title: string;
    imageUrl: string;
    // Add other properties as needed
  }[];
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const SliderComponent: React.FC<SliderProps> = ({ items }) => {

  return (
    <Slider {...settings}>
      {items.map((item) => (
        <div key={item.id}>
          <div className="slider-item">
            <h3>{item.title}</h3>
            <img src={item.imageUrl} alt={item.title} />
            {/* Add other content or styling as needed */}
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;