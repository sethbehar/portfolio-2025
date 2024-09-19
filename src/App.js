'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaUser } from "react-icons/fa";


export default function App() {
  const [expandedSection, setExpandedSection] = useState(null)

  const sections = {
    about: [
      { title: 'Background', content: 'Im a software developer with 5 years of experience.', img: '/florida-gators-logo.png' },
      { title: 'Education', content: 'BS in Computer Science from the University of Florida', img: '/florida-gators-logo.png' },
      { title: 'Interests', content: 'AI, Machine Learning, and Web Development', img: '/florida-gators-logo.png' },
      { title: 'Hobbies', content: 'Playing guitar, hiking, and reading sci-fi novels', img: '/florida-gators-logo.png' },
    ],
    experience: [
      { title: 'eBacon Software Engineer', content: 'TechCorp (2020-Present)', img: '/florida-gators-logo.png' },
      { title: 'Web Developer', content: 'InnoSoft (2018-2020)', img: '/florida-gators-logo.png' },
      { title: 'Junior Developer', content: 'StartUp Inc. (2016-2018)', img: '/florida-gators-logo.png' },
      { title: 'Intern', content: 'CodeCo (Summer 2015)', img: '/florida-gators-logo.png' },
    ],
    projects: [
      { title: 'Project Alpha', content: 'A web application for managing tasks.', img: '/florida-gators-logo.png' },
      { title: 'Project Beta', content: 'An AI chatbot built with GPT-3.', img: '/florida-gators-logo.png' },
      { title: 'Project Gamma', content: 'A mobile app for fitness tracking.', img: '/florida-gators-logo.png' },
      { title: 'Project Delta', content: 'An open-source library for data visualization.', img: '/florida-gators-logo.png' },
    ],
  }

  const handleExpand = (section) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const MotionBox = ({ children, onClick, className }) => (
    <motion.div
      layout
      onClick={onClick}
      className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Seth Behar
      </motion.h1>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        {/* About Me Box */}
        <MotionBox
          onClick={() => handleExpand('about')}
          className={`bg-blue-100 ${
            expandedSection === 'about'
              ? 'col-span-2 md:col-span-4 row-span-2 md:row-span-2'
              : 'col-span-2 md:col-span-2 row-span-2'
          }`}
        >
          <div className='flex flex-row gap-2'>
            <FaUser className='mt-1'/>
            <h2 className="text-xl font-semibold mb-2">About Me</h2>
          </div>
          {expandedSection === 'about' ? (
            <div className="grid grid-cols-2 gap-4">
              {sections.about.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-blue-200 p-4 rounded-lg"
                >
                  <div className='flex flex-row'>
                    <img src={item.img} alt="UF" className="w-12 h-12 mb-2" />
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-sm">{item.content}</p>
                </motion.div>
              ))}
            </div>
          ) : (
            <p>Hi, Im seth. Click here to learn more about me...</p>
          )}
        </MotionBox>

        {/* Experience Box */}
        <MotionBox
          onClick={() => handleExpand('experience')}
          className={`bg-green-100 ${
            expandedSection === 'experience'
              ? 'col-span-2 md:col-span-4 row-span-2 md:row-span-2'
              : 'col-span-2 md:col-span-2 row-span-2'
          }`}
        >
          <h2 className="text-xl font-semibold mb-2">Experience</h2>
          {expandedSection === 'experience' ? (
            <div className="grid grid-cols-2 gap-4">
              {sections.experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-green-200 p-4 rounded-lg"
                >
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm">{item.content}</p>
                </motion.div>
              ))}
            </div>
          ) : (
            <p>Click to see my work history</p>
          )}
        </MotionBox>

        {/* Projects Box */}
        <MotionBox
          onClick={() => handleExpand('projects')}
          className={`bg-indigo-100 ${
            expandedSection === 'projects'
              ? 'col-span-2 md:col-span-4 row-span-2 md:row-span-2'
              : 'col-span-2 md:col-span-2 row-span-2'
          }`}
        >
          <h2 className="text-xl font-semibold mb-2">Projects</h2>
          {expandedSection === 'projects' ? (
            <div className="grid grid-cols-2 gap-4">
              {sections.projects.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-indigo-200 p-4 rounded-lg"
                >
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm">{item.content}</p>
                </motion.div>
              ))}
            </div>
          ) : (
            <p>Click to view my projects</p>
          )}
        </MotionBox>

        {/* Contact Box */}
        <MotionBox className="bg-yellow-100 col-span-2 md:col-span-1 row-span-1">
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p>Email: me@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>LinkedIn: /in/myprofile</p>
        </MotionBox>

        {/* Skills Box */}
        <MotionBox className="bg-purple-100 col-span-2 md:col-span-1 row-span-1">
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc list-inside">
            <li>React</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>AWS</li>
            <li>Docker</li>
          </ul>
        </MotionBox>

        {/* GitHub Box */}
        <MotionBox className="bg-red-100 col-span-2 md:col-span-1 row-span-1">
          <h2 className="text-xl font-semibold mb-2">GitHub</h2>
          <p>Check out my projects on GitHub:</p>
          <a href="https://github.com/myusername" className="text-blue-500">
            github.com/myusername
          </a>
        </MotionBox>

        {/* Chess Box */}
        <MotionBox className="bg-pink-100 col-span-2 md:col-span-1 row-span-1">
          <h2 className="text-xl font-semibold mb-2">Chess</h2>
          <p>I enjoy playing chess in my free time.</p>
          <a href="https://chess.com/member/myusername" className="text-blue-500">
            My Chess.com Profile
          </a>
        </MotionBox>
      </motion.div>
    </div>
  )
}
