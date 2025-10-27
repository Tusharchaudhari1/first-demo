export interface Mentor {
  id: string;
  name: string;
  role: string;
  company: string;
  expertise: string[];
  rating: number;
  sessions: number;
  price: number;
  available: boolean;
  bio: string;
  experience: number;
  education: string;
  languages: string[];
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  salary: string;
  description: string;
  requirements: string[];
  skills: string[];
  stream: string;
  postedDate: string;
  remote: boolean;
}

export interface Assessment {
  id: string;
  type: "aptitude" | "logical" | "personality";
  questions: Question[];
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer?: number;
  category: string;
}

export interface Booking {
  id: string;
  mentorId: string;
  userId: string;
  date: string;
  time: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  notes?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "student" | "mentor";
  avatar?: string;
  skills?: string[];
  targetCareer?: string;
}

export interface Course {
  id: string;
  title: string;
  provider: string;
  duration: string;
  level: string;
  skills: string[];
  url: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedDate?: string;
}
