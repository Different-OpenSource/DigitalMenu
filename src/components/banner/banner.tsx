import Image from 'next/image'
import styles from './styles.module.css'
import { useState } from 'react';
import IconButton from '../iconButton/iconButton'

interface BannerProps {
    imageList: string[];
}

function Banner({ imageList }: BannerProps) {
    const [selectedBanner, setSelectedBanner] = useState<number>(0);

    const nextBanner = () => {
        if (selectedBanner + 1 < imageList.length) {
            setSelectedBanner(selectedBanner + 1)
        }
    }

    const previousBanner = () => {
        if (selectedBanner > 0) {
            setSelectedBanner(selectedBanner - 1)
        }
    }

    return (
        <div className={styles.container}>
            <IconButton path="/icons/left-arrow.svg" onClick={previousBanner} />
            <Image
                src={imageList[selectedBanner]}
                alt="Banner image"
                width={1000}
                height={400}
                priority
            />
            <IconButton path="/icons/right-arrow.svg" onClick={nextBanner} />
        </div>
    )
}

export default Banner;
