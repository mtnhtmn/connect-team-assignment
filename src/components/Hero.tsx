import React, {useEffect, useState} from 'react';
import {Box} from "@mui/material";
import {ReactComponent as Logo} from '../assets/logo.svg';

export interface IHero {
    data?: {
        url: string
    }
}

const Hero = ({data}: IHero) => {
    const [image, setImage] = useState<any>('')
    const [content, setContent] = useState<any>('')


    useEffect(() => {
        const getImage = async () => {
            const data = await fetch('https://connecteam.com/static/frontend-home-task/jpg/home-large.jpg', {mode: 'cors'})
            setImage(data.url)
        }

        getImage()
    }, [])

    useEffect(() => {
        const getContent = async () => {
            await fetch('https://connecteam.com/static/frontend-home-task/data/footer.json')
                .then(response => response.json())
                .then((jsonData) => {
                    setContent(jsonData)
                    console.log(jsonData)
                }).catch((e) => {
                    console.log(e)
                })
        }

        getContent()
    }, [])

    console.log(image)
    console.log(content)

    return (
        <Box sx={{
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'relative',
            display: 'flex',
            height: '920px',
            width: '100%',
        }}>
            <Box sx={{
                marginLeft: '388px'
            }}>
                <Logo fill={'white'}/>
            </Box>
        </Box>
    );
};

export default Hero;