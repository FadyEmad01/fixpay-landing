import { Badge } from "@/components/ui/badge";
import { PhoneMockup } from "@/components/landing/download";

const fakeScreenshots = [
  "https://via.placeholder.com/300x600/154843/FFFFFF?text=Fixpay+Home",
  "https://via.placeholder.com/300x600/154843/FFFFFF?text=Fixpay+Payments",
  "https://via.placeholder.com/300x600/154843/FFFFFF?text=Fixpay+History"
];

const features = [
  {
    id: 1,
    title: "Instant Payments",
    description: "Send and receive money instantly with zero fees",
    icon: "⚡"
  },
  {
    id: 2,
    title: "Bill Splitting",
    description: "Easily split bills with friends and family",
    icon: "👥"
  },
  {
    id: 3,
    title: "Expense Tracking",
    description: "Track your spending and manage your budget",
    icon: "📊"
  },
  {
    id: 4,
    title: "Secure & Private",
    description: "Bank-level security to protect your financial data",
    icon: "🔒"
  }
];

export default function FixpayLanding() {
  return (
    <section className="overflow-hidden py-20 w-full bg-background">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="rounded-full mb-4">
            Fixpay
          </Badge>
          <h1 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Fixpay - Your All-in-One Payment Solution
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg">
            Send money, split bills, and track expenses - all in one secure app
          </p>
        </div>

        {/* Features Section */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="flex flex-col items-center gap-4 p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-2xl">{feature.icon}</div>
              <h3 className="font-semibold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-center text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Phone Mockups Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            See Fixpay in Action
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Experience seamless payments with our beautifully designed iOS and Android apps
          </p>
          
          <div className="flex flex-col items-center gap-8 sm:flex-row">
            {/* Left Phone - iOS */}
            <div className="flex-1 max-w-[300px]">
              <PhoneMockup 
                screenImage={fakeScreenshots[0]} 
                className="w-full h-[500px]"
                containerClassName="w-full h-full"
              />
            </div>
            
            {/* Right Phone - Android */}
            <div className="flex-1 max-w-[300px]">
              <PhoneMockup 
                screenImage={fakeScreenshots[1]} 
                className="w-full h-[500px]"
                containerClassName="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to simplify your payments?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
            Join thousands of users who trust Fixpay for their daily transactions
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors">
              Download on App Store
            </a>
            <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/90 border border-secondary/50 transition-colors">
              Get it on Google Play
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}