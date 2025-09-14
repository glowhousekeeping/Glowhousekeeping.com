import LanguageSwitcher from "@/components/language-switcher"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
      <div className="desktop-menu">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <LanguageSwitcher />
          </li>
        </ul>
      </div>
      <div className="mobile-menu">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <a href="mailto:glowhousekeeping.org@gmail.com">Email Us</a>
          </li>
          <li>
            <LanguageSwitcher />
          </li>
        </ul>
      </div>
      <div className="contact-bar">
        <p>
          Contact us at <a href="mailto:glowhousekeeping.org@gmail.com">glowhousekeeping.org@gmail.com</a>
        </p>
      </div>
    </nav>
  )
}

export default Navbar
