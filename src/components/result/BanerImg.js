import React from "react";
import Baner from "../../../public/assets/img/baner.png";
import Baner2 from "../../../public/assets/img/baner2.png";
import Baner3 from "../../../public/assets/img/baner3.png";
import Baner4 from "../../../public/assets/img/baner4.png";
import Baner5 from "../../../public/assets/img/baner5.png";
import Baner6 from "../../../public/assets/img/baner6.png";






const BanerImg = () => {


    const image = [Baner, Baner2, Baner3, Baner4, Baner5, Baner6 ]

    const random = Math.floor(Math.random() * image.length);
    return (
        <>
            <img src={image[random]} />
        </>
    )

}
export default BanerImg;