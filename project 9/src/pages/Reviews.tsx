import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: '1',
    name: 'Anna M.',
    rating: 5,
    comment: 'Sehr professioneller Service! Die Maniküre hält schon seit Wochen.',
    date: '2024-02-15',
    service: 'Maniküre'
  },
  {
    id: '2',
    name: 'Sophie K.',
    rating: 5,
    comment: 'Wunderschöne Arbeit bei meinen Augenbrauen. Ich bin begeistert!',
    date: '2024-02-10',
    service: 'Augenbrauen'
  }
];

export default function Reviews() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
        Bewertungen
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review) => (
          <div 
            key={review.id} 
            className="bg-dark-800/80 backdrop-blur-sm p-8 rounded-xl border border-gold-500/20 hover:border-gold-500 transition-all hover:shadow-gold"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">{review.name}</h3>
              <div className="flex">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-gold-400 text-gold-400" />
                ))}
              </div>
            </div>
            <p className="text-dark-200 mb-4 text-lg">{review.comment}</p>
            <div className="text-sm text-gold-400 font-medium">
              <span>{review.service}</span>
              <span className="mx-2">•</span>
              <span>{new Date(review.date).toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}