"use client"
import React from 'react'

interface Archive {
  id: number
  title: string | null
  date: string | null
  url: string | null
  desc: string | null
  type: string | null
}

interface VideoArchiveGalleryProps {
      videoArchives : Archive[]
}

const VideoArchiveGallery = () => {

  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    const match = url.match(regExp)
    return (match && match[2].length === 11) ? match[2] : null
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Videos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
      </div>
    </div>
  )
}

export default VideoArchiveGallery