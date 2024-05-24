import React from "react";

const Photos = (props) => {




    const image = `https://www.artic.edu/iiif/2/${props.photos}/full/843,/0/default.jpg`




    return (
        <>

            <div className="image">
                <img src={image} alt="no picture" />

            </div>
        </>
    )

}
export default Photos;