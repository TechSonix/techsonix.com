'use client';

import { useState } from 'react';
import { FaCode, FaCubes, FaLayerGroup } from 'react-icons/fa';
import Image from 'next/image';

export default function Home() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: '816116b1-66d1-4b5b-a1b2-8a1954e5790c',
                    ...formData,
                }),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        }

        setIsSubmitting(false);
    };

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <header className="bg-gradient-to-r from-primary via-primary-dark to-secondary text-white">
                <div className="container mx-auto px-6 py-12">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex justify-center md:justify-start w-full md:w-auto">
                            <div className="w-48 h-48 relative">
                                <Image
                                    src="/images/TechSonix.Icon.png"
                                    alt="TechSonix Logo"
                                    fill
                                    priority
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <div className="md:ml-8 md:flex-1 text-center md:text-left">
                            <h1 className="text-5xl font-bold mb-4">TechSonix</h1>
                            <p className="text-xl mb-8">Innovative Blockchain & Web Development Solutions</p>
                            <a href="#contact" className="inline-block bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:text-primary-dark transition-colors">
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Services Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <FaCubes className="text-4xl text-primary mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Blockchain Development</h3>
                            <p className="text-gray-600">
                                Specialized in blockchain solutions, smart contracts, and Web3 integration for modern applications.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <FaCode className="text-4xl text-primary mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                            <p className="text-gray-600">
                                Custom web applications built with modern frameworks and best practices for optimal performance.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <FaLayerGroup className="text-4xl text-primary mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Full Stack & Integrations</h3>
                            <p className="text-gray-600">
                                End-to-end development solutions with seamless third-party integrations and API development.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
                    <div className="max-w-lg mx-auto">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors disabled:opacity-50"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                            {submitStatus === 'success' && (
                                <p className="text-green-600">Message sent successfully!</p>
                            )}
                            {submitStatus === 'error' && (
                                <p className="text-red-600">There was an error sending your message. Please try again.</p>
                            )}
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-secondary text-white py-8">
                <div className="container mx-auto px-6">
                    <div className="text-center">
                        <p>© 2024 TechSonix, Inc. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </main>
    );
} 