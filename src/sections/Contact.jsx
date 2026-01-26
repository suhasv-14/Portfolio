import React from 'react';
import { Mail } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function Contact() {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-indigo-900 rounded-3xl shadow-xl overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30">
                        <div className="absolute top-[-50%] right-[-10%] w-96 h-96 bg-indigo-500 rounded-full blur-3xl" />
                        <div className="absolute bottom-[-50%] left-[-10%] w-96 h-96 bg-pink-500 rounded-full blur-3xl" />
                    </div>

                    <div className="px-6 py-16 md:p-20 text-center text-white relative z-10">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                            Let's Connect
                        </h2>
                        <p className="text-lg text-indigo-100 max-w-2xl mx-auto mb-10">
                            I am currently open to internship and job opportunities in the field of Computer Science.
                            I am eager to work on challenging problems and contribute to impactful projects.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="lg" variant="secondary" className="w-full sm:w-auto font-semibold" onClick={() => window.location.href = 'mailto:suhasvishwanath14@gmail.com'}>
                                Get in Touch
                                <Mail className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
