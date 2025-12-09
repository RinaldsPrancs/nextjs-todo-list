

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">

            <header className="flex justify-end items-center p-4 gap-4 h-16">

                

            </header>
            <main className="flex-1 flex">

                {children}

            </main>
        </div>
    );
}