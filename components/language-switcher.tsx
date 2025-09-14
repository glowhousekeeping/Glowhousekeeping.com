"use client"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronDown, Globe } from "lucide-react"
import { languages, languageFlags, locales, type Locale } from "@/lib/i18n"
import { useTranslation } from "@/hooks/use-translation"

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

    // About Page
    aboutTitle: "About Glow Housekeeping",
    aboutSubtitle: "Your trusted partner in professional cleaning services",
    ourStory: "Our Story",
    ourMission: "Our Mission",
    ourValues: "Our Values",
    meetTheTeam: "Meet The Team",

    // Contact Page
    contactTitle: "Contact Us",
    contactSubtitle: "Get in touch with our professional cleaning team",
    getInTouch: "Get In Touch",
    contactInfo: "Contact Information",
    businessHours: "Business Hours",

    // Blog Page
    blogTitle: "Cleaning Tips & Insights",
    blogSubtitle: "Expert advice and industry insights from our professional cleaning team",
    readMore: "Read More",

    // Careers Page
    careersTitle: "Join Our Team",
    careersSubtitle: "Build your career with Glow Housekeeping",
    currentOpenings: "Current Openings",
    applyNow: "Apply Now",
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

    // About Page
    aboutTitle: "Over Glow Housekeeping",
    aboutSubtitle: "Uw vertrouwde partner in professionele schoonmaakdiensten",
    ourStory: "Ons Verhaal",
    ourMission: "Onze Missie",
    ourValues: "Onze Waarden",
    meetTheTeam: "Ontmoet Het Team",

    // Contact Page
    contactTitle: "Contact Opnemen",
    contactSubtitle: "Neem contact op met ons professionele schoonmaakteam",
    getInTouch: "Neem Contact Op",
    contactInfo: "Contactinformatie",
    businessHours: "Openingstijden",

    // Blog Page
    blogTitle: "Schoonmaaktips & Inzichten",
    blogSubtitle: "Deskundig advies en branche-inzichten van ons professionele schoonmaakteam",
    readMore: "Lees Meer",

    // Careers Page
    careersTitle: "Word Lid Van Ons Team",
    careersSubtitle: "Bouw uw carrière met Glow Housekeeping",
    currentOpenings: "Huidige Vacatures",
    applyNow: "Solliciteer Nu",
  },
  fy: {
    // Navigation
    home: "Home",
    contact: "Kontakt",
    blog: "Blog",
    services: "Tsjinsten",
    about: "Oer Ús",
    careers: "Karriêres",
    getQuote: "OFFERTE KRIJE",

    // Hero Section
    heroTitle: "Wolsto dat jo bedriuw strielt fan professionaliteit?",
    heroSubtitle:
      "Wy biede útsûnderlike kommersjele skjinmaktsjinsten yn Venlo, Limburg op maat makke foar bedriuwen dy't stribje nei eksellinsje - wylst wy ús rjochtsje op wat der werklik ta docht.",
    heroSpecialization: "Spesjalisearre soarch foar kantoaren, winkels, restaurants en profesjonele fasiliteiten.",
    heroTagline: "Venlo's Liedende Kommersjele Skjinmaktsjinst",
    heroServiceArea: "VENLO, LIMBURG EN OMJOUWING TSJINJE MEI PERSOANLIKE SOARCH!",
    requestQuote: "Priisofferte Freegje",
    whatsapp: "WhatsApp",
    bookAppointment: "Ôfspraak Meitsje",
    clientAssessment: "Klantbeoardieling →",
    imageCaption: "Wy meitsje net allinne skjin — wy jaan om jo.",
    imageSubCaption: "Profesjonele reiniging mei in persoanlike oanpak",

    // Services
    generalCleaning: "Algemiene Reiniging",
    generalCleaningDesc: "Folsleine kantoor- en kommersjele reiniging mei profesjonele standerts",
    solarPanelCleaning: "Sinnepanielen Reiniging",
    solarPanelCleaningDesc: "Maksimalisearje enerzjy-effisjinsje mei profesjoneel sinnepaniel ûnderhâld",
    windowCleaning: "Ruten Waskjen",
    windowCleaningDesc: "Kristalheldere ruten foar mear natuerlik ljocht en prachtige útsichten",
    drainCleaning: "Ôfwetter Reiniging",
    drainCleaningDesc: "Profesjoneel ôfwetterûnderhâld en ûntstoppingstsjinsten",

    // Before & After Section
    transformationTitle: "Foar & Nei: Echte Transformaasjes",
    transformationSubtitle:
      "Wy meitsje net allinne skjin — wy heffe jo romte nei in heger nivo. Sjoch it ferskil foar josels.",
    officeTransformation: "💼 Kantoor Transformaasje",
    officeTransformationDesc: "Folsleine kantoorromte reiniging mei profesjonele organisaasje",
    kitchenCleaning: "🍳 Keuken Reiniging",
    kitchenCleaningDesc: "Fan ferhuischaos nei in ûnberispelike moderne keuken",
    bathroomCleaning: "🛁 Badkamer Reiniging",
    bathroomCleaningDesc: "In badkamer djipte-reiniging dy't skitteret",
    sinkCleaning: "🚰 Spoelbak Reiniging",
    sinkCleaningDesc: "Flekleaze spoelbakken mei in fleugje Glow",
    readyForTransformation: "Klear foar Jo Eigen Transformaasje?",
    transformationCTA:
      "Ûnderfyn deselde dramatyske resultaten yn jo romte. Us profesjonele team stiet klear om jo hûs of kantoor te transformearjen mei deselde oandacht foar detail dy't jo hjirboppe sjogge.",
    getYourQuote: "Krij Jo Offerte",
    bookNow: "Boekje No",

    // Why Choose Us Section
    whyChooseUs: "Wêrom Kieze foar Glow Housekeeping?",
    whyChooseUsSubtitle: "Untdek wat ús de fertrouwde kar makket foar profesjonele skjinmaktsjinsten yn hiel Nederlân.",
    trustedCleaners: "Fertrouwde Skjinmakers",
    trustedCleanersDesc: "Skreende profesjonals mei ûnderfining en betrouberens wêrop jo rekkenje kinne.",
    professionalResults: "Profesjonele Resultaten",
    professionalResultsDesc: "Wy leverje hotel-nivo glâns en presyzje yn elke skjinmaksesje.",
    affordableRates: "Betealbere Tarieven",
    affordableRatesDesc: "Konkurrearjende prizen sûnder ferraskings - transparant en earlik.",
    easyBooking: "Ienfâldich Boekjen",
    easyBookingDesc: "Boekje jo tsjinst yn minuten, stressfij fia meardere kanalen.",
    flexiblePassionate: "Fleksibel & Passy",
    flexiblePassionateDesc:
      "Wy jaan djip om wat wy dogge en passe ús oan de unike behoeften fan elke klant oan - gjin standert skjinmaak.",
    experienceGlowDifference: "Ûnderfyn Hjoed it Glow Ferskil",
    experienceGlowCTA:
      "Slút jo oan by hûnderden tefreden klanten dy't ús fertrouwe mei har wichtichste romtes. Sjoch wêrom wy de foarkarkar binne foar profesjonele reiniging yn Nederlân.",
    getStartedToday: "Begjin Hjoed",
    learnMoreAboutUs: "Learje Mear Oer Ús",

    // Testimonials Section
    clientLove: "Klant Leafde",
    whatClientsSay: "Wat Us Klanten Sizze",
    clientsSaySubtitle: "Wurden fan de minsken dy't wy mei freugde tsjinje mochten — echte notysjes, echte dankberens.",
    shareYourExperience: "Wolsto Jo Ûnderfining Diele?",
    shareExperienceCTA:
      "Wy hearre graach fan jo! Jo wurden en ûnderfinings helpe ús groeie en ynspirearje oaren om it Glow ferskil te ûnderfinen.",
    shareYourStory: "Diel Jo Ferhaal",
    bookYourService: "Boekje Jo Tsjinst",

    // CTA Section
    readyToExperience: "Klear om it Glow Ferskil te Ûnderfinen?",
    ctaSubtitle:
      "Slút jo oan by hûnderden tefreden klanten yn hiel Nederlân. Krij hjoed jo persoanlike offerte en sjoch wêrom wy de fertrouwde kar binne foar profesjonele reiniging.",
    getFreeQuote: "Fergees Offerte Krije",
    contactWhatsApp: "Kontakt WhatsApp",

    // Common
    learnMore: "Learje Mear →",
    before: "Foar",
    after: "Nei",
    transformation: "Transformaasje",
    ourProfessionalServices: "Us Profesjonele Tsjinsten",
    servicesSubtitle:
      "Fan algemiene reiniging oant spesjalisearre tsjinsten, wy biede wiidweidige oplossings foar al jo skjinmakbehoeften.",

    // About Page
    aboutTitle: "Oer Glow Housekeeping",
    aboutSubtitle: "Jo fertrouwde partner yn profesjonele skjinmaktsjinsten",
    ourStory: "Us Ferhaal",
    ourMission: "Us Missy",
    ourValues: "Us Wearden",
    meetTheTeam: "Moetsje It Team",

    // Contact Page
    contactTitle: "Kontakt Opnimme",
    contactSubtitle: "Nim kontakt op mei us profesjonele skjinmakteam",
    getInTouch: "Nim Kontakt Op",
    contactInfo: "Kontaktynformaasje",
    businessHours: "Iepeningstiden",

    // Blog Page
    blogTitle: "Skjinmaktips & Ynsjoggen",
    blogSubtitle: "Saakkundich advys en brânsjeinsjoggen fan us profesjonele skjinmakteam",
    readMore: "Lês Mear",

    // Careers Page
    careersTitle: "Wurde Lid Fan Us Team",
    careersSubtitle: "Bou jo karriêre mei Glow Housekeeping",
    currentOpenings: "Aktuele Fakatures",
    applyNow: "Sollisitearje No",
  },
}

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const { locale } = useTranslation()

  const switchLanguage = (newLocale: Locale) => {
    const segments = pathname.split("/")
    segments[1] = newLocale
    const newPath = segments.join("/")
    router.push(newPath)
    setIsOpen(false)
  }

  const currentLanguage = languages[locale]
  const currentFlag = languageFlags[locale]

  return (
    <div className="relative">
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
      >
        <Globe className="w-4 h-4" />
        <span className="text-lg">{currentFlag}</span>
        <span className="hidden sm:inline">{currentLanguage}</span>
        <ChevronDown className="w-4 h-4" />
      </Button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20">
            {locales.map((lang) => (
              <button
                key={lang}
                onClick={() => switchLanguage(lang)}
                className={`w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-gray-50 transition-colors ${
                  locale === lang ? "bg-blue-50 text-blue-600" : "text-gray-700"
                }`}
              >
                <span className="text-lg">{languageFlags[lang]}</span>
                <span className="font-medium">{languages[lang]}</span>
                {locale === lang && <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full" />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

// Export translations for use in other components
export { translations }
