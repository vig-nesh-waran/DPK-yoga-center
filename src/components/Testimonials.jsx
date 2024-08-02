import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Testimonials.css';

const testimonials = [
  {
    name: "Sindhu A",
    rating: 5,
    review: "It's almost a week now since I joined Daksha's Yoga class. I'm impressed and very happy with the way she understand our body and train accordingly. She makes us understand what is the advantage of each and every yoga postures. I'm sure i will be a better person mentally and physically very soon.",
  },
  {
    name: "priya piru",
    rating: 5,
    review: "I have been to other yoga centres before, but this has been my best experience so far. Dhaksha is very friendly and also very considerate about everyone’s health. Best part is she teaches lot of variation . We do asanas, pranayama, strength training using dumbles, meditation and also Zumba sometimes, so we never get bored of exercising.",
  },
  {
    name: "Rashida Sakriwala",
    rating: 5,
    review: "Your PRE-NATAL yoga classes have been helping me to stay active, manage pregnancy discomforts, and connect with my body and baby.Thank you so much for creating a safe, nurturing, and empowering environment for expectant mothers like me! Your guidance, support, and encouragement have made a huge difference in my pregnancy journey. You're an amazing instructor, and I feel grateful to have found your classes. Keep it up 🤗",
  },
  {
    name: "amrita pujari",
    rating: 5,
    review: "I'm having a great time doing yoga at DPK Yoga Center. Daksha is an incredible yoga instructor and very personable.We do pranayama and meditation in addition to yoga in an open space early in the morning, which adds to the lovely experience. Since I've started doing yoga consistently for the past three months, my sciatic nerve problem and back discomfort have significantly improved. I'm happy I started taking yoga courses here.",
  },
  {
    name: "Venkat Vijay Kumar",
    rating: 5,
    review: "I feel happy and rejuvenated after every session. This happy feeling is the driving force that pull me out of the bed every early morning :). One quality of Daksha Madam that I would like to categorically highlight is punctuality, class always start on time. I would strongly recommend DPK yoga Center.",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonial-container py-5">
      <h2 className=' text-center'>What our client said</h2>
      <span className='line'></span>
      <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="testimonial-content text-center p-4">
                <p className="review-text">"{testimonial.review}"</p>
                <div className="testimonial-author">
                  <h5 className="author-name">{testimonial.name}</h5>
                  <div className="star-rating">
                    {Array.from({ length: 5 }, (_, i) => (
                      <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        className={i < testimonial.rating ? 'text-warning' : 'text-muted'}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
