import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'AI AGENT',
        description: 'AI AGENT is an autonomous AI-powered software engineering platform that transforms natural language goals into fully functional web and mobile applications. It plans tasks, generates code, executes programs, fixes errors, learns from experience, and coordinates multiple AI agents — all through a real-time web dashboard.',
        tags: ['AI', 'React', 'Python', 'Agentic Workflow'],
        link: 'https://github.com/suhasv-14/AI-AGENT',
        github: 'https://github.com/suhasv-14/AI-AGENT'
    },
    {
        title: 'AI Assistant',
        description: 'AI Assistant is a full-stack AI platform built with FastAPI and React, using a multi-agent architecture (Planner, Executor, Critic) to generate intelligent responses via large language models, simulating how modern systems like ChatGPT operate internally.',
        tags: ['FastAPI', 'React', 'Multi-agent', 'LLM'],
        link: 'https://github.com/suhasv-14/AI-ASSISTANT',
        github: 'https://github.com/suhasv-14/AI-ASSISTANT'
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Portfolio</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                        Featured Projects
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-slate-500 lg:mx-auto">
                        A selection of my academic research and personal projects.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300 flex flex-col group">
                            <div className="p-6 flex-grow">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                                    <div className="flex space-x-3">
                                        <a href={project.github} className="text-slate-400 hover:text-slate-800 transition-colors"><Github size={20} /></a>
                                        <a href={project.link} className="text-slate-400 hover:text-slate-800 transition-colors"><ExternalLink size={20} /></a>
                                    </div>
                                </div>
                                <p className="text-slate-500 mb-6 leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-100">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
