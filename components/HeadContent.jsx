export default function HeadContent(props) {
    
    return (
        <>
            <div className="pt-16">
                <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    <div className="flex flex-wrap flex-col-reverse sm:flex-row justify-center items-start">
                        <div className="w-full sm:w-1/2 py-6 text-center md:text-left">
                            <h1 className="my-4 text-2xl md:text-4xl font-bold leading-tight">
                                {props.title}
                            </h1>
                            <p className="leading-normal text-xl md:text-2xl mb-8">{props.description}</p>

                            {props.children}
                        </div>
                        <div className="w-full sm:w-1/2 py-6 text-center md:text-right">
                            <img className="w-full sm:h-64 mx-auto" src={props.imageSvg} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative -mt-12 lg:-mt-24">
            <img src="/img/head.svg"></img>
            </div>
        </>
    )
}