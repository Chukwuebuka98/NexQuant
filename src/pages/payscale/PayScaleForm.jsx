// import React, { useState } from "react";
// import { getDatabase, ref, set } from 'firebase/database';
// import { database } from './firebase';

// const PayScaleForm = () => {
//   const [formData, setFormData] = useState({
//     teamId: "",
//     "5man": Array(23).fill(""),
//     "4man": Array(17).fill(""),
//     "3man": Array(15).fill(""),
//     "2man": Array(13).fill(""),
//   });

//   const handleInputChange = (e, category, index) => {
//     const newCategoryData = [...formData[category]];
//     newCategoryData[index] = e.target.value;
//     setFormData({ ...formData, [category]: newCategoryData });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const buildKphValues = (category, keys) => {
//       const values = {};
//       formData[category].forEach((value, index) => {
//         if (value) {
//           values[keys[index]] = value;
//         }
//       });
//       return values;
//     };

//     const dataToSave = {
//       "5man": buildKphValues("5man", [
//         "kph-4",
//         "kph-4.5",
//         "kph-5",
//         "kph-5.5",
//         "kph-6",
//         "kph-6.5",
//         "kph-7",
//         "kph-7.5",
//         "kph-8",
//         "kph-8.5",
//         "kph-9",
//         "kph-9.5",
//         "kph-10",
//         "kph-10.5",
//         "kph-11",
//         "kph-11.5",
//         "kph-12",
//         "kph-12.5",
//         "kph-13",
//         "kph-13.5",
//         "kph-14",
//         "kph-14.5",
//         "kph-15",
//       ]),
//       "4man": buildKphValues("4man", [
//         "kph-4",
//         "kph-4.5",
//         "kph-5",
//         "kph-5.5",
//         "kph-6",
//         "kph-6.5",
//         "kph-7",
//         "kph-7.5",
//         "kph-8",
//         "kph-8.5",
//         "kph-9",
//         "kph-9.5",
//         "kph-10",
//         "kph-10.5",
//         "kph-11",
//         "kph-11.5",
//         "kph-12",
//       ]),
//       "3man": buildKphValues("3man", [
//         "kph-3",
//         "kph-3.5",
//         "kph-4",
//         "kph-4.5",
//         "kph-5",
//         "kph-5.5",
//         "kph-6",
//         "kph-6.5",
//         "kph-7",
//         "kph-7.5",
//         "kph-8",
//         "kph-8.5",
//         "kph-9",
//         "kph-9.5",
//         "kph-10",
//       ]),
//       "2man": buildKphValues("2man", [
//         "kph-2",
//         "kph-2.5",
//         "kph-3",
//         "kph-3.5",
//         "kph-4",
//         "kph-4.5",
//         "kph-5",
//         "kph-5.5",
//         "kph-6",
//         "kph-6.5",
//         "kph-7",
//         "kph-7.5",
//         "kph-8",
//       ]),
//     };

//     // set(ref(database, `team${formData.teamId}`), dataToSave)
//     //   .then(() => {
//     //     alert('Data saved successfully!');
//     //   })
//     //   .catch((error) => {
//     //     alert('Error saving data: ' + error.message);
//     //   });

//     const completeData = { [`team${formData.teamId}`]: dataToSave };

//     console.log("Data to save:", completeData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>
//           Team ID:
//           <input
//             type="text"
//             value={formData.teamId}
//             onChange={(e) =>
//               setFormData({ ...formData, teamId: e.target.value })
//             }
//             required
//             className="bg-black"
//           />
//         </label>
//       </div>

//       {["5man", "4man", "3man", "2man"].map((category) => (
//         <div key={category}>
//           <h2>{category}</h2>
//           {formData[category].map((value, index) => (
//             <div key={index}>
//               <label>
//                 {category} KPH {index + 1}:
//                 <input
//                   type="text"
//                   value={value}
//                   onChange={(e) => handleInputChange(e, category, index)}
//                   className="bg-black"
//                 />
//               </label>
//             </div>
//           ))}
//         </div>
//       ))}

//       <button type="submit">Save</button>
//     </form>
//   );
// };

// export default PayScaleForm;

import { useState } from "react";
import Button from "../../components/Button";
import { app, database } from "../../firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const PayScaleForm = () => {
  const [formData, setFormData] = useState({
    // teamId: "",
    "5man": Array(23).fill(""),
    "4man": Array(16).fill(""),
    "3man": Array(15).fill(""),
    "2man": Array(12).fill(""),
  });

  const collectionRef = collection(database, "payscales");

  const handleInputChange = (e, category, index) => {
    const newCategoryData = [...formData[category]];
    newCategoryData[index] = e.target.value;
    setFormData({ ...formData, [category]: newCategoryData });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const buildKphValues = (category, keys) => {
      const values = {};
      formData[category].forEach((value, index) => {
        if (value) {
          values[keys[index]] = value;
        }
      });
      return values;
    };

    const dataToSave = {
      "5man": buildKphValues("5man", [
        "kph-4",
        "kph-4.5",
        "kph-5",
        "kph-5.5",
        "kph-6",
        "kph-6.5",
        "kph-7",
        "kph-7.5",
        "kph-8",
        "kph-8.5",
        "kph-9",
        "kph-9.5",
        "kph-10",
        "kph-10.5",
        "kph-11",
        "kph-11.5",
        "kph-12",
        "kph-12.5",
        "kph-13",
        "kph-13.5",
        "kph-14",
        "kph-14.5",
        "kph-15",
      ]),
      "4man": buildKphValues("4man", [
        "kph-4",
        "kph-4.5",
        "kph-5",
        "kph-5.5",
        "kph-6",
        "kph-6.5",
        "kph-7",
        "kph-7.5",
        "kph-8",
        "kph-8.5",
        "kph-9",
        "kph-9.5",
        "kph-10",
        "kph-10.5",
        "kph-11",
        "kph-11.5",
        "kph-12",
      ]),
      "3man": buildKphValues("3man", [
        "kph-3",
        "kph-3.5",
        "kph-4",
        "kph-4.5",
        "kph-5",
        "kph-5.5",
        "kph-6",
        "kph-6.5",
        "kph-7",
        "kph-7.5",
        "kph-8",
        "kph-8.5",
        "kph-9",
        "kph-9.5",
        "kph-10",
      ]),
      "2man": buildKphValues("2man", [
        "kph-2",
        "kph-2.5",
        "kph-3",
        "kph-3.5",
        "kph-4",
        "kph-4.5",
        "kph-5",
        "kph-5.5",
        "kph-6",
        "kph-6.5",
        "kph-7",
        "kph-7.5",
        "kph-8",
      ]),
    };

    // const completeData = { [`team${formData.teamId}`]: dataToSave };

    addDoc(collectionRef, dataToSave)
      .then(() => {
        alert("Data added successfully");
      })
      .catch((err) => {
        alert(err.message);
      });

    // console.log("Data to save:", completeData);
  };

  const getData = () => {
    getDocs(collectionRef).then((response) => {
      console.log(
        response.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  };

  const updateData = () => {
    const docToUpdate = doc(database, "payscales", "iNk2JbPDuK0LY3CX8kHd");
    updateDoc(docToUpdate, {
      email: "222",
      password: 23456,
    });
  };

  const deleteData = () => {
    const docToDelete = doc(database, "payscales", "iNk2JbPDuK0LY3CX8kHd");
    deleteDoc(docToDelete)
      .then(() => {
        alert("Data delected");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const labelKeys = {
    "5man": [
      "kph-4",
      "kph-4.5",
      "kph-5",
      "kph-5.5",
      "kph-6",
      "kph-6.5",
      "kph-7",
      "kph-7.5",
      "kph-8",
      "kph-8.5",
      "kph-9",
      "kph-9.5",
      "kph-10",
      "kph-10.5",
      "kph-11",
      "kph-11.5",
      "kph-12",
      "kph-12.5",
      "kph-13",
      "kph-13.5",
      "kph-14",
      "kph-14.5",
      "kph-15",
    ],
    "4man": [
      "kph-4",
      "kph-4.5",
      "kph-5",
      "kph-5.5",
      "kph-6",
      "kph-6.5",
      "kph-7",
      "kph-7.5",
      "kph-8",
      "kph-8.5",
      "kph-9",
      "kph-9.5",
      "kph-10",
      "kph-10.5",
      "kph-11",
      "kph-11.5",
      "kph-12",
    ],
    "3man": [
      "kph-3",
      "kph-3.5",
      "kph-4",
      "kph-4.5",
      "kph-5",
      "kph-5.5",
      "kph-6",
      "kph-6.5",
      "kph-7",
      "kph-7.5",
      "kph-8",
      "kph-8.5",
      "kph-9",
      "kph-9.5",
      "kph-10",
    ],
    "2man": [
      "kph-2",
      "kph-2.5",
      "kph-3",
      "kph-3.5",
      "kph-4",
      "kph-4.5",
      "kph-5",
      "kph-5.5",
      "kph-6",
      "kph-6.5",
      "kph-7",
      "kph-7.5",
      "kph-8",
    ],
  };

  // const teamIdStyle =
  //   "w-[80%] bg-black ml-5 text-sm p-3 rounded-md max-h-20px border border-gray-700 focus:outline-none focus:ring-2 focus:ring-customPurple-purple hover:border-customPurple-purple duration-300 ";

  const kphInputStyle =
    "bg-black text-sm p-2 mb-3 rounded-md max-h-20px border border-gray-700 focus:outline-none focus:ring-2 focus:ring-customPurple-purple hover:border-customPurple-purple duration-300 ";

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[1240px] mx-auto p-10 text-[#D3D3D3] bg-[#121212] m-5 rounded-lg flex flex-col gap-5"
      >
        {/* <div className="text-2xl font-bold w-full flex justify-center items-center">
          <input
            className={`${teamIdStyle}`}
            type="text"
            placeholder="Team ID:"
            value={formData.teamId}
            onChange={(e) =>
              setFormData({ ...formData, teamId: e.target.value })
            }
            required
          />
        </div> */}

        <div className="flex flex-col md:flex-row justify-between ">
          {["5man", "4man", "3man", "2man"].map((category) => (
            <div key={category} className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold p-3">{category}</h2>
              {formData[category].map((value, index) => (
                <div key={index}>
                  {/* <label>
                  {labelKeys[category][index]}: */}
                  <input
                    type="number"
                    value={value}
                    onChange={(e) => handleInputChange(e, category, index)}
                    className={`${kphInputStyle}`}
                    placeholder={`${labelKeys[category][index]}`}
                  />
                  {/* </label> */}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* <Button type="submit">Submit payscale to the database</Button> */}
        <Button onClick={updateData}>Get data</Button>
      </form>
    </>
  );
};

export default PayScaleForm;
