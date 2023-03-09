import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function Layout({children}) {
    return (
        <div className="min-h-screen flex flex-col pt-6 sm:pt-0 bg-gray-100">
            <div className="flex flex-col flex-1 px-6 gap-6">
                <div className="flex-1">
                    <Header/>
                    {children}
                </div>
                <Footer/>
            </div>
        </div>
    );
}
