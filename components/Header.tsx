'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
        <a href="/" className="-m-1.5 p-1.5 flex items-center">
          <img alt="Halluminate Logo" src="/assets/halluminatelogo.svg" className="px-3 py-2 h-12 rounded-xl" />
        </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Home
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Documentation
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Pricing
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Blogs
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Contact
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="https://app.halluminate.ai/login" target="_blank" className="text-md font-semibold leading-6 text-gray-900 border border-black rounded-xl px-4 py-2">Log In</a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="flex flex-col items-center">
                <a href="/" className="font-medium block py-3 text-lg text-gray-900 hover:text-gray-300">Home</a>
                <a href="https://docs.halluminate.ai" className="font-medium block py-3 text-lg text-gray-900 hover:text-gray-300">Documentation</a>
                <a href="/pricing" className="font-medium block py-3 text-lg text-gray-900 hover:text-gray-300">Pricing</a>
                <a href="/blogs" className="font-medium block py-3 text-lg text-gray-900 hover:text-gray-300">Blogs</a>
                <a href="/contact" className="font-medium block py-3 text-lg text-gray-900 hover:text-gray-300">Contact</a></div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
