import React, {useState} from "react";

export default function App() {
  return (
    <div className="App">
      <Folder name="Desktop" isOpen={true}>
        <File name="cats.png"></File>
        <File name="dogs.jpg"></File>

        <Folder name="Music">
          <File name="cats.wav"></File>
          <File name="dogs.mp3"></File>
        </Folder>

        <Folder name="Videos">
          <File name="cats.mp4"></File>
          <File name="dogs.mp4"></File>
        </Folder>

        <Folder name="Documents">
          <File name="cats.pdf"></File>
          <File name="dogs.docx"></File>
        </Folder>

      </Folder>
      
    </div>
  );
}


const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  // const {name, isOpen, children} = props;
  const handleClick = () => setIsOpen(!isOpen);
  const direction = isOpen ? "down" : "right";
  return (
    <div>
      <span onClick={handleClick}>
        <i className="blue folder icon"></i>
        <i className={`caret ${direction} icon`}></i>
      </span>
      {props.name}
      <div style={{marginLeft: '17px'}}>
        {isOpen ? props.children : null}
      </div>
    </div>
  )
}

const File = (props) => {
  const fileExtension = props.name.split(".")[1];
  const fileIcons = {
    mp4: "film",
    mp3: "headphones",
    wav: "microphone",
    pdf: "file pdf",
    docx: "file word",
    jpg: "file image",
    png: "file image outline",
  }
  return (
  <div>
    <i className={`${fileIcons[fileExtension]} icon`}></i>
    {props.name}
  </div>
  )
}