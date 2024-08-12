import { CiFlag1 } from "react-icons/ci";

const Homepage = () => {
  
  return (
<div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-[#4158D0] text-white">
        <button href="#" className="flex items-center justify-center" prefetch={false}>
          <GroupIcon className="h-6 w-6" />
          <span className="sr-only">Community Engagement Platform</span>
        </button>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <button href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </button>
          <button href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Testimonials
          </button>
          <button href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Pricing
          </button>
          <button href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 sm:py-24 lg:py-32 bg-gradient-to-r from-[#4158D0] to-[#C850C0]">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">Engage Your Community</h1>
            <p className="max-w-[700px] text-lg sm:text-xl text-white">
              Our platform provides the tools and features you need to build and nurture a thriving online community.
            </p>
            <button
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[#4158D0] shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Get Started
            </button>
          </div>
        </section>
        <section className="w-full py-12 sm:py-24 lg:py-32 bg-[#f0f0f0]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4158D0]">Key Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform offers a range of features to help you build and engage your community.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <FlagIcon className="h-10 w-10 text-[#4158D0]" />
                <h3 className="text-xl font-bold">Discussion Forums</h3>
                <p className="text-muted-foreground">
                  Facilitate engaging conversations and discussions within your community.
                </p>
              </div>
              <div className="grid gap-1">
                <CalendarIcon className="h-10 w-10 text-[#4158D0]" />
                <h3 className="text-xl font-bold">Events</h3>
                <p className="text-muted-foreground">Organize and promote events to bring your community together.</p>
              </div>
              <div className="grid gap-1">
                <SignalIcon className="h-10 w-10 text-[#4158D0]" />
                <h3 className="text-xl font-bold">Notifications</h3>
                <p className="text-muted-foreground">Keep your community informed with customizable notifications.</p>
              </div>
              <div className="grid gap-1">
                <BadgeIcon className="h-10 w-10 text-[#4158D0]" />
                <h3 className="text-xl font-bold">Leaderboards</h3>
                <p className="text-muted-foreground">Gamify your community with leaderboards and achievements.</p>
              </div>
              <div className="grid gap-1">
                <InfoIcon className="h-10 w-10 text-[#4158D0]" />
                <h3 className="text-xl font-bold">Analytics</h3>
                <p className="text-muted-foreground">Gain insights into your community's engagement and activity.</p>
              </div>
              <div className="grid gap-1">
                <ComponentIcon className="h-10 w-10 text-[#4158D0]" />
                <h3 className="text-xl font-bold">Customization</h3>
                <p className="text-muted-foreground">Tailor the platform to match your brand and community needs.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-24 lg:py-32 bg-[#f0f0f0]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4158D0]">What Our Users Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our satisfied customers about their experience with our community engagement platform.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-4 bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-4">

                  <div>
                    <h4 className="text-lg font-bold">John Doe</h4>
                    <p className="text-sm text-muted-foreground">Community Manager</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "This platform has been a game-changer for our community.\n The features are intuitive and easy to
                  use, and our members\n have been highly engaged since we started using it."
                </p>
              </div>
              <div className="grid gap-4 bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-4">

                  <div>
                    <h4 className="text-lg font-bold">Sarah Miller</h4>
                    <p className="text-sm text-muted-foreground">Community Organizer</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "I've tried several community platforms, but this one stands\n out. The customization options and
                  analytics tools have\n been invaluable in growing and engaging our community."
                </p>
              </div>
              <div className="grid gap-4 bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-4">

                  <div>
                    <h4 className="text-lg font-bold">Michael Johnson</h4>
                    <p className="text-sm text-muted-foreground">Community Member</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "I've been a part of this community for years, and the\n platform has only made it better. The events,
                  discussions,\n and overall sense of community have been truly valuable to\n me."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-[#4158D0] text-white">
        <p className="text-xs">&copy; 2024 Community Engagement Platform. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <button href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </button>
          <button href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy Policy
          </button>
        </nav>
      </footer>
    </div>
  )
}

function BadgeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    </svg>
  )
}


function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function ComponentIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
      <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
      <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
      <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
    </svg>
  )
}


function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


function GroupIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
      <rect width="7" height="5" x="7" y="7" rx="1" />
      <rect width="7" height="5" x="10" y="12" rx="1" />
    </svg>
  )
}


function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function SignalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
      <path d="M17 20V8" />
      <path d="M22 4v16" />
    </svg>
  )
}



export default Homepage;
