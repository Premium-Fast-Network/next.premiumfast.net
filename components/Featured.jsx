import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

// inject fab to react
library.add(fab, fas)

export default function Featured(props) {
    const lists = props.lists

    return (
        <section className="bg-white border-b py-8">
            <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
                <h1 className="w-full my-2 text-2xl lg:text-4xl font-bold leading-tight text-center text-gray-800">
                    Features
                </h1>
                <div className="w-full mb-4">
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>

                <div className="flex flex-wrap">

                    {
                        lists.map((list, index) => (
                            <div key={`featurelist-${index}`} id={`featurelist-${index}`} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4">
                                <div className="text-center text-sm">
                                    <div className="text-5xl theme-font-color">
                                        <FontAwesomeIcon icon={list.icon} />
                                    </div>
                                    <p className="text-xl font-bold theme-font-color">{list.name}</p>
                                    <p>{list.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}