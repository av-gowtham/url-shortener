import Login from "@/components/login";
import Signup from "@/components/signup";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams } from "react-router-dom";

const Auth = () => {
    const [searchPararms] = useSearchParams();

    return (
        <div className="mt-36 flex flex-col items-center gap-10">
            <h1 className="text-3xl sm:text-5xl font-extrabold">{searchPararms.get("createNew") ? "Hold up! Let's login first..." : "Login / Signup"}</h1>

            <Tabs defaultValue="login" className="w-[400px] flex flex-col">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="signup">Signup</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                    <Login />
                </TabsContent>
                <TabsContent value="signup">
                    <Signup />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default Auth;
