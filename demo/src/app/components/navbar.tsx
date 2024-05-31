import React from 'react'
import Link from "next/link";
import Image from 'next/image'
import Logo from './kiwicode_logo.png'

export default function Navbar() {
  return (
    <nav>
        <h1>Hello KiwiCode</h1>
        <Image
          src={Logo}
          width={44}
          height={44}
          alt="Picture of the author"
        />
        <Link href="/">Home</Link>
        <Link href="/tickets">Tickets</Link>
        <Link href="/news">News</Link>
    </nav>
  )
}
