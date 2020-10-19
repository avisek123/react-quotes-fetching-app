import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import "./styles.css";
import axios from "axios";

const App = () => {
  const [text, setext] = useState("loading..");
  const [auth, setAuth] = useState("loading");
  //const [fetching, setFetching] = useState(false);
  //let qouteText='';
  //let realData='';

  const getData1 = async () => {
    const url = "https://type.fit/api/quotes";

    const { data } = await axios.get(url); // promise
    //console.log(data[0].text)
    let rnum = Math.floor(Math.random() * 10);
    let qouteText = data[rnum].text;
    let qouteAuth = data[rnum].author;
    setext(qouteText);
    setAuth(qouteAuth == null ? "By " + "unKnown " : "By " + qouteAuth);
  };
  const getData2 = async () => {
    const url = "https://type.fit/api/quotes";

    const { data } = await axios.get(url); // promise
    //console.log(data[0].text)
    let rnum = Math.floor(Math.random() * 10);
    let qouteText = data[rnum].text;
    let qouteAuth = data[rnum].author;
    setext(qouteText);
    setAuth(qouteAuth == null ? "By " + "unKnown " : "By " + qouteAuth);

    let post = `https://twitter.com/intent/tweet?text=${qouteText} By ${qouteAuth}`;
    window.open(post);
  };
  const getData3 = async () => {
    const url = "https://type.fit/api/quotes";

    const { data } = await axios.get(url); // promise
    //console.log(data[0].text)
    let rnum = Math.floor(Math.random() * 10);
    let qouteText = data[rnum].text;
    let qouteAuth = data[rnum].author;
    setext(qouteText);
    setAuth(qouteAuth == null ? "By " + "unKnown " : "By " + qouteAuth);

    let post1 = `https://api.whatsapp.com/send?text=${qouteText} By ${qouteAuth}`;
    window.open(post1);
  };
  useEffect(() => {
    getData1();
  }, []);

  //console.log(imgSrc);

  //getdata();

  return (
    <>
      <div className="card area    ">
        <div className="card-body">
          <h2 className="text">{text}</h2>
          <h2 className="auth">{auth}</h2>
        </div>

        <Button variant="contained" color="primary" onClick={getData1}>
          New Quotes
        </Button>
        <TwitterIcon className="twitter" onClick={getData2}></TwitterIcon>
        <WhatsAppIcon className="whp" onClick={getData3}>
          {" "}
        </WhatsAppIcon>
      </div>
      <p>with ❤️ Avisek</p>
    </>
  );
};
export default App;
