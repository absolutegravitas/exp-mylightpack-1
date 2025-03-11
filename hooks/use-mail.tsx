"use client"

import * as React from "react"

export interface Mail {
  id: string
  name: string
  email: string
  subject: string
  text: string
  date: string
  read: boolean
  labels: string[]
  category: "work" | "personal" | "family" | "friends" | "important"
  selected?: boolean
}

interface MailContextProps {
  mail: Mail | null
  mails: Mail[]
  selectMail: (mail: Mail | null) => void
}

const MailContext = React.createContext<MailContextProps>({
  mail: null,
  mails: [],
  selectMail: () => {},
})

interface MailProviderProps {
  children: React.ReactNode
}

export function MailProvider({ children }: MailProviderProps) {
  const [mail, setMail] = React.useState<Mail | null>(null)
  const [mails, setMails] = React.useState<Mail[]>([
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      subject: "Meeting Tomorrow",
      text: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to our meeting!",
      date: "2023-10-22T09:00:00",
      read: true,
      labels: ["work"],
      category: "work",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      subject: "Project Update",
      text: "Here's an update on the project. We've completed the initial phase and are moving on to the next steps. I've attached the latest designs for your review. Please let me know if you have any feedback or suggestions. We're aiming to finalize everything by the end of the week, so prompt feedback would be greatly appreciated.",
      date: "2023-10-22T10:30:00",
      read: true,
      labels: ["work"],
      category: "work",
    },
    {
      id: "3",
      name: "Alice Johnson",
      email: "alice@example.com",
      subject: "Weekend Plans",
      text: "Do you have any plans for the weekend? I was thinking of organizing a small get-together at my place. It's been a while since we all hung out, and I thought it would be nice to catch up. I'm planning to start around 7 PM on Saturday. Let me know if you can make it, and if there's anything specific you'd like me to prepare. Looking forward to seeing you!",
      date: "2023-10-22T11:45:00",
      read: false,
      labels: ["personal"],
      category: "personal",
    },
    {
      id: "4",
      name: "Bob Williams",
      email: "bob@example.com",
      subject: "Question about the presentation",
      text: "I have a question about the presentation we're preparing for next week. Specifically, I'm not clear on the data sources we're using for the market analysis section. Could you point me to the right resources or share any relevant documents? I want to make sure we're using the most up-to-date information for our analysis. Thanks in advance for your help!",
      date: "2023-10-22T13:15:00",
      read: false,
      labels: ["work"],
      category: "work",
    },
    {
      id: "5",
      name: "Charlie Brown",
      email: "charlie@example.com",
      subject: "Lunch next week",
      text: "Would you like to grab lunch next week? I'll be in your area on Tuesday and Thursday. It would be great to catch up and discuss potential collaboration opportunities. I've been following your recent projects and I'm impressed with the work you've been doing. I think there might be some interesting ways we could work together. Let me know which day works better for you!",
      date: "2023-10-22T15:30:00",
      read: true,
      labels: ["personal"],
      category: "personal",
    },
  ])

  const selectMail = React.useCallback((selectedMail: Mail | null) => {
    if (selectedMail) {
      setMail(selectedMail)
      setMails((prevMails) =>
        prevMails.map((mail) => ({
          ...mail,
          selected: mail.id === selectedMail.id,
        }))
      )
    } else {
      setMail(null)
      setMails((prevMails) =>
        prevMails.map((mail) => ({
          ...mail,
          selected: false,
        }))
      )
    }
  }, [])

  return <MailContext.Provider value={{ mail, mails, selectMail }}>{children}</MailContext.Provider>
}

export function useMail() {
  const context = React.useContext(MailContext)
  if (!context) {
    throw new Error("useMail must be used within a MailProvider")
  }
  return context
}
