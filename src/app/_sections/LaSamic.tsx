import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LuTarget, LuClipboardList, LuBellRing } from "react-icons/lu";

const ObjectifsMissions = () => {
  const sections = [
    {
      icon: <LuTarget className="w-8 h-8 text-primary" />,
      title: "Surveillance et prévention des maladies infectieuses",
      items: [
        "Diagnostic et suivi microbiologique des pathologies infectieuses",
        "Surveillance des infections émergentes ou ré-émergentes en collaboration avec les autorités de santé",
        "Sensibilisation sur les résistances antimicrobiennes",
        "Contribution à la surveillance de l'émergence de la résistance aux antimicrobiens",
        "Conseil diagnostic et thérapeutique dans le contexte de la lutte contre l'antibiorésistance",
        "Soutien à la recherche fondamentale et clinique"
      ]
    },
    {
      icon: <LuClipboardList className="w-8 h-8 text-primary" />,
      title: "Formation et éducation",
      items: [
        "Organisation de congrès internationaux et journées scientifiques",
        "Programmation de formations médicales continues",
        "Élaboration de guides et protocoles sur les bonnes pratiques",
        "Développement de recommandations pour le contrôle des infections"
      ]
    },
    {
      icon: <LuBellRing className="w-8 h-8 text-primary" />,
      title: "Sensibilisation et alerte",
      items: [
        "Alerte des autorités lors d'épidémies",
        "Diffusion d'informations au grand public sur les risques microbiologiques",
        "Réunion d'experts pour des approches intégrées des problèmes sanitaires"
      ]
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 mb-8">
        <p className="text-lg leading-relaxed mb-4">
          La société Algérienne de microbiologie clinique (SAMiC) est une société savante créée en 2008, réunissant médecins, pharmaciens microbiologistes et autres professionnels de santé du domaine public et privé.
        </p>
        <p className="text-lg leading-relaxed">
          La SAMiC joue un rôle crucial dans la santé publique en contribuant à la recherche, à l'éducation et à la diffusion des connaissances sur les microorganismes et leurs impacts sur la santé humaine, animale et environnementale selon le concept One Health.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center mb-4">
                {section.icon}
                <h3 className="text-xl font-semibold mt-4 text-center text-primary">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-2 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ObjectifsMissions;