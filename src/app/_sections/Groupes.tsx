import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FaBacterium, FaBug } from 'react-icons/fa';
import { MdOutlineScience } from 'react-icons/md';
import { TiZoom } from 'react-icons/ti';

const WorkGroups = () => {
  const groups = [
    {
      id: 3,
      name: 'Infections associées aux soins (IAS)- Prévention et contrôle de l infection (PCI)',
      image: '/assets/groups/group3.jpg',
      icon: <FaBug className='text-secondary text-3xl' />,
      members: [
        'Pr. Wahiba Amhis',
        'Pr. Nabila Benamrouche',
        'Dr. Sonia Rezgui'
      ]
    },
    {
      id: 1,
      name: 'Diagnostic bactériologique',
      image: '/assets/groups/group1.jpg',
      icon: <FaBacterium className='text-secondary text-3xl' />,
      members: [
        'Pr. Hanifa Ziane',
        'Pr. Sadjia Mahrane'
      ]
    },
    {
      id: 2,
      name: 'Résistance aux ATB',
      image: '/assets/groups/group2.jpg',
      icon: <MdOutlineScience className='text-secondary text-3xl' />,
      members: [
        'Pr. Chafia Bentchouala',
        'Pr. Sonia Benammar'
      ]
    },
    {
      id: 4,
      name: 'Diagnostic virologique - résistance aux antiviraux',
      image: '/assets/groups/group4.jpg',
      icon: <TiZoom className='text-secondary text-3xl' />,
      members: [
        'Pr. Salima Bouzeghoub',
        'Dr. Lyes Bendali'
      ]
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {groups.map((group) => (
          <Card key={group.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <img
                src={group.image}
                alt={group.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <div className="flex items-center gap-3">
                  <div className="bg-white/90 p-2 rounded-full">
                    {group.icon}
                  </div>
                  <h3 className="text-white font-semibold text-lg leading-tight">
                    {group.name}
                  </h3>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="space-y-2">
                {group.members.map((member, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                    <span>{member}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WorkGroups;