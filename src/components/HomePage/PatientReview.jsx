import React from "react";
import { HiStar, HiCheckCircle } from "react-icons/hi";
import Marquee from "react-fast-marquee";

const PatientReview = () => {
  const review1 = [
    {
      id: 1,
      name: "Sultana Kamal",
      status: "Verified Patient",
      rating: 5,
      comment:
        "The appointment booking process was incredibly smooth and hassle-free. The system sent automated reminders, which helped me stay updated.",
      date: "2 weeks ago",
    },
    {
      id: 2,
      name: "Tanvir Ahmed",
      status: "Verified Patient",
      rating: 5,
      comment:
        "Saved me hours of waiting in long hospital lines. The digital portal is very clean, lightning-fast, and easy to navigate even for seniors.",
      date: "1 month ago",
    },
    {
      id: 3,
      name: "Nusrat Jahan",
      status: "Verified Patient",
      rating: 4,
      comment:
        "Excellent platform integration. I could easily find the right medical expert and view their available slots without any complexity.",
      date: "3 days ago",
    },
  ];
  const review2 = [
    {
      id: 1,
      name: "Arifur Rahman",
      status: "Verified Patient",
      rating: 5,
      comment:
        "Brilliant user experience. I managed to reschedule my appointment with just two clicks. The interface is highly responsive on mobile too.",
      date: "5 days ago",
    },
    {
      id: 2,
      name: "Farhana Yasmin",
      status: "Verified Patient",
      rating: 5,
      comment:
        "I am amazed by the transparency of this website. Finding doctor fees and real patient reviews made it so easy to pick the right specialist.",
      date: "1 week ago",
    },
    {
      id: 3,
      name: "Kamrul Hasan",
      status: "Verified Patient",
      rating: 3,
      comment:
        "Highly efficient platform. The instant confirmation feature gives great peace of mind, especially during medical emergencies.",
      date: "10 days ago",
    },
  ];

  return (
    <section className="bg-slate-50 py-14 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-[#1e73be] uppercase tracking-widest bg-[#f0f7ff] px-3 py-1.5 rounded-full">
            Patient Stories
          </span>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl my-3">
            What Our Patients Say
          </h2>
          <p className="text-base font-normal text-[#404750] max-w-lg mx-auto">
            Read real feedback from people who experienced our seamless digital
            healthcare scheduling system.
          </p>
        </div>

        {/* Review Card */}
        <div className="space-y-8">

        <Marquee>
          <div className="max-w-6xl mx-auto flex items-center gap-6 ">
            {review1.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col justify-between transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-0.5">
                      {[...Array(review.rating)].map((_, idx) => (
                        <HiStar key={idx} className="w-4 h-4 text-amber-400" />
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                      <HiCheckCircle className="w-3.5 h-3.5" />
                      <span>{review.status}</span>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-[#404750] font-normal italic">
                    "{review.comment}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-slate-900">
                    {review.name}
                  </h4>
                  <span className="text-xs text-[#404750]">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
        <Marquee direction="right">
          <div className="max-w-6xl mx-auto flex items-center gap-6 ">
            {review2.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col justify-between transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-0.5">
                      {[...Array(review.rating)].map((_, idx) => (
                        <HiStar key={idx} className="w-4 h-4 text-amber-400" />
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                      <HiCheckCircle className="w-3.5 h-3.5" />
                      <span>{review.status}</span>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-[#404750] font-normal italic">
                    "{review.comment}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-slate-900">
                    {review.name}
                  </h4>
                  <span className="text-xs text-[#404750]">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
        </div>
      </div>
    </section>
  );
};

export default PatientReview;

