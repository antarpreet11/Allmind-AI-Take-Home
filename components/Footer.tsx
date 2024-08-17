import React from 'react'

const Footer = () => {
  return (
    <>
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                <div
                className="rounded-xl relative isolate overflow-hidden px-6 py-24 text-center shadow-2xl sm:px-16"
                style={{
                    background: 'linear-gradient(45deg, var(--color-primary) 0%, var(--color-secondary2) 100%)',
                }}
                >
                <h2
                    className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl"
                    style={{ color: 'white' }}
                >
                    Build safer AI agents faster
                </h2>
                <div className="mt-6">
                    <button className="py-2 px-4 rounded-xl tryNow mb-16 lg:mb-8 md:text-lg lg:text-xl mb-8">
                    Try now for free
                    </button>
                </div>
                </div>
            </div>
        </div>
        <footer className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                <div className="mt-[2%] md:order-1 md:mt-0">
                    <p className="text-center text-xs leading-5 text-gray-500">
                    © 2024 Halluminate, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer