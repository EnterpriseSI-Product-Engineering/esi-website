import React from 'react'

// AI Platforms & Models
import OpenAI from "@/assets/Logos/OpenAI_Logo.png";
import ClaudeAI from "@/assets/Logos/Claude_AI_logo.png";
import ClaudeCode from "@/assets/Logos/Claude_Code_Logo.png";
import Gemini from "@/assets/Logos/Google_Gemini_logo.png";
import Meta from "@/assets/Logos/Meta-Logo.png";

// Cloud & Infra
import AWS from "@/assets/Logos/Amazon_Web_Services_Logo.png";
import Bedrock from "@/assets/Logos/AWS_Bedrock_Logo.png";
import AzureFoundry from "@/assets/Logos/Azure_Foundry_Logo.png";
import VertexAI from "@/assets/Logos/VertexAI_Logo.png";

// Agent & Workflow Frameworks
import GoogleADK from "@/assets/Logos/Google_ADK_Logo.jpg";
import MSAgentFramework from "@/assets/Logos/Microsoft-Agent-Framework_Logo.jpg";
import Strands from "@/assets/Logos/Strands_Agents_Logo.png";
import LangGraph from "@/assets/Logos/Langgraph_Logo.png";
import Langflow from "@/assets/Logos/Langflow_logo.png";
import N8n from "@/assets/Logos/N8n_logo.png";
import KoreAI from "@/assets/Logos/Koreai_Logo.png";
import Galileo from "@/assets/Logos/Galileo_Logo.jpg";

// Dev & Productivity Tools
import GithubCopilot from "@/assets/Logos/GitHub_Copilot_logo.png";
import MS365Copilot from "@/assets/Logos/Microsoft365_Copilot_logo.png";
import GoogleAIStudio from "@/assets/Logos/Google_AI_Studio.png";
import Lovable from "@/assets/Logos/Lovable_Logo.png";
import VSCode from "@/assets/Logos/Visual_Studio_Code_logo.png";
import Jupyter from "@/assets/Logos/Jupyter_logo.png";

import { motion } from "framer-motion";

const aiToolsRows = [
  // Row 1 — Models & Platforms
  [
    { name: "OpenAI", src: OpenAI },
    { name: "Claude AI", src: ClaudeAI },
    { name: "Claude Code", src: ClaudeCode },
    { name: "Google Gemini", src: Gemini },
    { name: "Meta Llama", src: Meta },
    { name: "VS Code", src: VSCode },
    { name: "Jupyter", src: Jupyter },
  ],

  // Row 2 — Cloud & Agent Frameworks
  [
    { name: "AWS", src: AWS },
    { name: "AWS Bedrock", src: Bedrock },
    { name: "Azure AI Foundry", src: AzureFoundry },
    { name: "Vertex AI", src: VertexAI },
    { name: "Google ADK", src: GoogleADK },
    { name: "Microsoft Agent Framework", src: MSAgentFramework },
    { name: "Strands Agents SDK", src: Strands },
    { name: "LangGraph", src: LangGraph },
  ],

  // Row 3 — Dev, Automation & Ops
  [
    { name: "Langflow", src: Langflow },
    { name: "n8n", src: N8n },
    { name: "Kore.ai", src: KoreAI },
    { name: "Galileo AI", src: Galileo },
    { name: "GitHub Copilot", src: GithubCopilot },
    { name: "Microsoft Copilot", src: MS365Copilot },
    { name: "Google AI Studio", src: GoogleAIStudio },
    { name: "Lovable.dev", src: Lovable },
  ],
];


const ToolsTechnologies = () => {
  return (
    <div className="py-[100px] min-h-[600px] px-6 md:px-12 lg:px-24">
      <motion.section className="mb-18">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            AI Tools &{" "}
            <span className="bg-gradient-to-r from-ai-cyan to-neural-pink bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
        </div>

        {/* FULL-BLEED MARQUEE */}
        <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden">
          <div className="space-y-6">
            {aiToolsRows.map((row, rowIndex) => (
              <motion.div
                key={rowIndex}
                className="flex gap-10 w-max"
                animate={{
                  x: rowIndex % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 45,
                  ease: "linear",
                }}
              >
                {[...row, ...row].map((tool, idx) => (
                  <div
                    key={`${tool.name}-${idx}`}
                    className="my-4 h-[90px] w-[180px] flex items-center justify-center bg-muted/10 border backdrop-blur" //rounded-2xl
                  >
                    <img
                      src={tool.src}
                      alt={tool.name}
                      className="max-h-20 object-contain opacity-80 hover:opacity-100 transition"
                    />
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

    </div>
  )
}

export default ToolsTechnologies