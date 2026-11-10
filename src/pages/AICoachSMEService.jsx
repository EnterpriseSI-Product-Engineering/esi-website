import { Link } from "react-router";

const personaList = [
  "Chief AI Officer",
  "Sr AI Engineering Manager",
  "Sr Forward Deployed Architect",
  "Forward Deployed Engineer",
  "Sr AI Business Consultants (select domains)",
  "Sr AI Cybersecurity Engineer",
  "AI Governance-Risk-Compliance Officer",
  "Sr Agent Harness Engineer",
  "Sr Data Engineer",
  "Sr AI Testing & Evals Engineer",
  "Sr AI Infra Engineer",
  "Sr Agentic Software Development Engineer",
  "Sr AIOps-SRE Engineer",
];

const scopeItems = [
  "Conducting custom AI skilling sessions - 4 hrs, 8 hrs, 16 hrs",
  "Conducting AI Case based Problem Solving sessions - 2-3 hrs, modeled along Harvard Business School's case method where leaders are teamed into cohorts/ act individually to work on a AI Strategy/ execution/ crisis situation or escalation related problem statement and come up with solutions, discuss & learn about various strategies, tactics to address such situations, with support of our AI Coaches.",
  "Conducting 2 / custom no. of webinars of 1.5 to 2 hrs duration on specific AI business/tech topics per month",
  "1:1/ team sessions on specific queries eg. a Sr leader/ leader's team is meeting a customer CXO for pitching a AI Transformation service or responding to a AI Transformation services RFP & need to prepare on thought leadership/ points of view, key data points.",
  "AI Solution architecture/ design & infra/ tooling review, RFP Solutioning/ Solution Review, filling missing knowledge gaps, helping as AI SME in sales calls/ customer pitches",
  "Conducting AI POCs/ quick prototyping (upto 30 hrs a month)",
  "Advising on AI Academy/ COE/ AI first GCC/ AI Upskilling initiatives etc...",
];

const achievements = [
  {
    org: "North American Bank",
    detail:
      "Business (F&A) & tech-AI & Automation leadership were able to identify 40 Agentic AI use cases and shortlisted 5 for phase 1 of AI Pilots. Helped setup AI Experimentation sandbox for rapid prototyping, piloting new AI tech with banking process integration via our Agentic Digital Twins.",
  },
  {
    org: "Edtech Platform Company",
    detail:
      "Delivered 50+ AI Agent, RAG labs & built the AI labs GTM playbook, helping grow revenue from labs, 10x within 1.5 yrs.",
  },
  {
    org: "Edtech Services Company",
    detail:
      "Created AI driven labs & services playbook, helping increase revenue from AI services by 5x over 6 months.",
  },
  {
    org: "Sales Intelligence Platform in US",
    detail:
      "Helped map AS-IS manual sales intelligence creation process, converted into TO-BE Agentic process design, helped plan MVP sprints, team structure & cost budgeting.",
  },
];

const AICoachSMEService = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-36 md:pb-28">
      <div className="max-w-3xl mx-auto mt-4 sm:mt-8 md:mt-12">
        {/* Back Link */}
        <Link
          to="/thought-leadership/product-innovations"
          className="inline-flex items-center text-xs sm:text-sm font-medium text-neutral-500 hover:text-[#1569a9] transition-colors mb-6 sm:mb-8"
        >
          &larr; Back to Product Innovations
        </Link>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-6 sm:mb-8 leading-tight break-words">
          AI Coach (10 AI SMEs-in-a-box) service for Sr leaders &amp; mid level managers
        </h1>

        {/* Content Body */}
        <div className="text-justify text-base sm:text-lg">
          {/* Part 1 */}
          <div className="mb-10 sm:mb-12">
            <div className="text-xs font-bold text-[#1569a9] uppercase tracking-wider mb-2">
              Part 1
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mb-3 sm:mb-4">
              AI Coaching-as-a-service for Sr leaders (Enterprises)
            </h2>
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-4">
              EnterpriseSI is launching the updated version of &ldquo;AI Coaching&rdquo; service for Sr leaders &amp; mid level managers (Business &amp; Tech), to support, on-demand, various AI initiatives (Internal, customer facing) &amp; help move faster/ be more agile &amp; efficient in execution.
            </p>
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-6">
              This service aims to help Enterprises in accelerating <span className="font-semibold text-neutral-900">AI leadership talent transformation</span> and <span className="font-semibold text-neutral-900">developing a pipeline of leaders that can lead / execute AI first, AI native organizational capabilities</span>.
            </p>

            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-900 mt-6 sm:mt-8 mb-3 sm:mb-4">
              What do we provide as part of this Service?
            </h3>
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-4">
              Team of upto 10 AI Coaches/ SMEs with experience in implementing AI Products &amp; Solutions in Fortune 500/2000 Enterprises &amp; Silicon Valley Startups, other AI product startups, that includes personas like:
            </p>
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 sm:p-6 mb-6">
              <ul className="space-y-2">
                {personaList.map((persona, index) => (
                  <li key={index} className="text-neutral-700 text-sm sm:text-base md:text-lg flex items-start">
                    <span className="text-[#1569a9] font-semibold mr-2.5 sm:mr-3">&bull;</span>
                    <span>{persona}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-4">
              This team is available on a retainer model &mdash; 30 hrs or more per month for supporting various requirements/ tasks/ leadership training initiatives. A subset of the scope is as below:
            </p>
            <ul className="pl-6 space-y-3 mb-6 text-neutral-600 text-base sm:text-lg leading-relaxed list-disc">
              {scopeItems.map((item, index) => (
                <li key={index} className="pl-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Part 2 */}
          <div className="pt-8 border-t border-neutral-200 mb-10 sm:mb-12">
            <div className="text-xs font-bold text-[#1569a9] uppercase tracking-wider mb-2">
              Part 2
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mb-4 sm:mb-6">
              Target Audience, Achievements &amp; Engagement Model
            </h2>

            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-900 mt-6 sm:mt-8 mb-3 sm:mb-4">
              Whom is this AI Coach service targeted at?
            </h3>
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-6">
              This service is specially designed for Sr business &amp; tech leaders, mid level managers, helping them plan strategize and execute better for bringing the benefits of AI to their organizations.
            </p>

            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-900 mt-6 sm:mt-8 mb-3 sm:mb-4">
              What are the achievements/ outcomes created so far for Enterprises via this service?
            </h3>
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-4">
              Select Examples:
            </p>
            <div className="space-y-4 mb-8">
              {achievements.map((item, index) => (
                <div key={index} className="border-l-4 border-[#1569a9] pl-4 sm:pl-5 py-2">
                  <h4 className="font-bold text-neutral-900 text-sm sm:text-base uppercase tracking-wide mb-1">
                    {item.org}
                  </h4>
                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-900 mt-6 sm:mt-8 mb-3 sm:mb-4">
              What is the experience level of your AI Coach team?
            </h3>
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-6">
              Our AI Coach team comprises AI practitioners with experience levels ranging from 23 yrs overall (with 12 yrs in AI) to 5 yrs in AI. The entire team has experience in AI first, AI native organizations/ AI practice, implementations &amp; product development in startups and Enterprises.
            </p>

            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-900 mt-6 sm:mt-8 mb-3 sm:mb-4">
              Why a retainer model is needed?
            </h3>
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-4">
              This service is customized to the needs of every organization, which also tends to evolve in different directions and have time sensitive elements. We do not directly create a training curriculum and deliver a short leadership training program and then become unavailable to support further, unlike what other edtech players do today. Instead, we start in a workshop mode to understand the priorities &amp; specific requirements, current AI practices &amp; capabilities in the organization/ specific teams and then develop custom curriculums &amp; learning pods.
            </p>
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-6">
              We constantly innovate the ways we engage with leaders for optimizing the learning &amp; SME support outcomes.
            </p>

            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-900 mt-6 sm:mt-8 mb-3 sm:mb-4">
              What is the minimum retainer period?
            </h3>
            <div className="border border-neutral-200 rounded-lg p-5 sm:p-6 mb-8">
              <p className="text-neutral-700 text-sm sm:text-base md:text-lg leading-relaxed">
                The minimum retainer period for creating optimal impact is 6 months, however, a pilot engagement of a minimum of 3 months is recommended. A 6 months commitment with a min of 30 hrs a month ensures that the key SMEs from our team have better availability for a specific customer.
              </p>
            </div>
          </div>

          {/* Contact Block */}
          <div className="rounded-xl bg-[#1569a9]/5 border border-[#1569a9]/20 p-5 sm:p-6 my-8">
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed mb-4">
              To learn about our comprehensive list of more than 50 line items where we support organizations via our AI Coach-as-a-service model and for a demo cum discussion also covering your custom requirements, please contact us at:
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-base sm:text-lg">
              <a
                href="mailto:bd@enterprisesi.co"
                className="text-[#1569a9] font-medium hover:underline break-all sm:break-normal"
              >
                bd@enterprisesi.co
              </a>
              <a
                href="mailto:abhiroop@enterprisesi.co"
                className="text-[#1569a9] font-medium hover:underline break-all sm:break-normal"
              >
                abhiroop@enterprisesi.co
              </a>
              <a
                href="mailto:sales@enterprisesi.co"
                className="text-[#1569a9] font-medium hover:underline break-all sm:break-normal"
              >
                sales@enterprisesi.co
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICoachSMEService;
