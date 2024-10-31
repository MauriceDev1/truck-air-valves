// components/Testimonials.tsx
import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO of Example Co.',
    text: 'This product has transformed our business! The service and support have been fantastic. Highly recommend!',
    image: '/path-to-image/john.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'CTO of Another Co.',
    text: 'Amazing experience with this team. The quality and dedication are top-notch.',
    image: '/path-to-image/jane.jpg',
  },
  {
    id: 3,
    name: 'Alice Brown',
    role: 'Product Manager at Some Co.',
    text: 'I love using this product. It’s user-friendly, and the customer support is excellent!',
    image: '/path-to-image/alice.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">What Our Clients Say</h2> */}
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-md p-6 rounded-lg text-center transform transition duration-500 hover:scale-105"
            >
              <img
                className="w-16 h-16 rounded-full mx-auto mb-4"
                src={testimonial.image}
                alt={`${testimonial.name}'s profile`}
              />
              <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{testimonial.role}</p>
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
