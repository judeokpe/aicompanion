import prismadb from "@/lib/prismadb";

interface companionIdPageProp{
    params: {
        companionId: string;
    };
};

const CompanionIdPage = async({params}:companionIdPageProp) => {

    // To do: check subscription
    const companion = await prismadb.companion.findUnique({
        where: {
            id: params.companionId
        }
    });
    return ( 
        <div className="">
            companion
        </div>
     );
}
 
export default CompanionIdPage;