import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, BookOpen, Users, Code2, Calendar, Briefcase, Trophy, Calculator, Mic, ClipboardList } from "lucide-react";
import PlasmaBackground from "../components/PlasmaBackground";
import Hero3DCanvas from "../components/Hero3DCanvas";
import Navbar from "../components/Navbar";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

const modules = [
  [BookOpen, "Study materials", "Find and share notes with your peers.", "/notes"],
  [Trophy, "Hackathons", "Discover challenges and find teammates.", "/hackathons"],
  [Users, "Community", "Ask questions and connect with students.", "/community"],
  [Calendar, "Events", "Keep up with opportunities on campus.", "/events"],
  [Briefcase, "Careers", "Explore internships and referrals.", "/careers"],
  [Code2, "Tech issues", "Work through technical problems together.", "/tech-issues"],
];
const tools = [
  [Calculator, "Placement calculator", "Explore an estimate based on your academic and coding profile.", "/placement-calculator"],
  [Mic, "Interview practice", "Practice interview questions and get feedback.", "/interview-prep"],
  [ClipboardList, "Company mock tests", "Prepare with company-specific practice questions.", "/company-mocks"],
];
function Feature({ item }) {
  const [Icon, name, description, path] = item;
  return <Link to={path} className="uv-feature group"><Icon size={23} className="text-lime-400"/><ArrowUpRight size={19} className="uv-feature-arrow"/><h3>{name}</h3><p>{description}</p></Link>;
}
export default function Landing() {
  const token = localStorage.getItem("campusconnect_token");
  return <div className="uv-landing relative min-h-screen overflow-x-hidden text-white">
    <PlasmaBackground/><Navbar/>
    <section className="uv-hero relative z-10 overflow-hidden">
      <Hero3DCanvas/>
      <motion.div className="uv-hero-content" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.7}}>
        <p className="uv-kicker">THE STUDENT NETWORK</p>
        <h1>Your campus.<br/>Your <span>universe.</span></h1>
        <p className="uv-intro">A place to learn together, build meaningful connections and prepare for what comes next.</p>
        <div className="uv-actions"><Link className="uv-primary" to={token ? "/dashboard" : "/register"}>{token ? "Open dashboard" : "Get started"}<ArrowRight size={18}/></Link><Link className="uv-secondary" to={token ? "/placement-calculator" : "/login"}>{token ? "Placement calculator" : "Sign in"}</Link></div>
      </motion.div>
      <div className="uv-hero-bottom">01 / CONNECTED CAMPUS <span>LEARN · BUILD · GROW</span></div>
    </section>
    <section className="uv-section relative z-10" id="explore"><p className="uv-kicker">01 / EXPLORE</p><h2>Everything campus.</h2><div className="uv-feature-grid">{modules.map(item => <Feature key={item[1]} item={item}/>)}</div></section>
    <section className="uv-section relative z-10"><p className="uv-kicker">02 / PREPARE</p><h2>Build your next step.</h2><div className="uv-feature-grid">{tools.map(item => <Feature key={item[1]} item={item}/>)}</div></section>
    <FAQSection/><Footer/>
  </div>;
}
