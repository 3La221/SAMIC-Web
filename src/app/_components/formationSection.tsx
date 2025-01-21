'use client'

import React from 'react'
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaMoneyBillWave, FaFileDownload } from 'react-icons/fa'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export default function FormationSect() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold text-center text-primary">
            Combattre la résistance par la connaissance
          </CardTitle>
          <CardDescription className="text-center mt-2">
            Formation médicale continue organisée par SAMiC, BD-DIMED et SADID
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <FaCalendarAlt className="text-primary" />
              <span>23 Novembre 2024</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground mt-2 md:mt-0">
              <FaMapMarkerAlt className="text-primary" />
              <span>Auditorium de l'Institut Pasteur d'Alger, Dely Ibrahim</span>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <p>
              La société Algérienne de Microbiologie SAMiC en partenariat avec les sociétés BD-DIMED et SADID organisent une formation médicale continue.
            </p>
            <p>
              Un quiz sera organisé à la fin de la formation, des équipes de résidents coachées par un assistant testeront leurs connaissances, l'équipe gagnante remportera un prix.
            </p>
            <p>
              Cette formation est ouverte à toutes et à tous : Microbiologistes, Biologistes de Laboratoire Médicaux, Infectiologues et tous les Cliniciens intéressés par la problématique.
            </p>
            <p className="font-semibold">On vous attend nombreux !!!</p>
          </div>

          <Separator />

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <FaUsers className="text-primary" />
              <span className="font-semibold">Inscription obligatoire - Places limitées</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaMoneyBillWave className="text-primary" />
              <span>Frais d'inscription :</span>
            </div>
            <ul className="list-disc list-inside pl-6 space-y-1">
              <li>Adhérent : 1.000 DA</li>
              <li>Non Adhérent : 2.000 DA</li>
            </ul>
          </div>

          <Separator />

          <div className="space-y-2 font-semibold">
            <h3 className="font-semibold">Modalité de paiement : Virement Bancaire</h3>
            <p>Nom : Société Algérienne de Microbiologie Clinique</p>
            <p>Adresse : Service de Microbiologie Médicale du CHU Mustapha</p>
            <p>Code IBAN : 001 00610 0200000658 20</p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-4">
        <Link href="/formulaire.pdf" download>
          <Button className="w-full sm:w-auto">
            <FaFileDownload className="mr-2" />
            Télécharger le formulaire d'inscription
          </Button>
        </Link>
          <p className="text-sm text-muted-foreground text-center">
            Veuillez remplir le formulaire d'inscription et l'envoyer avec le reçu de virement à l'adresse suivante : contact@samic.dz
          </p>
          <Link href="/programme.pdf" download>
          <Button className="w-full sm:w-auto">
            <FaFileDownload className="mr-2" />
            Télécharger le programme de la formation
          </Button>
        </Link>
        </CardFooter>
        
      </Card>
    </div>
  )
}