'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"


interface Archive {
  id: number
  title: string | null
  date: string | null
  url: string | null
  desc: string | null
  type: string | null
}

interface ImageProps {
  images: Archive[]
}

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<Archive | null>(null)


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Photos</h1>
    

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl w-full h-auto aspect-auto">
          {selectedImage && (
            <div className="relative w-full h-full">
              <Image
                src={selectedImage.url || ''}
                alt={selectedImage.title || 'Selected image'}
                layout="responsive"
                width={800}
                height={600}
                objectFit="contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 p-1 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-colors duration-200"
                aria-label="Close image view"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ImageGallery