import { Testimonial } from "@/content/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => (
  <div className="rounded-2xl bg-surface/90 p-6 shadow-soft">
    <p className="text-base leading-relaxed text-textPrimary">
      "{testimonial.quote}"
    </p>
    <div className="mt-6 text-sm text-textSecondary">
      <p className="font-medium text-textPrimary">{testimonial.name}</p>
      <p>
        {testimonial.title} · {testimonial.company}
      </p>
    </div>
  </div>
);
