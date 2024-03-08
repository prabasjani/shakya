import Head from "../Head/Head";
import "./Contact.css";
import { UilWhatsapp } from "@iconscout/react-unicons";
import { UilAt } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";

const Contact = ({ title }) => {
  return (
    <div className="mainPage">
      <Head title={title} />
      <div className="container">
        <div className="contactContainer">
          <div className="contactPage">
            <div className="contactDetails">
              <div className="contactBox">
                <UilAt height={75} width={75} />
                <a href="mailto:shakyaiasacademy@gmail.com">
                  shakyaiasacademy@gmail.com
                </a>
              </div>
              <div className="contactBox">
                <UilWhatsapp height={75} width={75} />
                <a href="https://wa.me/+918838020412">+91 88380 20412</a>
              </div>
            </div>

            <div className="contactForm">
              <form action="">
                <input type="text" placeholder="Enter Your Name" />
                <input type="email" placeholder="Enter Your Email" />
                <textarea
                  style={{ height: 150 }}
                  placeholder="Ask Your Queries"
                ></textarea>
                <input type="submit" value="Send Messages" />
              </form>
            </div>
          </div>
          <div className="address">
            7/1, B.K nagar, 4th street, Sagaya nagar(Jalagambarai Road),
            Tirupattur- 635 601
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
