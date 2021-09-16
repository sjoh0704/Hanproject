import React, { useRef } from "react";
const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();
  const onChange = async e => {
    console.log("타겟", e.target.files[0]);
    const uploaded = await imageUploader.upload(e.target.files[0]);

    onFileChange({
      url: uploaded.url,
    });
  };
  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
    </div>
  );
};

export default ImageFileInput;

// import React, { useRef, useState } from "react";
// const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
//   const inputRef = useRef();
//   const [list, setList] = useState([]);
//   const onChange = async e => {
//     console.log("타겟", e.target.files[0]);
//     imageUploader
//       .upload(e.target.files[0])
//       .then(result => setList([...list, result.url]));
//   };
//   onFileChange({
//     urllist: list,
//   });
//   return (
//     <div>
//       <input
//         ref={inputRef}
//         type="file"
//         accept="image/*"
//         name="file"
//         onChange={onChange}
//       />
//     </div>
//   );
// };

// export default ImageFileInput;
