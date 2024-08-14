import { useGSAP } from '@gsap/react'
import React, { useRef, useState } from 'react'
import ModelVeiw from './ModelVeiw'

const MOdel = () => {

    const [size,setSize] = useState('small')
    const[Model,setModel] = useState({
        title:'iphone 15 pro in natural Titanium',
        color:['#8F8A81','#FFE7B9','#6F6C64'],
        img:yellowImg
    })

    //camera control for the model view

    const cameraControlSmall = useRef()
    const cameraControlLarge = useRef()
    const small = useRef(new Three.Group())








    useGSAP(() => {
        gsap.to("#heading", { y: 0, opacity: 1 })
    }, [])

    

    return (

        <section className='common-padding'>
            <div className='screen-max-width'>
                <h1 id='heading' className='section-heading'>
                    Take a closer look
                </h1>
                <div className='flex flex-col items-center mt-5'>
                    <div className='w-full h-[75vh] md:h-[90vh] overflow-hidden relative'>
                        <ModelVeiw />

                    </div>
                </div>
            </div>
        </section> 
    )
}

export default MOdel