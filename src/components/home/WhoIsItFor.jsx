import { User } from "lucide-react";
import {
  TeamVector,
  EnterpriseImg,
  UniversitiesVector,
  LegalVector,
  LegalVector2,
  BusinessVector,
} from "@/assets";
export default function WhoIsItFor() {
  return (
    <div className="w-full lg:mb-20 mt-[300px]">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-center">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl text-center tracking-tighter max-w-xl font-regular mb-10 ">
                Who is it for?
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Enterprises */}
            <div className="bg-muted border relative rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              <div className="absolute bottom-10 left-4  overflow-hidden">
                <img src={BusinessVector} alt="h-full" className="w-[700px]" />
              </div>
              <div className="flex flex-col absolute bottom-0 right-0 p-6">
                <h3 className="text-xl tracking-tight">Enterprises</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Empower employees with real-time, AI-driven doubt resolution
                  and support to streamline workflows and boost productivity
                  across departments.
                </p>
              </div>
            </div>
            {/* L&D Teams */}
            <div className="bg-muted border rounded-md  aspect-square p-6 flex justify-between flex-col">
              <div>
                <img src={TeamVector} alt="" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">L&amp;D Teams</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Enhance learning programs with interactive, on-demand
                  support—clearing doubts instantly during training and
                  onboarding sessions.
                </p>
              </div>
            </div>
            {/* Universities */}
            <div className="bg-muted border rounded-md aspect-square p-6 flex justify-between flex-col">
              <div>
                <img src={UniversitiesVector} alt="" />
              </div>
              <div className="flex flex-col mt-5">
                <h3 className="text-xl tracking-tight">Universities</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Enable students and faculty to access immediate, intelligent
                  assistance for coursework, labs, and administrative queries,
                  fostering a collaborative learning environment.
                </p>
              </div>
            </div>
            {/* Consulting Firms */}
            <div className="bg-muted border relative rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              <div className=" absolute top-0 right-0 overflow-hidden ">
                <img src={LegalVector} alt="" className="w-[400px]" />
              </div>
              <div className=" absolute top-10 left-50 overflow-hidden ">
                <img src={LegalVector2} alt="" className="w-[300px]" />
              </div>
              <div className="flex flex-col absolute bottom-0 left-0 p-6">
                <h3 className="text-xl tracking-tight">Consulting Firms</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Deliver high-value, instant insights to clients and teams,
                  streamlining project support and accelerating problem-solving
                  using interactive AI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
