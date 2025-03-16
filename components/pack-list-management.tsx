"use client"

import { Edit, ListChecks, MoreHorizontal, PlusCircle, Trash2, Weight } from "lucide-react"
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
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useDatabase } from "@/contexts/database-context"
import { PackList } from "@/lib/db"
import { EmptyPlaceholder } from "./empty-placeholder"
import { PackListForm } from "./pack-list-form"

export function PackListManagement() {
  const { packLists, deletePackList } = useDatabase()
  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [editingPackList, setEditingPackList] = useState<PackList | undefined>(undefined)
  const [packListToDelete, setPackListToDelete] = useState<PackList | null>(null)

  const handleEdit = (packList: PackList) => {
    setEditingPackList(packList)
  }

  const handleDelete = async (packList: PackList) => {
    try {
      await deletePackList(packList.id)
      toast.success(`"${packList.name}" has been deleted`)
    } catch (error) {
      console.error("Error deleting pack list:", error)
      toast.error("Failed to delete pack list")
    }
  }

  const confirmDelete = (packList: PackList) => {
    setPackListToDelete(packList)
  }

  if (packLists.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Pack Lists</h2>
          <Button onClick={() => setIsCreateOpen(true)}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Pack List
          </Button>
        </div>

        <EmptyPlaceholder />

        <PackListForm open={isCreateOpen} onOpenChange={setIsCreateOpen} />
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Pack Lists</h2>
        <Button onClick={() => setIsCreateOpen(true)}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Pack List
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {packLists.map((packList) => (
          <Card key={packList.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <CardTitle className="text-xl">{packList.name}</CardTitle>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleEdit(packList)}>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Details
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => confirmDelete(packList)}
                      className="text-red-600 focus:text-red-600"
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <CardDescription className="line-clamp-2 h-10">
                {packList.description || "No description provided"}
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="mt-2 flex gap-2">
                <Badge variant="outline" className="flex items-center gap-1">
                  <ListChecks className="h-3 w-3" />
                  {packList.items || 0} items
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Weight className="h-3 w-3" />
                  {packList.totalWeight?.toFixed(1) || "0.0"} lb
                </Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Create/Edit form */}
      <PackListForm
        packList={editingPackList}
        open={isCreateOpen || !!editingPackList}
        onOpenChange={(open) => {
          if (!open) {
            setIsCreateOpen(false)
            setEditingPackList(undefined)
          }
        }}
      />

      {/* Delete confirmation */}
      <AlertDialog open={!!packListToDelete} onOpenChange={(open: boolean) => !open && setPackListToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete "{packListToDelete?.name}" and all its items. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => packListToDelete && handleDelete(packListToDelete)}
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
