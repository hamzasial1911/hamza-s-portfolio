"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download } from "lucide-react"
import { useRouter } from "next/navigation"
import Footer from "@/components/Footer"

export default function ResumePage() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

    // Google Drive file URL from environment variables
    const driveFileId = '10p3tP4kYxdIkQz1C9IcwzpRlzkfWGy0S'

    const viewLink = `https://drive.google.com/file/d/${driveFileId}/view`;
    const editLink = `https://drive.google.com/file/d/${driveFileId}/preview`;

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container py-8 flex-1">
        <div className="flex justify-between items-center mb-4">
          <Button
            variant="ghost"
            onClick={() => router.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <Button
            variant="outline"
            onClick={() => window.open(viewLink, "_blank")}
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>

        <div className="w-full h-[calc(100vh-12rem)] rounded-lg overflow-hidden bg-card">
          <iframe
            src={editLink}
            className="w-full h-full"
            title="Resume"
            allow="autoplay"
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}