import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PlasmaBackground from "../components/PlasmaBackground";
import AILandingWidget from "../components/landing/AILandingWidget";
export default function PlacementCalculator() {
  return <div className="relative min-h-screen text-white"><PlasmaBackground/><Navbar/><main className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-12"><Link to="/" className="text-lime-400 text-sm">Back to home</Link><h1 className="text-4xl md:text-6xl font-semibold tracking-tight mt-6 mb-4">Placement calculator</h1><p className="mb-8">Explore how your profile may influence placement readiness. Results are estimates, not guarantees.</p><AILandingWidget/></main><Footer/></div>;
}
