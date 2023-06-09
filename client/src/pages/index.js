import Head from 'next/head'
import {Inter} from 'next/font/google'
import Hero from '@component/pages/hero';
import Products from '@component/pages/products';

const inter = Inter({subsets: ['latin']})

export default function Home() {
    // const snap = useSnapshot(state)
    return (
        <>
            <Head>
                <title>Triggle test</title>
                <meta name='description' content='Generated by create next app'/>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <link rel='icon' href='/triggle.svg'/>
            </Head>
            <main>
                <Hero/>
                <Products/>
            </main>
        </>
    )
}
