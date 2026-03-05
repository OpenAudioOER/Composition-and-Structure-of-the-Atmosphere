/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  Download, 
  Headphones, 
  PlayCircle, 
  FileText, 
  ExternalLink, 
  User, 
  Mail, 
  Copyright,
  ChevronRight,
  HelpCircle
} from 'lucide-react';

const Navbar = () => (
  <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
    <div className="text-xl font-bold tracking-tight text-navy-900">
      Atmospheric Science
    </div>
    <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
      <a href="#" className="hover:text-navy-900 transition-colors">About</a>
      <a href="#" className="hover:text-navy-900 transition-colors">Read</a>
      <a href="#" className="hover:text-navy-900 transition-colors">Audiobook</a>
      <a href="#" className="hover:text-navy-900 transition-colors">Quiz</a>
      <a href="#" className="hover:text-navy-900 transition-colors">Resources</a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="bg-navy-900 text-white py-20 px-8 overflow-hidden">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="inline-flex items-center px-3 py-1 rounded-md bg-white/10 border border-white/20 text-[10px] font-bold uppercase tracking-widest">
          <BookOpen className="w-3 h-3 mr-2" />
          Open-License Textbook
        </div>
        
        <div className="space-y-4">
          <p className="text-slate-300 font-medium tracking-wide">
            Part of the "Introduction to Atmospheric Science" Series
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
            Composition and <br />Structure of the <br />
            <span className="text-accent-blue">ATMOSPHERE</span>
          </h1>
          <p className="text-xl italic text-slate-400 font-light">Second Edition</p>
        </div>

        <p className="text-slate-300 max-w-lg leading-relaxed">
          Dive into the fundamental components and dynamic architecture of Earth's atmosphere. 
          Written by Dr. Chew-Hung Chang, this comprehensive guide provides essential insights 
          for students and enthusiasts of atmospheric science.
        </p>

        <div className="space-y-2">
          <p className="font-semibold text-lg">By Dr. Chew-Hung Chang</p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-3 bg-white text-navy-900 font-bold rounded-md hover:bg-slate-100 transition-all flex items-center shadow-lg">
              <BookOpen className="w-4 h-4 mr-2" />
              Read Online
            </button>
            <button className="px-8 py-3 border-2 border-white/30 text-white font-bold rounded-md hover:bg-white/10 transition-all flex items-center">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative flex justify-center"
      >
        <div className="w-full max-w-md aspect-[3/4] bg-white rounded-lg shadow-2xl overflow-hidden relative group border border-slate-200">
          {/* Stylized Book Cover - Matching Reference */}
          <div className="absolute inset-0 p-10 flex flex-col z-10">
            <div className="space-y-1">
              <p className="text-lg font-bold text-navy-900 tracking-tight">Composition and Structure of the</p>
              <h2 className="text-5xl font-black tracking-tighter text-navy-900 leading-none">ATMOSPHERE</h2>
              <div className="pt-4 space-y-4">
                <p className="text-sm italic font-bold text-navy-800 leading-tight max-w-[240px]">
                  Part of the "Introduction to Atmospheric Science" Series Book 1
                </p>
                <p className="text-lg font-bold text-navy-900">Second Edition</p>
              </div>
            </div>
            
            <div className="relative flex-1 flex items-center justify-center mt-4">
              <div className="w-full h-full relative">
                {/* Large Triangle Graphic from Reference */}
                <div className="absolute inset-0 bg-navy-900 clip-triangle-large overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000" 
                    alt="Atmosphere from above" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Decorative Navy Triangles */}
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-navy-900 clip-triangle-small opacity-100"></div>
              </div>
            </div>

            <div className="mt-auto flex justify-end">
              <p className="text-sm font-bold tracking-widest text-navy-900">CHEW-HUNG CHANG</p>
            </div>
          </div>
          
          {/* Corner Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-navy-900 clip-corner-accent"></div>
        </div>
      </motion.div>
    </div>
  </section>
);

const AncillaryMaterials = () => (
  <section className="py-24 px-8 max-w-7xl mx-auto">
    <div className="text-center mb-16 space-y-4">
      <h2 className="text-4xl font-bold text-navy-900">Ancillary Learning Materials</h2>
      <p className="text-slate-500 max-w-2xl mx-auto">
        Enhance your learning experience with our supplementary resources, designed 
        to help you master atmospheric concepts.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Audiobook Card */}
      <motion.div 
        whileHover={{ y: -5 }}
        className="md:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col"
      >
        <div className="p-6 border-b border-slate-50 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-accent-blue/10 rounded-lg">
              <Headphones className="w-5 h-5 text-accent-blue" />
            </div>
            <h3 className="font-bold text-lg">Audiobook Version</h3>
          </div>
          <span className="px-3 py-1 bg-accent-blue/10 text-accent-blue text-[10px] font-bold rounded-full">Full Book</span>
        </div>
        <div className="p-6 flex-1 space-y-6">
          <p className="text-slate-500 text-sm">
            Listen to the complete text of "Composition and Structure of the Atmosphere". Perfect for learning on the go or reinforcing your reading.
          </p>
          <div className="relative aspect-video bg-slate-100 rounded-xl overflow-hidden group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200" 
              alt="Mountain Atmosphere" 
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                <PlayCircle className="w-8 h-8 text-white fill-current" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white text-xs font-medium">Composition and Structure of the Atmosphere - Full Audiobook</p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="space-y-8">
        {/* Quiz Card */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center space-y-6"
        >
          <div className="w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center mx-auto">
            <HelpCircle className="w-6 h-6 text-accent-blue" />
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-xl">Test Your Knowledge</h3>
            <p className="text-slate-500 text-sm">
              Evaluate your understanding of the material with our interactive practice quizzes covering each chapter.
            </p>
          </div>
          <button className="w-full py-3 bg-navy-900 text-white font-bold rounded-lg hover:bg-navy-800 transition-colors">
            Take Practice Quiz
          </button>
        </motion.div>

        {/* Downloads Card */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8"
        >
          <h3 className="font-bold text-lg mb-6">Quick Downloads</h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-4 group cursor-pointer">
              <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-accent-blue/10 transition-colors">
                <FileText className="w-5 h-5 text-slate-400 group-hover:text-accent-blue" />
              </div>
              <div>
                <p className="font-bold text-sm group-hover:text-accent-blue transition-colors">Full Textbook PDF</p>
                <p className="text-xs text-slate-400">12.4 MB</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 group cursor-pointer">
              <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-accent-blue/10 transition-colors">
                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-accent-blue" />
              </div>
              <div>
                <p className="font-bold text-sm group-hover:text-accent-blue transition-colors">View Online Version</p>
                <p className="text-xs text-slate-400">Interactive Web Reader</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white border-t border-slate-100 py-12 px-8">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
        <div className="space-y-1 text-center md:text-left">
          <h4 className="font-bold text-navy-900">Composition and Structure of the Atmosphere</h4>
          <p className="text-sm text-slate-400">An open-license educational resource.</p>
        </div>
        <div className="flex items-center space-x-6 text-slate-400">
          <User className="w-5 h-5 hover:text-navy-900 cursor-pointer transition-colors" />
          <Copyright className="w-5 h-5 hover:text-navy-900 cursor-pointer transition-colors" />
          <Mail className="w-5 h-5 hover:text-navy-900 cursor-pointer transition-colors" />
        </div>
      </div>
      <div className="pt-8 border-t border-slate-50 text-center">
        <p className="text-xs text-slate-400 tracking-wide">
          © 2023 Dr. Chew-Hung Chang. All rights reserved under Creative Commons.
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-accent-blue/30">
      <style>{`
        .clip-triangle-large {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
        .clip-triangle-small {
          clip-path: polygon(100% 0, 0% 100%, 100% 100%);
        }
        .clip-corner-accent {
          clip-path: polygon(100% 0, 0 0, 100% 100%);
        }
      `}</style>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AncillaryMaterials />
      </main>
      <Footer />
    </div>
  );
}
