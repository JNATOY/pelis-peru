import { Link } from "react-router-dom";

const Categories = () => {
    const categories = [
        {
            title: 'Peliculas',
            href: '/movies',
            img: 'https://i.postimg.cc/28rQhGhV/desktop-wallpaper-movie-collage-movies-collage.jpg'
        },
        {
            title: 'Series',
            href: '/tv',
            img: 'https://i.postimg.cc/wBXxXXhj/tv-series.jpg'
        },

    ];

    return (
        <section className="py-8">
            <div className="container px-2 mx-auto flexbox flex-col gap-6">
                <h2 className="text">Categorías</h2>
                <div className="g-layout g-layout--1-1 place-items-center place-content-center gap-6">
                    {categories.map((element, index) => {
                        const { title, href, img } = element;
                        return (
                            <Link
                                key={index}
                                to={href}
                                className="rounded-2xl overflow-hidden w-full"
                            >
                                <div className="card-perfil">
                                    <img
                                        src={img}
                                        alt="Herrero"
                                        width={256}
                                        height={256}
                                        className="w-full h-64 object-cover img--border"
                                    />
                                    <div className="bg-sky-900 p-4">
                                        <h3 className="text-2xl font-bold text-center">{title}</h3>
                                    </div>

                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Categories;