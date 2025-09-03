'use client';
import Hero from '@/components/Hero';
import PastorWord from '@/components/PastorWord';
import WordOfTheMonth from '@/components/WordOfTheMonth';
import Services from '@/components/Services';
import MissionVision from '@/components/MissionVision';
import Rhapsody from '@/components/Rhapsody';
import WhatsHappening from '@/components/WhatsHappening';
import LivesTransformed from '@/components/LivesTransformed';
import GetInTouch from '@/components/GetInTouch';
import ScriptureChallenge from '@/components/ScriptureChallenge';
import Branches from '@/components/Branches';
import Footer from '@/components/Footer';

export default function page() {
  return (
    <main className="flex flex-col pt-20">
      <Hero />
      <PastorWord />
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
