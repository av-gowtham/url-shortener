import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { LinkIcon, LogOutIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { UrlState } from "@/context";
import useFetch from "@/hooks/use-fetch";
import { logout } from "@/db/apiAuth";
import { BarLoader } from "react-spinners";

const Header = () => {
    const navigate = useNavigate();
    const { user, fetchUser } = UrlState();

    const { loading, fn: fnLogout } = useFetch(logout());

    return (
        <>
            <nav className="py-4  flex justify-between items-center">
                <Link>
                    <img src="/logo.png" alt="Ziplnks logo" className="h-16" />
                </Link>

                <div>
                    {!user ? (
                        <Button onClick={() => navigate("/auth")}>Login</Button>
                    ) : (
                        <DropdownMenu>
                            <DropdownMenuTrigger className="w-10 h-10 rounded-full overflow-hidden cursor-pointer" asChild>
                                <Avatar>
                                    <AvatarImage src={user.user_metadata?.profile_pic} className="object-contain" />
                                    <AvatarFallback>AV</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>{user?.user_metadata?.name}</DropdownMenuLabel>

                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <Link to={"/dashboard"} className="flex items-center">
                                        <LinkIcon className="mr-2 h-4 w-4" />
                                        <span>My Links</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-400">
                                    <LogOutIcon className="mr-2 h-4 w-4" />
                                    <span
                                        onClick={() => {
                                            fnLogout().then(() => {
                                                fetchUser();
                                                navigate("/");
                                            });
                                        }}
                                    >
                                        Logout
                                    </span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )}
                </div>
            </nav>
            {loading && <BarLoader className="mb-4" width="100%" color="#36d7b7" />}
        </>
    );
};

export default Header;
