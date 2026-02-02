import React from 'react';
import { BookOpen, Award, Terminal } from 'lucide-react';

export function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center mb-16">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Me</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                        Academic Background & Expertise
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-slate-500 lg:mx-auto">
                        Combining theoretical knowledge with practical application to solve complex problems.
                    </p>
                </div>

                <div className="mt-10">
                    <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-16">
                        <div className="relative">
                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                <BookOpen className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <div className="ml-16">
                                <h3 className="text-lg leading-6 font-medium text-slate-900">Education</h3>
                                <div className="mt-4 space-y-6">
                                    <div className="relative border-l-2 border-indigo-100 pl-4 py-1">
                                        <div className="absolute -left-[9px] top-3 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-white"></div>
                                        <p className="font-bold text-slate-900 text-lg">Master of Technology in SE</p>
                                        <p className="text-indigo-600 font-medium">RV College of Engineering</p>
                                        <p className="text-sm text-slate-500 mb-2">2025 - 2027</p>

                                    </div>
                                    <div className="relative border-l-2 border-indigo-100 pl-4 py-1">
                                        <div className="absolute -left-[9px] top-3 w-4 h-4 rounded-full bg-slate-300 ring-4 ring-white"></div>
                                        <p className="font-bold text-slate-900 text-lg">Bachelor of Engineering in ISE</p>
                                        <p className="text-indigo-600 font-medium">Sri Venkateshwara College of Engineering</p>
                                        <p className="text-sm text-slate-500 mb-2">2021 - 2025</p>
                                        <p className="text-slate-600"></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                <Award className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <div className="ml-16">
                                <h3 className="text-lg leading-6 font-medium text-slate-900">Experience</h3>
                                <div className="mt-4 space-y-6">
                                    <div className="relative border-l-2 border-indigo-100 pl-4 py-1">
                                        <div className="absolute -left-[9px] top-3 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-white"></div>
                                        <p className="font-bold text-slate-900 text-lg">VLSI Design Engineer Intern</p>
                                        <p className="text-indigo-600 font-medium">Rooman Technologies Pvt. Ltd.</p>
                                        <p className="text-slate-600">Gained practical experience in VLSI and SoC functional design, working on module-level architecture and system specification while adhering to industry standards.</p>
                                    </div>
                                    <div className="relative border-l-2 border-indigo-100 pl-4 py-1">
                                        <div className="absolute -left-[9px] top-3 w-4 h-4 rounded-full bg-slate-300 ring-4 ring-white"></div>
                                        <p className="font-bold text-slate-900 text-lg">Freelancer</p>
                                        <p className="text-indigo-600 font-medium">Solution Writing</p>
                                        <p className="text-slate-600">Created and taught comprehensive tutorials on Data Structures and Algorithms (DSA).</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative md:col-span-2">
                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                <Terminal className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <div className="ml-16">
                                <h3 className="text-lg leading-6 font-medium text-slate-900">Technical Skills</h3>
                                <div className="mt-4 space-y-4">
                                    {[
                                        { category: 'Languages', skills: ['Python', 'C', 'Java', 'SQL (MySQL)', 'JavaScript', 'HTML', 'CSS'] },
                                        { category: 'Frameworks', skills: ['React.js', 'FastAPI', 'Flask', 'Django', 'Selenium'] },
                                        { category: 'Cloud & DevOps', skills: ['Amazon Web Services (AWS)', 'Docker', 'Git', 'GitHub'] },
                                        { category: 'Tools', skills: ['Jupyter Notebook', 'VS Code', 'Tableau', 'VMware', 'Postman', 'LaTeX', 'Figma'] },
                                        { category: 'Operating Systems', skills: ['Linux/Unix', 'Raspberry Pi'] }
                                    ].map((group) => (
                                        <div key={group.category}>
                                            <h4 className="text-sm font-semibold text-slate-800 mb-2">{group.category}</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {group.skills.map(skill => (
                                                    <span key={skill} className="px-3 py-1 bg-slate-50 text-slate-700 rounded-md text-sm font-medium border border-slate-100 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 transition-colors">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
