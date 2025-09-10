"use client"

import { useState, useEffect } from "react"
import { Globe, ChevronDown } from "lucide-react"

interface Language {
  code: string
  name: string
  flag: string
}

interface Translations {
  [key: string]: {
    [key: string]: string
  }
}

const languages: Language[] = [
  {
    code: "en",
    name: "English",
    flag: "🇺🇸",
  },
  {
    code: "nl",
    name: "Nederlands",
    flag: "🇳🇱",
  },
]

const translations: Translations = {
  en: {
    // Navigation
    home: "Home",
    contact: "Contact",
    blog: "Blog",
    services: "Services",
    about: "About",
    careers: "Careers",
    getQuote: "GET QUOTE",

    // Hero Section
    heroTitle: "Want Your Business To Shine With Professionalism?",
    heroSubtitle:
      "We provide exceptional commercial cleaning services in Venlo, Limburg tailored to satisfy businesses who strive for excellence - while focusing on what really matters.",
    heroSpecialization: "Specialized care for offices, retail stores, restaurants and professional facilities.",
    heroTagline: "Venlo's Leading Commercial Cleaning Service",
    heroServiceArea: "SERVING VENLO, LIMBURG AND SURROUNDING AREAS WITH PERSONALIZED CARE!",
    requestQuote: "Request Price Quote",
    whatsapp: "WhatsApp",
    bookAppointment: "Book Appointment",
    clientAssessment: "Client Assessment →",
    imageCaption: "We don't just clean — we care.",
    imageSubCaption: "Professional cleaning with a personal touch",

    // Services
    generalCleaning: "General Cleaning",
    generalCleaningDesc: "Complete office and commercial cleaning with professional standards",
    solarPanelCleaning: "Solar Panel Cleaning",
    solarPanelCleaningDesc: "Maximize energy efficiency with professional solar panel maintenance",
    windowCleaning: "Window Cleaning",
    windowCleaningDesc: "Crystal clear windows for enhanced natural light and beautiful views",
    drainCleaning: "Drain Cleaning",
    drainCleaningDesc: "Professional drain maintenance and blockage removal services",

    // Before & After Section
    transformationTitle: "Before & After: Real Transformations",
    transformationSubtitle: "We don't just clean — we elevate your space. See the difference for yourself.",
    officeTransformation: "💼 Office Transformation",
    officeTransformationDesc: "Complete office space cleaning with professional organization",
    kitchenCleaning: "🍳 Kitchen Cleaning",
    kitchenCleaningDesc: "From moving chaos to a pristine modern kitchen",
    bathroomCleaning: "🛁 Bathroom Cleaning",
    bathroomCleaningDesc: "A bathroom deep-clean that sparkles",
    sinkCleaning: "🚰 Sink Cleaning",
    sinkCleaningDesc: "Spotless sinks with a touch of Glow",
    readyForTransformation: "Ready for Your Own Transformation?",
    transformationCTA:
      "Experience the same dramatic results in your space. Our professional team is ready to transform your home or office with the same attention to detail you see above.",
    getYourQuote: "Get Your Quote",
    bookNow: "Book Now",

    // Why Choose Us Section
    whyChooseUs: "Why Choose Glow Housekeeping?",
    whyChooseUsSubtitle:
      "Discover what makes us the trusted choice for professional cleaning services across the Netherlands.",
    trustedCleaners: "Trusted Cleaners",
    trustedCleanersDesc: "Screened professionals with experience and reliability you can count on.",
    professionalResults: "Professional Results",
    professionalResultsDesc: "We deliver hotel-level sparkle and precision in every cleaning session.",
    affordableRates: "Affordable Rates",
    affordableRatesDesc: "Competitive pricing with no surprise fees - transparent and fair.",
    easyBooking: "Easy Booking",
    easyBookingDesc: "Book your service in minutes, stress-free through multiple channels.",
    flexiblePassionate: "Flexible & Passionate",
    flexiblePassionateDesc:
      "We care deeply about what we do and adapt to each client's unique needs - no cookie-cutter cleaning.",
    experienceGlowDifference: "Experience the Glow Difference Today",
    experienceGlowCTA:
      "Join hundreds of satisfied customers who trust us with their most important spaces. See why we're the preferred choice for professional cleaning in the Netherlands.",
    getStartedToday: "Get Started Today",
    learnMoreAboutUs: "Learn More About Us",

    // Testimonials Section
    clientLove: "Client Love",
    whatClientsSay: "What Our Clients Say",
    clientsSaySubtitle: "Words from the people we've had the joy to serve — real notes, real gratitude.",
    shareYourExperience: "Want to Share Your Experience?",
    shareExperienceCTA:
      "We'd love to hear from you! Your words and experiences help us grow and inspire others to experience the Glow difference.",
    shareYourStory: "Share Your Story",
    bookYourService: "Book Your Service",

    // CTA Section
    readyToExperience: "Ready to Experience the Glow Difference?",
    ctaSubtitle:
      "Join hundreds of satisfied customers across the Netherlands. Get your personalized quote today and see why we're the trusted choice for professional cleaning.",
    getFreeQuote: "Get Free Quote",
    contactWhatsApp: "Contact WhatsApp",

    // Common
    learnMore: "Learn More →",
    before: "Before",
    after: "After",
    transformation: "Transformation",
    ourProfessionalServices: "Our Professional Services",
    servicesSubtitle:
      "From general cleaning to specialized services, we provide comprehensive solutions for all your cleaning needs.",
  },
  nl: {
    // Navigation
    home: "Home",
    contact: "Contact",
    blog: "Blog",
    services: "Diensten",
    about: "Over Ons",
    careers: "Carrières",
    getQuote: "OFFERTE KRIJGEN",

    // Hero Section
    heroTitle: "Wilt u dat uw bedrijf straalt van professionaliteit?",
    heroSubtitle:
      "Wij bieden uitzonderlijke commerciële schoonmaakdiensten in Venlo, Limburg, op maat gemaakt voor bedrijven die streven naar excellentie - terwijl we ons richten op wat er echt toe doet.",
    heroSpecialization: "Gespecialiseerde zorg voor kantoren, winkels, restaurants en professionele faciliteiten.",
    heroTagline: "Venlo's Toonaangevende Commerciële Schoonmaakservice",
    heroServiceArea: "VENLO, LIMBURG EN OMGEVING BEDIENEN MET PERSOONLIJKE ZORG!",
    requestQuote: "Prijsofferte Aanvragen",
    whatsapp: "WhatsApp",
    bookAppointment: "Afspraak Maken",
    clientAssessment: "Klantbeoordeling →",
    imageCaption: "We maken niet alleen schoon — we geven om je.",
    imageSubCaption: "Professionele reiniging met een persoonlijke touch",

    // Services
    generalCleaning: "Algemene Reiniging",
    generalCleaningDesc: "Complete kantoor- en commerciële reiniging met professionele standaarden",
    solarPanelCleaning: "Zonnepanelen Reiniging",
    solarPanelCleaningDesc: "Maximaliseer energie-efficiëntie met professioneel zonnepaneel onderhoud",
    windowCleaning: "Ramen Wassen",
    windowCleaningDesc: "Kristalheldere ramen voor meer natuurlijk licht en prachtige uitzichten",
    drainCleaning: "Afvoer Reiniging",
    drainCleaningDesc: "Professioneel afvoeronderhoud en ontstoppingsdiensten",

    // Before & After Section
    transformationTitle: "Voor & Na: Echte Transformaties",
    transformationSubtitle:
      "We maken niet alleen schoon — we tillen uw ruimte naar een hoger niveau. Zie het verschil voor uzelf.",
    officeTransformation: "💼 Kantoor Transformatie",
    officeTransformationDesc: "Complete kantoorruimte reiniging met professionele organisatie",
    kitchenCleaning: "🍳 Keuken Reiniging",
    kitchenCleaningDesc: "Van verhuischaos naar een onberispelijke moderne keuken",
    bathroomCleaning: "🛁 Badkamer Reiniging",
    bathroomCleaningDesc: "Een badkamer diepreiniging die schittert",
    sinkCleaning: "🚰 Gootsteen Reiniging",
    sinkCleaningDesc: "Vlekkeloze gootstenen met een vleugje Glow",
    readyForTransformation: "Klaar voor Uw Eigen Transformatie?",
    transformationCTA:
      "Ervaar dezelfde dramatische resultaten in uw ruimte. Ons professionele team staat klaar om uw huis of kantoor te transformeren met dezelfde aandacht voor detail die u hierboven ziet.",
    getYourQuote: "Krijg Uw Offerte",
    bookNow: "Boek Nu",

    // Why Choose Us Section
    whyChooseUs: "Waarom Kiezen voor Glow Housekeeping?",
    whyChooseUsSubtitle:
      "Ontdek wat ons de vertrouwde keuze maakt voor professionele schoonmaakdiensten in heel Nederland.",
    trustedCleaners: "Vertrouwde Schoonmakers",
    trustedCleanersDesc: "Gescreende professionals met ervaring en betrouwbaarheid waar u op kunt rekenen.",
    professionalResults: "Professionele Resultaten",
    professionalResultsDesc: "We leveren hotel-niveau glans en precisie in elke schoonmaaksessie.",
    affordableRates: "Betaalbare Tarieven",
    affordableRatesDesc: "Concurrerende prijzen zonder verrassingen - transparant en eerlijk.",
    easyBooking: "Eenvoudig Boeken",
    easyBookingDesc: "Boek uw service in minuten, stressvrij via meerdere kanalen.",
    flexiblePassionate: "Flexibel & Gepassioneerd",
    flexiblePassionateDesc:
      "We geven diep om wat we doen en passen ons aan de unieke behoeften van elke klant aan - geen standaard schoonmaak.",
    experienceGlowDifference: "Ervaar Vandaag het Glow Verschil",
    experienceGlowCTA:
      "Sluit je aan bij honderden tevreden klanten die ons vertrouwen met hun belangrijkste ruimtes. Zie waarom we de voorkeurskeuze zijn voor professionele reiniging in Nederland.",
    getStartedToday: "Begin Vandaag",
    learnMoreAboutUs: "Leer Meer Over Ons",

    // Testimonials Section
    clientLove: "Klant Liefde",
    whatClientsSay: "Wat Onze Klanten Zeggen",
    clientsSaySubtitle:
      "Woorden van de mensen die we met vreugde hebben mogen bedienen — echte notities, echte dankbaarheid.",
    shareYourExperience: "Wilt U Uw Ervaring Delen?",
    shareExperienceCTA:
      "We horen graag van u! Uw woorden en ervaringen helpen ons groeien en inspireren anderen om het Glow verschil te ervaren.",
    shareYourStory: "Deel Uw Verhaal",
    bookYourService: "Boek Uw Service",

    // CTA Section
    readyToExperience: "Klaar om het Glow Verschil te Ervaren?",
    ctaSubtitle:
      "Sluit je aan bij honderden tevreden klanten in heel Nederland. Krijg vandaag uw persoonlijke offerte en zie waarom we de vertrouwde keuze zijn voor professionele reiniging.",
    getFreeQuote: "Gratis Offerte Krijgen",
    contactWhatsApp: "Contact WhatsApp",

    // Common
    learnMore: "Leer Meer →",
    before: "Voor",
    after: "Na",
    transformation: "Transformatie",
    ourProfessionalServices: "Onze Professionele Diensten",
    servicesSubtitle:
      "Van algemene reiniging tot gespecialiseerde diensten, wij bieden uitgebreide oplossingen voor al uw schoonmaakbehoeften.",
  },
}

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState<string>("en")

  useEffect(() => {
    // Check if we're on a language-specific route
    if (typeof window !== "undefined") {
      const path = window.location.pathname
      if (path.startsWith("/nl")) {
        setCurrentLanguage("nl")
      } else if (path.startsWith("/en")) {
        setCurrentLanguage("en")
      } else {
        // Check localStorage for saved preference
        const savedLanguage = localStorage.getItem("preferred-language")
        if (savedLanguage && (savedLanguage === "en" || savedLanguage === "nl")) {
          setCurrentLanguage(savedLanguage)
        }
      }
    }
  }, [])

  const handleLanguageChange = (languageCode: string) => {
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname

      // Check if we're on a language-specific route
      if (currentPath.startsWith("/en") || currentPath.startsWith("/nl")) {
        // We have separate language pages - redirect to the appropriate route
        if (languageCode === "en") {
          window.location.href = currentPath.replace(/^\/(nl|en)/, "/en")
        } else {
          window.location.href = currentPath.replace(/^\/(nl|en)/, "/nl")
        }
      } else {
        // We're using dynamic translation - update the page content
        setCurrentLanguage(languageCode)
        localStorage.setItem("preferred-language", languageCode)

        // Dispatch custom event to update page content
        window.dispatchEvent(
          new CustomEvent("languageChanged", {
            detail: { language: languageCode, translations: translations[languageCode] },
          }),
        )
      }
    }
    setIsOpen(false)
  }

  const getCurrentLanguage = () => {
    return languages.find((lang) => lang.code === currentLanguage) || languages[0]
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ease-out text-white/90 hover:text-white hover:bg-white/8"
        aria-label="Select language"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-cyan-400/0 to-teal-400/0 group-hover:from-blue-400/10 group-hover:via-cyan-400/10 group-hover:to-teal-400/10 rounded-xl transition-all duration-500"></div>
        <Globe className="w-4 h-4 relative z-10 transition-all duration-300 text-white/80 group-hover:text-cyan-200" />
        <span className="relative z-10 text-lg">{getCurrentLanguage().flag}</span>
        <ChevronDown
          className={`w-4 h-4 relative z-10 transition-all duration-300 text-white/80 group-hover:text-cyan-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Language Dropdown */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-xl shadow-2xl shadow-blue-500/10 rounded-2xl border border-white/20 overflow-hidden z-50 animate-in slide-in-from-top-2 duration-200">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white/50 to-teal-50/50 rounded-2xl"></div>
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`relative w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-teal-50/80 transition-all duration-300 group border-b border-gray-100/50 last:border-b-0 ${
                currentLanguage === language.code ? "bg-gradient-to-r from-blue-50/60 to-teal-50/60" : ""
              }`}
            >
              <span className="text-xl">{language.flag}</span>
              <span
                className={`text-sm font-medium transition-colors ${
                  currentLanguage === language.code
                    ? "text-blue-700 font-semibold"
                    : "text-gray-900 group-hover:text-blue-700"
                }`}
              >
                {language.name}
              </span>
              {currentLanguage === language.code && <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>}
            </button>
          ))}
        </div>
      )}

      {/* Backdrop for closing dropdown */}
      {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}></div>}
    </div>
  )
}

// Export translations for use in other components
export { translations }
