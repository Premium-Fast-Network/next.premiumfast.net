export default function HeadContent(props) {
    
    return (
        <>
            <div className="pt-16">
                <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                        <h1 className="my-4 text-2xl md:text-4xl font-bold leading-tight">
                            {props.title}
                        </h1>
                        <p className="leading-normal text-xl md:text-2xl mb-8">{props.description}</p>

                        {props.children}

                    </div>
                    <div className="w-full md:w-3/5 py-6 text-right">
                        <img className="w-full md:w-4/5 z-50" src={props.imageSvg} />
                    </div>
                </div>
            </div>

            <div className="relative -mt-12 lg:-mt-24">
            <img src="/img/head.svg"></img>
            </div>
        </>
    )
}