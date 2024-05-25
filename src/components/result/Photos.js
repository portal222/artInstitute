import React from "react";

const Photos = (props) => {




    const image = `https://www.artic.edu/iiif/2/${props.photos}/full/843,/0/default.jpg`
    const imageAlt = `https://www.artic.edu/iiif/2/${props.photoAlt}/full/843,/0/default.jpg`




    return (
        <>

            <div className="image">
                <img src={image} alt="no picture" />
                <img src={imageAlt} />

            </div>
        </>
    )

}
export default Photos;