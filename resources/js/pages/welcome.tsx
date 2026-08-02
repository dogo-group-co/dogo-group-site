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
                        <div className="flex items-center gap-2.5 rounded-full border border-line bg-white px-5 py-2.5 text-sm">
                            <span className="inline-block size-2 rounded-full bg-ink" />
                            <span>Primer mazo: Chino 中文 — muy pronto</span>
                        </div>
                        <h1 className="max-w-[16ch] text-4xl leading-tight font-normal text-balance uppercase sm:text-6xl">
                            Un idioma, carta a carta.
                        </h1>
                        <p className="max-w-[44ch] text-lg text-pretty text-mist">
                            Mazos de cartas para aprender vocabulario de verdad: una palabra por carta, una carta a la
                            vez.
                        </p>
                        <a
                            href="https://wa.me/59898100448?text=%C2%A1Hola!%20Quiero%20pedir%20un%20mazo%20de%20Dogo%20Group."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 flex items-center gap-3 rounded-full bg-seal px-7 py-3.5 text-base text-white no-underline transition-colors hover:bg-seal-dark hover:text-white hover:no-underline"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                            </svg>
                            <span>Pedir un mazo</span>
                        </a>
                    </section>

                    <section className="flex flex-col items-center gap-5">
                        <div className="group h-[400px] w-60 perspective-[1200px]">
                            <div className="relative size-full transition-transform duration-500 transform-3d group-hover:rotate-y-180">
                                <div className="absolute inset-0 flex flex-col gap-2 rounded-[20px] border border-line bg-white p-4 shadow-[0_12px_32px_rgba(17,17,17,0.08)] backface-hidden">
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
                                <div className="absolute inset-0 flex rotate-y-180 flex-col gap-2 rounded-[20px] border border-line bg-white p-4 shadow-[0_12px_32px_rgba(17,17,17,0.08)] backface-hidden">
                                    <div className="flex min-h-0 flex-1 items-center justify-center">
                                        <span className="font-hanzi text-8xl leading-none font-semibold">狮子</span>
                                    </div>
                                    <div className="pb-6 text-center">
                                        <span className="font-lato text-4xl tracking-[0.02em]">shīzi</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-[13px] text-stone">Pasá el mouse por la carta para darla vuelta</p>
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
