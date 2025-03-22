import RoutineSelector from "@/components/routine-selector"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">Stretching Routine Selector</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Select a body area and duration for your stretching routine
          </p>
        </header>
        <RoutineSelector />
      </div>
    </main>
  )
}

