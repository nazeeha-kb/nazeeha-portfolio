"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare, Clock, Send, Globe } from "lucide-react";

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
                I'm always interested in new opportunities, collaborations, or
                just a chat about technology. Feel free to reach out via the
                form or my social channels.
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
                value="Usually within 24 hours"
              />
            </div>

            {/* SOCIAL LINKS ACCENT */}
            <div className="pt-8 border-t border-stone-100 flex items-center gap-6">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-stone-400">
                Social Discovery
              </span>
              <div className="flex gap-4">
                {["LinkedIn", "Github", "Twitter"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-xs font-bold text-stone-400 hover:text-amber-600 transition-colors uppercase tracking-tight"
                  >
                    {social}
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
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
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
                  id="message"
                  rows={6}
                  placeholder="I'd like to talk about..."
                  className="w-full bg-white border border-stone-200 rounded-2xl px-6 py-4 text-sm text-stone-900 focus:outline-none focus:ring-4 focus:ring-amber-500/5 focus:border-amber-500 transition-all placeholder:text-stone-300 resize-none"
                />
              </div>

              <motion.button
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

      {/* BACKGROUND ACCENTS */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-50 blur-[120px] rounded-full translate-x-1/4 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-50 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Contact;
