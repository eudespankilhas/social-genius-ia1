import { AudioAgentGroq } from "@/components/audio-agent-groq"
import { Header } from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"
import { PWAInstaller } from "./pwa"
import Image from "next/image"

export default function GroqPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <PWAInstaller />
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center mb-4">
              <Image src="/icon-512x512.png" alt="Audio Pank Logo" width={120} height={120} className="rounded-full" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-center text-white mb-6">
              AUDIO{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">PANK</span>
            </h1>
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Powered by Groq
              </div>
            </div>
            <p className="text-xl text-center text-blue-200 mb-12 max-w-2xl">
              Seu assistente de áudio inteligente com tecnologia avançada de IA Groq
            </p>
            <div className="hidden mb-6" id="install-button">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3v12"></path>
                  <path d="m8 11 4 4 4-4"></path>
                  <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"></path>
                </svg>
                Instalar Aplicativo
              </button>
            </div>
            <AudioAgentGroq />
          </div>
        </main>
      </div>
    </ThemeProvider>
  )
}
