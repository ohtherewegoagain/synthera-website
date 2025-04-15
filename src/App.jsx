import React from "react";
import { Mail, FlaskConical, Microscope, Rocket } from "lucide-react";

const icons = [
  { icon: <FlaskConical className="h-8 w-8" />, title: "Molecule Generation" },
  { icon: <Microscope className="h-8 w-8" />, title: "Binding Affinity" },
  { icon: <Rocket className="h-8 w-8" />, title: "Druglikeness & Toxicity" },
  { icon: <Mail className="h-8 w-8" />, title: "ADME & Pathway" },
];

export default function SyntheraWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <header className="p-6 text-center">
        <img src="/logo.synthera.png" alt="Synthera Logo" className="mx-auto w-20 mb-4" />
        <h1 className="text-4xl font-bold">Welcome to Synthera</h1>
        <p className="text-xl mt-2 text-slate-300">
          AI-driven molecular discovery. Join the beta and shape the future of drug design.
        </p>
      </header>
      <section className="p-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">🚀 Request Beta Access</h2>
          <form className="grid gap-4">
            <input type="text" placeholder="Name" className="border rounded-md p-2" required />
            <input type="email" placeholder="Email" className="border rounded-md p-2" required />
            <textarea placeholder="Affiliation / Institution" className="border rounded-md p-2" />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md">Join Beta</button>
          </form>
        </div>
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">🔬 Core Capabilities</h2>
          <div className="grid grid-cols-2 gap-4">
            {icons.map(({ icon, title }) => (
              <div key={title} className="flex items-center space-x-3">
                <div>{icon}</div>
                <span>{title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 py-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">🧠 How Synthera Works</h2>
        <p className="text-lg text-slate-300 mb-4">
          Synthera is an AI-native drug discovery engine that leverages multimodal learning to generate novel compounds, predict efficacy, evaluate toxicity, and model bioavailability across molecular and protein targets.
        </p>
        <p className="text-lg text-slate-300">
          Hosted on Azure, Synthera integrates transformer-based models, GNNs, VAEs, and docking tools to provide a comprehensive drug design pipeline. Our goal is to democratize next-gen therapeutics for researchers worldwide.
        </p>
      </section>
      <section className="bg-slate-950 px-6 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">🗞️ Stay Updated</h2>
        <p className="text-lg mb-6">Sign up to receive news on product updates, research, and publications.</p>
        <form className="flex justify-center space-x-2 max-w-md mx-auto">
          <input type="email" placeholder="Enter your email" className="bg-white text-black p-2 rounded-md" />
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md">Subscribe</button>
        </form>
      </section>
      <footer className="p-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Synthera. All rights reserved.
      </footer>
    </div>
  );
}
