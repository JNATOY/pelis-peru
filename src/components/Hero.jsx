const Hero = () => {
    return (
        <section className="relative h-[75vh] flex items-center justify-center">
            <img
                src="https://i.postimg.cc/nVSDTLgy/portada.png"
                alt="Pelis peru"
                width={1400}
                height={400}
                className="absolute -z-10 top-0 left-0 w-full h-full object-cover"
            />
            <div className="container mx-auto">
                <h1 className="text-4xl text-center font-black"></h1>
            </div>
        </section>
    );
};

export default Hero;