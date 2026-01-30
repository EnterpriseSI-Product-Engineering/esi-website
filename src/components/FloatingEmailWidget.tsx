import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import { Mail, ArrowRight, Check, X, Sparkles } from "lucide-react";
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

const FloatingEmailWidget = () => {
  const [isOpen, setIsOpen] = useState(true);
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

  useEffect(() => {
    // Listen for contact us button clicks to open widget
    const handleContactUsClick = () => {
      setIsOpen(true);
      // Scroll widget into view
      setTimeout(() => {
        const widget = document.querySelector('[data-floating-widget]');
        if (widget) {
          widget.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 100);
    };

    window.addEventListener('floating-widget:open', handleContactUsClick as EventListener);
    return () => window.removeEventListener('floating-widget:open', handleContactUsClick as EventListener);
  }, []);

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
            className="fixed bottom-6 right-6 z-40 group"
            data-floating-widget-trigger
            onClick={() => setIsOpen(true)}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-ai-purple to-ai-blue rounded-full shadow-lg flex items-center justify-center text-white cursor-pointer hover:shadow-xl transition-all duration-300">
                <Mail className="w-6 h-6" />
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
            className="fixed bottom-6 right-6 z-50 w-96 max-h-[90vh] overflow-y-auto"
            data-floating-widget
          >
            <Card className="group relative overflow-hidden border bg-gradient-to-br from-background/95 to-muted/50 backdrop-blur-xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent rounded-xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-ai-purple to-ai-blue opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-xl" />
              <div className="absolute inset-[1px] bg-gradient-to-br from-background/95 to-background/85 backdrop-blur-xl rounded-xl" />

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </motion.button>

              <CardHeader className="relative pb-4">
                {!isSubmitted ? (
                  <>
                    <div className="flex items-center gap-2 mb-2">
                      <motion.div
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
                        Stay Updated
                      </span>
                    </div>
                    <CardTitle className="text-lg">
                      Book a{" "}
                      <span className="bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">
                        Demo
                      </span>
                    </CardTitle>
                  </>
                ) : null}
              </CardHeader>

              <CardContent className="relative">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <motion.div className="relative mb-4">
                      <div className="bg-gradient-to-br from-ai-purple to-ai-blue p-1 rounded-full w-16 h-16 mx-auto">
                        <div className="bg-background rounded-full w-full h-full flex items-center justify-center">
                          <Check className="w-8 h-8 text-ai-purple" />
                        </div>
                      </div>
                    </motion.div>
                    <h3 className="font-semibold mb-2">Thank You!</h3>
                    <p className="text-sm text-muted-foreground">
                      We'll be in touch soon with demo details.
                    </p>
                  </motion.div>
                ) : !showFullForm ? (
                  <motion.form
                    onSubmit={handleEmailSubmit}
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <p className="text-sm text-muted-foreground">
                      Get a personalized demo of our Agentic AI platform
                    </p>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-ai-purple/10 to-ai-blue/10 rounded-lg">
                        <Mail className="text-ai-purple w-5 h-5 shrink-0" />
                        <Input
                          type="email"
                          placeholder="Your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="border-0 bg-transparent text-sm placeholder:text-muted-foreground focus-visible:ring-0"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-ai-purple to-ai-blue hover:from-ai-purple/90 hover:to-ai-blue/90 text-white text-sm font-medium"
                      >
                        Continue
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.form
                    onSubmit={handleFullFormSubmit}
                    className="space-y-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <p className="text-sm text-muted-foreground">
                      Complete your details to schedule a demo
                    </p>

                    <div className="grid grid-cols-2 gap-3">
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
                          className="mt-1 text-sm h-9"
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
                          className="mt-1 text-sm h-9"
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
                        className="mt-1 text-sm h-9"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="designation" className="text-xs">
                        Designation/Role *
                      </Label>
                      <Input
                        id="designation"
                        value={formData.designation}
                        onChange={(e) =>
                          handleInputChange("designation", e.target.value)
                        }
                        className="mt-1 text-sm h-9"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
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
                          className="mt-1 text-sm h-9"
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
                          className="mt-1 text-sm h-9"
                          required
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-ai-purple to-ai-blue hover:from-ai-purple/90 hover:to-ai-blue/90 text-white text-sm font-medium h-9"
                      >
                        Submit & Schedule Demo
                        <ArrowRight className="ml-2 w-4 h-4" />
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
