import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// export const API_URL="http://localhost:8080/api/v1"
export const API_URL="https://altbucks-server.onrender.com/api/v1"