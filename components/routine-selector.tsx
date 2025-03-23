"use client"

import { useState } from "react"
import {
  Activity,
  Brain,
  Clock,
  Dumbbell,
  Footprints,
  Play,
  SpadeIcon as Spine,
  StretchVerticalIcon as Stretch,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RoutineDisplay from "./routine-display"

type BodyArea = "full" | "upper" | "lower" | "back" | "neck" | "hips"
type Duration = 5 | 10 | 15

export default function RoutineSelector() {
  const [selectedBodyArea, setSelectedBodyArea] = useState<BodyArea>("full")
  const [selectedDuration, setSelectedDuration] = useState<Duration>(5)
  const [showRoutine, setShowRoutine] = useState(false)

  const handleStartRoutine = () => {
    setShowRoutine(true)
  }

  const handleBackToSelection = () => {
    setShowRoutine(false)
  }

  const bodyAreaIcons = {
    full: <Stretch className="h-6 w-6" />,
    upper: <Dumbbell className="h-6 w-6" />,
    lower: <Footprints className="h-6 w-6" />,
    back: <Spine className="h-6 w-6" />,
    neck: <Brain className="h-6 w-6" />,
    hips: <Activity className="h-6 w-6" />,
  }

  const bodyAreaLabels = {
    full: "Full Body",
    upper: "Upper Body",
    lower: "Lower Body",
    back: "Back",
    neck: "Neck & Shoulders",
    hips: "Hips & Core",
  }

  if (showRoutine) {
    return <RoutineDisplay bodyArea={selectedBodyArea} duration={selectedDuration} onBack={handleBackToSelection} />
  }

  return (
    <div className="mx-auto max-w-3xl">
      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="mb-4 text-xl font-semibold">Select Body Area Focus</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {(Object.keys(bodyAreaIcons) as BodyArea[]).map((area) => (
              <Button
                key={area}
                variant={selectedBodyArea === area ? "default" : "outline"}
                className="flex h-auto flex-col gap-2 p-4"
                onClick={() => setSelectedBodyArea(area)}
              >
                {bodyAreaIcons[area]}
                <span className="text-xs">{bodyAreaLabels[area]}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
            <Clock className="h-5 w-5" />
            <span>Select Duration</span>
          </h2>
          <Tabs
            defaultValue="5"
            className="w-full"
            onValueChange={(value) => setSelectedDuration(Number.parseInt(value) as Duration)}
          >
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="5" className="hover:bg-gray-200 mx-1 my-0">5 minutes</TabsTrigger>
              <TabsTrigger value="10" className="hover:bg-gray-200 mx-1 my-0">10 minutes</TabsTrigger>
              <TabsTrigger value="15" className="hover:bg-gray-200 mx-1 my-0">15 minutes</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Button size="lg" className="gap-2" onClick={handleStartRoutine}>
          <Play className="h-5 w-5" />
          Start {bodyAreaLabels[selectedBodyArea]} Routine ({selectedDuration} min)
        </Button>
      </div>
    </div>
  )
}

