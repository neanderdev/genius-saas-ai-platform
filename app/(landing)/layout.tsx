export default async function LandingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="h-full bg-[#111827] overflow-auto">
            <div className="w-full h-full max-w-screen-xl mx-auto">
                {children}
            </div>
        </main>
    );
}
