import { GradientCard } from "../ui/animatedcard";

const StacbotDifference = () => {
  return (
    <>
      <h1 className=" text-center text-5xl mb-20">
        What Makes Stacbot Different?
      </h1>
      <div className=" grid grid-cols-2 gap-5 max-w-5xl mx-auto">
        <GradientCard className=" rounded-md h-[400px] ">
          <div className="p-4">
            <h1 className=" text-2xl mb-3">🤖 Real-Time Chat</h1>
            <p className="text-lg text-gray-600 w-[85%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis fugit explicabo necessitatibus dolorem quisquam
              possimus facilis. Voluptatum eos, eum saepe ea incidunt aperiam
              error iure, at suscipit quaerat nihil repellendus.
            </p>
          </div>
        </GradientCard>
        <GradientCard className=" rounded-md h-[400px] ">
          <div className="p-4">
            <h1 className=" text-2xl mb-3">🧠 Personalized Responses</h1>
            <p className="text-lg text-gray-600 w-[85%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis fugit explicabo necessitatibus dolorem quisquam
              possimus facilis. Voluptatum eos, eum saepe ea incidunt aperiam
              error iure, at suscipit quaerat nihil repellendus.
            </p>
          </div>
        </GradientCard>
        <GradientCard className=" rounded-md h-[400px] ">
          <div className="p-4">
            <h1 className=" text-2xl mb-3">🔗 Lab + API Context</h1>
            <p className="text-lg text-gray-600 w-[85%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis fugit explicabo necessitatibus dolorem quisquam
              possimus facilis. Voluptatum eos, eum saepe ea incidunt aperiam
              error iure, at suscipit quaerat nihil repellendus.
            </p>
          </div>
        </GradientCard>
        <GradientCard className=" rounded-md h-[400px] ">
          <div className="p-4">
            <h1 className=" text-2xl mb-3">🌍 Multilingual + Role-Based</h1>
            <p className="text-lg text-gray-600 w-[85%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis fugit explicabo necessitatibus dolorem quisquam
              possimus facilis. Voluptatum eos, eum saepe ea incidunt aperiam
              error iure, at suscipit quaerat nihil repellendus.
            </p>
          </div>
        </GradientCard>
      </div>
    </>
  );
};

export default StacbotDifference;
