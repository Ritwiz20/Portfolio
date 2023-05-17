import React from 'react'
import { BsTwitter, BsInstagram,BsLinkedin, BsGithub } from 'react-icons/bs';


const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>

                <a href='https://twitter.com/_RitwizSingh' target="blank">
                    <BsTwitter />
                </a>
            </div>

            <div>
                <a href='https://www.instagram.com/ritwizsingh/' target='blank'>
                    <BsInstagram />
                </a>
            </div>

            <div>
            <a href='https://www.linkedin.com/in/ritwizsingh/' target='blank'>
                <BsLinkedin />
                </a>
            </div>
            <div>
            <a href='https://www.github.com/Ritwiz20/' target='blank'>
                <BsGithub />
                </a>
            </div>
        </div>
    )
}
export default SocialMedia
