'use client';
import Hero from '@/components/Hero';
import pastorData from '@/data/pastor.json';
import PastorSection from '@/components/PastorSection';
import WordOfTheMonth from '@/components/WordOfTheMonth';
import Services from '@/components/ServicesSection';
import MissionVision from '@/components/MissionVision';
import Rhapsody from '@/components/Rhapsody';
import WhatsHappening from '@/components/WhatsHappening';
import LivesTransformed from '@/components/LivesTransformed';
import GetInTouch from '@/components/GetInTouch';
import ScriptureChallenge from '@/components/ScriptureChallenge';
import Branches from '@/components/Branches';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main
      style={{
        
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '0', // equivalent of pt-20
        margin: 0,
      }}
    >
      <Hero />
      <PastorSection data={pastorData} />
      <WordOfTheMonth />
      <Services />
      <MissionVision />
      <Rhapsody />
      <WhatsHappening />
      <LivesTransformed />
      <GetInTouch />
      <ScriptureChallenge />
      <Branches />
      <Footer />
    </main>
  );
}
