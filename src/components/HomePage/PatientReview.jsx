import React from "react";
import { HiStar, HiCheckCircle } from "react-icons/hi";
import Marquee from "react-fast-marquee";
import { getPatientReview } from "@/lib/frontendData";

const PatientReview = async () => {

  const review = await getPatientReview();
  const review1 = review.slice(0, 3);
  const review2 = review.slice(3, 6);

  return (
    <section className="bg-slate-50 py-14 px-4 sm:px-6 lg:px-8">
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
          <div className="flex items-center">
            {review1.map((review) => (
              <div
                key={review.id}
                className="w-[400px] mr-5 bg-white rounded-2xl border border-slate-100 p-6 flex flex-col justify-between transition-all duration-300"
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
          <div className="flex items-center">
            {review2.map((review) => (
              <div
                key={review.id}
                className="w-[400px] mr-5 bg-white rounded-2xl border border-slate-100 p-6 flex flex-col justify-between transition-all duration-300"
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
