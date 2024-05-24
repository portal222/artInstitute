import axios from "axios";
import React, { useEffect, useState } from "react";

import Loader from "../Loader";
import Photo from "./photo";
import TableRow from "./TableRow";


const ImageArtworks = (props) => {

    const [error, setError] = useState(null);

    const [museum, setMuseum] = useState([]);
    const [isLoading, setIsLoading] = useState(true);





    useEffect(() => {
        getFotka()
    }, [])

    const getFotka = async () => {

        const url = `https://api.artic.edu/api/v1/artworks/${props.imgId}`

        try {
            const response = await axios.get(url)

            const data = response.data;
            console.log("prenos broja slike", data)
            setMuseum(data.data)
            setIsLoading(false);

        } catch (err) {
            setError(err);
        }
    };

    if (isLoading) {
        return (
      
            
            <div className="home">
           
                <Loader />
            </div>
   
        )
    }

    return (
        <>

            <tbody >

                <tr>
                    <td>

                        <Photo photos={museum.image_id} />
                    </td>

                </tr>
                <tr>

                    <td className="name">
                        {museum.title + " " + museum.date_display}
                    </td>
                </tr>
                <tr>

                    <td className="artist">
                        {museum.artist_display}
                    </td>
                </tr>


                <tr>

                    <td className="text">
                        {museum.thumbnail?.alt_text}
                    </td>
                </tr>
                <TableRow details={museum} />


                <tr>
                    <td>
                        <hr></hr>
                    </td>
                </tr>

            </tbody>


        </>
    )

}
export default ImageArtworks;