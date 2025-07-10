import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ProjectsSection from '@/components/projects-section';
import SkillsSection from '@/components/skills-section';
import JourneySection from '@/components/journey-section';
import ContactSection from '@/components/contact-section';
import FindMeOnlineSection from '@/components/find-me-online-section';
import Footer from '@/components/footer';
import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Head>
        <title>My Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <JourneySection />
        <FindMeOnlineSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
    </>
    
  );
}
