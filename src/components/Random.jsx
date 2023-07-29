import React from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

  const { gif, loading, fetchData } = useGif();

  
  // const [gifs, setGifs] = useState('');
  
  // async function fetchdata() {
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  //   const output = await axios.get(url);
  //   console.log(output);
  // }

  // useEffect( ()=> {
  //   fetchData();
  // }, [])




  return (
    <div className="flex flex-col items-center bg-green-500 md:w-1/2 w-11/12 rounded-lg border-2 border-gray-600 gap-y-5 mt-[15px] mx-auto py-5">
      <h2 className="uppercase font-bold text-2xl underline ">a random gif</h2>
      {loading ? <Spinner /> : <img src={gif} width="450" />}
      <button
        onClick={() => fetchData()}
        className="uppercase bg-[#F0F0F0] w-10/12 rounded-lg font-normal py-2 text-xl">
        Generate
      </button>
    </div>
  );
};

export default Random;
