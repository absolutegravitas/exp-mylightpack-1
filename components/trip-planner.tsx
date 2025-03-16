"use client"

import { format } from "date-fns"
import { CalendarIcon, Edit, Map, MapPin, PlusCircle, Trash2 } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useDatabase } from "@/contexts/database-context"
import { TripPlan } from "@/lib/db"
import { cn } from "@/lib/utils"
import { EmptyPlaceholder } from "./empty-placeholder"

interface TripFormProps {
  trip?: TripPlan
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave?: () => void
}

function TripForm({ trip, open, onOpenChange, onSave }: TripFormProps) {
  const { packLists, addTripPlan, updateTripPlan } = useDatabase()
  const [name, setName] = useState(trip?.name || "")
  const [description, setDescription] = useState(trip?.description || "")
  const [location, setLocation] = useState(trip?.location || "")
  const [startDate, setStartDate] = useState<Date | undefined>(trip?.startDate ? new Date(trip.startDate) : undefined)
  const [endDate, setEndDate] = useState<Date | undefined>(trip?.endDate ? new Date(trip.endDate) : undefined)
  const [packListId, setPackListId] = useState(trip?.packListId || "")
  const [notes, setNotes] = useState(trip?.notes || "")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim() || !location.trim() || !startDate || !endDate || !packListId) {
      toast.error("Please fill in all required fields")
      return
    }

    if (endDate < startDate) {
      toast.error("End date cannot be before start date")
      return
    }

    try {
      setIsSubmitting(true)

      const tripData = {
        name,
        description,
        location,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        packListId,
        notes,
      }

      if (trip) {
        // Update existing trip
        await updateTripPlan({
          ...tripData,
          id: trip.id,
        })
        toast.success(`"${name}" trip has been updated`)
      } else {
        // Create new trip
        await addTripPlan(tripData)
        toast.success(`"${name}" trip has been created`)
      }

      onSave?.()
      onOpenChange(false)
    } catch (error) {
      console.error("Error saving trip:", error)
      toast.error("Failed to save trip. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{trip ? "Edit Trip" : "Plan a New Trip"}</DialogTitle>
          <DialogDescription>
            {trip ? "Update the details of your trip." : "Enter the details for your upcoming adventure."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="required">
              Trip Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Summer Backpacking Trip"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="A weekend trip to explore the wilderness"
              rows={2}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location" className="required">
              Location
            </Label>
            <Input
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Yosemite National Park"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startDate" className="required">
                Start Date
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="startDate"
                    variant="outline"
                    className={cn("w-full justify-start text-left font-normal", !startDate && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" selected={startDate} onSelect={setStartDate} />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label htmlFor="endDate" className="required">
                End Date
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="endDate"
                    variant="outline"
                    className={cn("w-full justify-start text-left font-normal", !endDate && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    disabled={(date: Date) => (startDate ? date < startDate : false)}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="packListId" className="required">
              Pack List
            </Label>
            <Select value={packListId} onValueChange={setPackListId}>
              <SelectTrigger id="packListId">
                <SelectValue placeholder="Select a pack list" />
              </SelectTrigger>
              <SelectContent>
                {packLists.map((packList) => (
                  <SelectItem key={packList.id} value={packList.id}>
                    {packList.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Important information, permits needed, or special gear requirements"
              rows={4}
            />
          </div>

          <div className="text-muted-foreground text-xs">
            Fields marked with <span className="text-red-500">*</span> are required
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : trip ? "Update Trip" : "Create Trip"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export function TripPlanner() {
  const { tripPlans, deleteTripPlan, getTripWithPackList, packLists } = useDatabase()
  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [editingTrip, setEditingTrip] = useState<TripPlan | undefined>(undefined)
  const [tripToDelete, setTripToDelete] = useState<TripPlan | null>(null)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const refreshTrips = async () => {
    setIsRefreshing(true)
    // The refresh happens automatically through the context
    // Just adding a small delay for UX
    setTimeout(() => {
      setIsRefreshing(false)
    }, 500)
  }

  const handleEdit = (trip: TripPlan) => {
    setEditingTrip(trip)
  }

  const handleDelete = async (trip: TripPlan) => {
    try {
      await deleteTripPlan(trip.id)
      toast.success(`"${trip.name}" trip has been deleted`)
    } catch (error) {
      console.error("Error deleting trip:", error)
      toast.error("Failed to delete trip")
    }
  }

  const confirmDelete = (trip: TripPlan) => {
    setTripToDelete(trip)
  }

  // Helper to get pack list name by ID
  const getPackListName = (id: string) => {
    const packList = packLists.find((p) => p.id === id)
    return packList ? packList.name : "Unknown Pack List"
  }

  if (tripPlans.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Trip Planner</h2>
          <Button onClick={() => setIsCreateOpen(true)}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Plan a Trip
          </Button>
        </div>

        <EmptyPlaceholder />

        <TripForm open={isCreateOpen} onOpenChange={setIsCreateOpen} onSave={refreshTrips} />
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Trip Planner</h2>
        <Button onClick={() => setIsCreateOpen(true)}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Plan a Trip
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tripPlans.map((trip) => (
          <Card key={trip.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <CardTitle className="text-xl">{trip.name}</CardTitle>
                <div className="flex">
                  <Button variant="ghost" size="icon" onClick={() => handleEdit(trip)}>
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => confirmDelete(trip)} className="text-red-600">
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </div>
              <CardDescription className="flex items-center gap-1">
                <MapPin className="text-muted-foreground h-3.5 w-3.5" />
                {trip.location}
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="space-y-2 text-sm">
                <div className="text-muted-foreground flex justify-between">
                  <div>Start Date</div>
                  <div>{format(new Date(trip.startDate), "MMM d, yyyy")}</div>
                </div>
                <div className="text-muted-foreground flex justify-between">
                  <div>End Date</div>
                  <div>{format(new Date(trip.endDate), "MMM d, yyyy")}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-muted-foreground">Pack List</div>
                  <div className="font-medium">{getPackListName(trip.packListId)}</div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="flex w-full gap-2">
                <Map className="h-4 w-4" />
                View Trip Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Create/Edit form */}
      <TripForm
        trip={editingTrip}
        open={isCreateOpen || !!editingTrip}
        onOpenChange={(open) => {
          if (!open) {
            setIsCreateOpen(false)
            setEditingTrip(undefined)
          }
        }}
        onSave={refreshTrips}
      />

      {/* Delete confirmation */}
      <AlertDialog open={!!tripToDelete} onOpenChange={(open) => !open && setTripToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Trip</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete "{tripToDelete?.name}"? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => tripToDelete && handleDelete(tripToDelete)}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
