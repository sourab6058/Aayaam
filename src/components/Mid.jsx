import React from "react";
import elephant from "../assets/elephant.jpg";
import man from "../assets/man.jpg";
import monu from "../assets/monu.jpg";
import plate from "../assets/plate.jpg";
import gan from "../assets/gan.jpg";
import colors from "../assets/colors.jpg";
import kathak from "../assets/kathak.jpg";

export default function Mid({ lang }) {
  return (
    <div className="mid-body">
      <div className="collage">
        <div className="row">
          <img src={monu} alt="Indian Monument" />
          <img src={kathak} alt="Girls Doing Kathak" />
        </div>
        <div className="row">
          <img src={elephant} alt="People Riding Elephant" />
          <img src={man} alt="Man Playing Iktara" />
          <img src={colors} alt="Hands holding Holi colors" />
        </div>
        <div className="row">
          <img src={gan} alt="Shri Ganesha" />
          <img src={plate} alt="Plate having sweets and Tilak" />
        </div>
      </div>
      <div className="mid-text">
        <div>
          <h5 style={{ color: "rgb(245 158 11)" }}>
            {lang == "ENGLISH" ? <>What We Do?</> : <>हम क्या करते हैं?</>}
          </h5>
        </div>
        <br />
        <h1 style={{ fontSize: "4rem", lineHeight: "5rem" }}>
          {lang == "ENGLISH" ? (
            <>We Make Sure Hindi Stays Alive in Every Heart.</>
          ) : (
            <>हम सुनिश्चित करते हैं कि हिंदी हर दिल में जिंदा रहे।</>
          )}
        </h1>
        <br />
        <p>
          {lang == "ENGLISH" ? (
            <>
              AAYAAM, the Hindi Cell of NITT, has been dedicated to nurturing
              and fortifying the cultural roots of the nation since its
              inception in 2004-05. Initially conceived by Hemant Kumar, Anirudh
              Roy, and Rahul Gadewadikar as a Hindi club, they unfortunately did
              not succeed in registering it as an official club.
            </>
          ) : (
            <>
              एनआईटीटी का हिंदी सेल, आयाम, पोषण और पोषण के लिए समर्पित है
              राष्ट्र की स्थापना के समय से ही उसकी सांस्कृतिक जड़ों को मजबूत
              करना 2004-05. शुरुआत में इसकी कल्पना हेमंत कुमार, अनिरुद्ध रॉय और
              राहुल ने की थी गाडेवाडीकर को एक हिंदी क्लब के रूप में स्थापित करने
              में वे दुर्भाग्य से सफल नहीं हो सके इसे एक आधिकारिक क्लब के रूप
              में पंजीकृत करना।
            </>
          )}
        </p>
        <br />
        <p>
          {lang == "ENGLISH" ? (
            <>
              However, Mrinal Kumar and Sutikshana Pratap Kaushik, an alumnus
              from the 2007 batch, worked tirelessly towards the formation of
              the club, eventually being joined by other alumni members from the
              2009 batch.
              {"    "}
              <a
                href="http://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </>
          ) : (
            <>
              हालाँकि, मृणाल कुमार और सुतीक्ष्ण प्रताप कौशिक, के पूर्व छात्र
              2007 बैच ने क्लब के गठन के लिए अथक प्रयास किया, अंततः 2009 बैच के
              अन्य पूर्व छात्र सदस्य भी इसमें शामिल हो गए।
              {"    "}
              <a
                href="http://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                और पढ़ें
              </a>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
