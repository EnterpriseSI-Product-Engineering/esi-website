import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Linkedin } from "lucide-react";
import EmailSubscription from "@/components/EmailSubscription";
import { AbhiroopImage } from "@/assets";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-ai-light to-background">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl py-3 font-bold mb-6 bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent animate-fade-in">
            Meet Our CEO
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
            Software Product Leader with 22 years of experience in software
            products, solutions & technology consulting. Passionate about AI and
            innovation.
          </p>
        </div>
      </section>

      {/* CEO Profile Section */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <div className="w-48 h-48 rounded-full overflow-hidden">
              {" "}
              <img
                src="/mnt/data/648e972d-2f4c-4033-aa29-85049eac6fb5.png" // Your image path
                alt="Abhiroop - CEO"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-center ">Abhiroop</h2>
            <p className="mb-6 text-center">
              CEO & Head of AI Product Management
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Software Product Leader with 22 years of experience in software
              products, solutions & technology consulting. With over 10 years in
              AI, Abhiroop has led engineering for 4 AI-powered products and
              successfully delivered 35+ AI projects. He has also founded and
              built 3 AI startups over the last decade.
            </p>
            <div className="text-center">
              <a
                href="https://www.linkedin.com/in/abhiroop" // Your LinkedIn profile link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-primary hover:text-ai-blue"
              >
                <Linkedin className="h-6 w-6" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      </section> */}
      <div className=" max-w-2xl mx-auto">
        <div className="border rounded-xl bg-white p-3">
          <div className=" h-[350px] w-full bg-gray-200 rounded-lg flex items-center justify-center">
            <img
              src={AbhiroopImage}
              alt={"Abhiroop Roy"}
              className="h-full object-cover object-top w-full rounded-lg border"
            />
          </div>
          <div className="flex items-center justify-center mb-4 mt-2">
            <div className="flex flex-col md:flex-row md:items-end items-center gap-2 my-3">
              <h1 className="text-2xl">Abhiroop Roy</h1>
              <span className=" mb-1 text-xs">
                ( CEO & Head of AI Product Management )
              </span>
            </div>
          </div>
          <p className="mb-2">
            Software Product Leader with 22 years of experience in software
            products, solutions & technology consulting. With over 10 years in
            AI, Abhiroop has led engineering for 4 AI-powered products and
            successfully delivered 35+ AI projects. He has also founded and
            built 3 AI startups over the last decade.
          </p>
          <Link to={"https://www.linkedin.com/in/abhiroop"} target="_blank">
            <Linkedin
              strokeWidth={1.5}
              className="text-blue-500 cursor-pointer"
            />
          </Link>
        </div>
      </div>

      {/* Business Focus Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Vision & Focus Areas</h2>
          <p className="text-lg text-muted-foreground mb-12">
            At the core of our business is a commitment to bringing cutting-edge
            AI solutions to enterprises. Our focus areas include AI product
            management, custom AI solutions, and driving AI adoption across
            various business verticals.
          </p>

          {/* Focus Areas */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-glow transition-all duration-300 hover-scale">
              <CardHeader>
                <CheckCircle className="h-6 w-6 text-ai-purple flex-shrink-0" />
                <CardTitle>AI Product Development</CardTitle>
                <CardContent>
                  <p className="text-muted-foreground">
                    Developing high-performance AI products that meet
                    enterprise-grade standards.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-glow transition-all duration-300 hover-scale">
              <CardHeader>
                <Users className="h-6 w-6 text-ai-purple flex-shrink-0" />
                <CardTitle>Enterprise AI Solutions</CardTitle>
                <CardContent>
                  <p className="text-muted-foreground">
                    Providing customized AI solutions tailored to enterprise
                    needs and processes.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-glow transition-all duration-300 hover-scale">
              <CardHeader>
                <CheckCircle className="h-6 w-6 text-ai-purple flex-shrink-0" />
                <CardTitle>AI Adoption Strategy</CardTitle>
                <CardContent>
                  <p className="text-muted-foreground">
                    Helping businesses seamlessly adopt and integrate AI
                    technology into their operations.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Email Subscription */}
      <EmailSubscription />
    </div>
  );
};

export default About;
