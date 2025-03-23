"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowLeft, CheckCircle, Clock, Pause, Play, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { stretchingRoutines } from "@/data/stretching-routines"
import { formatTime } from "@/lib/utils"

interface RoutineDisplayProps {
  bodyArea: string
  duration: number
  onBack: () => void
}

export default function RoutineDisplay({ bodyArea, duration, onBack }: RoutineDisplayProps) {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0)
  const [timeRemaining, setTimeRemaining] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [completed, setCompleted] = useState(false)

  // Use refs to track the timer interval and current state
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const isActiveRef = useRef(isActive)
  const currentExerciseIndexRef = useRef(currentExerciseIndex)

  // Keep refs in sync with state
  useEffect(() => {
    isActiveRef.current = isActive
    currentExerciseIndexRef.current = currentExerciseIndex
  }, [isActive, currentExerciseIndex])

  const routine = stretchingRoutines[bodyArea][duration]
  const currentExercise = routine[currentExerciseIndex]
  const totalExercises = routine.length

  // Calculate total routine time
  const totalTime = routine.reduce((acc, exercise) => acc + exercise.duration, 0)

  // Calculate progress percentage
  const completedTime = routine.slice(0, currentExerciseIndex).reduce((acc, exercise) => acc + exercise.duration, 0)
  const progress = completed
    ? 100
    : Math.round(((completedTime + (currentExercise.duration - timeRemaining)) / totalTime) * 100)

  // Initialize the timer for the current exercise
  useEffect(() => {
    setTimeRemaining(currentExercise.duration)

    // If the timer was active before changing exercises, restart it
    if (isActiveRef.current) {
      // Small delay to ensure state is updated
      setTimeout(() => {
        startTimer()
      }, 50)
    }
  }, [currentExerciseIndex, currentExercise.duration])

  // Handle timer logic in a single useEffect
  useEffect(() => {
    // Start or stop timer based on isActive state
    if (isActive) {
      startTimer()
    } else if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }

    // Cleanup on unmount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
  }, [isActive])

  // Function to start the timer
  const startTimer = () => {
    // Clear any existing timer first
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }

    // Set up a new timer
    timerRef.current = setInterval(() => {
      setTimeRemaining((prevTime) => {
        // If time is up
        if (prevTime <= 1) {
          // Clear the interval
          if (timerRef.current) {
            clearInterval(timerRef.current)
            timerRef.current = null
          }

          // Move to next exercise if we're still active
          if (isActiveRef.current) {
            moveToNextExercise()
          }

          return 0
        }
        return prevTime - 1
      })
    }, 1000)
  }

  // Function to move to the next exercise
  const moveToNextExercise = () => {
    const nextIndex = currentExerciseIndexRef.current + 1

    if (nextIndex < totalExercises) {
      setCurrentExerciseIndex(nextIndex)
      // The timer will be restarted by the useEffect that watches currentExerciseIndex
    } else {
      setCompleted(true)
      setIsActive(false)
    }
  }

  const toggleTimer = () => {
    setIsActive(!isActive)
  }

  const resetRoutine = () => {
    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }

    setCurrentExerciseIndex(0)
    setTimeRemaining(routine[0].duration)
    setIsActive(false)
    setCompleted(false)
  }

  const nextExercise = () => {
    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }

    if (currentExerciseIndex < totalExercises - 1) {
      // Move to the next exercise
      const nextIndex = currentExerciseIndex + 1
      setCurrentExerciseIndex(nextIndex)
      setIsActive(false)
    } else {
      setCompleted(true)
      setIsActive(false)
    }
  }

  const previousExercise = () => {
    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }

    if (currentExerciseIndex > 0) {
      // Move to the previous exercise
      const prevIndex = currentExerciseIndex - 1
      setCurrentExerciseIndex(prevIndex)
      setIsActive(false)
    }
  }

  return (
    <div className="mx-auto max-w-3xl">
      <Button
      variant="ghost"
      className="mb-4 gap-2 transition-all duration-200 hover:bg-muted border border-transparent hover:border-gray-200"
      onClick={onBack}
    >
      <ArrowLeft className="h-4 w-4" />
      Back to selection
    </Button>

      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              {completed ? "Routine Completed!" : `Exercise ${currentExerciseIndex + 1} of ${totalExercises}`}
            </h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{duration} min routine</span>
            </div>
          </div>

          <Progress value={progress} className="mb-6 h-2" />

          {completed ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <CheckCircle className="mb-4 h-16 w-16 text-green-500" />
              <h3 className="mb-2 text-2xl font-bold">Great job!</h3>
              <p className="mb-6 text-muted-foreground">You've completed your {duration}-minute stretching routine</p>
              <Button onClick={resetRoutine} className="gap-2">
                <RotateCcw className="h-4 w-4" />
                Start Again
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-6 rounded-lg bg-muted p-6 text-center">
                <h3 className="mb-2 text-2xl font-bold">{currentExercise.name}</h3>
                <p className="mb-4 text-muted-foreground">{currentExercise.description}</p>
                <div className="text-3xl font-mono font-bold">{formatTime(timeRemaining)}</div>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                <Button variant="outline" onClick={previousExercise} disabled={currentExerciseIndex === 0}>
                  Previous
                </Button>
                <Button onClick={toggleTimer} className="gap-2 min-w-[120px]">
                  {isActive ? (
                    <>
                      <Pause className="h-4 w-4" />
                      Pause
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4" />
                      {timeRemaining === currentExercise.duration ? "Start" : "Resume"}
                    </>
                  )}
                </Button>
                <Button variant="outline" onClick={nextExercise}>
                  {currentExerciseIndex === totalExercises - 1 ? "Finish" : "Skip"}
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="mb-4 text-lg font-semibold">Upcoming Exercises</h3>
          {completed ? (
            <p className="text-center text-muted-foreground">Routine completed!</p>
          ) : (
            <div className="space-y-3">
              {routine.slice(currentExerciseIndex + 1, currentExerciseIndex + 4).length > 0 ? (
                <>
                  {routine.slice(currentExerciseIndex + 1, currentExerciseIndex + 4).map((exercise, index) => (
                    <div key={index} className="flex items-center justify-between rounded-lg border p-3 hover:bg-muted">
                      <div>
                        <h4 className="font-medium">{exercise.name}</h4>
                        <p className="text-sm text-muted-foreground">{exercise.duration} seconds</p>
                      </div>
                      <div className="text-sm text-muted-foreground">#{currentExerciseIndex + index + 2}</div>
                    </div>
                  ))}
                  {currentExerciseIndex + 4 >= totalExercises ? null : (
                    <p className="text-center text-sm text-muted-foreground">
                      + {totalExercises - (currentExerciseIndex + 4)} more exercises
                    </p>
                  )}
                </>
              ) : (
                <p className="text-center py-4 text-muted-foreground">This is the last exercise in your routine!</p>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

