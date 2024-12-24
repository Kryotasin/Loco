import Header from "@/app/components/header";

export default function Dashboard() {
    return (
        <div className="bg-white dark:bg-slate-800  h-screen w-screen">
            <div className="grid grid-cols-12">
                <div className="md:col-span-4 lg:col-span-2 bg-grey-200 dark:bg-slate-900 h-screen px-5 py-5">
                    <div className="h-14">
                        Logo
                    </div>
                    <div>
                        Logo
                    </div>
                </div>
                <div className="md:col-span-8 lg:col-span-10 h-screen">
                    <div className="bg-grey-200 dark:bg-slate-700 h-16">
                        <div className="px-9 py-3">
                            <Header />
                        </div>
                    </div>
                    <div className="px-9 py-5">
                        Content
                    </div>
                </div>
            </div>
        </div>
    );
}




