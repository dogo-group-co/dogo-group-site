import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Dogo Group — Un idioma, carta a carta">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Anta&family=Jua&family=Lato:wght@400;700&family=Noto+Serif+SC:wght@500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div className="dogo-landing flex min-h-screen flex-col bg-paper font-anta text-ink antialiased">
                <header className="mx-auto flex w-full max-w-[1060px] items-center justify-between px-6 py-8 sm:px-10">
                    <div className="flex items-center gap-3">
                        <img src="/images/logo.svg" alt="Logo Dogo Group" className="size-9 rounded-lg" />
                        <span className="text-sm tracking-[0.14em] uppercase">Dogo Group</span>
                    </div>
                    <span className="text-[13px] tracking-[0.14em] uppercase text-stone">Aprendé jugando</span>
                </header>

                <main className="mx-auto flex w-full max-w-[1060px] flex-1 flex-col items-center gap-14 px-6 pt-10 pb-20 text-center sm:px-10 sm:pt-16">
                    <section className="flex flex-col items-center gap-6">
                        <h1 className="max-w-[16ch] text-4xl leading-tight font-normal text-balance uppercase sm:text-6xl">
                            Un idioma, carta a carta.
                        </h1>
                        <p className="max-w-[44ch] text-lg text-pretty text-mist">
                            Mazos de cartas para aprender vocabulario de verdad: una palabra por carta, una carta a la
                            vez.
                        </p>
                        <div className="mt-2 flex items-center gap-2.5 rounded-full border border-line bg-white px-5 py-2.5 text-sm">
                            <span className="inline-block size-2 rounded-full bg-seal" />
                            <span>Primer mazo: Chino 中文 — muy pronto</span>
                        </div>
                    </section>

                    <section className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
                        <div className="flex h-[400px] w-60 -rotate-3 flex-col gap-2 rounded-[20px] border border-line bg-white p-4 shadow-[0_12px_32px_rgba(17,17,17,0.08)] transition-transform duration-300 hover:rotate-0">
                            <div className="flex min-h-0 flex-1 items-center justify-center">
                                <img
                                    src="/images/leon.png"
                                    alt="Ilustración de un león"
                                    className="max-h-[80%] max-w-[80%] object-contain"
                                />
                            </div>
                            <div className="pb-6 text-center">
                                <span className="font-lato text-4xl">león</span>
                            </div>
                        </div>
                        <div className="flex h-[400px] w-60 rotate-3 flex-col gap-2 rounded-[20px] border border-line bg-white p-4 shadow-[0_12px_32px_rgba(17,17,17,0.08)] transition-transform duration-300 hover:rotate-0">
                            <div className="flex min-h-0 flex-1 items-center justify-center">
                                <span className="font-hanzi text-8xl leading-none font-semibold">狮子</span>
                            </div>
                            <div className="pb-6 text-center">
                                <span className="font-lato text-4xl tracking-[0.02em]">shīzi</span>
                            </div>
                        </div>
                    </section>

                    <p className="max-w-[52ch] text-[15px] text-pretty text-mist">
                        De un lado, la palabra en español. Del otro, el idioma que estás aprendiendo. Sin apps, sin
                        rachas: papel, tinta y memoria.
                    </p>
                </main>

                <footer className="mx-auto flex w-full max-w-[1060px] flex-wrap justify-between gap-2 border-t border-line px-6 py-6 text-[13px] text-stone sm:px-10">
                    <span>© 2026 Dogo Group</span>
                    <span>Chino — primer mazo · más idiomas pronto</span>
                </footer>
            </div>
        </>
    );
}
