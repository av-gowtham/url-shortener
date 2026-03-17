import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <div>
            <main className="min-h-screen container ">
                <Header />
                <Outlet />
            </main>
            <footer className="bg-gray-800 text-gray-300 mt-10">
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm">Connect with me</p>

                        <ul className="flex gap-6 text-sm">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">© {new Date().getFullYear()} Ziplnkr. All rights reserved.</div>
                </div>
            </footer>
        </div>
    );
};

export default AppLayout;
