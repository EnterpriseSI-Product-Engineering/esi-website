import VideoPlayer from "@/components/common/VideoPlayer";

const Feature108 = ({ heading, description }) => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="max-w-2xl text-3xl font-semibold md:text-4xl">
            {heading}
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        <div className=" flex items-center  mt-7 justify-center">
          <div className=" h-[700px] rounded-lg aspect-video grid place-items-center">
            <VideoPlayer url="https://genailabs.blob.core.windows.net/website-kloudstac/stacbot/Stacbot%20-%20hyperpersonalised.mp4?sp=r&st=2025-08-06T11:07:42Z&se=2027-03-31T19:22:42Z&sv=2024-11-04&sr=b&sig=coWS5E2np4io8z8AvgoKJA0uVGFwLLCVQmWsQLJL4eY%3D" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature108 };
