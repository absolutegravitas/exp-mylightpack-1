import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const SignUpForm = () => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <Input type="email" placeholder="Enter your email" className="w-full text-black sm:w-auto" />
      <Button variant="default" size="lg">
        Sign Up for Waitlist
      </Button>
    </div>
  )
}

export default SignUpForm
