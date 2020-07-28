import Particles from 'react-particles-js'

export default function Particle() {
    return (
        <Particles
            style={{ width: '100%', position: 'absolute', zIndex: '-1' }}
            params={{
                "particles": {
                    "number": {
                        "value": 25
                    },
                    "size": {
                        "value": 3
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                }
            }} />
    )
}