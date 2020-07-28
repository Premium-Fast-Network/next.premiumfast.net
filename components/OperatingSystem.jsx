import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

// inject fab to react
library.add(fab, fas)

export default function OperatingSystem() {
    const listOS = [
        {
            name: 'Windows Server',
            icon: ['fab', 'windows'],
            lists: [
                'Windows Server 2012 R2',
                'Windows Server 2016',
                'Windows Server 2019',
            ]
        },
        {
            name: 'CentOS',
            icon: ['fab', 'centos'],
            lists: [
                'CentOS 6 64-bit',
                'CentOS 7 64-bit',
                'CentOS 8 64-bit',
            ]
        },
        {
            name: 'Ubuntu',
            icon: ['fab', 'ubuntu'],
            lists: [
                'Ubuntu 16.04 64-bit',
                'Ubuntu 18.04 64-bit',
                'Ubuntu 20.04 64-bit',
            ]
        },
        {
            name: 'Debian',
            icon: ['fab', 'linux'],
            lists: [
                'Debian 8 64-bit',
                'Debian 9 64-bit',
                'Debian 10 64-bit',
            ]
        },
        {
            name: 'Fedora',
            icon: ['fab', 'fedora'],
            lists: [
                'Fedora 27 64-bit',
            ]
        },
        {
            name: 'openSUSE',
            icon: ['fab', 'suse'],
            lists: [
                'openSUSE 13 64-bit',
            ]
        },
        {
            name: 'ISO',
            icon: ['fas', 'compact-disc'],
            lists: [
                'Netboot.xyz',
                'Mikrotik 6.44',
            ]
        },
    ];

    return (
        <section className="bg-white border-b py-8">
            <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
                <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                    OS (Operating System) Available
                </h1>
                <div className="w-full mb-4">
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>

                <div className="flex flex-wrap">

                    {
                        listOS.map((os, index) => (
                            <div key={`os-${index}`} id={`os-${index}`} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4">
                                <div className="theme-font-color text-center text-sm">
                                    <div className="text-5xl">
                                        <FontAwesomeIcon icon={os.icon} />
                                    </div>
                                    <p className="text-2xl underline">{os.name}</p>
                                    <ul>
                                        {
                                            os.lists.map((list, index) => (
                                                <li key={`oslist-${index}`} id={`oslist-${index}`}>{list}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}