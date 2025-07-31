export default function Country({ flag, name, population, region, capital, isDark }) {
    const classes = {
        light: {
            card: 'bg-white shadow-lg shadow-neutral-200',
            name: 'text-grey-925',
            meta: 'text-grey-925'
        },
        dark: {
            card: 'bg-slate-750 shadow-lg shadow-slate-800',
            name: 'text-white',
            meta: 'text-white'
        }
    }

    const modeClasses = isDark ? classes.dark : classes.light

    return (
        <article
            className={`lg:mb-0 rounded-lg ${modeClasses.card}`}
        >
            <div 
                className="aspect-[16/10] bg-center bg-cover bg-no-repeat overflow-hidden rounded-t-lg"
                style={{ backgroundImage: `url('${flag.svg}')` }}></div>

            <div className="pb-9 pt-6 px-6 md:py-6">
                <h2 className={`font-extrabold mb-0 text-base ${modeClasses.name}`}>
                    {name}
                </h2>

                <ul className={`text-sm ${modeClasses.meta}`}>
                    <li className="mb-1">
                        <span className="font-semibold">Population</span>: <span className="font-light">{population}</span>
                    </li>
                    <li className="mb-1">
                        <span className="font-semibold">Region</span>: <span className="font-light">{region}</span>
                    </li>
                    <li>
                        <span className="font-semibold">Capital</span>: <span className="font-light">{capital}</span>
                    </li>
                </ul>
            </div>
        </article>
    )
}
