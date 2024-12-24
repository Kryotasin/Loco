import Header from "@/app/components/header";

const Landing = () => {

    return (
        <div className="bg-white dark:bg-slate-800  h-screen w-screen">
            <div className="h-screen">
                <div className="bg-grey-200 dark:bg-slate-700 h-16">
                    <div className="px-9 py-3">
                        <Header />
                    </div>
                </div>
                <div className="px-9 py-5">
                    You need to sign in
                </div>
            </div>
        </div>
    );
}

export default Landing;