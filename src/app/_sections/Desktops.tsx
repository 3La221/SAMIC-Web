import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LuUser2 } from "react-icons/lu";

const BureauMembers = () => {
  const members = [
    {
      position: "Présidente",
      name: "Pr. Wahiba Amhis",
      role: "Laboratoire de Microbiologie",
      location: "CHU Mustapha Bacha, Alger",
      isPrimary: true
    },
    {
      position: "1ère Vice présidente",
      name: "Pr. Chafia Bentchouala",
      role: "Laboratoire de microbiologie",
      location: "CHU de Constantine",
      isPrimary: true
    },
    {
      position: "2ème vice présidente",
      name: "Pr. Salima Bouzeghoub",
      role: "Cheffe de département de virologie",
      location: "Institut Pasteur d'Algérie, Annexe Sidi Fredj",
      isPrimary: true
    },
    {
      position: "Secrétaire général",
      name: "Dr. Lyes Bendali",
      role: "Laboratoire d'analyse privé",
      location: "Miliana",
      isPrimary: true
    },
    {
      position: "Secrétaire adjointe",
      name: "Pr. Sadjia Mahrane",
      role: "Laboratoire de bactériologie médicale",
      location: "Institut Pasteur d'Algérie",
      isPrimary: false
    },
    {
      position: "Trésorière",
      name: "Pr. Nabila Benamrouche",
      role: "Laboratoire des entérobactéries",
      location: "Institut Pasteur d'Algérie",
      isPrimary: false
    },
    {
      position: "Trésorière adjointe",
      name: "Pr. Hanifa Ziane",
      role: "Chef de service, Laboratoire central de biologie",
      location: "EHS El Hadi Flici, Alger",
      isPrimary: false
    },
    {
      position: "Membre suppléant",
      name: "Pr. Sonia Benammar",
      role: "Chef de service, Laboratoire central de biologie",
      location: "CAC, Batna",
      isPrimary: false
    },
    {
      position: "Membre suppléant",
      name: "Dr. Sonia Rezgui",
      role: "Cheffe d'unité de Microbiologie, Service de Biologie Clinique",
      location: "EHS Dr Maouche M. A (Ex. CNMS)",
      isPrimary: false
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <Card 
            key={index}
            className={`
              transform hover:-translate-y-1 transition-all duration-300
              ${member.isPrimary ? 'col-span-1 md:col-span-2 lg:col-span-1' : ''}
              ${member.isPrimary ? 'bg-gradient-to-br from-primary/5 to-secondary/5' : 'bg-white'}
            `}
          >
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center mb-4">
                {/* <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <LuUser2 className="w-10 h-10 text-primary" />
                </div> */}
                <div className="space-y-1">
                <p className="text-lg font-medium">{member.name}</p>
                  <h3 className={`font-semibold ${member.isPrimary ? 'text-lg text-primary' : 'text-base'}`}>
                    {member.position}
                  </h3>
                  
                </div>
              </div>
              <div className="space-y-2 text-center">
                <p className="text-gray-600">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.location}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BureauMembers;