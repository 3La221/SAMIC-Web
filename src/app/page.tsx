"use client"
import Navbar from "./_components/navbar";
import TopBar from "./_components/topbar";
import Hero from "./_sections/Hero";
import LaSamic from "./_sections/LaSamic";
import Calendrier from "./_sections/Calendrier";
import Actualites from "./_sections/Actualites";
import Groupes from "./_sections/Groupes";
import Archive from "./_sections/Archive";
import Footer from "./_sections/Footer";

import Contact from "./_sections/Contact";
import SubSectionTitle from "./_components/subSectionTitle";
import ObjectifsMissions from "./_sections/LaSamic";
import WorkGroups from "./_sections/Groupes";
import BureauMembers from "./_sections/Desktops";

export default  function Home() {
 
  
  return (
    <div className="flex flex-col bg-background">
      <TopBar />
      <hr className="border-t border-dashed border-muted" />
      <div className="sticky top-0 z-50 bg-background">
        <Navbar/>
      </div>

      <Hero />

      <div id="samic" className=" pt-12 " >
      <SubSectionTitle title={"Objectifs et Missions"} />
      <ObjectifsMissions />
      </div>
      
      <div id="calendrier" className=" pt-12 " >
      
      <Calendrier/>
      </div>

      {/* <div id="actualites" className=" pt-12 " >
      <Actualites  />
      </div> */}

      <div id="groupes" className=" pt-12 " >
      <SubSectionTitle title="Groupes de travail" />
      <WorkGroups/>
      </div>

     
     <div id="desktops" className="pt-12" >
     <SubSectionTitle title="Composition du bureau" />
     <BureauMembers/>
     </div>
      

      <Archive />

      <div id="contact" className=" pt-12 "  >
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
}
