// import { useEffect, useState } from "react";

// const Payscale = () => {
//   const [payScale, setPayScale] = useState(null);

//   useEffect(() => {
//     // Retrieve the payScale from sessionStorage
//     const storedPayScale = sessionStorage.getItem("payscales");
//     if (storedPayScale) {
//       setPayScale(JSON.parse(storedPayScale));
//     } else {
//       console.error("No pay scale found in storage.");
//     }
//   }, []);

//   console.log(payScale);
//   return (
//     <div>
//       <h1>Payscale</h1>
//       {payScale ? (
//         <div>
//           <h2>Pay Scale Details:</h2>
//           <pre>{JSON.stringify(payScale, null, 2)}</pre>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Payscale;
