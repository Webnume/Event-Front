import Image from "../Image/Image";
import loader from "../../assets/loader.gif";

function Loader() {
  return (
    <div>
    <Image url={loader} alt="loader" loader></Image>
    This app is on a free hosting , so it may take a few seconds to wake up ...
  </div>
  )
}

export default Loader