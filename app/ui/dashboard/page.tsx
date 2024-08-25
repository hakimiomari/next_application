import React from 'react'
import Layout from '../layout/page'
const Dashboard = () => {
  return (
    <Layout>
      <div>
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                Dashboard
              </h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Last 30 days
                </h3>

                <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                    <dt>
                      <div className="absolute bg-indigo-500 rounded-md p-3">
                        <svg
                          className="h-6 w-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </div>
                      <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                        Total Subscribers
                      </p>
                    </dt>
                    <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                      <p className="text-2xl font-semibold text-gray-900">
                        71,897
                      </p>
                      <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        <svg
                          className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span className="sr-only"> Increased by </span>
                        122
                      </p>
                      <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                        <div className="text-sm">
                          <a
                            href="#"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            {" "}
                            View all
                            <span className="sr-only">
                              {" "}
                              Total Subscribers stats
                            </span>
                          </a>
                        </div>
                      </div>
                    </dd>
                  </div>

                  <div className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                    <dt>
                      <div className="absolute bg-indigo-500 rounded-md p-3">
                        <svg
                          className="h-6 w-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                          />
                        </svg>
                      </div>
                      <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                        Avg. Open Rate
                      </p>
                    </dt>
                    <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                      <p className="text-2xl font-semibold text-gray-900">
                        58.16%
                      </p>
                      <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        <svg
                          className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span className="sr-only"> Increased by </span>
                        5.4%
                      </p>
                      <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                        <div className="text-sm">
                          <a
                            href="#"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            {" "}
                            View all
                            <span className="sr-only">
                              {" "}
                              Avg. Open Rate stats
                            </span>
                          </a>
                        </div>
                      </div>
                    </dd>
                  </div>

                  <div className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                    <dt>
                      <div className="absolute bg-indigo-500 rounded-md p-3">
                        <svg
                          className="h-6 w-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                          />
                        </svg>
                      </div>
                      <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                        Avg. Click Rate
                      </p>
                    </dt>
                    <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                      <p className="text-2xl font-semibold text-gray-900">
                        24.57%
                      </p>
                      <p className="ml-2 flex items-baseline text-sm font-semibold text-red-600">
                        <svg
                          className="self-center flex-shrink-0 h-5 w-5 text-red-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span className="sr-only"> Decreased by </span>
                        3.2%
                      </p>
                      <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                        <div className="text-sm">
                          <a
                            href="#"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            {" "}
                            View all
                            <span className="sr-only">
                              {" "}
                              Avg. Click Rate stats
                            </span>
                          </a>
                        </div>
                      </div>
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="flow-root">
                <ul role="list" className="-mb-8">
                  <li>
                    <div className="relative pb-8">
                      <span
                        className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      ></span>
                      <div className="relative flex space-x-3">
                        <div>
                          <span className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white">
                            <svg
                              className="h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p className="text-sm text-gray-500">
                              Applied to{" "}
                              <a href="#" className="font-medium text-gray-900">
                                Front End Developer
                              </a>
                            </p>
                          </div>
                          <div className="text-right text-sm whitespace-nowrap text-gray-500">
                            <time dateTime="2020-09-20">Sep 20</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="relative pb-8">
                      <span
                        className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      ></span>
                      <div className="relative flex space-x-3">
                        <div>
                          <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                            <svg
                              className="h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                            </svg>
                          </span>
                        </div>
                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p className="text-sm text-gray-500">
                              Advanced to phone screening by{" "}
                              <a href="#" className="font-medium text-gray-900">
                                Bethany Blake
                              </a>
                            </p>
                          </div>
                          <div className="text-right text-sm whitespace-nowrap text-gray-500">
                            <time dateTime="2020-09-22">Sep 22</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="relative pb-8">
                      <span
                        className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      ></span>
                      <div className="relative flex space-x-3">
                        <div>
                          <span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                            <svg
                              className="h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p className="text-sm text-gray-500">
                              Completed phone screening with{" "}
                              <a href="#" className="font-medium text-gray-900">
                                Martha Gardner
                              </a>
                            </p>
                          </div>
                          <div className="text-right text-sm whitespace-nowrap text-gray-500">
                            <time dateTime="2020-09-28">Sep 28</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="relative pb-8">
                      <span
                        className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      ></span>
                      <div className="relative flex space-x-3">
                        <div>
                          <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                            <svg
                              className="h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                            </svg>
                          </span>
                        </div>
                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p className="text-sm text-gray-500">
                              Advanced to interview by{" "}
                              <a href="#" className="font-medium text-gray-900">
                                Bethany Blake
                              </a>
                            </p>
                          </div>
                          <div className="text-right text-sm whitespace-nowrap text-gray-500">
                            <time dateTime="2020-09-30">Sep 30</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="relative pb-8">
                      <div className="relative flex space-x-3">
                        <div>
                          <span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                            <svg
                              className="h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p className="text-sm text-gray-500">
                              Completed interview with{" "}
                              <a href="#" className="font-medium text-gray-900">
                                Katherine Snyder
                              </a>
                            </p>
                          </div>
                          <div className="text-right text-sm whitespace-nowrap text-gray-500">
                            <time dateTime="2020-10-04">Oct 4</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    </Layout>
  )
}

export default Dashboard