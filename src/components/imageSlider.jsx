// import React, { useState } from "react";

// function ImageSlider({ images }) {
//   const [index, setIndex] = useState(0);
//   const [touchStart, setTouchStart] = useState(0);

//   function handleTouchStart(event) {
//     setTouchStart(event.touches[0].clientX);
//   }

//   function handleTouchMove(event) {
//     const touchEnd = event.touches[0].clientX;
//     const touchDistance = touchEnd - touchStart;

//     if (touchDistance < 0) {
//       setIndex((index + 1) % images.length);
//     } else if (touchDistance > 0) {
//       setIndex((index + images.length - 1) % images.length);
//     }
//   }

//   function handleButtonClick(imageIndex) {
//     setIndex(imageIndex);
//   }

//   return (
//     <div
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//     >
//       <div style={{ display: "flex" }}>
//         {images.map((image, imageIndex) => (
//           <button
//             key={imageIndex}
//             onClick={() => handleButtonClick(imageIndex)}
//             style={{
//               border: "none",
//               background: "transparent",
//               cursor: "pointer",
//               padding: "0.5rem",
//               margin: "0.5rem"
//             }}
//           >
//             <img
//               src={image}
//               alt={`Image ${imageIndex + 1}`}
//               style={{ width: "100px" }}
//             />
//           </button>
//         ))}
//       </div>
//       <img src={images[index]} alt={`Image ${index + 1}`} />
//     </div>
//   );
// }

// export default ImageSlider;
import React, { useState } from "react";

function ImageSlider({ images }) {
  const [index, setIndex] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [startX, setStartX] = useState(null);

  function handleMouseDown(event) {
    setIsSwiping(true);
    setStartX(event.clientX);
  }

  function handleMouseMove(event) {
    if (isSwiping) {
      const distance = event.clientX - startX;
      if (distance > 50) {
        setIndex((index - 1 + images.length) % images.length);
        setIsSwiping(false);
      } else if (distance < -50) {
        setIndex((index + 1) % images.length);
        setIsSwiping(false);
      }
    }
  }

  function handleMouseUp() {
    setIsSwiping(false);
    setStartX(null);
  }

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ cursor: isSwiping ? "grabbing" : "grab" }}
    >
      <img src={images[index]} alt={`Image ${index}`} />
    </div>
  );
}

export default ImageSlider;