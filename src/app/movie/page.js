import styles from '@/app/styles/common.module.css'

import MovieCard from '@/app/components/MovieCard';

const Page = async () => {

    const url = process.env.API_URL;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9798f019d8msha50e04671a5732ap12eb9ejsnd94c3821a1a3',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);

    const data = await res.json();
    const main_data = data.titles;



    return (
        <section className={styles.movieSection}>
            <div className={styles.container}>
                <h1>Series & Movies</h1>
                <div className={styles.card_section}>
                    {
                        main_data.filter((item) => item.jawSummary.backgroundImage.imageKey !== 'unavailable').map((movie) => <MovieCard key={movie.id} {...movie} />)
                    }
                </div>

            </div>

        </section>
    )
}

export default Page;
