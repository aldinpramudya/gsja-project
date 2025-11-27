import Footer from "@/ui/Footer";
import Navbar from "@/ui/Navbar";

export default function UserLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Navbar />
            <main className="">
                {children}
            </main>
            <Footer />
        </div>
    );
}