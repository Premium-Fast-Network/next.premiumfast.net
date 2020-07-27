import Head from 'next/head'
import { Website } from '../config/Website'

export default function HeadTitle(props) {
    const customHead = props.customHead

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>{customHead.title} - {Website.name}</title>
                <meta name="description" content={customHead.description ?? ''} />
                <meta name="keywords" content={customHead.keywords ?? ''} />
                <meta name="author" content={Website.name} />
            </Head>
        </>
    )
}