import React from 'react'

const MiddleSections = () => {
    return (
        <>
            <div className="mx-auto px-4 max-w-7xl">
                <div className="mt-40 flex flex-col md:flex-row items-center">
                    {/* Left Column */}
                    <div className="md:w-1/3 pr-4">
                        <div className="max-w-sm w-full p-8 bg-[var(--color-offwhite1)] border-[var(--color-offwhite3)] rounded-xl border shadow">
                            <div className="h-[15rem] md:h-[20rem] rounded-xl z-40 bg-[var(--color-offwhite1)] border border-[var(--color-offwhite3)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]">
                                <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
                                    <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
                                        <div className="rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
                                            shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)] h-8 w-8 circle-1 flex items-center justify-center"
                                            style={{ willChange: 'transform', transform: 'translateY(0px)' }}>
                                            <img src="/Anthropic.png" alt="Logo 1" className="w-3/4 h-3/4 object-contain" />
                                        </div>
                                        <div className="rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
                                            shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)] h-12 w-12 circle-2 flex items-center justify-center"
                                            style={{ willChange: 'transform', transform: 'translateY(-2.51481px)' }}>
                                            <img src="/assets/Meta.png" alt="Logo 2" className="w-3/4 h-3/4 object-contain" />
                                        </div>
                                        <div className="rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
                                            shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)] h-16 w-16 circle-3 flex items-center justify-center"
                                            style={{ willChange: 'transform', transform: 'translateY(0px)' }}>
                                            <img src="/assets/OpenAI.png" alt="Logo 3" className="w-3/4 h-3/4 object-contain" />
                                        </div>
                                        <div className="rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
                                            shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)] h-12 w-12 circle-4 flex items-center justify-center"
                                            style={{ willChange: 'transform', transform: 'translateY(0px)' }}>
                                            <img src="/assets/Mistral.png" alt="Logo 4" className="w-3/4 h-3/4 object-contain" />
                                        </div>
                                        <div className="rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
                                            shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)] h-8 w-8 circle-5 flex items-center justify-center"
                                            style={{ willChange: 'transform', transform: 'translateY(0px)' }}>
                                            <img src="/assets/Cohere.png" alt="Logo 5" className="w-3/4 h-3/4 object-contain" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 py-2 mt-4">
                                What is an evaluation model?
                            </h3>
                            <p className="text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm">
                                A class of specialized models designed to assess and grade the outputs produced by another generative foundation model.
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="md:w-2/3 pl-4 mt-16 md:mt-0 flex flex-col justify-center">
                        <p className="font-bold tracking-tight text-4xl">
                            Test AI agents in <span className="highlight font-bold md:extrabold">seconds</span>, not hours
                            <br />
                        </p>
                        <p className="mt-5 text-lg text-gray-500">
                            Manually checking AI outputs can burn 100+ engineering hours. Reduce that time by 90% with API-based confidence scores powered by evaluation models.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mx-auto px-4 max-w-7xl pt-40 flex flex-col md:flex-row">
            <div className="md:w-2/3 md:pr-8 mb-8 md:mb-0 flex flex-col justify-center">
            <div>
                <h2 className="text-center md:text-left font-bold tracking-tight text-4xl mb-4">
                Define <span className="highlight font-bold md:extrabold">custom</span> testing requirements
                </h2>
                <p className="text-center md:text-left text-lg text-gray-500">
                Every AI application has its own unique testing criteria. Craft the perfect grading rubric for your model judge in our UI based playground, or manipulate the code directly.
                </p>
            </div>
            </div>
            <div className="md:w-1/3">
            <div className="flex flex-col space-y-6">
                <div className="rounded-xl group relative flex transition-shadow rounded-xl bg-zinc-50 hover:shadow-lg hover:shadow-blue-300/100 dark:bg-white/2.5 dark:hover:shadow-sm border"
                    style={{ backgroundColor: 'var(--color-offwhite1)', borderColor: 'var(--color-offwhite3)' }}>
                <div className="pointer-events-none">
                    <div className="absolute inset-0 transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
                    <svg aria-hidden="true" className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-[var(--color-offwhite3)] stroke-[var(--color-offwhite3)]">
                        <defs>
                        <pattern id=":r0:" width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="16">
                            <path d="M.5 56V.5H72" fill="none"></path>
                        </pattern>
                        </defs>
                        <rect width="100%" height="100%" strokeWidth="0" fill="url(#:r0:)"></rect>
                        <svg x="50%" y="16" className="overflow-visible">
                        <rect strokeWidth="0" width="73" height="57" x="0" y="56"></rect>
                        <rect strokeWidth="0" width="73" height="57" x="72" y="168"></rect>
                        </svg>
                    </svg>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#C9CAFF] to-[#F7E5C1] opacity-0 transition duration-300 group-hover:opacity-60"
                        style={{ maskImage: 'radial-gradient(180px at 42.9375px 2.84999px, white, transparent)' }}></div>
                    <div className="absolute inset-0 opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
                        style={{ maskImage: 'radial-gradient(180px at 42.9375px 2.84999px, white, transparent)' }}>
                    <svg aria-hidden="true" className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10">
                        <defs>
                        <pattern id=":r1:" width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="16">
                            <path d="M.5 56V.5H72" fill="none"></path>
                        </pattern>
                        </defs>
                        <rect width="100%" height="100%" strokeWidth="0" fill="url(#:r1:)"></rect>
                        <svg x="50%" y="16" className="overflow-visible">
                        <rect strokeWidth="0" width="73" height="57" x="0" y="56"></rect>
                        <rect strokeWidth="0" width="73" height="57" x="72" y="168"></rect>
                        </svg>
                    </svg>
                    </div>
                </div>
                <div className="absolute inset-0 transition duration-300 group-hover:ring-opacity-100 rounded-xl"></div>
                <div className="relative px-4 pb-4 pt-16 rounded-xl">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25">
                    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900">
                        <path strokeWidth="0" fillRule="evenodd" clipRule="evenodd" d="M10 .5a9.5 9.5 0 0 1 5.598 17.177C14.466 15.177 12.383 13.5 10 13.5s-4.466 1.677-5.598 4.177A9.5 9.5 0 0 1 10 .5ZM12.5 8a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"></path>
                        <path fill="none" strokeLinecap="round" strokeLinejoin="round" d="M10 .5a9.5 9.5 0 0 1 5.598 17.177A9.458 9.458 0 0 1 10 19.5a9.458 9.458 0 0 1-5.598-1.823A9.5 9.5 0 0 1 10 .5ZM12.5 8a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"></path>
                        <path fill="none" strokeLinecap="round" strokeLinejoin="round" d="M4.402 17.677C5.534 15.177 7.617 13.5 10 13.5s4.466 1.677 5.598 4.177M10 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"></path>
                    </svg>
                    </div>
                    <h3 className="mt-4 text-m font-bold leading-7 text-black">
                    <a style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Accuracy</a>
                    </h3>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    Check the truthfulness of your generation against a ground truth answer
                    </p>
                </div>
                </div>
                <div className="rounded-xl group relative flex transition-shadow rounded-xl bg-zinc-50 hover:shadow-lg hover:shadow-blue-300/100 dark:bg-white/2.5 dark:hover:shadow-sm border"
                    style={{ backgroundColor: 'var(--color-offwhite1)', borderColor: 'var(--color-offwhite3)' }}>
                <div className="pointer-events-none">
                    <div className="absolute inset-0 transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
                    <svg aria-hidden="true" className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-[var(--color-offwhite3)] stroke-[var(--color-offwhite3)]">
                        <defs>
                        <pattern id=":r2:" width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="-6">
                            <path d="M.5 56V.5H72" fill="none"></path>
                        </pattern>
                        </defs>
                        <rect width="100%" height="100%" strokeWidth="0" fill="url(#:r2:)"></rect>
                        <svg x="50%" y="-6" className="overflow-visible">
                        <rect strokeWidth="0" width="73" height="57" x="-72" y="112"></rect>
                        <rect strokeWidth="0" width="73" height="57" x="72" y="168"></rect>
                        </svg>
                    </svg>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#C9CAFF] to-[#F7E5C1] opacity-0 transition duration-300 group-hover:opacity-60"
                        style={{ maskImage: 'radial-gradient(180px at 11.9375px 110.25px, white, transparent)' }}></div>
                    <div className="absolute inset-0 opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
                        style={{ maskImage: 'radial-gradient(180px at 11.9375px 110.25px, white, transparent)' }}>
                    <svg aria-hidden="true" className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10">
                        <defs>
                        <pattern id=":r3:" width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="-6">
                            <path d="M.5 56V.5H72" fill="none"></path>
                        </pattern>
                        </defs>
                        <rect width="100%" height="100%" strokeWidth="0" fill="url(#:r3:)"></rect>
                        <svg x="50%" y="-6" className="overflow-visible">
                        <rect strokeWidth="0" width="73" height="57" x="-72" y="112"></rect>
                        <rect strokeWidth="0" width="73" height="57" x="72" y="168"></rect>
                        </svg>
                    </svg>
                    </div>
                </div>
                <div className="absolute inset-0 transition duration-300 group-hover:ring-opacity-100 rounded-xl"></div>
                <div className="relative px-4 pb-4 pt-16 rounded-xl">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25">
                    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 16.5c4.142 0 7.5-3.134 7.5-7s-3.358-7-7.5-7c-4.142 0-7.5 3.134-7.5 7 0 1.941.846 3.698 2.214 4.966L3.5 17.5c2.231 0 3.633-.553 4.513-1.248A8.014 8.014 0 0 0 10 16.5Z"></path>
                        <path fill="none" strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.5h5M8.5 11.5h3"></path>
                    </svg>
                    </div>
                    <h3 className="mt-4 text-m font-bold leading-7 text-black">
                    <a style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Structure</a>
                    </h3>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    Validate if your AI generated output has the structure and consistency you want
                    </p>
                </div>
                </div>
                <div className="rounded-xl group relative flex transition-shadow rounded-xl bg-zinc-50 hover:shadow-lg hover:shadow-blue-300/100 dark:bg-white/2.5 dark:hover:shadow-sm border"
                    style={{ backgroundColor: 'var(--color-offwhite1)', borderColor: 'var(--color-offwhite3)' }}>
                <div className="pointer-events-none">
                    <div className="absolute inset-0 transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
                    <svg aria-hidden="true" className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-[var(--color-offwhite3)] stroke-[var(--color-offwhite3)]">
                        <defs>
                        <pattern id=":r4:" width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="32">
                            <path d="M.5 56V.5H72" fill="none"></path>
                        </pattern>
                        </defs>
                        <rect width="100%" height="100%" strokeWidth="0" fill="url(#:r4:)"></rect>
                        <svg x="50%" y="32" className="overflow-visible">
                        <rect strokeWidth="0" width="73" height="57" x="0" y="112"></rect>
                        <rect strokeWidth="0" width="73" height="57" x="72" y="224"></rect>
                        </svg>
                    </svg>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#C9CAFF] to-[#F7E5C1] opacity-0 transition duration-300 group-hover:opacity-60"
                        style={{ maskImage: 'radial-gradient(180px at 256.737px 200.5px, white, transparent)' }}></div>
                    <div className="absolute inset-0 opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
                        style={{ maskImage: 'radial-gradient(180px at 256.737px 200.5px, white, transparent)' }}>
                    <svg aria-hidden="true" className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10">
                        <defs>
                        <pattern id=":r5:" width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="32">
                            <path d="M.5 56V.5H72" fill="none"></path>
                        </pattern>
                        </defs>
                        <rect width="100%" height="100%" strokeWidth="0" fill="url(#:r5:)"></rect>
                        <svg x="50%" y="32" className="overflow-visible">
                        <rect strokeWidth="0" width="73" height="57" x="0" y="112"></rect>
                        <rect strokeWidth="0" width="73" height="57" x="72" y="224"></rect>
                        </svg>
                    </svg>
                    </div>
                </div>
                <div className="absolute inset-0 transition duration-300 group-hover:ring-opacity-100 rounded-xl"></div>
                <div className="relative px-4 pb-4 pt-16 rounded-xl">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25">
                    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.438 8.063a5.563 5.563 0 0 1 11.125 0v2.626c0 1.182.34 2.34.982 3.332L17.5 15.5h-15l.955-1.479c.641-.993.982-2.15.982-3.332V8.062Z"></path>
                        <path fill="none" strokeLinecap="round" strokeLinejoin="round" d="M7.5 15.5v0a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v0"></path>
                    </svg>
                    </div>
                    <h3 className="mt-4 text-m font-bold leading-7 text-black">
                    <a style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Data Security / PII</a>
                    </h3>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    Flag your generated outputs for sensitive information and data security leakage
                    </p>
                </div>
                </div>
            </div>
            </div>
            </div>
        </>
    );
}

export default MiddleSections