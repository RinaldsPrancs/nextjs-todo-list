import Image from 'next/image'
import akashi from './(content)/akashi.jpg';
import LikesButton from './_components/LikesButton';

export default async function AboutMePage() {

    return (

        <div>
            <h1>Hello, my name is rinalds!</h1>

            <Image
                src={akashi}
                width={200}
                height={200}
                alt="Picture of the author"
            />

            <LikesButton />
        </div>
    )
}