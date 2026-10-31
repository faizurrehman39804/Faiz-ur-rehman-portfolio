import React, { useState, useRef, useEffect } from "react";
import { ArrowRight, PlayIcon, CheckIcon, CopyIcon, Github, Linkedin, Mail } from "./icons";

interface CodeConnectProps {
  linkedInUrl?: string;
  githubUrl?: string;
  email?: string;
}

export default function CodeConnect({
  linkedInUrl = "https://www.linkedin.com/in/faiz-ur-r-2127193a2",
  githubUrl = "https://github.com/faizurrehman39804",
  email = "faizurrehman39804@gmail.com",
}: CodeConnectProps) {
  const cleanLinkedInUrl = linkedInUrl.startsWith("http") ? linkedInUrl : `https://${linkedInUrl}`;
  const cleanGithubUrl = githubUrl.startsWith("http") ? githubUrl : `https://${githubUrl}`;
  const cleanEmail = email.replace(/[[\]]/g, "").trim();

  const [activeTab, setActiveTab] = useState<"code" | "terminal" | "output">("code");
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [runSuccess, setRunSuccess] = useState(false);

  // Terminal state
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<Array<{ type: "input" | "output"; text: string }>>([
    { type: "output", text: "Faiz Portfolio Terminal v1.0.0" },
    { type: "output", text: "Type 'help' to see available commands or 'run' to execute profile.json." },
  ]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const profileData = {
    name: "Faiz Ur Rehman",
    age: "17",
    location: "Pakistan",
    role: "Software Developer",
    stack: ["MERN", "TypeScript", "React", "Node.js"],
    internships: ["Full-Stack Developer", "Frontend Specialist"],
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setActiveTab("output");
    setRunSuccess(false);

    setTimeout(() => {
      setIsRunning(false);
      setRunSuccess(true);
    }, 600);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(JSON.stringify(profileData, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...terminalHistory, { type: "input" as const, text: terminalInput }];

    if (cmd === "clear") {
      setTerminalHistory([]);
      setTerminalInput("");
      return;
    } else if (cmd === "help") {
      newHistory.push({
        type: "output",
        text: "Available commands:\n  • profile     - Print profile information\n  • stack       - List tech stack & skills\n  • run         - Execute profile script\n  • github      - View GitHub profile link\n  • linkedin    - View LinkedIn profile link\n  • email       - View contact email\n  • clear       - Clear terminal output",
      });
    } else if (cmd === "profile" || cmd === "cat profile.json") {
      newHistory.push({
        type: "output",
        text: JSON.stringify(profileData, null, 2),
      });
    } else if (cmd === "stack") {
      newHistory.push({
        type: "output",
        text: "Core Stack: MERN, Next.js, TypeScript, React, Node.js, Express, Tailwind CSS, MongoDB, REST APIs, Git",
      });
    } else if (cmd === "run") {
      newHistory.push({
        type: "output",
        text: "[SUCCESS] Compiled profile.json (0 errors, 0 warnings).\nStatus: Open to full-time teammate & product collaboration.",
      });
    } else if (cmd === "github") {
      newHistory.push({
        type: "output",
        text: `GitHub: ${githubUrl}`,
      });
    } else if (cmd === "linkedin") {
      newHistory.push({
        type: "output",
        text: `LinkedIn: ${linkedInUrl}`,
      });
    } else if (cmd === "email") {
      newHistory.push({
        type: "output",
        text: `Email: ${email}`,
      });
    } else {
      newHistory.push({
        type: "output",
        text: `bash: command not found: ${cmd}. Type 'help' for available commands.`,
      });
    }

    setTerminalHistory(newHistory);
    setTerminalInput("");
  };

  useEffect(() => {
    if (activeTab === "terminal") {
      terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [terminalHistory, activeTab]);

  return (
    <section id="connect" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Subtle Constellation Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#00f541]/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7c3aed]/15 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">

          {/* LEFT: Interactive Code & Terminal Window */}
          <div className="rounded-2xl md:rounded-3xl bg-[#0f1118]/95 border border-[#232738] shadow-[0_12px_45px_rgba(0,0,0,0.7)] flex flex-col overflow-hidden backdrop-blur-xl">

            {/* Titlebar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#131620] border-b border-[#232738]/80 select-none">

              {/* Left dots and tabs */}
              <div className="flex items-center gap-4">
                {/* 3 Mac Buttons */}
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block hover:opacity-80 cursor-pointer shadow-sm"></span>
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block hover:opacity-80 cursor-pointer shadow-sm"></span>
                  <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block hover:opacity-80 cursor-pointer shadow-sm"></span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1.5 ml-1">
                  <button
                    onClick={() => setActiveTab("code")}
                    className={`px-3 py-1 text-xs font-mono rounded-md transition-all cursor-pointer ${activeTab === "code"
                      ? "bg-[#23283b] text-white font-medium border border-white/10 shadow-sm"
                      : "text-[#8890a6] hover:text-white hover:bg-white/5"
                      }`}
                  >
                    Code
                  </button>
                  <button
                    onClick={() => setActiveTab("terminal")}
                    className={`px-3 py-1 text-xs font-mono rounded-md transition-all cursor-pointer ${activeTab === "terminal"
                      ? "bg-[#23283b] text-white font-medium border border-white/10 shadow-sm"
                      : "text-[#8890a6] hover:text-white hover:bg-white/5"
                      }`}
                  >
                    Terminal
                  </button>
                  <button
                    onClick={() => setActiveTab("output")}
                    className={`px-3 py-1 text-xs font-mono rounded-md transition-all cursor-pointer ${activeTab === "output"
                      ? "bg-[#23283b] text-white font-medium border border-white/10 shadow-sm"
                      : "text-[#8890a6] hover:text-white hover:bg-white/5"
                      }`}
                  >
                    Output
                    {runSuccess && <span className="ml-1.5 w-1.5 h-1.5 rounded-full bg-[#00f541] inline-block"></span>}
                  </button>
                </div>
              </div>

              {/* Right: Run Code Button & Copy */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyCode}
                  title="Copy JSON"
                  className="p-1.5 rounded-md text-[#8890a6] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                >
                  {copied ? <CheckIcon size={14} className="text-[#00f541]" /> : <CopyIcon size={14} />}
                </button>

                <button
                  onClick={handleRunCode}
                  disabled={isRunning}
                  className="px-3.5 py-1 text-xs font-mono rounded-md border border-white/20 bg-white/5 text-zinc-200 hover:text-[#00f541] hover:border-[#00f541]/70 hover:bg-[#00f541]/10 transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50 active:scale-95 shadow-sm"
                >
                  <PlayIcon size={11} className={isRunning ? "animate-spin" : "text-[#00f541]"} />
                  <span>{isRunning ? "Running..." : "Run Code"}</span>
                </button>
              </div>
            </div>

            {/* Window Content */}
            <div className="p-5 font-mono text-sm leading-relaxed flex-1 min-h-[310px] max-h-[420px] overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 select-text">
              {activeTab === "code" && (
                <div className="text-zinc-300">
                  <span className="text-zinc-500 font-bold">&#123;</span>
                  <div className="pl-5 space-y-1 my-1">
                    <div>
                      <span className="text-[#60a5fa]">"name"</span>:{" "}
                      <span className="text-zinc-100">"{profileData.name}"</span>,
                    </div>
                    <div>
                      <span className="text-[#60a5fa]">"age"</span>:{" "}
                      <span className="text-zinc-100">"{profileData.age}"</span>,
                    </div>
                    <div>
                      <span className="text-[#60a5fa]">"location"</span>:{" "}
                      <span className="text-zinc-100">"{profileData.location}"</span>,
                    </div>
                    <div>
                      <span className="text-[#60a5fa]">"role"</span>:{" "}
                      <span className="text-zinc-100">"{profileData.role}"</span>,
                    </div>
                    <div>
                      <span className="text-[#60a5fa]">"stack"</span>:{" "}
                      <span className="text-zinc-500 font-bold">[</span>
                      <div className="pl-5 space-y-0.5 my-0.5">
                        {profileData.stack.map((item, idx) => (
                          <div key={idx}>
                            <span className="text-zinc-100">"{item}"</span>
                            {idx < profileData.stack.length - 1 && <span className="text-zinc-500">,</span>}
                          </div>
                        ))}
                      </div>
                      <span className="text-zinc-500 font-bold">]</span>,
                    </div>
                    <div>
                      <span className="text-[#60a5fa]">"internships"</span>:{" "}
                      <span className="text-zinc-500 font-bold">[</span>
                      <div className="pl-5 space-y-0.5 my-0.5">
                        {profileData.internships.map((intern, idx) => (
                          <div key={idx}>
                            <span className="text-zinc-100">"{intern}"</span>
                            {idx < profileData.internships.length - 1 && <span className="text-zinc-500">,</span>}
                          </div>
                        ))}
                      </div>
                      <span className="text-zinc-500 font-bold">]</span>
                    </div>
                  </div>
                  <span className="text-zinc-500 font-bold">&#125;</span>
                </div>
              )}

              {activeTab === "terminal" && (
                <div className="h-full flex flex-col text-xs leading-relaxed">
                  <div className="space-y-1.5 flex-1 overflow-y-auto">
                    {terminalHistory.map((item, idx) => (
                      <div key={idx}>
                        {item.type === "input" ? (
                          <div className="flex items-center gap-2 text-zinc-300">
                            <span className="text-[#00f541]">faiz@portfolio:~$</span>
                            <span>{item.text}</span>
                          </div>
                        ) : (
                          <div className="text-zinc-400 whitespace-pre-wrap pl-2 border-l border-zinc-700/50 my-1">
                            {item.text}
                          </div>
                        )}
                      </div>
                    ))}
                    <div ref={terminalEndRef} />
                  </div>

                  <form onSubmit={handleTerminalSubmit} className="mt-3 pt-2 border-t border-[#232738] flex items-center gap-2">
                    <span className="text-[#00f541] font-bold">faiz@portfolio:~$</span>
                    <input
                      type="text"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      placeholder="Type 'help' or command..."
                      className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs focus:ring-0"
                      autoFocus
                    />
                  </form>
                </div>
              )}

              {activeTab === "output" && (
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <span className="text-[#00f541]">●</span>
                    <span>Running profile.json via Node environment...</span>
                  </div>

                  <div className="p-3 bg-[#141724] rounded-lg border border-[#23283c] space-y-2 text-zinc-300">
                    <div className="text-[#00f541] font-semibold flex items-center gap-1.5">
                      <CheckIcon size={14} /> Profile Evaluated Successfully (in 32ms)
                    </div>
                    <div className="text-zinc-400 leading-normal text-xs">
                      Candidate: <span className="text-white font-medium">{profileData.name}</span> ({profileData.role})
                    </div>
                    <div className="text-zinc-400 leading-normal text-xs">
                      Core Stack: <span className="text-zinc-200">MERN • TypeScript • React • Node.js</span>
                    </div>
                    <div className="text-zinc-400 leading-normal text-xs">
                      Status: <span className="text-[#00f541]">Ready for full-time roles & high-impact projects</span>
                    </div>
                  </div>

                  <div className="text-zinc-500 pt-2 text-[11px]">
                    Process finished with exit code 0
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Status Bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#10121b] border-t border-[#232738]/70 text-[11px] font-mono text-zinc-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00f541]/70 inline-block"></span>
                profile.json
              </span>
              <span>UTF-8</span>
            </div>

          </div>

          {/* RIGHT: "Let's build something disciplined" Connect Card */}
          <div className="relative rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#1c1833] via-[#10111a] to-[#0d0e14] border border-[#2e2b48]/70 shadow-[0_12px_45px_rgba(0,0,0,0.7)] p-8 md:p-12 flex flex-col justify-between overflow-hidden backdrop-blur-xl group">

            {/* Top-left subtle purple glow ambient background */}
            <div className="pointer-events-none absolute -top-16 -left-16 w-64 h-64 bg-violet-600/25 rounded-full blur-[70px]"></div>

            {/* Content Top */}
            <div className="relative z-10 space-y-4">
              <h3 className="heading-font text-3xl md:text-5xl text-white tracking-wide leading-tight">
                Let's build something disciplined
              </h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-lg">
                Open to full-time teammates, internships with teeth, or sharp product collabs across MERN/React/Electron stacks. Prefer LinkedIn for the first hello—GitHub is the receipt.
              </p>
            </div>

            {/* Buttons & Email Action */}
            <div className="relative z-10 my-8 space-y-3.5">

              {/* Primary LinkedIn Button */}
              <a
                href={cleanLinkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-linkedin"
                className="w-full bg-white hover:bg-zinc-200 text-black font-semibold py-3.5 px-6 rounded-full flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] shadow-lg text-sm md:text-base cursor-pointer group/btn"
              >
                <span>Message on LinkedIn</span>
                <span className="transition-transform group-hover/btn:translate-x-1 inline-block">➔</span>
              </a>

              {/* Secondary GitHub Button */}
              <a
                href={cleanGithubUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-github"
                className="w-full bg-[#181924] hover:bg-[#202230] border border-[#2d2f40] hover:border-zinc-500 text-white font-medium py-3.5 px-6 rounded-full flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] text-sm md:text-base cursor-pointer"
              >
                <span>Browse GitHub repos</span>
              </a>

              {/* Email line */}
              <div className="text-center pt-2">
                <span className="text-zinc-400 text-xs md:text-sm">Or email </span>
                <a
                  href={`mailto:${cleanEmail}`}
                  id="link-email"
                  className="text-[#00f541] hover:underline font-mono text-xs md:text-sm transition-colors"
                >
                  {cleanEmail}
                </a>
              </div>
            </div>

            {/* Bottom Status Pulse Indicator */}
            <div className="relative z-10 flex items-center gap-3 pt-2">
              <div className="relative flex h-5 w-5 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f541] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00f541] shadow-[0_0_12px_#00f541]"></span>
              </div>
              <span className="text-xs text-zinc-400 font-mono">Available for opportunities</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
