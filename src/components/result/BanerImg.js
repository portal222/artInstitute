import React from "react";

const BanerImg = () => {


    const image = ["../../../img/baner.png", "../../../img/baner2.png", "../../../img/baner3.png", "../../../img/baner4.png", "../../../img/baner5.png", "../../../img/baner6.png"]

const random = Math.floor(Math.random() * image.length);
    return (
        <>
        <img src={image[random]} />
        </>
    )

}
export default BanerImg;