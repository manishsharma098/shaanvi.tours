export type Tour = {
  id: string;
  slug: string;
  title: string;
  location: string;
  duration: string;
  rating: number;
  reviews: number;
  price: number;
  description: string;
  highlights: string[];
};

export const tours: Tour[] = [
  { id: "1", slug: "goa-coastal-retreat", title: "Goa Coastal Retreat", location: "Goa", duration: "3 Days", rating: 4.8, reviews: 134, price: 14999, description: "Relax at premium beachfront stays with curated local activities.", highlights: ["Beach stay", "Sunset cruise", "Local cuisine"] },
  { id: "2", slug: "jaipur-heritage-walk", title: "Jaipur Heritage Walk", location: "Rajasthan", duration: "2 Days", rating: 4.7, reviews: 98, price: 11999, description: "Explore forts, palaces, and vibrant markets with local guides.", highlights: ["Amber Fort", "City Palace", "Handicraft bazaar"] },
  { id: "3", slug: "kerala-backwater-escape", title: "Kerala Backwater Escape", location: "Kerala", duration: "4 Days", rating: 4.9, reviews: 176, price: 18999, description: "Houseboat experience with serene backwaters and village trails.", highlights: ["Houseboat", "Village tour", "Ayurvedic spa"] },
];

export const destinations = ["Goa", "Jaipur", "Munnar", "Leh", "Manali", "Andaman"];

export const bookings = [
  { id: "B-2043", type: "Tour", title: "Goa Coastal Retreat", date: "2026-05-18", status: "Confirmed", amount: 14999 },
  { id: "B-2044", type: "Taxi", title: "Airport Drop - Delhi", date: "2026-04-06", status: "Pending", amount: 1200 },
];

export const adminStats = [
  { label: "Total Bookings", value: "1,284" },
  { label: "Active Tours", value: "42" },
  { label: "Taxi Requests", value: "368" },
  { label: "Cancellation Queue", value: "17" },
];
