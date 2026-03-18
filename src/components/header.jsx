import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { LinkIcon, LogOutIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { UrlState } from "@/context";

const Header = () => {
    const navigate = useNavigate();
    const { user, fetchUser } = UrlState();

    return (
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
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>AV</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Gowtham A V</DropdownMenuLabel>

                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <LinkIcon className="mr-2 h-4 w-4" />
                                <span>My Links</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-400">
                                <LogOutIcon className="mr-2 h-4 w-4" />
                                <span>Logout</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )}
            </div>
        </nav>
    );
};

export default Header;
