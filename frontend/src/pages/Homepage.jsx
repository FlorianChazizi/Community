import { SignalIcon, InfoIcon, FlagIcon, ComponentIcon, CalendarIcon, BadgeIcon } from '../components/Icons'
const Homepage = () => {
  
  return (
<div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 sm:py-24 lg:py-32 bg-gradient-to-r from-[#4158D0] to-[#C850C0]">
          <div className=" px-4 md:px-6 flex flex-col items-center text-center space-y-6">
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
          <div className=" px-4 md:px-6">
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
          <div className=" px-4 md:px-6">
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

    </div>
  )
}


export default Homepage;
