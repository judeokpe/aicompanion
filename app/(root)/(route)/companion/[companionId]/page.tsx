import prismadb from "@/lib/prismadb";
import { CompanionionForm } from "./components/companion-form";

interface companionIdPageProp{
    params: {
        companionId: string;
    };
};



const CompanionIdPage = async({params}:companionIdPageProp) => {

    // To do: check subscription
    const companion = await prismadb.companion.findUnique(
        {where: {id:params.companionId}}
    );
    if(!companion) return;
    const categories =await prismadb.category.findMany();
    return ( 
        <CompanionionForm 
        initialData = {companion}
        categories={categories}
        />
     );
}
 
export default CompanionIdPage;