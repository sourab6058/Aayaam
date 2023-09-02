import React from "react";
import Event from "./Event";

const events = [
  {
    englishTitle: "Holi Hungama",
    hindiTitle: "होली हंगामा",
    hindiText:
      "एक ऐसी दुनिया में कदम रखें जहां जीवंत रंग असीमित ऊर्जा से मिलते हैं, जहां परंपराएं उत्सव की भावना के साथ सहज रूप से मिश्रित होती हैं, और जहां हर दिल खुशी की लय में धड़कता है। राष्ट्रीय प्रौद्योगिकी संस्थान तिरुचिरापल्ली (एनआईटीटी) में 'होली हंगामा उत्सव' में आपका स्वागत है, जो रंग और सौहार्द का एक अनोखा नजारा है!",
    englishText:
      "Step into a world where vibrant hues meet boundless energy, where traditions blend seamlessly with the spirit of celebration, and where every heart beats to the rhythm of joy. Welcome to the 'Holi Hungama Fest' at the National Institute of Technology Tiruchirappalli (NITT), a spectacle of color and camaraderie like no other!",
  },
  {
    englishTitle: "Dandiya Night",
    hindiTitle: "डांडिया नाइट",
    hindiText:
      "रंग, संस्कृति और मनमोहक लय की एक रात में खुद को डुबाने के लिए तैयार हो जाइए क्योंकि नेशनल इंस्टीट्यूट ऑफ टेक्नोलॉजी तिरुचिरापल्ली (एनआईटीटी) 'डांडिया नाइट फेस्ट' प्रस्तुत कर रहा है - जो कि किसी अन्य की तरह नवरात्रि का उत्सव नहीं है!",
    englishText:
      "Get ready to immerse yourself in a night of color, culture, and captivating rhythms as the National Institute of Technology Tiruchirappalli (NITT) presents the 'Dandiya Night Fest' — a celebration of Navratri like no other!",
  },
  {
    englishTitle: "Annual Tour",
    hindiTitle: "वार्षिक दौरा",
    hindiText:
      "आपके लिए, हम एक ऐसी यात्रा प्रस्तुत करते हैं जो जीवन के सबसे यादगार क्षणों को समाहित करती है - यह हमारा 'हिंदी वार्षिक दौरा' है जो राष्ट्रीय प्रौद्योगिकी संस्थान तिरुचिरापल्ली (एनआईटीटी) द्वारा आपके लिए लाया गया है। यह एक ऐसा अनुभव है जिसमें यात्रा और खोज का सार समाहित है।",
    englishText:
      "For you, we present a journey that encapsulates life's most memorable moments - it's our 'Hindi Annual Tour' brought to you by the National Institute of Technology Tiruchirappalli (NITT). This is an experience that embraces the essence of travel and discovery.",
  },
  {
    englishTitle: "Hindi Pakhwada",
    hindiTitle: "हिंदी पखवाड़ा",
    hindiText:
      "राष्ट्रीय प्रौद्योगिकी संस्थान तिरुचिरापल्ली (एनआईटीटी) गर्व से 'हिंदी पखवाड़ा' प्रस्तुत करता है, एक पखवाड़े तक चलने वाला उत्सव जो हिंदी भाषा, साहित्य और संस्कृति की समृद्ध टेपेस्ट्री का प्रतीक है।",
    englishText:
      "The National Institute of Technology Tiruchirappalli (NITT) proudly presents 'Hindi Pakhwada,' a fortnight-long celebration that signifies the rich tapestry of Hindi language, literature, and culture.",
  },
];

export default function Extra({ lang }) {
  return (
    <div className="events">
      <div className="left">
        <h1 style={{ fontSize: "4rem", lineHeight: "5rem" }}>
          {lang == "ENGLISH" ? (
            <>Types of Events We Conduct</>
          ) : (
            <>हमारे द्वारा आयोजित किये जाने वाले आयोजनों के प्रकार</>
          )}
        </h1>
      </div>
      <div className="right">
        {events.map((props) => (
          <Event
            title={lang == "ENGLISH" ? props.englishTitle : props.hindiTitle}
            text={lang == "ENGLISH" ? props.englishText : props.hindiText}
            lang={lang}
          />
        ))}
      </div>
    </div>
  );
}
