import React from 'react';
import AnimatedSection from './AnimatedSection';

const FoundersNote: React.FC = () => {
  return (
    <section id="founders-note" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="md:w-2/5">
              <img
                src="/rings/2_a02.jpg"
                alt="Founders of Weldorf"
                className="rounded-lg shadow-xl object-cover w-full h-full"
              />
            </div>
            <div className="md:w-3/5 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-serif text-heading mb-6 font-bold">A Note from Our Founders</h2>
              <blockquote className="font-sans text-xl md:text-2xl text-text mb-6 leading-relaxed border-l-4 border-primary pl-6 italic">
                "Jewelry is not merely an accessory; it is an intimate form of expression, a keeper of memories, and a future heirloom. At Weldorf, we pour our hearts into creating pieces that will be a part of your story for generations to come."
              </blockquote>
              <p className="font-serif text-3xl text-heading">- Elias &amp; Sami Mattar</p>
              <p className="font-sans text-text mt-1 tracking-widest uppercase text-sm">Founders &amp; Creative Directors</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FoundersNote;