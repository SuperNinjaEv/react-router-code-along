import { useNavigate } from "react-router-dom";

export default function NewsLetter() {

    const navigate = useNavigate();

    function handleAbout(){
        navigate('/about')
        console.log("Aboot Aboot")
    }

    return (
        <section><h3>Sign Up For Our Newsletter</h3>
            <button onClick={handleAbout}>Sign me up for hourly updates!</button>
        </section>

    );
  };