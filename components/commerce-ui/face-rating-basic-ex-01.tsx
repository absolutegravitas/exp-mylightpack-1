"use client"

import { useState } from "react"
import FaceRatingBasic from "@/components/commerce-ui/face-rating-basic"

export default function FaceRating_01_Ex_01() {
  const [rating, setRating] = useState(3)
  return (
    <div className="flex flex-col items-center gap-4">
      <FaceRatingBasic value={rating} onChange={setRating} />
      <p>Rating: {rating}</p>
    </div>
  )
}
