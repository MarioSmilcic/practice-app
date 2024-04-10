import "./Contact.css";
import Button from "../../components/Button/Button";
import Info from "./components/Info";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact us</h2>
      <div className="main">
        <div className="left">
          <h3>Contact information</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            aliquam rem quas magnam dolorum deleniti amet alias ut. Eius,
            eligendi?
          </p>

          <Info />
        </div>
        <div>
          <form>
            <div>
              <p>Name</p>
              <input type="text" placeholder="Enter your name..." />
            </div>
            <div>
              <p>Email</p>
              <input type="text" placeholder="Enter your email..." />
            </div>
            <div>
              <p>Subject</p>
              <input type="text" placeholder="Enter subject..." />
            </div>
            <div>
              <p>Message</p>
              <textarea name="message" placeholder="Enter your mesage..." />
            </div>
            <Button text="Send Mail" className="button" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
