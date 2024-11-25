"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com/hamzasial1911",
      label: "Facebook"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/hamzasial1911",
      label: "X (Twitter)"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/hamza.sial1911/",
      label: "Instagram"
    },
    {
      icon: Github,
      href: "https://github.com/hamzasial1911",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/hamzasial1911",
      label: "LinkedIn"
    }
  ]

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-8 border-t bg-background"
    >
      <div className="container flex flex-col items-center gap-6">
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Muhammad Hamza Sial. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
           Built with heart ❤️
          </p>
        </div>
      </div>
    </motion.footer>
  )
}