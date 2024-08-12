import React from 'react'

const Footer = () => {
  return (
    <div>
              <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-[#4158D0] text-white">
        <p className="text-xs">&copy; 2024 Community Engagement Platform. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <button href="#" className="text-xs hover:underline underline-offset-4" prefetch={true}>
            Terms of Service
          </button>
          <button href="#" className="text-xs hover:underline underline-offset-4" prefetch={true}>
            Privacy Policy
          </button>
        </nav>
      </footer>
    </div>
  )
}

export default Footer