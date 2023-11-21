'use client'
import React, { useState } from 'react'
import Search from './Search'

function NewComponent() {
  return <Search />
}

export default function Example() {
  const [showComponent, setShowComponent] = useState(false)

  const handleClick = () => {
    setShowComponent(true)
  }
  return (
    <>
      {showComponent && <NewComponent />}
      <form>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <div className="group relative z-0 transition-all focus-within:z-10">
            <input
              type="text"
              id="first-name"
              name="first-name"
              autoComplete="first-name"
              placeholder=" "
              className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-8 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
            />
            <label
              htmlFor="name"
              className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
            >
              First Name
            </label>
          </div>
          <div className="group relative z-0 transition-all focus-within:z-10">
            <input
              type="text"
              id="last-name"
              name="last-name"
              autoComplete="last-name"
              placeholder=" "
              className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-8 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
            />
            <label
              htmlFor="last-name"
              className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
            >
              Last Name
            </label>
          </div>
        </div>
      </form>
      <button
        onClick={handleClick}
        type="button"
        className="mt-4 w-full rounded-lg bg-white px-4 py-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        Add Request
      </button>
      {showComponent && <NewComponent />}
    </>
  )
}
