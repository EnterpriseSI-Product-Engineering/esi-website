import { useState } from "react";
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
import { Mail, ArrowRight, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const countryCodes = [
  { code: "+1", country: "US" },
  { code: "+44", country: "UK" },
  { code: "+91", country: "IN" },
  { code: "+49", country: "DE" },
  { code: "+33", country: "FR" },
  { code: "+86", country: "CN" },
  { code: "+81", country: "JP" },
];

const EmailSubscription = () => {
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

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setShowFullForm(true);
    }
  };

  const handleFullFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
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

    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: "Successfully Subscribed!",
      description:
        "Thank you for your interest. We'll keep you updated on our platform.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-ai-purple/5 via-background to-ai-blue/5">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-br from-ai-purple to-ai-blue p-1 rounded-full w-24 h-24 mx-auto mb-8">
            <div className="bg-background rounded-full w-full h-full flex items-center justify-center">
              <Check className="w-12 h-12 text-ai-purple" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
          <p className="text-xl text-muted-foreground">
            We've received your subscription and will keep you updated on our AI
            platform developments.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="email-subscription"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-ai-purple/5 via-background to-ai-blue/5"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Book a Demo &{" "}
            <span className="bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">
              Stay Informed
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            To book a product demo and stay updated with the latest developments
            on our platform, please enter your email address.
          </p>
        </div>

        {!showFullForm ? (
          <Card className="max-w-2xl mx-auto border-0 bg-background/80 backdrop-blur-sm shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleEmailSubmit} className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-ai-purple/10 to-ai-blue/10 rounded-lg">
                  <Mail className="text-ai-purple w-6 h-6" />
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-0 bg-transparent text-lg placeholder:text-muted-foreground focus-visible:ring-0"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-ai-purple to-ai-blue hover:from-ai-purple/90 hover:to-ai-blue/90"
                  >
                    Continue
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-0 bg-background/80 backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Complete Your Subscription
              </CardTitle>
              <p className="text-center text-muted-foreground">
                Please provide additional information to personalize your
                experience
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleFullFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium">
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
                      value={formData.countryCode}
                      onValueChange={(value) =>
                        handleInputChange("countryCode", value)
                      }
                    >
                      <SelectTrigger className="w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {countryCodes.map((item) => (
                          <SelectItem key={item.code} value={item.code}>
                            {item.code}
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
                    Subscribe to Updates
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>

                <div className="text-center">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setShowFullForm(false)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    ← Back to email entry
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default EmailSubscription;
