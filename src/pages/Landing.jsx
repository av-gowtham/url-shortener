import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Landing = () => {
    const [longUrl, setLongUrl] = useState();
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const handleShorten = async (e) => {
        e.preventDefault();

        setError({}); // clear previous errors

        const normalizeUrl = (value) => {
            if (!value) return value;
            if (!/^https?:\/\//i.test(value)) {
                return "https://" + value;
            }
            return value;
        };

        try {
            const schema = Yup.object({
                longUrl: Yup.string()
                    .required("URL is required")
                    .transform(normalizeUrl)
                    .test("is-valid-url", "Invalid URL", (value) => {
                        try {
                            new URL(value);
                            return true;
                        } catch {
                            return false;
                        }
                    }),
            });

            await schema.validate({ longUrl }, { abortEarly: false });

            const normalized = normalizeUrl(longUrl);

            navigate(`/auth?createNew=${normalized}`);
        } catch (e) {
            const newErrors = {};
            e?.inner?.forEach((err) => {
                newErrors[err.path] = err.message;
            });
            setError(newErrors);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold">
                The only URL shortener <br /> you&rsquo;ll ever need! 👇🏼
            </h2>

            <form onSubmit={handleShorten} className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2">
                <Input name="url" type="url" placeholder="Enter your looong URL" className="h-full flex-1 py-4 px-4" value={longUrl} onChange={(e) => setLongUrl(e.target.value)} />
                <Button type="submit" className="h-full" variant="destructive">
                    Shorten!
                </Button>
            </form>
            {error?.longUrl && <p className="text-red-600 mt-4">{error.longUrl}</p>}
            <img src="./banner.png" alt="banner" className="w-full my-11 md:px-11" />
        </div>
    );
};

export default Landing;
