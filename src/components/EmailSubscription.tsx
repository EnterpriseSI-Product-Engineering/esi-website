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

const EmailSubscription = ({ page }: { page: string }) => {
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
    // handle unique country code format (e.g., "India-+91")
    if (field === "countryCode" && value.includes("-")) {
      const code = value.split("-").pop() ?? "+1";
      setFormData((prev) => ({ ...prev, [field]: code }));
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
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
        <div className="text-center mb-12 flex items-center justify-center flex-col">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Book a Demo &{" "}
            <span className="bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">
              Stay Informed
            </span>
          </h2>
          {page === "solutions" ? (
            <p className="text-xl text-muted-foreground max-w-3xl">
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
        </div>

        {!showFullForm ? (
          <Card className="max-w-md mx-auto border-0 bg-background/80 backdrop-blur-sm shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleEmailSubmit} className="space-y-6">
                {/* ✅ Mobile-friendly Email Row */}
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
        ) : (
          <Card className="border-0 bg-background/80 backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                To serve you better, we would request following additional info:
              </CardTitle>
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
        )}
      </div>
    </section>
  );
};

export default EmailSubscription;
