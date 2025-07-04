'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import SocialLinks from '@/components/ui/SocialLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Shayan</h3>
            <p className="text-muted max-w-md ">
              The owner of <a className='font-bold gradient-text' href="https://xpertsphere.vercel.app"> XpertSphere</a> , a
              Full Stack Developer passionate about creating innovative web solutions 
              that solve real-world problems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                <motion.button
                  key={link}
                  whileHover={{ x: 5 }}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-muted hover:text-primary transition-colors text-left"
                >
                  {link}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="space-y-2">
              <p className="text-muted">{portfolioData.personal.email}</p>
              <p className="text-muted">{portfolioData.personal.location}</p>
            </div>
            <SocialLinks />
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="flex items-center space-x-2 text-muted">
            <span>© {currentYear} Shayan. Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span><a className='font-bold gradient-text' href="https://xpertsphere.vercel.app">
            by XpertSphere
            </a>
            </span>
          </div>
          
          <div className="text-muted text-sm ">
            Designed & Developed <a className='hover:text-blue-500' href="https://xpertsphere.vercel.app">by XpertSphere
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
