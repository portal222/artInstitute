import React from "react";

const BanerImg = () => {


    const image = ["../baner.png", "../baner2.png", "../baner3.png", "../baner4.png", "../baner5.png", "../baner6.png"]

const random = Math.floor(Math.random() * image.length);
    return (
        <>
        <img src={image[random]} />
        </>
    )

}
export default BanerImg;