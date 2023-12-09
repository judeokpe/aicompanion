import SearchInput from "@/components/search-input";
import {
  UserButton,
} from "@clerk/nextjs";
export default function Home() {
  return (
   <main className="h-full p-4 space-y-2 bg-secondary/10">
    <SearchInput/>
   </main>
  )
}
