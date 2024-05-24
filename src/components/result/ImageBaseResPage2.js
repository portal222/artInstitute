import React, { useEffect, useState, useContext } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import GlobalContext from "../GlobalContext";
import Loader from "../Loader";
import Photo from "./photo";
import TableRow from "./TableRow";
import SearchPlace from "../search/SearchPlace";







const ImageBaseResPage2 = () => {

    const [error, setError] = useState(null);
    const [image, setImage] = useState([]);
    const [page, setPage] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const globalCtx = useContext(GlobalContext);
    const searchStringValue = globalCtx.searchStringValue;

    const navigate = useNavigate();

    const clickPage = (pageNum) => {
        const LinkTo = `/ImageBaseClick/${pageNum}`;
        navigate(LinkTo);
    }


    console.log("ime pretraga", searchStringValue)

    useEffect(() => {
        getImage(searchStringValue);
    }, [])

    const getImage = async (searchStringValue) => {
        const url = `https://api.artic.edu/api/v1/artworks?page=${searchStringValue}`;

        try {
            const response = await axios.get(url)


            const data = response.data;

            console.log("pretraga CM museum", data);
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
            <div className="main">

                <div className="home">
                    {/* <SearchPlace /> */}
                    <Loader />
                </div>

            </div>
        )
    }

    return (
        <>


            <table className="main">
                <thead>
                    <tr>
                        <td className="home">
                            <SearchPlace />
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
                            </div>
                        </td>
                    </tr>

                </thead>
                {image.map((museum) => (
                    <tbody key={museum.id}>

                        <tr>
                            <td className="image">

                                <Photo photos={museum.image_id} />
                            </td>

                        </tr>
                        <tr>

                            <td className="name">
                                {museum.title + " " + museum.date_display}
                            </td>
                        </tr>
                        <tr>

                            <td colSpan={2} className="artist">
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
export default ImageBaseResPage2;