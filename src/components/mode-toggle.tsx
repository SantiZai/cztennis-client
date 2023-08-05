import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import RG from "/rg-logo.svg";
import US from "/us-logo.svg";

export function ModeToggle() {
    const { setTheme } = useTheme();

    return (
        <Button
            variant="outline"
            size="icon"
        >
            <img
                src={RG}
                onClick={() => setTheme("dark")}
                className="h-full w-full rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            />
            <img
                src={US}
                width="100px"
                onClick={() => setTheme("light")}
                className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            />
        </Button>
    );
}
