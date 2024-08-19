'use client'

import React from 'react'
import Header from './Header'

const Hero = () => {
  return (

  <div className="landing-page-container relative overflow-hidden">
    <div className="lightbulb-background-wrapper absolute inset-0">
      <div className="dot-pattern absolute top-0 left-0 w-full h-full"></div>
      <div className="lightbulb-background absolute top-0 right-0 w-full h-full flex justify-end items-start">
        <div className="lightbulb w-[50%] md:w-[30%] lg:w-[30%] xl:w-[20%] h-auto">
          <img src="/assets/BackgroundLightbulb.svg" alt="Lightbulb" className="w-full h-auto" />
        </div>
      </div>
    </div>
    <div className="content relative z-10">
      <Header></Header>
      <main className="min-h-screen flex flex-col">
        <div className="flex flex-col mt-[10%] mx-4 md:ml-[15%]">
          <div className="mb-2 rounded-full text-sm whitespace-nowrap">
            <div className="cursor-pointer gradient group relative flex max-w-fit flex-row rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40">
            <a href='https://www.linkedin.com/feed/update/urn:li:activity:7229647968499347458/' target='_blank' rel='noopener noreferrer'>
              <div
                className="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] p-[1px] rounded-2xl"
                style={{ maskComposite: 'subtract', mask: 'linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)' }}
              />
                <span role="img" aria-label="Party Popper">
                  Announcement: Halluminate Web App Launch →
                </span>
              </a>
            </div>
          </div>
          <div>
            <p className="md:w-[50%] text-5xl md:text-5xl lg:text-6xl xl:text-7xl mb-8 mt-[2%]">
              <span className="highlight font-bold md:extrabold special-blue">Custom</span> testing
              for AI agents
            </p>
            <p className="text-lg md:text-2xl lg:text-xl w-[88%] md:w-[50%] lg:w-[36%] xl:w-[40%] mb-8 leading-tight">
              Create, finetune, and deploy application-specific evaluation models to test your AI agents.
            </p>
            <div className="flex flex-col md:flex-row gap-4 mb-16 lg:mb-8">
              <button className="py-2 px-4 rounded-xl tryNow md:text-lg lg:text-xl flex items-center justify-center group transition-all duration-300 ease-in-out w-full md:w-auto">
                <span className="flex items-center">
                  Try now for free
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">
                    →
                  </span>
                </span>
              </button>
              <button className="py-2 px-4 rounded-xl md:text-lg lg:text-xl border border-current text-black hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors duration-300 w-full md:w-auto" style={{ backgroundColor: 'white' }}>
                Chat with us
              </button>
            </div>
          </div>
        </div>
        <p className="text-sm lg:text-base mt-[5%] companiesText text-center">
          Trusted by Developers
        </p>
        <div className="flex justify-center items-center" style={{ height: '12vh' }}>
          <div className="w-[50%]">
            <div className="looper">
              <div className="looper__innerList" data-animate="true">
                <div className="looper__listInstance" style={{ animationDuration: '40s', animationDirection: 'reverse' }}>
                  {['stripe', 'Harvey', 'Robinhood', 'KPMG', 'SpikeyAI', 'Oxbridge', 'arkifi'].map((company, index) => (
                    <div key={index} className="flex items-center justify-center h-10">
                      <img src={`/assets/${company}.png`} alt={company} className="max-w-full max-h-full object-contain grayscale mx-8" />
                    </div>
                  ))}
                </div>
                <div className="looper__listInstance" style={{ animationDuration: '40s', animationDirection: 'reverse' }}>
                  {['stripe', 'Harvey', 'Robinhood', 'KPMG', 'SpikeyAI', 'Oxbridge', 'arkifi'].map((company, index) => (
                    <div key={index} className="flex items-center justify-center h-10">
                      <img src={`/assets/${company}.png`} alt={company} className="max-w-full max-h-full object-contain grayscale mx-8" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  )
}

export default Hero