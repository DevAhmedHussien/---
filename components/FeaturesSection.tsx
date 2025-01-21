import { FaCode, FaCloud, FaDatabase } from "react-icons/fa";

const features = [
  {
    icon: FaCode,
    title: "Custom Development",
    description: "Build tailored solutions to meet your unique business needs."
  },
  {
    icon: FaCloud,
    title: "Cloud Integration",
    description: "Optimize and scale your cloud infrastructure efficiently."
  },
  {
    icon: FaDatabase,
    title: "Data Solutions",
    description: "Leverage data for insights and strategic decisions."
  }
];

const FeaturesSection: React.FC = () => {
  return (
    < section className="h-[80vh] bg-muted/50 flex items-center justify-center"   >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          < h2
            className="text-3xl font-bold mb-4 "
          
          >
            Key Features
          </ h2>
          < p
            className="text-muted-foreground max-w-2xl mx-auto"
            
          >
            Comprehensive IT solutions tailored to your business needs.
          </ p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            < div
              key={index}
              className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border hover:border-primary text-left"
            >
              <feature.icon className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </ div>
          ))}
        </div>
      </div>
    </ section>
  );
};

export default FeaturesSection;
