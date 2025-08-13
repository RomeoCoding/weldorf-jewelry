import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Award, Scissors, PenTool } from 'react-feather';

const CraftStep: React.FC<{ icon: React.ReactNode, title: string, children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="text-center p-4 rounded-lg group transition-all duration-300 hover:shadow-xl hover:bg-white">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent-light text-primary mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
            {icon}
        </div>
        <h3 className="text-2xl font-serif text-heading mb-2 font-bold">{title}</h3>
        <p className="text-text font-sans max-w-xs mx-auto">{children}</p>
    </div>
);

const Craftsmanship: React.FC = () => {
  return (
    <section id="craftsmanship" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-heading font-bold">Our Craftsmanship</h2>
          <p className="mt-4 max-w-2xl mx-auto text-text font-sans">
            From the initial spark of an idea to the final polish, every Weldorf piece is a labor of love.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={100}>
                <CraftStep icon={<Award size={32} />} title="Ethical Sourcing">
                    We personally select the world's finest gemstones, ensuring they are not only beautiful but also ethically and sustainably sourced.
                </CraftStep>
            </AnimatedSection>
            <AnimatedSection delay={200}>
                <CraftStep icon={<PenTool size={32} />} title="Timeless Design">
                    Our designers sketch each concept by hand, blending classic elegance with a modern sensibility to create pieces that will be cherished for generations.
                </CraftStep>
            </AnimatedSection>
            <AnimatedSection delay={300}>
                <CraftStep icon={<Scissors size={32} />} title="Master Artisans">
                    In our Beverly Hills workshop, master jewelers meticulously craft each piece, their steady hands and keen eyes transforming precious materials into art.
                </CraftStep>
            </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;