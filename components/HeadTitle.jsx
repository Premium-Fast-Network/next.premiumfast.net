import Head from 'next/head'
import { Website } from '../config/Website'

export default function HeadTitle(props) {
    return (
        <>
            <Head>
                <title>{props.customHead.title} - {Website.name}</title>
            </Head>
        </>
    )
}