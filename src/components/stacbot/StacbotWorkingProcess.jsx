import { Timeline } from "@/components/ui/timeline";
import VideoPlayer from "@/components/common/VideoPlayer";

export default function StacbotWorkingProcess() {
  const data = [
    {
      title: "Coding",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Supercharge Your Jupyter Notebooks with Stacbot
          </p>
          <div className=" h-[500px] rounded-lg aspect-video grid place-items-center">
            <VideoPlayer url="https://genailabs.blob.core.windows.net/website-kloudstac/stacbot/stacbot-coding.mp4?sp=r&st=2025-08-06T11:18:29Z&se=2030-08-31T19:33:29Z&sv=2024-11-04&sr=b&sig=dSsJXJ2bVOoTWGExpBJJCYH0fXNlAPX64swsEt5Kvpc%3D" />
          </div>
        </div>
      ),
    },
    {
      title: "MultiLingual",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-2">
            Communicate Globally with Stacbot
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Stacbot speaks multiple languages and adapts to your needs, ensuring
            every conversation is natural, clear, and effective.
          </p>
          <div className=" h-[500px] rounded-lg aspect-video grid place-items-center">
            <VideoPlayer url="https://genailabs.blob.core.windows.net/website-kloudstac/stacbot/stacbot-multilingual.mp4?sp=r&st=2025-08-06T11:02:22Z&se=2026-10-31T19:17:22Z&spr=https&sv=2024-11-04&sr=b&sig=%2FAljxR0mKoHVHyCoyqcHBtofTgdLOrstD61wkkAxpBA%3D" />
          </div>
        </div>
      ),
    },
    {
      title: "Companion",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Your AI Companion for Everyday Tasks
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              💡 Error Resolution: Quickly identifies and suggests solutions for
              coding errors
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ⚡ Code Generation: Generates clean, efficient code snippets on
              demand
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              📝 Documentation Assistance: Drafts and explains code
              documentation
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🔍 Debugging Support: Analyses and helps debug complex issues
              faster
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🌐 Multilingual Communication: Communicates in multiple languages
              as needed
            </div>
          </div>
          <div className=" h-[500px] rounded-lg aspect-video grid place-items-center">
            <VideoPlayer url="https://genailabs.blob.core.windows.net/website-kloudstac/stacbot/stacbot-companion.mp4?sp=r&st=2025-08-06T10:24:47Z&se=2027-07-31T18:39:47Z&spr=https&sv=2024-11-04&sr=b&sig=sL%2Fz9ycHDJaT4084xoL%2F8VwNs5P93Ep%2FDMLIkywFvQA%3D" />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="min-h-screen w-full">
      <div className="w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
}
