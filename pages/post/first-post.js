import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost(){
    return (
        <>
        <Head>
            <title>First Post</title>
            <script 
                src='https://connect.facebook.net/en_US/sdk.js'
                stranegy = "lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
        </Head>
        <h2>
            <Link href="/">Back to home</Link>
        </h2>
        <Image
            src="/images/profile.png"
            height = {144}
            width = {144}
            alt = "Your Name"
        />
        <Layout/>
        </>
        )
}