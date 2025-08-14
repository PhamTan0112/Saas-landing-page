import { Container } from "../shared/Container";

export const Numbers = () => {
  return (
    <section className="relative mt-12 md:mt-16">
      <Container className="flex flex-wrap justify-center gap-6">
        <StatCard number="100+" label="AI Models Implemented" />
        <StatCard number="50+" label="Enterprise Clients" />
        <StatCard number="98%" label="Customer Satisfaction Rate" />
        <StatCard number="24/7" label="AI-Powered Support" />
      </Container>
    </section>
  );
};

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <div className="p-5 sm:p-6 sm:py-8 w-64 rounded-3xl bg-box-bg border border-box-border shadow-lg shadow-box-shadow">
    <div className="text-center px-5">
      <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
        {number}
      </h2>
      <p className="mt-2 text-heading-3">{label}</p>
    </div>
  </div>
);
