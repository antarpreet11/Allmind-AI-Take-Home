'use client';

import React, {useState} from 'react';

const DemoSection = () => {
  const [textBoxValue, setTextBoxValue] = useState('');

  const textBoxChangeHandler = (event) => {
    setTextBoxValue(event.target.value);
  };

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8">
        <section aria-labelledby="details-heading">
          <div className="mx-auto lg:mx-0 mt-[15%]">
            <p className="text-center mt-16 font-bold tracking-tight text-4xl">
              Try our <span className="highlight font-bold md:extrabold">demo</span> below
            </p>
            <p className="mt-6 text-base text-center leading-7 text-lg text-gray-600">
              AI agent outputs will be graded against pre-defined criteria judged by evaluation models.
            </p>
          </div>
          <div className="mt-16 flex flex-col space-y-16">
            <div className="w-full">
              <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden">
                <div
                  className="demo-container"
                  style={{ display: 'flex', height: '65vh', gap: '1rem', padding: '1rem', boxShadow: 'none' }}
                >
                  <div className="demo-column" style={{ display: 'flex', flexDirection: 'column', width: '50%', gap: '1rem' }}>
                    <div
                      className="bento-box-chat"
                      style={{
                        border: '1px solid var(--color-offwhite3)',
                        borderRadius: '0.75rem',
                        overflow: 'hidden',
                        backgroundColor: 'white',
                        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
                        flex: '1 1 0%',
                        position: 'relative',
                      }}
                    >
                      <button
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '0.5rem',
                          borderRadius: '0.75rem',
                          border: '1px solid currentcolor',
                          background: 'white',
                          color: 'var(--color-primary)',
                          transition: '300ms',
                          cursor: 'pointer',
                          minWidth: '2.5rem',
                          position: 'absolute',
                          top: '1rem',
                          right: '1rem',
                          zIndex: 10,
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                          style={{ width: '1.5rem', height: '1.5rem' }}
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <div className="m-4"></div>
                      <div style={{ height: '100%', overflowY: 'auto', padding: '1rem' }}>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                            color: 'rgb(136, 136, 136)',
                            fontStyle: 'italic',
                          }}
                        >
                          AI Agent example
                        </div>
                        <div
                          style={{
                            position: 'absolute',
                            bottom: '1rem',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            color: 'var(--color-primary)',
                            animation: '2s ease 0s infinite normal none running pulse',
                            textAlign: 'center',
                          }}
                        >
                          <span>Start by entering text below</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            style={{ width: '2rem', height: '2rem', marginTop: '0.5rem' }}
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div
                      className="bento-box-input"
                      style={{
                        border: '1px solid var(--color-offwhite3)',
                        borderRadius: '0.75rem',
                        overflow: 'hidden',
                        backgroundColor: 'white',
                        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
                        padding: '1rem',
                      }}
                    >
                      <form style={{ display: 'flex', gap: '0.5rem' }}>
                        <input
                          type="text"
                          placeholder="e.g. What is Halluminate?"
                          value={textBoxValue}
                          style={{ flexGrow: 1, padding: '0.5rem', borderRadius: '0.25rem', minWidth: '0px' }}
                          onChange={textBoxChangeHandler}
                        />
                        <button
                          type="submit"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '0.5rem',
                            borderRadius: '0.75rem',
                            border: '1px solid currentcolor',
                            background: 'transparent',
                            color: 'var(--color-primary)',
                            transition: '300ms',
                            cursor: 'pointer',
                            minWidth: '2.5rem',
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            style={{ width: '1.5rem', height: '1.5rem' }}
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </form>
                    </div>
                  </div>
                  <div
                    className="demo-column bento-box-results"
                    style={{
                      border: '1px solid var(--color-offwhite3)',
                      borderRadius: '0.75rem',
                      overflow: 'hidden',
                      backgroundColor: 'white',
                      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
                      flex: '1 1 0%',
                      padding: '1rem',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <p className="text-center">Results will be displayed here.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DemoSection;
