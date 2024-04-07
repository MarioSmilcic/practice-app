import Card from "./Card";
import Phone from "./Phone";
import Mail from "./Mail";
import Address from "./Address";

import "../Contact.css";

const info = [
  {
    id: 1,
    title: "Contact on phone",
    data: "065493718",
    data2: "065869444",
    icon: <Phone />,
  },
  {
    id: 2,
    title: "Contact on mail",
    data: "mariosmilcic@gmail.com",
    data2: "smilcicmario@gmail.com",
    icon: <Mail />,
  },
  {
    id: 3,
    title: "Contact address",
    data: "Jaroslava Plecitija 16",
    icon: <Address />,
  },
];

const Info = () => {
  return (
    <div>
      {info.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          data={item.data}
          data2={item.data2}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default Info;
