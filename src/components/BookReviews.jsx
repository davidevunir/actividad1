import {Star} from 'lucide-react';

export const BookReviews = ({reviews}) => (
    <div className="mt-8 shadow-2xl">
      <h2 className="text-white text-2xl font-bold mb-4">Reseñas de lectores</h2>
      <div className="space-y-4">
        {reviews.map(review => (
            <div key={review.id} className="p-4 rounded-lg bg-neutral-200">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="font-semibold">{review.userName}</p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                        <Star className={i < review.rating ? "fill-yellow-400 text-gray-500" : "text-gray-300"}
                              key={i} size={16}/>
                    ))}
                  </div>
                </div>
                <span className="text-sm text-gray-700">{new Date(review.date).toLocaleDateString()}</span>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
        ))}
      </div>
    </div>
);