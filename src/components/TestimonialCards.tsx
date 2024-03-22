'use client'

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const pharmacyTestimonials = [
  {
    quote:
      'Access to essential medicines is a fundamental element of an adequate standard of living. - World Health Organization',
    name: 'Emily Johnson',
    title: 'WHO Advocate',
  },
  {
    quote:
      'Pharmacists are crucial healthcare professionals, providing expert advice on medication use and promoting public health. - American Pharmacists Association',
    name: 'David Smith',
    title: 'APhA Supporter',
  },
  {
    quote:
      'Customized medications play a vital role in meeting unique patient needs and improving therapeutic outcomes. - International Academy of Compounding Pharmacists',
    name: 'Jennifer Brown',
    title: 'IACP Member',
  },
  {
    quote:
      'The promotion of wellness through community pharmacies is essential for population health and disease prevention. - Pharmaceutical Society of Australia',
    name: 'Michael Rodriguez',
    title: 'PSA Member',
  },
  {
    quote:
      'Over-the-counter medications provide accessible solutions for common health concerns and contribute to self-care practices. - National Institute of Health',
    name: 'Sarah Thompson',
    title: 'NIH Supporter',
  },
];



  function PharmacyTestimonials() {
    return (
      <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
          <h2 className="text-3xl font-bold text-center mb-8 z-10">Pharmaceutical Praise: Testimonials of Excellence</h2>
          <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
              <div className="w-full max-w-6xl">
              <InfiniteMovingCards
                  items={pharmacyTestimonials}
                  direction="right"
                  speed="slow"
        />
              </div>
          </div>
      </div>
    )
  }
  

export default PharmacyTestimonials