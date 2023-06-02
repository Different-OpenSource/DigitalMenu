import Image from 'next/image'
import styles from './banner.module.css'
import { useState, useEffect } from 'react';
import IconButton from '../iconButton/iconButton'

function Banner({ imageList }) {
    const [selectedBanner, setSelectedBanner] = useState(0);

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

    useEffect(() => {

    }, [imageList]);

    return (
        <div className={styles.container}>
            <IconButton path="/icons/left-arrow24px.svg" onClick={previousBanner} />
            <Image
                src={imageList[selectedBanner]}
                alt="Banner image"
                width={1000}
                height={400}
                priority
            />
            <IconButton path="/icons/right-arrow24px.svg" onClick={nextBanner} />
        </div>
    )
}

export default Banner;
