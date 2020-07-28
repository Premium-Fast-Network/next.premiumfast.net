import Head from 'next/head'
import { Website } from '../config/Website'
import { withRouter } from 'next/router'

function HeadTitle(props) {
    const customHead = props.customHead

    // get now location
    const location = props.router

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>{customHead.title} - {Website.name}</title>
                <meta name="description" content={customHead.description ?? ''} />
                <meta name="keywords" content={customHead.keywords ?? ''} />
                <meta name="author" content={Website.name} />
                <meta property="og:url" content={location.route} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={`${customHead.title} - ${Website.name}`} />
                <meta property="og:description" content={customHead.description ?? ''} />
                <meta property="og:image" content={customHead.image ?? ''} />
                <meta name="twitter:title" content={`${customHead.title} - ${Website.name}`} />
                <meta name="twitter:description" content={customHead.description ?? ''} />
                <meta name="twitter:image" content={customHead.image ?? ''} />
                <meta name="twitter:card" content="website" />
            </Head>
        </>
    )
}

export default withRouter(HeadTitle)