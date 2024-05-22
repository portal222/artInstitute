import React, { useEffect, useState, useContext } from "react";
import axios from 'axios';
import ImageMuzej from "./ImageMuzej";
import { useNavigate } from "react-router-dom";
import ImageBaseMuseum from "./ImageBaseMuseum";
import { useParams } from "react-router-dom";
import GlobalContext from "./GlobalContext";
import SearchCM from "./SearchCM";
import ImageBaseDet from "./ImageBaseDet";
import SearchPlaceCM2 from "./SearchPlaceCM2";
import Loader from "./Loader";
import ImageArtworks from "./ImageArtworks";







const ImageBaseResults = () => {

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
        const LinkTo = `/ImageBaseResults/${pageNum}`;
        navigate(LinkTo);
    }


console.log("ime pretraga",searchStringValue)

    useEffect(() => {
        getImage(searchStringValue);
    }, [])

    const getImage = async (searchStringValue) => {
        const url = `https://api.artic.edu/api/v1/artworks/search?q=${searchStringValue}&page=1&limit=100`;
        // const url = `https://api.artic.edu/api/v1/artists/search?q=${searchStringValue}`;
       
     
        
 

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
        
     
            <table className="tabelaZemlje">
                <thead>
                    <tr >
                        <td  className="nameComm2" colSpan={2}>Chicago Museum 
                        </td>
                    </tr>   
                    <tr>
                        <td className="navod2"> Page: {page.current_page}</td>
                     
                   
                        <td>
                      
                            <div className="butHold">
                                        
                <SearchPlaceCM2 />

                                </div>
                          
                     
                        </td>
                      

                        
                        </tr>  
                   
                </thead>
                {image.map((muzej) => (
                          <ImageArtworks key={muzej.id} imgId={muzej.id} />


                ))}

            </table>
        </>
    )

}
export default ImageBaseResults;