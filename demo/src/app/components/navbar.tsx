import React from 'react'
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
        <h1>Nav bar</h1>
        <Link href="/">Home</Link>
        <Link href="/tickets">Tickets</Link>
    </nav>
  )
}
