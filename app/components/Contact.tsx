"use client";
import { motion } from "framer-motion";
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaLine } from 'react-icons/fa';

const Contact = () => {
  const contactMethods = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      value: "tanakornit1407@gmail.com",
      link: "mailto:tanakornit1407@gmail.com"
    },
    {
      icon: <FaGithub className="text-2xl" />,
      title: "GitHub",
      value: "slowhandc1ap",
      link: "https://github.com/slowhandc1ap"
    },
    {
      icon: <FaFacebook className="text-2xl" />,
      title: "Facebook",
      value: "Korn Tanakorn",
      link: "https://www.facebook.com/korn.tanakorn.158189/"
    },

    {
      icon: <FaLinkedin className="text-2xl" />,
      title: "LinkedIn",
      value: "linkedin.com/in/tanakorn-taweethawon",
      link: "https://www.linkedin.com/in/tanakorn-taweethawon-62484a306/"
    },
    {
      icon: <FaInstagram className="text-2xl" />,
      title: "Instagram",
      value: "@ko1r4n",
      link: "https://www.instagram.com/ko1r4n/"
    },
    {
      icon: <FaLine className="text-2xl" />,
      title: "LINE",
      value: "ID: dynadin15",
      link: "https://line.me"
    }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-br py-12 px-4">
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="w-full max-w-4xl mx-auto"
  >
    <div className="text-center mb-12">
      <motion.h2 
        className="text-4xl md:text-5xl font-bold text-red-600 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Get In Touch
      </motion.h2>
      <motion.p 
        className="text-lg text-gray-200 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Feel free to reach out to me through any of these channels. I'm always open to discussing new projects, creative ideas or opportunities.
      </motion.p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {contactMethods.map((method, index) => (
        <motion.a
          key={index}
          href={method.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + index * 0.1 }}
        >
          <div className="bg-yellow-200 p-4 rounded-full mb-4 text-red-600">
            {method.icon}
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
          <p className="text-gray-400">{method.value}</p>
        </motion.a>
      ))}
    </div>
  </motion.div>
</section>

  );
};

export default Contact;