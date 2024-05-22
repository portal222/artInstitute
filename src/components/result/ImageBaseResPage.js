import React, { useEffect, useState, useContext } from "react";
import axios from 'axios';
import ImageMuzej from "./ImageMuzej";
import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";
import GlobalContext from "./GlobalContext";

import SearchPlaceCM2 from "./SearchPlaceCM2";
import Loader from "./Loader";







const ImageBaseResPage = () => {

    const [error, setError] = useState(null);
    const [image, setImage] = useState([]);
    const [page, setPage] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const params = useParams();
    const pageNum = params.pageNum;

    const globalCtx = useContext(GlobalContext);
    const searchStringValue = globalCtx.searchStringValue;

    const navigate = useNavigate();

    const clickPage = (pageNum) => {
        const LinkTo = `/ImageBaseResPage/${pageNum}`;
        navigate(LinkTo);
    }


    console.log("ime pretraga", searchStringValue)

    useEffect(() => {
        getImage(searchStringValue);
    }, [])

    const getImage = async (searchStringValue) => {
        const url = `https://api.artic.edu/api/v1/artworks?page=${searchStringValue}`;

        // const url = `https://api.artic.edu/api/v1/artworks/search?q=${searchStringValue}`;
        // const url = `https://api.artic.edu/api/v1/artists/search?q=${searchStringValue}`;



        // const url = `https://api.api-ninjas.com/v1/city?name=london`
        // const url = `https://api.api-ninjas.com/v1/bucketlist`

        try {
            const response = await axios.get(url)


            const data = response.data;

            console.log("pretraga CM muzej", data);
            console.log("pagination CM", data.pagination);

            setImage(data.data);

            setPage(data.pagination);
            setIsLoading(false);



        } catch (err) {
            setError(err);
        }
    };

    if (isLoading) {
        return (
            <div className="tabelaZemlje">

                <Loader />
            </div>
        )
    }

    return (
        <>
            <h2></h2>
            {/* <h1>{image.item}</h1> */}
            <table className="tabelaZemlje">
                <thead>
                    <tr >
                        <td className="nameComm2" colSpan={2}>Chicago Museum
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>

                            <div className="butHold">
                                <div className="butPage"
                                    onClick={() => clickPage(page.current_page - 10)}>-10</div>
                                <div className="butPage"
                                    onClick={() => clickPage(page.current_page - 1)}>Prev</div>
                                <div className="pageNum">{page.current_page}</div>
                                <div className="butPage"
                                    onClick={() => clickPage(page.current_page + 1)}>Next</div>
                                <div className="butPage"
                                    onClick={() => clickPage(page.current_page + 10)}>+10</div>


                                <div>
                                    <SearchPlaceCM2 />
                                </div>
                            </div>
                        </td>
                    </tr>

                </thead>
                {image.map((muzej) => (
                    <tbody key={muzej.id}>
                        <tr>

                            <td colSpan={2} className="nameComm2">
                                {muzej.artist_display}
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>

                                <ImageMuzej muzej={muzej.image_id} />
                            </td>

                        </tr>
                        <tr>
                            <td className="navod2">
                                Title
                            </td>
                            <td className="nameComm">
                                {muzej.title + " " + muzej.date_display}
                            </td>
                        </tr>
                        <tr>
                            <td className="navod2">Dimension</td>
                            <td className="nameComm">
                                {muzej.dimensions}
                            </td>
                        </tr>

                        <tr>
                            <td className="navod2">Text</td>
                            <td className="nameComm">
                                {muzej.thumbnail?.alt_text}
                            </td>
                        </tr>
                        <tr>
                            <td className="navod2">Medium</td>
                            <td className="nameComm">
                                {muzej.medium_display?.[0]}
                            </td>
                        </tr>
                        <tr>
                            <td className="navod2">
                                Material
                            </td>
                            <td className="nameComm">
                                {muzej.material_titles}
                            </td>
                        </tr>
                        <tr>
                            <td className="navod2">Description </td>
                            <td className="nameComm" dangerouslySetInnerHTML={{ __html: muzej.description }}></td>
                        </tr>
                        <tr>
                            <td className="navod2">
                                Place of origin
                            </td>
                            <td className="nameComm">
                                {muzej.place_of_origin}
                            </td>
                        </tr>
                        <tr>


                            <td className="navod2">
                                Credit
                            </td>
                            <td className="navod2">
                                {muzej.credit_line}
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <hr></hr>
                            </td>
                        </tr>

                        {/* <ImageBaseDet apiLink = {muzej.api_link}/> */}
                    </tbody>

                ))}
                <tbody>
                    <tr>
                        <td colSpan={2}>

                            <div className="butHold">
                            <div className="butPage"
                                    onClick={() => clickPage(page.current_page - 10)}>-10</div>
                                <div className="butPage"
                                    onClick={() => clickPage(page.current_page - 1)}>Prev</div>
                                <div className="pageNum">{page.current_page}</div>
                                <div className="butPage"
                                    onClick={() => clickPage(page.current_page + 1)}>Next</div>
                                <div className="butPage"
                                    onClick={() => clickPage(page.current_page + 10)}>+10</div>

                            </div>
                        </td>
                    </tr>
                </tbody>

            </table>
        </>
    )

}
export default ImageBaseResPage;