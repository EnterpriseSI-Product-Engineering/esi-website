import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { IMGS } from "@/assets";

export default function Stacbot() {
  return (
    <div className="w-full py-20 lg:py-40 ">
      <h1 className=" text-center text-5xl max-w-4xl mx-auto">
        An Enterprise-Ready GenAI Assistant for Every User
      </h1>
      <p className="text-xl text-center max-w-2xl mx-auto mt-2 mb-10">
        Stacbot transforms static training into dynamic conversation, helping
        teams unlock value from your labs, tools, and infrastructure.
      </p>
      <div className="container max-w-6xl mx-auto  ">
        <div className="grid border rounded-lg bg-white container p-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">Use Cases</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-3xl lg:text-4xl tracking-tighter max-w-xl text-left font-regular">
                  Stacbot: Your AI Companion
                </h2>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  Stacbot is designed to offer businesses dynamic, real-time
                  assistance, focusing on interactive doubt resolution and
                  intelligent support across a variety of contexts. Here’s how
                  Stacbot empowers users with these capabilities:
                </p>
              </div>
            </div>
            <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Personalized GenAI assistant</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Use in training, labs, support</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Multilingual support</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Real-time feedback</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-muted rounded-md aspect-square flex items-center justify-center ">
            <div className="border rounded-2xl h-full w-full shadow overflow-hidden">
              <img src={IMGS.STABOT} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
