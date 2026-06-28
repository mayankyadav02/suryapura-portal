import Container from '../layout/Container';
import FaqItem from './FaqItem';

export default function FaqSection({
  heading,
  faqs,
}) {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-24 dark:border-slate-800 dark:bg-slate-950 transition-colors duration-300">
      <Container>

        <div className="max-w-3xl mx-auto md:mx-0">

          <h2 className="mb-12 font-display text-4xl leading-tight text-slate-900 dark:text-white md:text-5xl font-bold">
            {heading}
          </h2>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/80">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                q={faq.q}
                a={faq.a}
                isLast={index === faqs.length - 1}
              />
            ))}
          </div>

        </div>

      </Container>
    </section>
  );
}