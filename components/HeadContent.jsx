import Particle from './Particle'

export default function HeadContent(props) {
    return (
        <>
            <div className="pt-16">
                {props.children}
            </div>

            <div className="relative -mt-12 lg:-mt-24">
            <img src="/img/head.svg"></img>
            </div>
        </>
    )
}