"use client"

export default function RoadmapPage() {
  const [requests, setRequests] = useState<FeatureRequest[]>(exampleFeatureRequests)
  const [newComment, setNewComment] = useState("")
  const [showNewRequestForm, setShowNewRequestForm] = useState(false)
  const [newRequest, setNewRequest] = useState({ title: "", description: "" })

  const handleVote = (requestId: number) => {
    setRequests(
      requests.map((request) => (request.id === requestId ? { ...request, votes: request.votes + 1 } : request))
    )
    //  toast({
    //    title: "Vote recorded",
    //    description: "Thanks for your feedback!",
    //  })
  }

  const handleAddComment = (requestId: number) => {
    if (!newComment.trim()) return

    setRequests(
      requests.map((request) =>
        request.id === requestId
          ? {
              ...request,
              comments: [
                ...request.comments,
                {
                  id: Math.max(...request.comments.map((c) => c.id), 0) + 1,
                  author: "Current User",
                  content: newComment,
                  createdAt: new Date().toISOString(),
                },
              ],
            }
          : request
      )
    )
    setNewComment("")
    // toast({
    //   title: "Comment added",
    //   description: "Your comment has been posted successfully.",
    // })
  }

  const handleAddRequest = () => {
    if (!newRequest.title.trim() || !newRequest.description.trim()) return

    const newFeatureRequest: FeatureRequest = {
      id: Math.max(...requests.map((r) => r.id)) + 1,
      title: newRequest.title,
      description: newRequest.description,
      author: "Current User",
      status: "under-review",
      votes: 0,
      comments: [],
      createdAt: new Date().toISOString(),
    }

    setRequests([newFeatureRequest, ...requests])
    setNewRequest({ title: "", description: "" })
    setShowNewRequestForm(false)
    // toast({
    //   title: "Feature request submitted",
    //   description: "Thanks for your suggestion!",
    // })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-forest text-3xl font-bold">Feature Requests</h1>
          <Button onClick={() => setShowNewRequestForm(true)} className="bg-forest hover:bg-forest-light">
            <Plus className="mr-2 h-4 w-4" />
            New Feature Request
          </Button>
        </div>

        {showNewRequestForm && (
          <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-semibold">Submit New Feature Request</h2>
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium">Title</label>
                <Input
                  value={newRequest.title}
                  onChange={(e) => setNewRequest({ ...newRequest, title: e.target.value })}
                  placeholder="Enter feature title"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Description</label>
                <Textarea
                  value={newRequest.description}
                  onChange={(e) => setNewRequest({ ...newRequest, description: e.target.value })}
                  placeholder="Describe the feature you'd like to see"
                  className="min-h-[100px]"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setShowNewRequestForm(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddRequest} className="bg-forest hover:bg-forest-light">
                  Submit Request
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-6">
          {requests.map((request) => (
            <div key={request.id} className="rounded-lg bg-white p-6 shadow-md">
              <div className="flex items-start justify-between">
                <div className="flex-grow">
                  <h2 className="mb-2 text-xl font-semibold">{request.title}</h2>
                  <p className="mb-4 text-gray-600">{request.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>By {request.author}</span>
                    <span>•</span>
                    <span>{new Date(request.createdAt).toLocaleDateString()}</span>
                    <span>•</span>
                    <span
                      className="rounded-full px-2 py-1 text-xs font-medium"
                      style={{
                        backgroundColor: {
                          planned: "#E5F6FD",
                          "in-progress": "#FFF4E5",
                          completed: "#E3F9E5",
                          "under-review": "#FCE7F6",
                        }[request.status],
                        color: {
                          planned: "#0EA5E9",
                          "in-progress": "#F59E0B",
                          completed: "#22C55E",
                          "under-review": "#EC4899",
                        }[request.status],
                      }}
                    >
                      {request.status.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                    </span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="flex items-center space-x-2"
                  onClick={() => handleVote(request.id)}
                >
                  <ArrowUp className="h-4 w-4" />
                  <span>{request.votes}</span>
                </Button>
              </div>

              <div className="mt-6">
                <h3 className="mb-4 flex items-center gap-2 font-semibold">
                  <MessageSquare className="h-4 w-4" />
                  Comments ({request.comments.length})
                </h3>
                <div className="space-y-4">
                  {request.comments.map((comment) => (
                    <div key={comment.id} className="rounded bg-gray-50 p-4">
                      <div className="mb-2 flex items-start justify-between">
                        <span className="font-medium">{comment.author}</span>
                        <span className="text-sm text-gray-500">
                          {new Date(comment.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-gray-600">{comment.content}</p>
                    </div>
                  ))}
                  <div className="flex gap-2">
                    <Input
                      placeholder="Add a comment..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                    />
                    <Button onClick={() => handleAddComment(request.id)} className="bg-forest hover:bg-forest-light">
                      Comment
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

import { ArrowUp, MessageSquare, Plus } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// Example data structure
interface Comment {
  id: number
  author: string
  content: string
  createdAt: string
}

interface FeatureRequest {
  id: number
  title: string
  description: string
  author: string
  status: "planned" | "in-progress" | "completed" | "under-review"
  votes: number
  comments: Comment[]
  createdAt: string
}

// Example data
const exampleFeatureRequests: FeatureRequest[] = [
  {
    id: 1,
    title: "Add GPX file support for trail maps",
    description: "It would be great to be able to upload GPX files to visualize trails directly in the app.",
    author: "Sarah H.",
    status: "planned",
    votes: 42,
    comments: [
      {
        id: 1,
        author: "Mike R.",
        content: "This would be amazing for planning multi-day hikes!",
        createdAt: "2024-01-15T10:30:00Z",
      },
      {
        id: 2,
        author: "Lisa M.",
        content: "Yes please! Would love to see elevation profiles too.",
        createdAt: "2024-01-15T11:45:00Z",
      },
    ],
    createdAt: "2024-01-15T09:00:00Z",
  },
  {
    id: 2,
    title: "Weather integration for packing lists",
    description: "Automatically suggest gear based on weather forecast for planned hiking dates.",
    author: "John D.",
    status: "in-progress",
    votes: 38,
    comments: [
      {
        id: 3,
        author: "Emma W.",
        content: "This would be super helpful for planning ahead!",
        createdAt: "2024-01-16T14:20:00Z",
      },
    ],
    createdAt: "2024-01-16T13:00:00Z",
  },
  {
    id: 3,
    title: "Gear wear tracking",
    description: "Track usage hours/miles for each piece of gear to know when to replace or maintain items.",
    author: "Alex P.",
    status: "under-review",
    votes: 27,
    comments: [],
    createdAt: "2024-01-17T15:00:00Z",
  },
]
