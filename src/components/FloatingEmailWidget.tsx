import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, ArrowRight, Check, X, Sparkles, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FloatingEmailWidget = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [showFullForm, setShowFullForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

  useEffect(() => {
    // Listen for contact us button clicks to open widget
    const handleContactUsClick = () => {
      setIsOpen(true);
      // Scroll widget into view
      setTimeout(() => {
        const widget = document.querySelector("[data-floating-widget]");
        if (widget) {
          widget.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }, 100);
    };

    window.addEventListener(
      "floating-widget:open",
      handleContactUsClick as EventListener,
    );
    return () =>
      window.removeEventListener(
        "floating-widget:open",
        handleContactUsClick as EventListener,
      );
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setShowFullForm(true);
  };

  const handleFullFormSubmit = async (e: React.FormEvent) => {
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

    setIsLoading(true);

    // Submit to FormSubmit
    try {
      const formSubmitData = new FormData();
      formSubmitData.append("email", email);
      formSubmitData.append("firstName", formData.firstName);
      formSubmitData.append("lastName", formData.lastName);
      formSubmitData.append("company", formData.company);
      formSubmitData.append("designation", formData.designation);
      formSubmitData.append("city", formData.city);
      formSubmitData.append("country", formData.country);
      formSubmitData.append("_subject", "New Demo Request - EnterpriseSI");
      formSubmitData.append("_template", "table");

      // TODO : update the email here
      await fetch("https://formsubmit.co/abhiroop@enterprisesi.co", {
        method: "POST",
        body: formSubmitData,
      });

      setIsLoading(false);
      setIsSubmitted(true);
      toast({
        title: "Personalized Demo Request Submitted",
        description:
          "Thank you for your interest. Our team will contact you shortly to schedule your demo.",
      });

      // Reset after 3 seconds
      setTimeout(() => {
        setIsOpen(false);
        setShowFullForm(false);
        setIsSubmitted(false);
        setEmail("");
        setFormData({
          firstName: "",
          lastName: "",
          company: "",
          designation: "",
          city: "",
          country: "",
          countryCode: "+1",
          phone: "",
        });
      }, 3000);
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Submission Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    if (field === "countryCode" && value.includes("-")) {
      const code = value.split("-").pop() ?? "+1";
      setFormData((prev) => ({ ...prev, [field]: code }));
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setShowFullForm(false);
    setIsSubmitted(false);
    setEmail("");
    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      designation: "",
      city: "",
      country: "",
      countryCode: "+1",
      phone: "",
    });
  };

  return (
    <>
      {/* Floating Widget Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 group"
            data-floating-widget-trigger
            onClick={() => setIsOpen(true)}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-ai-purple to-ai-blue rounded-full shadow-lg flex items-center justify-center text-white cursor-pointer hover:shadow-xl transition-all duration-300">
                <Mail className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-ai-purple to-ai-blue opacity-30 blur-md"
              />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Widget Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-0 left-0 right-0 md:bottom-6 md:right-6 md:left-auto z-50 w-full md:w-96 max-h-[90vh] overflow-y-auto md:rounded-xl rounded-t-xl"
            data-floating-widget
          >
            <Card className="group relative overflow-hidden border-0 md:border bg-gradient-to-br from-background/95 to-muted/50 backdrop-blur-xl shadow-2xl md:rounded-xl rounded-t-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent md:rounded-xl rounded-t-xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-ai-purple to-ai-blue opacity-0 group-hover:opacity-10 transition-all duration-500 md:rounded-xl rounded-t-xl" />
              <div className="absolute inset-[1px] bg-gradient-to-br from-background/95 to-background/85 backdrop-blur-xl md:rounded-xl rounded-t-xl" />

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleClose}
                className="absolute top-3 right-3 md:top-4 md:right-4 z-10 p-1.5 md:p-2 rounded-lg bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-300"
              >
                <X className="w-4 h-4 md:w-5 md:h-5" />
              </motion.button>

              <CardHeader className="relative pb-3 md:pb-4 pt-4 md:pt-6 px-4 md:px-6">
                {!isSubmitted ? (
                  <>
                    <div className="flex items-center gap-2 mb-2">
                      {/* <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <Sparkles className="w-4 h-4 text-ai-purple" />
                      </motion.div>
                      <span className="text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">
                        Get Started
                      </span> */}
                    </div>
                    <CardTitle className="text-base md:text-lg pr-8">
                      Schedule Your{" "}
                      <span className="bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">
                        Personalized Demo
                      </span>
                    </CardTitle>
                  </>
                ) : null}
              </CardHeader>

              <CardContent className="relative px-4 md:px-6 pb-4 md:pb-6">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 md:py-8"
                  >
                    <motion.div className="relative mb-4">
                      <div className="bg-gradient-to-br from-ai-purple to-ai-blue p-1 rounded-full w-12 h-12 md:w-16 md:h-16 mx-auto">
                        <div className="bg-background rounded-full w-full h-full flex items-center justify-center">
                          <Check className="w-6 h-6 md:w-8 md:h-8 text-ai-purple" />
                        </div>
                      </div>
                    </motion.div>
                    <h3 className="font-semibold mb-2 text-sm md:text-base">
                      Request Received
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground px-2">
                      Our team will contact you within 24 hours to schedule your
                      personalized demo.
                    </p>
                  </motion.div>
                ) : !showFullForm ? (
                  <motion.form
                    onSubmit={handleEmailSubmit}
                    className="space-y-3 md:space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Experience how our Agentic AI Acceleration Platform can
                      transform your enterprise operations.
                    </p>
                    <div className="flex flex-col gap-2 md:gap-3">
                      <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-ai-purple/10 to-ai-blue/10 rounded-lg">
                        <Mail className="text-ai-purple w-5 h-5 shrink-0" />
                        <Input
                          type="email"
                          placeholder="Business email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="border-0 bg-transparent text-xs md:text-sm placeholder:text-muted-foreground focus-visible:ring-0"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-ai-purple to-ai-blue hover:from-ai-purple/90 hover:to-ai-blue/90 text-white text-xs md:text-sm font-medium h-9 md:h-10"
                      >
                        Request Demo
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.form
                    onSubmit={handleFullFormSubmit}
                    className="space-y-3 md:space-y-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Please provide your information and our solutions team
                      will reach out to you.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="firstName" className="text-xs">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) =>
                            handleInputChange("firstName", e.target.value)
                          }
                          className="mt-1 text-xs md:text-sm h-8 md:h-9"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-xs">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) =>
                            handleInputChange("lastName", e.target.value)
                          }
                          className="mt-1 text-xs md:text-sm h-8 md:h-9"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-xs">
                        Company *
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) =>
                          handleInputChange("company", e.target.value)
                        }
                        className="mt-1 text-xs md:text-sm h-8 md:h-9"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="designation" className="text-xs">
                        Job Title *
                      </Label>
                      <Input
                        id="designation"
                        value={formData.designation}
                        onChange={(e) =>
                          handleInputChange("designation", e.target.value)
                        }
                        className="mt-1 text-xs md:text-sm h-8 md:h-9"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="city" className="text-xs">
                          City *
                        </Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) =>
                            handleInputChange("city", e.target.value)
                          }
                          className="mt-1 text-xs md:text-sm h-8 md:h-9"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="country" className="text-xs">
                          Country *
                        </Label>
                        <Input
                          id="country"
                          value={formData.country}
                          onChange={(e) =>
                            handleInputChange("country", e.target.value)
                          }
                          className="mt-1 text-xs md:text-sm h-8 md:h-9"
                          required
                        />
                      </div>
                    </div>

                    <div className="pt-1 md:pt-2">
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-ai-purple to-ai-blue hover:from-ai-purple/90 hover:to-ai-blue/90 text-white text-xs md:text-sm font-medium h-9 disabled:opacity-50"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Request
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </motion.form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingEmailWidget;
