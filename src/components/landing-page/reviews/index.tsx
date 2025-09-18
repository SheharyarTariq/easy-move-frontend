import React from 'react';
import { Star, User } from 'lucide-react';

const reviews = [
  {
    id: 1,
    author_name: "Sarah",
    rating: 5,
    text: "They provided fast, professional, and stress-free service from start to finish. Highly recommended for their reliability and excellent customer care!",
    time: "2 weeks ago",
    profile_photo_url: null
  },
  {
    id: 2,
    author_name: "Junaid",
    rating: 5,
    text: "I recently used Galaxy Removal House Clearance Company and was thoroughly impressed with their professionalism, efficiency, and care. From the moment I contacted them, the communication was clear and friendly. They arrived on time, worked quickly, and handled everything with respect — including fragile items and things of sentimental value. The team was polite, hardworking, and left the property spotless once the job was done. It was a huge relief to have such a reliable company take care of the clearance, especially during a stressful time.I highly recommend Galaxy Removal to anyone needing a trustworthy, hassle-free house clearance service. Five stars well deserved!",
    time: "1 month ago",
    profile_photo_url: null
  },
  {
    id: 3,
    author_name: "Emma Williams",
    rating: 4,
    text: "Great experience overall. The team was friendly and professional. Good value for money and would use them again.",
    time: "3 weeks ago",
    profile_photo_url: null
  },
  {
    id: 4,
    author_name: "Akhter",
    rating: 5,
    text: "Perfect office relocation service. They handled our IT equipment with special care and completed the move over the weekend as requested.",
    time: "1 week ago",
    profile_photo_url: null
  },
  {
    id: 5,
    author_name: "Lisa Martinez",
    rating: 5,
    text: "Amazing service! They helped with packing, moving, and even furniture assembly. The team went above and beyond our expectations.",
    time: "2 months ago",
    profile_photo_url: null
  },
  {
    id: 6,
    author_name: "James Wilson",
    rating: 4,
    text: "Reliable and efficient moving service. Good communication throughout the process and fair pricing. Would recommend to others.",
    time: "1 month ago",
    profile_photo_url: null
  }
];

const GoogleReviews = () => {
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <section id="reviews" className="sm:py-20 py-10 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-display text-primary mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              {renderStars(Math.round(averageRating))}
              <span className="text-lg font-semibold">{averageRating.toFixed(1)}</span>
            </div>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{reviews.length} Google Reviews</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don&apos;t just take our word for it - see what our satisfied customers have to say about our moving services.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div 
              key={review.id}
              className="bg-card rounded-2xl p-6 shadow-card-custom border border-border hover:shadow-lg transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Review Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <User className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{review.author_name}</h4>
                    <p className="text-sm text-muted-foreground">{review.time}</p>
                  </div>
                </div>
                {renderStars(review.rating)}
              </div>

              {/* Review Content */}
              <p className="text-muted-foreground leading-relaxed line-clamp-3" title={review.text}>
                &quot;{review.text}&quot;
              </p>

              {/* Google Badge */}
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Posted on Google</span>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-red-500 rounded-sm flex items-center justify-center">
                      <span className="text-white text-xs font-bold">G</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to experience our exceptional service yourself?
          </p>
          <a 
            href="https://www.google.com/maps/place/galaxy+removal/@51.4969222,-0.4193512,17z/data=!4m8!3m7!1s0xbcffb830c002c61:0x64f9c226515cb603!8m2!3d51.4969222!4d-0.4193512!9m1!1b1!16s%2Fg%2F11xyw61w_j?entry=ttu&g_ep=EgoyMDI1MDkxNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary-light transition-colors"
          >
            <span className="mr-2">View all reviews on Google</span>
            <div className="w-5 h-5 bg-red-500 rounded-sm flex items-center justify-center">
              <span className="text-white text-xs font-bold">G</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;