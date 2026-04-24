"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare, Clock, Send, Globe } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const socials = [
  {
    id: 1,
    platform: "Linkedin",
    url: "https://www.linkedin.com/in/nazeeha-kb",
    icon: faLinkedin,
    title: "linkedin",
  },
  {
    id: 2,
    platform: "GitHub",
    url: "https://github.com/nazeeha-kb",
    icon: faGithub,
    title: "github",
  },
  {
    id: 3,
    platform: "Frontend Mentor",
    url: "https://www.frontendmentor.io/profile/nazeeha-kb",
    icon: faCode,
    title: "frontend mentor",
  },
];

const ContactInfoItem = ({ icon: Icon, title, value, subValue }) => (
  <div className="flex items-start gap-5 group">
    <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200 flex items-center justify-center text-stone-400 group-hover:text-amber-500 group-hover:border-amber-200 group-hover:shadow-lg group-hover:shadow-amber-500/10 transition-all duration-300">
      <Icon size={20} />
    </div>
    <div className="space-y-1">
      <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-stone-400 block">
        {title}
      </span>
      <p className="text-stone-700 font-semibold">{value}</p>
    </div>
  </div>
);

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("https://formspree.io/f/myklowkp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSuccess(true);
        form.reset();

        setTimeout(() => setSuccess(false), 3000);
      } else {
        setError("Something went wrong. Try again.");
      }
    } catch (err) {
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-32 bg-white relative overflow-hidden text-stone-600"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-24 space-y-4">
          <div className="flex items-center justify-center gap-2 text-stone-300 font-mono text-[10px] uppercase font-bold tracking-[0.4em]">
            <div className="w-8 h-[1px] bg-stone-100" />
            <span>Connect</span>
            <div className="w-8 h-[1px] bg-stone-100" />
          </div>
          <h3 className="text-4xl md:text-5xl font-display font-medium text-stone-900 tracking-tight">
            Get in <span className="text-amber-500 italic">Touch</span>.
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] gap-12 xl:gap-24">
          {/* LEFT COLUMN: CONTACT INFORMATION */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h4 className="text-3xl font-display font-medium text-stone-900 tracking-tight">
                Contact Information
              </h4>
              <p className="text-stone-500 leading-relaxed max-w-md">
                I’m open to new opportunities, collaborations, or simply a
                conversation about technology. Feel free to reach out through
                the form or my social links.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
              <a href="mailto:nazeeha.kb@gmail.com">
                <ContactInfoItem
                  icon={Mail}
                  title="Email"
                  value="nazeeha.kb@gmail.com"
                />
              </a>
              <a href="tel:+966583296380">
                <ContactInfoItem
                  icon={Phone}
                  title="Phone"
                  value="+966 583 296380"
                />
              </a>
              <a href="https://wa.me/966583296380">
                <ContactInfoItem
                  icon={MessageSquare}
                  title="WhatsApp"
                  value="Start a Chat"
                />
              </a>

              <ContactInfoItem
                icon={Clock}
                title="Availability"
                value="Within 24 hours"
              />
            </div>

            {/* SOCIAL LINKS ACCENT */}
            <div className="pt-8 border-t border-stone-100 flex items-center gap-6">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-stone-400">
                Socials
              </span>
              <div className="flex gap-4 text-xl">
                {socials.map((social) => (
                  <a
                    title={social.title}
                    key={social.id}
                    href={social.url}
                    className="font-bold text-stone-400 hover:text-amber-600 transition-colors uppercase tracking-tight"
                  >
                    <FontAwesomeIcon icon={social.icon} />{" "}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: SEND A MESSAGE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-stone-50/50 border border-stone-200 rounded-[3rem] p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(28,25,23,0.05)]"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <h4 className="text-2xl font-display font-medium text-stone-900 tracking-tight">
                  Send a message
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label
                    htmlFor="name"
                    className="text-[10px] font-mono font-bold uppercase tracking-widest text-stone-400 ml-1"
                  >
                    Your Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full bg-white border border-stone-200 rounded-2xl px-6 py-4 text-sm text-stone-900 focus:outline-none focus:ring-4 focus:ring-amber-500/5 focus:border-amber-500 transition-all placeholder:text-stone-300"
                  />
                </div>
                <div className="space-y-3">
                  <label
                    htmlFor="email"
                    className="text-[10px] font-mono font-bold uppercase tracking-widest text-stone-400 ml-1"
                  >
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    placeholder="name@company.com"
                    className="w-full bg-white border border-stone-200 rounded-2xl px-6 py-4 text-sm text-stone-900 focus:outline-none focus:ring-4 focus:ring-amber-500/5 focus:border-amber-500 transition-all placeholder:text-stone-300"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label
                  htmlFor="message"
                  className="text-[10px] font-mono font-bold uppercase tracking-widest text-stone-400 ml-1"
                >
                  Message Details
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  placeholder="I'd like to talk about..."
                  className="w-full bg-white border border-stone-200 rounded-2xl px-6 py-4 text-sm text-stone-900 focus:outline-none focus:ring-4 focus:ring-amber-500/5 focus:border-amber-500 transition-all placeholder:text-stone-300 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-stone-900 text-white rounded-2xl font-bold text-sm flex items-center justify-center gap-3 shadow-2xl shadow-stone-900/10 hover:bg-stone-800 transition-all"
              >
                <Send size={18} />
                Send Inquiry
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {success && (
        <div className="fixed bottom-14 z-10 right-6 bg-emerald-500 text-white px-6 py-3 rounded-2xl shadow-lg text-sm">
          Form Submitted Successfully!
        </div>
      )}

      {error && (
        <div className="fixed bottom-14 z-10 right-6 bg-red-500 text-white px-6 py-3 rounded-2xl shadow-lg text-sm">
          {error}
        </div>
      )}

      {/* BACKGROUND ACCENTS */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-50 blur-[120px] rounded-full translate-x-1/4 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-50 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Contact;
