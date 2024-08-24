export interface SessionizeData {
    sessions: Session[]
    speakers: Speaker[]
    categories: Category[]
    rooms: Room[]
    // questions: any[]
}

export type SessionizeSchedule = SessionizeDate[]

export interface Session {
    id: string
    title: string
    description: string
    startsAt: string
    endsAt: string
    isServiceSession: boolean
    isPlenumSession: boolean
    speakers: string[]
    categoryItems: number[]
    questionAnswers: any[]
    roomId: number
    liveUrl: any
    recordingUrl: any
    status: string
    isInformed: boolean
    isConfirmed: boolean
}

export interface Speaker {
    id: string
    firstName: string
    lastName: string
    bio: string
    tagLine: string
    profilePicture: string
    isTopSpeaker: boolean
    links: Link[]
    sessions: number[]
    fullName: string
    // categoryItems: any[]
    // questionAnswers: any[]
}

export interface Link {
    title: string
    url: string
    linkType: string
}

export interface Category {
    id: number
    title: string
    items: Item[]
    sort: number
    type: string
}

export interface Item {
    id: number
    name: string
    sort: number
}

export interface Room {
    id: number
    name: string
    sort: number
}

export interface SessionizeDate {
    date: string
    name: string
    rooms: ScheduledRoom[]
    timeSlots: TimeSlot[]
}

export interface ScheduledRoom {
    id: number
    name: string
    sessions: Session[]
}

export interface TimeSlot {
    slotStart: string
    rooms: {
        id: string
        name: string
        session: Omit<Session, 'speakers'> & {
            speakers: {
                id: string
                name: string
            }[]
            categories: {
                id: number
                name: string
                categoryItems: {
                    id: string
                    name: string
                }[]
                sort: number
            }[]
        }
        index: number
    }[]
}
