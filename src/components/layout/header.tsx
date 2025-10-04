import { useState, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ui/theme-provider";
import { programs } from "@/lib/data";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProgramsDropdownOpen, setIsProgramsDropdownOpen] = useState(false);
  const [isJoinUsDropdownOpen, setIsJoinUsDropdownOpen] = useState(false);
  const [isMediaDropdownOpen, setIsMediaDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  
  // Mobile dropdown states
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [mobileMediaOpen, setMobileMediaOpen] = useState(false);
  const [mobileJoinUsOpen, setMobileJoinUsOpen] = useState(false);
  
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  
  // Timeout refs for delayed dropdown closing
  const programsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const joinUsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const mediaTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about", hasDropdown: true, dropdownType: "about" },
    { name: "Programs", href: "/programs", hasDropdown: true, dropdownType: "programs" },
    // { name: "Events", href: "/events" },
    { name: "Media", href: "/gallery", hasDropdown: true, dropdownType: "media" },
    // { name: "Join Us", href: "/join-us", hasDropdown: true, dropdownType: "joinus" },
    { name: "Contact", href: "/contact" },
  ];

  const joinUsItems = [
    { name: "Become a Volunteer", href: "/volunteer", description: "Join our team of dedicated volunteers making a difference" },
    { name: "Become a Partner", href: "/partner", description: "Partner with us to amplify our impact across communities" },
    { name: "Donate", href: "/donate", description: "Support our mission with a financial contribution" }
  ];

  const aboutItems = [
    { name: "About Us", href: "/about", description: "Learn about our mission, vision, and history" },
    { name: "Executive Team", href: "/executives", description: "Meet our executive leadership team" },
    { name: "Board of Directors", href: "/board", description: "Meet our distinguished board members" },
    { name: "Advisory Council", href: "/advisory-council", description: "Meet our strategic advisors and experts" },
    { name: "Organogram", href: "/organogram", description: "View our organizational structure and governance" }
  ];

  const mediaItems = [
    { name: "Gallery", href: "/gallery", description: "View photos and videos from our programs and events" },
    { name: "News & Articles", href: "/news", description: "Read the latest updates and stories from our foundation" },
    { name: "Success Stories", href: "/success-stories", description: "Read inspiring stories of transformation and empowerment" }
  ];

  const isActive = (href: string) => {
    return location === href || (href !== "/" && location.startsWith(href));
  };

  const handleDropdownEnter = (type: string) => {
    if (type === "programs") {
      if (programsTimeoutRef.current) {
        clearTimeout(programsTimeoutRef.current);
        programsTimeoutRef.current = null;
      }
      setIsProgramsDropdownOpen(true);
    } else if (type === "joinus") {
      if (joinUsTimeoutRef.current) {
        clearTimeout(joinUsTimeoutRef.current);
        joinUsTimeoutRef.current = null;
      }
      setIsJoinUsDropdownOpen(true);
    } else if (type === "media") {
      if (mediaTimeoutRef.current) {
        clearTimeout(mediaTimeoutRef.current);
        mediaTimeoutRef.current = null;
      }
      setIsMediaDropdownOpen(true);
    } else if (type === "about") {
      if (aboutTimeoutRef.current) {
        clearTimeout(aboutTimeoutRef.current);
        aboutTimeoutRef.current = null;
      }
      setIsAboutDropdownOpen(true);
    }
  };

  const handleDropdownLeave = (type: string) => {
    if (type === "programs") {
      programsTimeoutRef.current = setTimeout(() => {
        setIsProgramsDropdownOpen(false);
      }, 150);
    } else if (type === "joinus") {
      joinUsTimeoutRef.current = setTimeout(() => {
        setIsJoinUsDropdownOpen(false);
      }, 150);
    } else if (type === "media") {
      mediaTimeoutRef.current = setTimeout(() => {
        setIsMediaDropdownOpen(false);
      }, 150);
    } else if (type === "about") {
      aboutTimeoutRef.current = setTimeout(() => {
        setIsAboutDropdownOpen(false);
      }, 150);
    }
  };

  return (
    <nav className="bg-white h-35 py-4 dark:bg-gray-800 shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center h-auto">
            <div className="flex-shrink-0">
               <div className="w-[17vw] sm:w-[5vw]  bg-white from-primary to-primary/80 rounded-lg flex items-center justify-center">
                {/* <span className="text-white font-bold text-lg">MF</span> */}
                <img src="https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fmeta%2Fmol.jpeg?alt=media&token=660197e8-f1bd-46ad-9251-07c4330cca26" className="rounded" />
              </div>
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">MOLEX Foundation</h1>
              <p className="text-sm text-gray-600 dark:text-gray-300">Africa</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                item.hasDropdown ? (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => handleDropdownEnter(item.dropdownType || "")}
                    onMouseLeave={() => handleDropdownLeave(item.dropdownType || "")}
                  >
                    <Link
                      href={item.href}
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center ${
                        isActive(item.href)
                          ? "text-primary dark:text-primary"
                          : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Link>
                    
                    {/* About Dropdown */}
                    {item.dropdownType === "about" && isAboutDropdownOpen && (
                      <div 
                        className="absolute left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 z-50"
                        onMouseEnter={() => handleDropdownEnter("about")}
                        onMouseLeave={() => handleDropdownLeave("about")}
                      >
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">About Our Foundation</h3>
                          <div className="space-y-2">
                            {aboutItems.map((aboutItem) => (
                              <Link
                                key={aboutItem.href}
                                href={aboutItem.href}
                                className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                              >
                                <div className="font-medium text-gray-900 dark:text-white text-sm">
                                  {aboutItem.name}
                                </div>
                                <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                                  {aboutItem.description}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Programs Dropdown */}
                    {item.dropdownType === "programs" && isProgramsDropdownOpen && (
                      <div 
                        className="absolute left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 z-50"
                        onMouseEnter={() => handleDropdownEnter("programs")}
                        onMouseLeave={() => handleDropdownLeave("programs")}
                      >
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Our Programs</h3>
                          <div className="space-y-2">
                            {programs.map((program) => (
                              <Link
                                key={program.id}
                                href={`/programs/${program.id}`}
                                className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                              >
                                <div className="font-medium text-gray-900 dark:text-white text-sm">
                                  {program.title}
                                </div>
                                <div className="text-xs text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">
                                  {program.description}
                                </div>
                              </Link>
                            ))}
                            <div className="pt-2 border-t dark:border-gray-600">
                              <Link
                                href="/programs"
                                className="block p-2 text-center text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200"
                              >
                                View All Programs →
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Media Dropdown */}
                    {item.dropdownType === "media" && isMediaDropdownOpen && (
                      <div 
                        className="absolute left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 z-50"
                        onMouseEnter={() => handleDropdownEnter("media")}
                        onMouseLeave={() => handleDropdownLeave("media")}
                      >
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Media & Stories</h3>
                          <div className="space-y-2">
                            {mediaItems.map((mediaItem) => (
                              <Link
                                key={mediaItem.href}
                                href={mediaItem.href}
                                className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                              >
                                <div className="font-medium text-gray-900 dark:text-white text-sm">
                                  {mediaItem.name}
                                </div>
                                <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                                  {mediaItem.description}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Join Us Dropdown */}
                    {item.dropdownType === "joinus" && isJoinUsDropdownOpen && (
                      <div 
                        className="absolute left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 z-50"
                        onMouseEnter={() => handleDropdownEnter("joinus")}
                        onMouseLeave={() => handleDropdownLeave("joinus")}
                      >
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Join Our Mission</h3>
                          <div className="space-y-2">
                            {joinUsItems.map((joinItem) => (
                              <Link
                                key={joinItem.href}
                                href={joinItem.href}
                                className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                              >
                                <div className="font-medium text-gray-900 dark:text-white text-sm">
                                  {joinItem.name}
                                </div>
                                <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                                  {joinItem.description}
                                </div>
                              </Link>
                            ))}
                            <div className="pt-2 border-t dark:border-gray-600">
                              <Link
                                href="/join-us"
                                className="block p-2 text-center text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200"
                              >
                                View All Options →
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? "text-primary dark:text-primary"
                        : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Dark Mode Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-800 border-t dark:border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              item.hasDropdown ? (
                <div key={item.name}>
                  <button
                    onClick={() => {
                      if (item.dropdownType === "about") setMobileAboutOpen(!mobileAboutOpen);
                      if (item.dropdownType === "programs") setMobileProgramsOpen(!mobileProgramsOpen);
                      if (item.dropdownType === "media") setMobileMediaOpen(!mobileMediaOpen);
                      if (item.dropdownType === "joinus") setMobileJoinUsOpen(!mobileJoinUsOpen);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-base font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? "text-primary dark:text-primary"
                        : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown 
                      className={`h-4 w-4 transition-transform duration-200 ${
                        (item.dropdownType === "about" && mobileAboutOpen) ||
                        (item.dropdownType === "programs" && mobileProgramsOpen) ||
                        (item.dropdownType === "media" && mobileMediaOpen) ||
                        (item.dropdownType === "joinus" && mobileJoinUsOpen)
                          ? "transform rotate-180" 
                          : ""
                      }`} 
                    />
                  </button>
                  
                  {/* Collapsible submenu */}
                  <div 
                    className={`ml-4 space-y-1 overflow-hidden transition-all duration-200 ${
                      (item.dropdownType === "about" && mobileAboutOpen) ||
                      (item.dropdownType === "programs" && mobileProgramsOpen) ||
                      (item.dropdownType === "media" && mobileMediaOpen) ||
                      (item.dropdownType === "joinus" && mobileJoinUsOpen)
                        ? "max-h-96 opacity-100" 
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.dropdownType === "about" && aboutItems.map((aboutItem) => (
                      <Link
                        key={aboutItem.href}
                        href={aboutItem.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                      >
                        {aboutItem.name}
                      </Link>
                    ))}
                    {item.dropdownType === "programs" && programs.map((program) => (
                      <Link
                        key={program.id}
                        href={`/programs/${program.id}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                      >
                        {program.title}
                      </Link>
                    ))}
                    {item.dropdownType === "media" && mediaItems.map((mediaItem) => (
                      <Link
                        key={mediaItem.href}
                        href={mediaItem.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                      >
                        {mediaItem.name}
                      </Link>
                    ))}
                    {item.dropdownType === "joinus" && joinUsItems.map((joinItem) => (
                      <Link
                        key={joinItem.href}
                        href={joinItem.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                      >
                        {joinItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-primary dark:text-primary"
                      : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
