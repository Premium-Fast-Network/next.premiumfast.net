import Head from 'next/head'
import { Website } from '../config/Website'
import { useState, useEffect } from 'react'

export default function HeadTitle(props) {
    const customHead = props.customHead

    const [ hostweb, setHostweb ] = useState(0)

    useEffect(() => {
        // location
        setHostweb(window.location)
    })

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>{customHead.title} - {Website.name}</title>
                <meta name="description" content={customHead.description ?? ''} />
                <meta name="keywords" content={customHead.keywords ?? ''} />
                <meta name="author" content={Website.name} />
                <meta property="og:site_name" content={Website.name} />
                <meta property="og:url" content={hostweb.href} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={`${customHead.title} - ${Website.name}`} />
                <meta property="og:description" content={customHead.description ?? ''} />
                <meta property="og:image" content={`${hostweb.origin}${customHead.image ?? ''}`} />
                <meta name="twitter:card" content="website" />
                <meta name="twitter:site" content={`@${Website.social.twitter.name}`} />
                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index,follow" />
            </Head>
        </>
    )
}