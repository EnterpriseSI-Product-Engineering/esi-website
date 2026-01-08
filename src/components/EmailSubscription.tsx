import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, ArrowRight, Check, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const countryCodes = [
  { code: "+1", country: "United States" },
  { code: "+44", country: "United Kingdom" },
  { code: "+91", country: "India" },
  { code: "+49", country: "Germany" },
  { code: "+33", country: "France" },
  { code: "+86", country: "China" },
  { code: "+81", country: "Japan" },
  { code: "+61", country: "Australia" },
  { code: "+64", country: "New Zealand" },
  { code: "+65", country: "Singapore" },
  { code: "+82", country: "South Korea" },
  { code: "+852", country: "Hong Kong" },
  { code: "+971", country: "United Arab Emirates" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+34", country: "Spain" },
  { code: "+39", country: "Italy" },
  { code: "+31", country: "Netherlands" },
  { code: "+47", country: "Norway" },
  { code: "+46", country: "Sweden" },
  { code: "+45", country: "Denmark" },
  { code: "+358", country: "Finland" },
  { code: "+48", country: "Poland" },
  { code: "+43", country: "Austria" },
  { code: "+41", country: "Switzerland" },
  { code: "+32", country: "Belgium" },
  { code: "+353", country: "Ireland" },
  { code: "+351", country: "Portugal" },
  { code: "+30", country: "Greece" },
  { code: "+972", country: "Israel" },
  { code: "+55", country: "Brazil" },
  { code: "+52", country: "Mexico" },
  { code: "+54", country: "Argentina" },
  { code: "+56", country: "Chile" },
  { code: "+57", country: "Colombia" },
  { code: "+27", country: "South Africa" },
  { code: "+60", country: "Malaysia" },
  { code: "+62", country: "Indonesia" },
  { code: "+63", country: "Philippines" },
  { code: "+66", country: "Thailand" },
  { code: "+84", country: "Vietnam" },
];

const EmailSubscription = ({ page }: { page?: string }) => {
  const [email, setEmail] = useState("");
  const [showFullForm, setShowFullForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    designation: "",
    city: "",
    country: "",
    countryCode: "+1",
    phone: "",
  });
  const { toast } = useToast();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-15, 15, -15],
      x: [-5, 5, -5],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setShowFullForm(true);
    }
  };

  const handleFullFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields = [
      "firstName",
      "lastName",
      "company",
      "designation",
      "city",
      "country",
    ];
    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitted(true);
    toast({
      title: "Successfully Subscribed!",
      description:
        "Thank you for your interest. We'll keep you updated on our platform.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    if (field === "countryCode" && value.includes("-")) {
      const code = value.split("-").pop() ?? "+1";
      setFormData((prev) => ({ ...prev, [field]: code }));
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-ai-purple/10 to-ai-blue/5 rounded-full blur-xl"
            variants={pulseVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-ai-cyan/10 to-ai-purple/5 rounded-full blur-xl"
            variants={pulseVariants}
            animate="animate"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Floating Elements */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-32 right-16 w-12 h-12 rounded-full bg-gradient-to-br from-ai-purple/20 to-ai-blue/15 blur-sm"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute bottom-40 left-16 w-16 h-16 rounded-full bg-gradient-to-br from-ai-cyan/15 to-neural-pink/10 blur-sm"
          style={{ animationDelay: "1.5s" }}
        />

        <motion.div
          className="max-w-2xl mx-auto text-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="relative mb-8">
            <div className="bg-gradient-to-br from-ai-purple to-ai-blue p-1 rounded-full w-24 h-24 mx-auto">
              <div className="bg-background rounded-full w-full h-full flex items-center justify-center">
                <Check className="w-12 h-12 text-ai-purple" />
              </div>
            </div>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold mb-4"
          >
            Thank You!
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground"
          >
            We've received your subscription and will keep you updated on our AI
            platform developments.
          </motion.p>
        </motion.div>
      </section>
    );
  }

  return (
    <section
      id="email-subscription"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden "
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-ai-purple/10 to-ai-blue/5 rounded-full blur-xl"
          variants={pulseVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-ai-cyan/10 to-ai-purple/5 rounded-full blur-xl"
          variants={pulseVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-neural-pink/8 to-ai-cyan/5 rounded-full blur-lg"
          variants={pulseVariants}
          animate="animate"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-32 right-16 w-12 h-12 rounded-full bg-gradient-to-br from-ai-purple/20 to-ai-blue/15 blur-sm"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-40 left-16 w-16 h-16 rounded-full bg-gradient-to-br from-ai-cyan/15 to-neural-pink/10 blur-sm"
        style={{ animationDelay: "1.5s" }}
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-1/3 right-1/4 w-8 h-8 rounded-full bg-gradient-to-br from-neural-pink/25 to-ai-purple/15 blur-sm"
        style={{ animationDelay: "3s" }}
      />

      <motion.div
        className="max-w-6xl mx-auto relative z-10 border-2 py-10 rounded-xl bg-blue-100/30 border-blue-200/40"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          {/* Enhanced Badge */}
          <motion.div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-gradient-to-r from-secondary/80 to-secondary/60 border border-border/50 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-ai-purple" />
            </motion.div>
            <span className="text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">
              {page === "solutions" ? "Let's Connect" : "Get Started Today"}
            </span>
          </motion.div>

          {page === "solutions" ? (
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">
                Let's Start a Discussion
              </span>
            </h2>
          ) : (
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Book a Demo &{" "}
              <span className="bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">
                Stay Informed
              </span>
            </h2>
          )}
          {page === "solutions" ? (
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              If you have an existing pain area/requirement where our "Agentic
              AI Pilot-as-Service" offering seems a good fit, please send us an
              enquiry:
            </p>
          ) : (
            <p className="text-xl text-muted-foreground">
              To book a product demo and stay updated with the latest
              developments on our platform, please enter your email address.
            </p>
          )}
        </motion.div>

        {!showFullForm ? (
          <motion.div variants={itemVariants}>
            <Card className="group relative overflow-hidden max-w-md mx-auto border bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm hover:from-background hover:to-muted/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent rounded-xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-ai-purple to-ai-blue opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl" />
              <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />

              <CardContent className="relative p-8">
                <form onSubmit={handleEmailSubmit} className="space-y-6">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-4 bg-gradient-to-r from-ai-purple/10 to-ai-blue/10 rounded-lg">
                    <div className="flex items-center gap-3 flex-1">
                      <Mail className="text-ai-purple w-6 h-6 shrink-0" />
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-0 bg-transparent text-base placeholder:text-muted-foreground focus-visible:ring-0 flex-1"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full sm:w-auto bg-gradient-to-r from-ai-purple to-ai-blue hover:from-ai-purple/90 hover:to-ai-blue/90 py-3 text-base font-medium"
                    >
                      Continue
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <motion.div variants={itemVariants}>
            <Card className="group relative overflow-hidden border bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm hover:from-background hover:to-muted/50 transition-all duration-500">
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent rounded-xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-ai-purple to-ai-blue opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl" />
              <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />

              <CardHeader className="relative">
                <CardTitle className="text-2xl text-center">
                  To serve you better, we would request following additional
                  info:
                </CardTitle>
              </CardHeader>
              <CardContent className="relative p-8">
                <form onSubmit={handleFullFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label
                        htmlFor="firstName"
                        className="text-sm font-medium"
                      >
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company" className="text-sm font-medium">
                        Company *
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) =>
                          handleInputChange("company", e.target.value)
                        }
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="designation"
                        className="text-sm font-medium"
                      >
                        Designation/Role *
                      </Label>
                      <Input
                        id="designation"
                        value={formData.designation}
                        onChange={(e) =>
                          handleInputChange("designation", e.target.value)
                        }
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="city" className="text-sm font-medium">
                        City *
                      </Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) =>
                          handleInputChange("city", e.target.value)
                        }
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="country" className="text-sm font-medium">
                        Country *
                      </Label>
                      <Input
                        id="country"
                        value={formData.country}
                        onChange={(e) =>
                          handleInputChange("country", e.target.value)
                        }
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium">
                      Phone Number (Optional)
                    </Label>
                    <div className="flex gap-2 mt-1">
                      <Select
                        value={`${formData.country}-${formData.countryCode}`}
                        onValueChange={(value) =>
                          handleInputChange("countryCode", value)
                        }
                      >
                        <SelectTrigger className="w-48">
                          <SelectValue placeholder={formData.countryCode}>
                            {formData.countryCode}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          {countryCodes.map((item) => (
                            <SelectItem
                              key={`${item.country}-${item.code}`}
                              value={`${item.country}-${item.code}`}
                            >
                              {item.country} ({item.code})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <Input
                        placeholder="Phone number"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        className="flex-1"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-ai-purple to-ai-blue hover:from-ai-purple/90 hover:to-ai-blue/90 py-3 text-lg font-medium"
                    >
                      Submit
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default EmailSubscription;
