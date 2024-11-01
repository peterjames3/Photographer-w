'use client';
import Image from 'next/image';
export default function ServicesImage() {
    return (
        <section className='wrapper flex justify-center mt-10'>
            <Image
                src='/photographer-capturing-photos-world-photography-day-war-zone-conflict-area.jpg'
                width={900}
                height={700}
                alt='service image'
            />
        </section>
    )
}