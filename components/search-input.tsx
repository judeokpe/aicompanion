import { Search } from "lucide-react";
import { Input } from "./ui/input";

const SearchInput = () => {
    return ( 
        <div className="relative shadow-6">
                <Search className="absolute h-4 w-4 top-3 left-4 text-muted-foreground " />
                <Input 
                placeholder="Search ..."
                className="bg-primary/10 pl-10"
                />     
        </div>
     );
}
 
export default SearchInput;