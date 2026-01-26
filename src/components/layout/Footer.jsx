import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200 py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center space-y-6">
                <div className="flex space-x-8">
                    <a href="https://github.com/suhasv-14" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors transform hover:scale-110">
                        <Github size={22} />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/suhas-v-364045214" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0A66C2] transition-colors transform hover:scale-110">
                        <Linkedin size={22} />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href="mailto:suhasvishwanath14@gmail.com" className="text-slate-400 hover:text-slate-900 transition-colors transform hover:scale-110">
                        <Mail size={22} />
                        <span className="sr-only">Email</span>
                    </a>
                </div>
                <p className="text-slate-500 text-sm">
                    &copy; {new Date().getFullYear()} Suhas. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
