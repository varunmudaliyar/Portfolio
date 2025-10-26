// About.jsx — Personalized for Varun Mudaliyar

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { FaReact } from "react-icons/fa";
import { SiCplusplus, SiPython, SiEspressif, SiFirebase, SiArduino, SiTailwindcss, SiJavascript, SiNodedotjs } from "react-icons/si";
import { IoCodeSlash } from "react-icons/io5";
import { GiBrain, GiCircuitry } from "react-icons/gi";
import { MdTrain } from "react-icons/md";
import { RiAiGenerate } from "react-icons/ri";

export default function About() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [activeSkill, setActiveSkill] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent! (Demo only – integrate with your backend or EmailJS)");
  };

  // --------------------- SKILLS ---------------------
  const skills = [
    { name: "C++", icon: <SiCplusplus />, color: "text-blue-500", level: 90 },
    { name: "Python", icon: <SiPython />, color: "text-yellow-500", level: 85 },
    { name: "Arduino / ESP8266", icon: <SiArduino />, color: "text-teal-600", level: 95 },
    { name: "ESP-NOW / IoT Systems", icon: <SiEspressif />, color: "text-orange-600", level: 90 },
    { name: "Firebase / MQTT", icon: <SiFirebase />, color: "text-yellow-400", level: 80 },
    { name: "React / Tailwind", icon: <FaReact />, color: "text-cyan-500", level: 85 },
    { name: "Node.js / Cloud Integration", icon: <SiNodedotjs />, color: "text-green-600", level: 75 },
  ];

  // --------------------- JOURNEY / MILESTONES ---------------------
  const journey = [
    {
      year: "2024",
      title: "Smart Irrigation System",
      description:
        "Designed and built a fully automated irrigation system using ESP8266 and ESP-NOW. Selected as a Finalist in Avishkar and DIPEX for innovative water management.",
      icon: <IoCodeSlash />,
      color: "green",
    },
    {
      year: "2025",
      title: "Seizure Detection Device",
      description:
        "Developing a wearable device capable of detecting seizures in real time using biosensors and AI-driven data analysis to send emergency alerts.",
      icon: <GiBrain />,
      color: "blue",
    },
    {
      year: "2025",
      title: "Automated Train Traffic Routing",
      description:
        "Building a smart railway routing system that automates train movement decisions based on IoT sensor data and AI algorithms for safe, optimized transport.",
      icon: <MdTrain />,
      color: "orange",
    },
    {
      year: "Ongoing",
      title: "Exploring AI & System Integration",
      description:
        "Expanding skills in AI, machine learning, and cloud-based IoT integration to design next-generation intelligent systems.",
      icon: <RiAiGenerate />,
      color: "purple",
    },
  ];

  // --------------------- AREAS OF INTEREST ---------------------
  const interests = [
    { name: "IoT & Embedded Systems", emoji: "🔧", color: "bg-green-100 dark:bg-green-900/30" },
    { name: "Artificial Intelligence", emoji: "🤖", color: "bg-pink-100 dark:bg-pink-900/30" },
    { name: "Cloud & Automation", emoji: "☁️", color: "bg-blue-100 dark:bg-blue-900/30" },
    { name: "App Development", emoji: "📱", color: "bg-yellow-100 dark:bg-yellow-900/30" },
    { name: "Space & Robotics Tech", emoji: "🚀", color: "bg-indigo-100 dark:bg-indigo-900/30" },
    { name: "Problem Solving", emoji: "🧩", color: "bg-purple-100 dark:bg-purple-900/30" },
  ];

  // --------------------- ACHIEVEMENTS ---------------------
  const achievements = [
    {
      title: "Avishkar & DIPEX Finalist",
      description:
        "Recognized for innovative design of Smart Irrigation System leveraging ESP8266 modules and real-time automation.",
    },
    {
      title: "Core Committee - IEI TCET",
      description:
        "Active member contributing to tech initiatives and collaborations for engineering innovation.",
    },
    {
      title: "Academic Excellence",
      description:
        "Maintained a strong academic record with consistent performance across IoT and AI-related coursework.",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-20" id="about">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* --------------------- HEADER --------------------- */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-orange-500 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-orange-500 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            I’m <span className="font-semibold text-teal-500">Varun Mudaliyar</span>, an enthusiastic
            and result-driven developer passionate about{" "}
            <span className="text-orange-500 font-semibold">IoT</span>,{" "}
            <span className="text-orange-500 font-semibold">Embedded Systems</span>, and{" "}
            <span className="text-orange-500 font-semibold">Artificial Intelligence</span>. I love
            blending hardware and software to create impactful solutions — from automating irrigation
            systems to developing intelligent real-time devices. My goal is to innovate systems that
            make the world more efficient and connected.
          </p>
        </div>

        {/* --------------------- SKILLS --------------------- */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-textDark dark:text-gray-100 mb-8 text-center">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveSkill(idx)}
                onMouseLeave={() => setActiveSkill(null)}
                className="group relative bg-beige-50 dark:bg-deepBlue-800 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
              >
                <div
                  className={`text-5xl ${skill.color} mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center`}
                >
                  {skill.icon}
                </div>
                <p className="text-center font-semibold text-beige-800 dark:text-beige-100 text-sm">
                  {skill.name}
                </p>
                <div className="mt-3 bg-beige-200 dark:bg-deepBlue-700 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-teal-500 to-orange-500 transition-all duration-700 ${
                      activeSkill === idx ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --------------------- JOURNEY --------------------- */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-beige-900 dark:text-beige-50 mb-12 text-center">
            My Journey
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-500 to-orange-500 hidden md:block"></div>
            {journey.map((item, idx) => (
              <div
                key={idx}
                className={`relative flex items-center mb-12 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`w-full md:w-5/12 ${
                    idx % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                  }`}
                >
                  <div className="bg-beige-50 dark:bg-deepBlue-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 bg-${item.color}-100 dark:bg-${item.color}-900/30 text-${item.color}-600 dark:text-${item.color}-400`}
                    >
                      {item.year}
                    </span>
                    <h4 className="text-xl font-bold text-beige-900 dark:text-beige-50 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-beige-700 dark:text-beige-200 text-sm">{item.description}</p>
                  </div>
                </div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-orange-500 items-center justify-center text-white text-xl shadow-lg">
                  {item.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --------------------- INTERESTS --------------------- */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-beige-900 dark:text-beige-50 mb-8 text-center">
            Areas of Interest
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interests.map((interest, idx) => (
              <div
                key={idx}
                className={`${interest.color} rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 cursor-pointer`}
              >
                <div className="text-4xl mb-2">{interest.emoji}</div>
                <p className="font-semibold text-gray-700 dark:text-gray-200">{interest.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --------------------- ACHIEVEMENTS --------------------- */}
        <div className="mb-20 bg-gradient-to-r from-teal-500/10 to-orange-500/10 rounded-3xl p-8">
          <h3 className="text-3xl font-bold text-beige-900 dark:text-beige-50 mb-8 text-center">
            Recognitions & Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((ach, idx) => (
              <div
                key={idx}
                className="bg-beige-50 dark:bg-deepBlue-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <h4 className="font-bold text-lg text-teal-600 dark:text-orange-400 mb-2">
                  {ach.title}
                </h4>
                <p className="text-beige-700 dark:text-beige-200 text-sm">{ach.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --------------------- CONTACT FORM --------------------- */}
        <form
          id="contact"
          onSubmit={handleSubmit}
          className="w-full max-w-3xl bg-gradient-to-br from-beige-50 to-beige-100 dark:from-deepBlue-800 dark:to-deepBlue-900 shadow-2xl rounded-3xl p-8 md:p-10 space-y-6 mx-auto border border-beige-300 dark:border-deepBlue-700"
        >
          <div className="text-center mb-6">
            <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-orange-500 mb-2">
              Let's Connect
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Have a project or idea? Let’s collaborate and build something impactful.
            </p>
          </div>

          {/* FORM FIELDS */}
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              type="text"
              placeholder="First Name"
              required
              className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 focus:ring-2 focus:ring-teal-400 dark:bg-gray-800 dark:text-white transition-all"
            />
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              type="text"
              placeholder="Last Name"
              required
              className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 dark:bg-gray-800 dark:text-white transition-all"
            />
          </div>

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Email Address"
            required
            className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 dark:bg-gray-800 dark:text-white transition-all"
          />
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            type="tel"
            placeholder="+91 12345 67890"
            className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 dark:bg-gray-800 dark:text-white transition-all"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            placeholder="Tell me about your project or idea..."
            required
            className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 dark:bg-gray-800 dark:text-white transition-all resize-none"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Send Message 🚀
          </button>
        </form>

        {/* --------------------- QUOTE --------------------- */}
        <p className="text-center text-gray-600 dark:text-gray-400 mt-12 italic">
          “Innovating real-world systems through smart connectivity.”
        </p>
      </div>
    </section>
  );
}
