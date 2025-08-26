import React from 'react';
import { Linkedin, Mail, Code, Users, Briefcase } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Ghulam Hussain",
      role: "Founder & CEO",
      specialization: "AI Engineering | LLM Development | Innovation Leadership",
      image: "/assets/team/ghk.png",
      bio: "Founder & CEO of SindhuGPT. As an AI Engineer and visionary leader, I drive the mission of leveraging intelligent systems to empower 30+ million Sindhi speakers. My focus lies in innovation, strategic partnerships, and guiding the technical roadmap for AI-driven products.",
      expertise: [
        "AI Engineering & LLM Development",
        "Product Innovation & Vision",
        "Leadership & Strategic Direction",
        "Community-Centric AI Solutions",
      ],
      education: "BE Software Engineering, MUET Jamshoro",
      linkedin: "https://www.linkedin.com/in/ghulamhussainkhuhro",
      email: "ghulamhussain.career@gmail.com",
    },
    {
      name: "Abbas Ali",
      role: "CTO & Co-Founder",
      specialization: "Software Architecture | Scalable Systems | AI Infrastructure",
      image: "/assets/team/abbas.jpg",
      bio: "CTO & Co-Founder with expertise in software architecture and scalable system design. I lead the development of AI infrastructure, ensuring our products are secure, reliable, and built for growth. Passionate about bridging advanced AI with real-world applications.",
      expertise: [
        "System Architecture & Design",
        "Scalable Web Applications",
        "AI Infrastructure & APIs",
        "Technical Team Leadership",
      ],
      education: "BE Software Engineering, MUET Jamshoro",
      linkedin: "https://www.linkedin.com/in/abro-abbas?originalSubdomain=pk",
      email: "abbasabro@gmail.com",
    },
    {
      name: "Ghulam Mustafa Khoso",
      role: "COO & Co-Founder",
      specialization: "Operations | Growth Strategy | Partnerships",
      image: "/assets/team/gm.jpg",
      bio: "COO & Co-Founder responsible for operational excellence, partnerships, and execution. With a strong background in startup growth and community engagement, I ensure our projects are delivered efficiently while scaling outreach across Sindhi tech communities.",
      expertise: [
        "Operational Management",
        "Startup Growth & Execution",
        "Partnership Development",
        "Community Engagement & Advocacy",
      ],
      education: "BE Software Engineering, MUET Jamshoro",
      linkedin: "https://www.linkedin.com/in/ghulammustafakhoso",
      email: "ghulammustafakhoso086@gmail.com",
    },
  ];

  const advisors = [
    {
      name: "Rabeea Jaffari, Ph.D.",
      role: "AI Advisor",
      expertise:
        "Ph.D. in AI | Interdisciplinary AI Researcher | Techwomen Emerging Leader | Academic (BPS-19) | Specializes in AI and related technologies",
    },
    {
      name: "Ahtasham Ahsan",
      role: "Business Advisor",
      expertise:
        "Assistant Manager at Business Incubation Center | Startup Growth & Innovation | Mentorship & Strategic Planning for Founders | Experience with PITB, NEP's NIC, Regional Plan9",
    },
  ];

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A passionate team combining deep technical expertise with authentic community connections 
            and cultural understanding.
          </p>
        </div>

        {/* Core Team */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-3xl border border-gray-700 hover:border-accent/50 transition-all duration-300 overflow-hidden hover:scale-105">
              {/* Profile Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-accent font-semibold">{member.role}</p>
                  </div>
                  <div className="flex space-x-3">
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 hover:bg-accent hover:text-gray-900 text-gray-300 p-2 rounded-xl transition-all duration-300"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a 
                      href={`mailto:${member.email}`}
                      className="bg-gray-700 hover:bg-accent hover:text-gray-900 text-gray-300 p-2 rounded-xl transition-all duration-300"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>

                </div>

                <p className="text-gray-300 leading-relaxed mb-6">{member.bio}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <Code className="h-4 w-4 mr-2 text-accent" />
                      Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, idx) => (
                        <span key={idx} className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-700">
                    <p className="text-gray-400 text-sm">{member.education}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Our Team */}
        <div className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-gray-700 mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Why Our Team Wins</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-accent/20 p-4 rounded-2xl w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Community Native</h4>
              <p className="text-gray-300">Born and raised in Sindhi communities. We understand the culture, nuances, and real needs of our users.</p>
            </div>

            <div className="text-center">
              <div className="bg-accent/20 p-4 rounded-2xl w-fit mx-auto mb-4">
                <Code className="h-8 w-8 text-accent" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Technical Excellence</h4>
              <p className="text-gray-300">Combined 15+ years of AI/ML experience with proven track record in building scalable applications.</p>
            </div>

            <div className="text-center">
              <div className="bg-accent/20 p-4 rounded-2xl w-fit mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-accent" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Proven Execution</h4>
              <p className="text-gray-300">Successfully launched products, secured partnerships, and built communities in emerging tech markets.</p>
            </div>
          </div>
        </div>

        {/* Advisors */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-8">Our Advisors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advisors.map((advisor, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-accent/30 transition-colors duration-300">
                <h4 className="text-xl font-bold text-white mb-2">{advisor.name}</h4>
                <p className="text-accent font-medium mb-3">{advisor.role}</p>
                <p className="text-gray-300 text-sm">{advisor.expertise}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Join Us */}
        <div className="mt-16 bg-gradient-to-r from-accent/10 to-accent/5 backdrop-blur-sm p-8 rounded-3xl border border-accent/30 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Join Our Mission</h3>
          <p className="text-gray-300 mb-6">
            We're looking for passionate individuals to help bring AI to 30+ million Sindhi speakers worldwide.
          </p>
          <a 
            href="mailto:careers@sindhugpt.com"
            className="inline-flex items-center bg-accent hover:bg-accent/80 text-gray-900 px-6 py-3 rounded-2xl font-semibold transition-colors duration-300"
          >
            <Mail className="h-5 w-5 mr-2" />
            sindhugpt.ai@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;