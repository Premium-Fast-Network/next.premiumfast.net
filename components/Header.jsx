export default function Header() {
    return (
        <div className="pt-24">
            <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                    <p className="uppercase tracking-loose w-full">Hi.. Apa kabar?</p>
                    <h1 className="my-4 text-5xl font-bold leading-tight">Selamat datang.</h1>
                    <p className="leading-normal text-2xl mb-8">Premium Fast Network menyediakan berbagai produk seperti RDP
                        User, KVM VPS, VPN, Seedbox, Whatsapp Gateway dan masih banyak lagi. Jangan ragu untuk chat, jika
                        punya pertanyaan tentang produk kami.</p>

                    <a className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
                        href="#">
                        Register
                    </a>
                </div>
                <div className="w-full md:w-3/5 py-6 text-right">
                    <img className="w-full md:w-4/5 z-50" src="/img/undraw_business_shop.svg" />
                </div>
            </div>
        </div>
    )
}