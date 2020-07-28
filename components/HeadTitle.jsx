import Head from 'next/head'
import { Website } from '../config/Website'
import { withRouter } from 'next/router'

function HeadTitle(props) {
    const customHead = props.customHead
    const webRoute = props.router

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <title>{customHead.title} - {Website.name}</title>
                <meta name="description" content={customHead.description ?? ''} />
                <meta name="keywords" content={customHead.keywords ?? ''} />
                <meta name="author" content={Website.name} />
                <meta property="og:site_name" content={Website.name} />
                <meta property="og:url" content={`${Website.domain}${webRoute.pathname}`} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={`${customHead.title} - ${Website.name}`} />
                <meta property="og:description" content={customHead.description ?? ''} />
                <meta property="og:image" content={`${Website.domain}${customHead.image ?? ''}`} />
                <meta name="twitter:card" content="website" />
                <meta name="twitter:site" content={`@${Website.social.twitter.name}`} />
                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index,follow" />
            </Head>
        </>
    )
}

export default withRouter(HeadTitle)