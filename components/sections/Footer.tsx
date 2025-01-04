// components/Footer.tsx
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { useMediaQuery } from '@/hooks/use-media-query';
import { LeetcodeIcon } from 'hugeicons-react';

const Footer: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/jacksettles' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/john-taylor-settles/' },
    { icon: FaEnvelope, href: 'mailto:johntaylorsettles@gmail.com' },
  ];

  return (
    <motion.footer
      className="py-8 mt-20 bg-background"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        {isMobile && (
          <div className="flex justify-center space-x-6 mb-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </div>
        )}
        <motion.div
          className="text-center text-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {/* <p className="text-lg font-mono">
            Designed & Built by{' '}
            <span className="text-primary font-bold">
              Jack Settles
            </span>{' '}
            <span className="animate-pulse inline-block">🚀</span>
          </p> */}
          <p className="mt-2 text-sm">
          “The assumption, one might say, forms the basis of action, and therefore, naturally, of thought.” - Ludwig Wittgenstein, <i>On Certainty</i> §411
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
