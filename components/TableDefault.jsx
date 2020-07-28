import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

export default function TableDefault(props) {
    const title = props.title ?? 'Harga Langganan'
    const products = props.products

    return (
        <section className="bg-gray-100 py-8">
            <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
                <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                    {title}
                </h1>
                <div className="w-full mb-4">
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
                    {
                        products.map((product, index) => {
                            return (
                                <div key={`product-${index}`} id={`product-${index}`} className={`flex flex-col w-5/6 mx-auto lg:mx-0 ${product.featured == true ? 'lg:w-1/4 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10' : 'lg:w-1/4 rounded-none lg:rounded-l-lg bg-white mt-4'}`}>
                                    <div className={`flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow ${product.featured == true ? '' : 'text-gray-700'}`}>
                                        <div className={`${product.featured == true ? 'w-full p-8 text-3xl' : 'p-8 text-3xl border-b-4'} font-bold text-center`}>{product.name}</div>
                                        <div className={`${product.featured == true ? 'h-1 w-full gradient my-0 py-0 rounded-t' : ''}`}></div>
                                        <ul className={`w-full text-center ${product.featured == true ? 'text-base font-bold' : 'text-sm'}`}>
                                            {
                                                product.description.map((desc, index) => (
                                                    <li key={`productdesc-${index}`} id={`productdesc-${index}`} className="border-b py-4">{desc}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                                        <div className={`w-full pt-6 ${product.featured == true ? 'text-4xl font-bold text-center' : 'text-2xl text-gray-600 font-bold text-center'}`}>
                                            {product.price}<span className="text-base">{product.duration}</span>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <a href={product.link} className="mx-auto lg:mx-0 hover:bg-green-800 bg-green-500 text-white font-bold rounded-full my-6 py-2 px-4 shadow-lg">
                                                <FontAwesomeIcon icon={faCartPlus} /> Buy Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}