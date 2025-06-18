'use client';
import { useState } from "react";

export default function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch("https://formspree.io/f/meokzrew", {
            method: "POST",
            headers: {
                Accept: "application/json",
            },
            body: new FormData(e.target as HTMLFormElement),
        });

        if (res.ok) {
            setSubmitted(true);
        }
    };

    if (submitted) {
        return (
            <section className="py-16 text-center bg-white">
                <h2 className="text-3xl font-bold mb-4">Thank you!</h2>
                <p className="text-gray-600">We'll be in touch soon.</p>
            </section>
        );
    }

    return (
        <section id="contact" className="py-16 bg-white text-center">
            <h2 className="text-3xl font-bold mb-12 tracking-wide">GET IN TOUCH</h2>
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 text-left">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-4 py-3"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-4 py-3"
                    required
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-4 py-3 md:col-span-2"
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    value={form.message}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-4 py-3 md:col-span-2"
                    rows={5}
                />
                <button
                    type="submit"
                    className="md:col-span-2 bg-black text-white font-semibold py-3 px-6 rounded hover:bg-gray-800 transition"
                >
                    Submit
                </button>
            </form>
        </section>
    );
}
