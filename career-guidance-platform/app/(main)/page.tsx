"use client";

import { Hero } from "@/components/features/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [dragConstraints, setDragConstraints] = useState(0);

  const features = [
    {
      title: "Career Assessments",
      description: "Take comprehensive assessments to discover your strengths and ideal career paths",
      icon: "📊",
      href: "/assessment",
    },
    {
      title: "Expert Mentors",
      description: "Connect with industry professionals for personalized guidance and advice",
      icon: "👥",
      href: "/mentors",
    },
    {
      title: "Job Opportunities",
      description: "Explore curated job listings tailored to your skills and interests",
      icon: "💼",
      href: "/jobs",
    },
    {
      title: "Community",
      description: "Join a vibrant community of learners and professionals",
      icon: "🌐",
      href: "/community",
    },
  ];

  const mentors = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Software Engineer",
      company: "Google",
      expertise: ["React", "Node.js", "System Design"],
      rating: 4.9,
      sessions: 150,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Data Science Lead",
      company: "Meta",
      expertise: ["Python", "ML", "Analytics"],
      rating: 4.8,
      sessions: 120,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "UX Design Director",
      company: "Apple",
      expertise: ["Figma", "User Research", "Design Systems"],
      rating: 5.0,
      sessions: 200,
    },
    {
      id: 4,
      name: "David Kim",
      role: "Product Manager",
      company: "Amazon",
      expertise: ["Strategy", "Agile", "Analytics"],
      rating: 4.7,
      sessions: 95,
    },
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Software Engineer at Microsoft",
      content: "CareerPath helped me transition from teaching to tech. The mentorship was invaluable!",
      avatar: "👨‍💻",
    },
    {
      name: "Priya Patel",
      role: "Data Analyst at Netflix",
      content: "The career assessment gave me clarity on my strengths. Landed my dream job within 3 months!",
      avatar: "👩‍💼",
    },
    {
      name: "James Wilson",
      role: "UX Designer at Spotify",
      content: "Amazing platform! The mentors are experienced and genuinely care about your growth.",
      avatar: "🎨",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive tools and resources for your career journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={feature.href}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="text-5xl mb-4">{feature.icon}</div>
                      <CardTitle>{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Mentors</h2>
            <p className="text-xl text-muted-foreground">
              Learn from the best in the industry
            </p>
          </motion.div>

          <div className="relative overflow-hidden">
            <motion.div
              drag="x"
              dragConstraints={{ left: -1000, right: 0 }}
              className="flex gap-6 cursor-grab active:cursor-grabbing"
            >
              {mentors.map((mentor, index) => (
                <motion.div
                  key={mentor.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="min-w-[300px]"
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>{mentor.name}</CardTitle>
                          <CardDescription>{mentor.role}</CardDescription>
                          <p className="text-sm text-muted-foreground mt-1">{mentor.company}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1">
                            <span>⭐</span>
                            <span className="font-semibold">{mentor.rating}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">{mentor.sessions} sessions</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {mentor.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <Link href={`/mentors`}>
                        <Button className="w-full">View Profile</Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-muted-foreground">
              Success stories from our community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{testimonial.avatar}</div>
                      <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.role}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic">&ldquo;{testimonial.content}&rdquo;</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of professionals who have transformed their careers with CareerPath
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="text-lg px-8 py-6">
                  Create Free Account
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
