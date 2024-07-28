import { app, database } from "../../firebaseConfig";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useState, useEffect } from "react";

const PayscaleDetails = () => {
  const [dbPayscales, setDbPayscales] = useState([]);

  const collectionRef = collection(database, "payscales");

  const getData = async () => {
    const data = await getDocs(collectionRef);
    setDbPayscales(
      data.docs.map((item) => {
        return { ...item.data(), id: item.id };
      })
    );
  };

  const deleteData = async (id) => {
    const docToDelete = doc(database, "payscales", id);
    await deleteDoc(docToDelete);
    getData(); // Refresh the data after deletion
  };

  useEffect(() => {
    getData();
  }, []);

  const renderPayscaleDetails = (payscale) => {
    return (
      <div className="mb-5 p-5 bg-gray-800 rounded-md" key={payscale.id}>
        {Object.keys(payscale).map(
          (category) =>
            category !== "id" && (
              <div key={category} className="mb-3">
                <h1>{payscale.id}</h1>
                <h4 className="text-lg font-semibold">{category}</h4>
                <ul className="list-disc ml-5">
                  {Object.keys(payscale[category]).map((kph) => (
                    <li key={kph}>{`${kph}: ${payscale[category][kph]}`}</li>
                  ))}
                </ul>
              </div>
            )
        )}
        <button
          onClick={() => deleteData(payscale.id)}
          className="mt-3 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
          Delete payscale
        </button>
      </div>
    );
  };

  return (
    <div className="w-[80%] m-auto mt-10 p-10 rounded-md bg-[#1f1f1f] text-white shadow-md">
      {dbPayscales.map((payscale) => renderPayscaleDetails(payscale))}
      <button
        onClick={getData}
        className="mt-5 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
      >
        Refresh Data
      </button>
    </div>
  );
};

export default PayscaleDetails;
