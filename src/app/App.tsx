import { useState } from 'react';
import { Menu, X, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Facebook, GraduationCap, Briefcase, Code, Users, BookOpen } from 'lucide-react';
import profilePhoto from '../assets/c70b575161732b5b1f0acaf956b576379448a815.png';
import notreDameLogo from '../assets/b15431081e0a7e4ce331b8abacfee7394b912572.png';
import ateneoLogo from '../assets/aeac2818b970f4ec630250757c0a57cf20a9a794.png';
import whiteBlueMedal from '../assets/aed204c865a0263e8a5d78eca2d453edfdce9fc4.png';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white w-72 transform transition-transform duration-300 ease-in-out z-40 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 shadow-2xl`}
      >
        <div className="flex flex-col items-center p-8 h-full overflow-y-auto">
          {/* Profile Photo */}
          <div className="relative group mb-8">
            <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300">
              <img
                src={profilePhoto}
                alt="Jessa Orcine"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className="text-2xl mb-2 text-center">Jessa Orcine</h2>
          <p className="text-white/80 text-center text-sm mb-8">3rd Year BS Information Systems</p>

          {/* Navigation Menu */}
          <nav className="w-full">
            <ul className="space-y-3">
              {[
                { id: 'about', label: 'ABOUT', icon: <Users size={18} /> },
                { id: 'education', label: 'EDUCATION', icon: <GraduationCap size={18} /> },
                { id: 'projects', label: 'PROJECTS', icon: <Briefcase size={18} /> },
                { id: 'skills', label: 'SKILLS', icon: <Code size={18} /> },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="w-full flex items-center gap-3 px-5 py-3 text-white/90 hover:text-white hover:bg-white/20 transition-all rounded-xl backdrop-blur-sm"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-72 min-h-screen">
        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center p-6 md:p-12 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
          
          <div className="max-w-5xl w-full relative z-10">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/50">
              <h2 className="text-3xl md:text-5xl mb-6 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent leading-tight pb-2">
                Welcome to My Portfolio
              </h2>
              
              <h1 className="text-4xl md:text-6xl mb-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Jessa Orcine
              </h1>
            
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Mail size={20} className="text-indigo-600" />
                  </div>
                  <a href="mailto:orcinejessa57@gmail.com" className="text-sm hover:text-indigo-600 transition-colors truncate">
                    orcinejessa57@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Phone size={20} className="text-purple-600" />
                  </div>
                  <span className="text-sm">+63 905 149 0081</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-pink-50 to-indigo-50 rounded-xl">
                  <div className="p-2 bg-pink-100 rounded-lg">
                    <MapPin size={20} className="text-pink-600" />
                  </div>
                  <span className="text-sm">Davao City, Philippines</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="https://github.com/jessa0122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  <Github size={20} />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/jessa-orcine-0000a2395/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
                <a
                  href="https://www.facebook.com/jessa.orcine.9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  <Facebook size={20} />
                  Facebook
                </a>
              </div>

              <div className="p-6 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-2xl border border-indigo-100">
                <p className="text-gray-700 leading-relaxed text-lg">
                  My interests are in bridging business needs and technology solutions, improving processes, and creating efficient, user-centered systems. I am passionate about using technology to support decision-making and organizational growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="min-h-screen flex items-center justify-center p-6 md:p-12 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-5xl w-full">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg">
                <GraduationCap size={32} className="text-white" />
              </div>
              <h2 className="text-4xl md:text-6xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                EDUCATION
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-l-4 border-indigo-500 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-white rounded-xl overflow-hidden flex items-center justify-center border border-gray-200">
                    <img src={ateneoLogo} alt="Ateneo de Davao University" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl mb-2">Bachelor of Science in Information System</h3>
                    <p className="text-indigo-600 mb-2">Ateneo de Davao University</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">Ongoing: 3rd Year Student</span>
                    </div>
                    <p className="text-gray-600 mt-3">
                      Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems, Software Engineering
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-l-4 border-purple-500 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-white rounded-xl overflow-hidden flex items-center justify-center border border-gray-200">
                    <img src={notreDameLogo} alt="Notre Dame of Dadiangas University" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl mb-2">Senior High School - ABM</h3>
                    <p className="text-purple-600 mb-2">Notre Dame of Dadiangas University - Marist Avenue</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Graduated: 2023</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-l-4 border-pink-500 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-white rounded-xl overflow-hidden flex items-center justify-center border border-gray-200">
                    <img src={notreDameLogo} alt="Notre Dame of Dadiangas University" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl mb-2">Primary School</h3>
                    <p className="text-pink-600 mb-2">Notre Dame of Dadiangas University - IBED</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full">Graduated: 2017</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications Section */}
              <div className="mt-12 mb-6">
                <h3 className="text-3xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-3">
                  <span className="text-2xl">🏆</span>
                  Certifications
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-l-4 border-blue-500 hover:-translate-y-1">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🌐</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl mb-2">Discovering Entrepreneurship</h4>
                      <p className="text-blue-600 text-sm">Cisco Networking Academy</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-l-4 border-indigo-500 hover:-translate-y-1">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">💡</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl mb-2">Digital Infrastructure Innovation</h4>
                      <p className="text-indigo-600 text-sm">Ateneo de Davao University - Webinar</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-l-4 border-yellow-500 hover:-translate-y-1">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🥇</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl mb-2">Yellow Belt Certification</h4>
                      <p className="text-yellow-600 text-sm">Lean Six Sigma Training</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-l-4 border-gray-500 hover:-translate-y-1">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-slate-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🥇</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl mb-2">White Belt Certification</h4>
                      <p className="text-gray-600 text-sm">Lean Six Sigma</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center justify-center p-6 md:p-12">
          <div className="max-w-5xl w-full">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg">
                <Briefcase size={32} className="text-white" />
              </div>
              <h2 className="text-4xl md:text-6xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                PROJECTS
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Code className="text-white" size={24} />
                </div>
                <h3 className="text-2xl mb-3 text-gray-800">Nonoy Laviña Trucking Services</h3>
                <p className="text-gray-600 mb-2 font-medium">Frontend Developer</p>
                <p className="text-gray-600 mb-4">
                  A modern web application for trucking services built with cutting-edge frontend technologies, featuring responsive design and accessible UI components.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm rounded-full">React 19</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm rounded-full">TypeScript</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-pink-100 to-indigo-100 text-pink-700 text-sm rounded-full">Vite</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm rounded-full">Tailwind CSS 4</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm rounded-full">Radix UI</span>
                </div>
              </div>

              <div className="group bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Code className="text-white" size={24} />
                </div>
                <h3 className="text-2xl mb-3 text-gray-800">AdDU Alumni Website</h3>
                <p className="text-gray-600 mb-4">
                  An alumni portal for Ateneo de Davao University that connects graduates and facilitates networking. Features member profiles, event announcements, and data management systems.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm rounded-full">React</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm rounded-full">PHP</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-pink-100 to-indigo-100 text-pink-700 text-sm rounded-full">MySQL</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen flex items-center justify-center p-6 md:p-12 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-5xl w-full">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-4 bg-gradient-to-r from-pink-600 to-orange-600 rounded-2xl shadow-lg">
                <Code size={32} className="text-white" />
              </div>
              <h2 className="text-4xl md:text-6xl bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                SKILLS
              </h2>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl text-gray-800 mb-6 flex items-center gap-3">
                  <span className="text-3xl">💻</span>
                  Programming Languages & Tools
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'HTML', icon: '🌐', color: 'from-orange-400 to-red-400' },
                    { name: 'CSS', icon: '🎨', color: 'from-blue-400 to-indigo-400' },
                    { name: 'JavaScript', icon: '⚡', color: 'from-yellow-400 to-orange-400' },
                    { name: 'Python', icon: '🐍', color: 'from-green-400 to-blue-400' },
                    { name: 'Java', icon: '☕', color: 'from-red-400 to-orange-400' },
                    { name: 'C++', icon: '⚙️', color: 'from-purple-400 to-pink-400' },
                    { name: 'SQL', icon: '🗄️', color: 'from-indigo-400 to-purple-400' },
                  ].map((skill) => (
                    <div key={skill.name} className={`bg-gradient-to-br ${skill.color} p-6 rounded-2xl text-center hover:scale-105 transition-transform shadow-lg text-white`}>
                      <div className="text-4xl mb-3">{skill.icon}</div>
                      <p className="font-semibold">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl text-gray-800 mb-6 flex items-center gap-3">
                  <span className="text-3xl">🚀</span>
                  Frameworks & Libraries
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Next.js', 'Tailwind CSS'].map((tech) => (
                    <span key={tech} className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl text-gray-800 mb-6 flex items-center gap-3">
                  <span className="text-3xl">🛠️</span>
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['Git', 'GitHub', 'VS Code', 'Docker', 'Figma'].map((tool) => (
                    <span key={tool} className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl text-gray-800 mb-6 flex items-center gap-3">
                  <span className="text-3xl">🌟</span>
                  Soft Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['Problem Solving', 'Team Collaboration', 'Communication', 'Time Management', 'Adaptability', 'Critical Thinking'].map((skill) => (
                    <span key={skill} className="px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white p-12 lg:ml-0">
          <div className="max-w-5xl mx-auto text-center">
            <p className="mb-2 text-lg">© 2026 Jessa Orcine. All rights reserved.</p>
            <p className="text-white/80">Built with React and Tailwind CSS</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;