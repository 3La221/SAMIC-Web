"use client"
import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, Eye } from "lucide-react"

interface Archive {
  id: number
  title: string | null
  date: string | null
  url: string | null
  desc: string | null
  type: string | null
}

interface ComPostersProps {
  posters: Archive[]
}

const ComPosters = () => {
  

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Composter Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
      </div>
    </div>
  )
}

export default ComPosters