import React from 'react'

export default function FAQ(props) {
    const lists = props.lists

    const addLineBreaks = (string) => {
        return string.split('\n').map((text, index) => (
            <React.Fragment key={`br-${index}`}>
            {text}
            <br />
            </React.Fragment>
        ));
    }

    return (
        <section className="bg-white border-b py-8">
            <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
                <h1 className="w-full my-2 text-2xl lg:text-4xl font-bold leading-tight text-center text-gray-800">
                    FAQ Product
                </h1>
                <div className="w-full mb-4">
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>

                <div className="flex flex-wrap">
                    {
                        lists.map((list, index) => (
                            <div key={`faq-${index}`} id={`faq-${index}`} className="w-full sm:w-1/1 md:w-1/2 lg:w-1/2 xl:w-1/2 rounded group">
                                <h3 className="gradient text-white text-sm lg:text-base font-bold rounded my-1 mx-1 py-2 px-2">   
                                    {list.title}
                                </h3>
                                <div className="bg-gray-700 text-white text-justify hidden rounded group-hover:block mx-2 my-2">
                                    <p className="py-2 px-2 text-xs lg:text-sm">{addLineBreaks(list.description)}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}