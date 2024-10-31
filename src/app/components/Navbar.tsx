'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import Link from 'next/link'
import Image from 'next/image'

function MobileMenuButton({ onClick } : {
    onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
      aria-label="Open main menu"
    >
      <Bars3Icon className="h-6 w-6" />
    </button>
  )
}

function MobileMenu({ open, onClose }: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={open} onClose={onClose} className="lg:hidden">
      <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Link href="/" aria-label="Your Company" className="-m-1.5 p-1.5">
            <Image
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company Logo"
              className="h-8 w-auto"
              width={100}
              height={100}
            />
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            aria-label="Close menu"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="mt-16 space-y-5">
          <Link href="/products" className="block py-2 text-base font-semibold text-gray-900 hover:bg-gray-50" onClick={onClose}>
            Products
          </Link>
          <Link href="/about" className="block py-2 text-base font-semibold text-gray-900 hover:bg-gray-50" onClick={onClose}>
            About us
          </Link>
          <Link href="/contact" className="block py-2 text-base font-semibold text-gray-900 hover:bg-gray-50" onClick={onClose}>
            Contact us
          </Link>
          <Link href="/login" className="block py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50" onClick={onClose}>
            Log in
          </Link>
        </div>
      </DialogPanel>
    </Dialog>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5" aria-label="Home">
            <Image
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company Logo"
              className="h-8 w-auto"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <MobileMenuButton onClick={() => setMobileMenuOpen(true)} />
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link href="/products" className="text-md font-semibold text-gray-900">
            Products
          </Link>
          <Link href="/about" className="text-md font-semibold text-gray-900">
            About us
          </Link>
          <Link href="/contact" className="text-mdm font-semibold text-gray-900">
            Contact us
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/login" className="text-mds font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  )
}
