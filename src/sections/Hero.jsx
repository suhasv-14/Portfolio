import React from 'react';
import { Button } from '../components/ui/Button';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section id="home" className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-indigo-50 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-6 ring-1 ring-slate-200">
                            Available for Opportunities
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-8">
                            Hi, I'm <span className="text-indigo-600">Suhas</span>.
                            <br />
                            <span className="text-slate-800">Master's Student.</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto"
                    >
                        Passionate about building scalable software solutions and exploring advanced algorithms.
                        Specializing in Full Stack Development and Artificial Intelligence.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >

                        <Button size="lg" variant="outline" className="w-full sm:w-auto" href="/SUHAS V-Resume.pdf" download="Suhas_Resume.pdf">
                            Download CV
                            <Download className="ml-2 h-4 w-4" />
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
