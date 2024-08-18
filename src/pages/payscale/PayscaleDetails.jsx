import { app, database } from "../../firebaseConfig";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "ldrs/spiral";

const PayscaleDetails = () => {
  const [dbPayscales, setDbPayscales] = useState([]);
  const [loading, setLoading] = useState(false);

  const collectionRef = collection(database, "payscales");

  const getData = async () => {
    setLoading(true);
    try {
      const data = await getDocs(collectionRef);
      setDbPayscales(
        data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteData = async (id) => {
    setLoading(true);
    try {
      const docToDelete = doc(database, "payscales", id);
      await deleteDoc(docToDelete);
      getData(); // Refresh the data after deletion
    } catch (error) {
      console.error("Error deleting data: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const renderPayscaleDetails = (payscale) => {
    return (
      <tr key={payscale.id} className="border-b border-customPurple-purple">
        <td className="p-3">{payscale.id}</td>
        <td className="p-3 flex justify-between">
          {Object.keys(payscale)
            .filter((category) => category !== "id")
            .map((category) => (
              <table key={category} className="mb-8">
                <thead className="border border-customPurple-light">
                  <tr className="text-lg font-semibold">{category}</tr>
                </thead>

                <tbody className="ml-5 text-sm ">
                  {Object.keys(payscale[category]).map((kph) => (
                    <tr
                      key={kph}
                      className="border-b border-customPurple-light"
                    >
                      <td className="p-2 border-r border-customPurple-light">{`${kph}`}</td>

                      <td className="p-2">{`$${payscale[category][kph]}`}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ))}
        </td>
        <td className="p-3 text-center">
          <button
            onClick={() => deleteData(payscale.id)}
            className="bg-red-700 hover:bg-red-600 text-white py-1 px-2 rounded"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="max-w-[1240px] w-full m-auto my-10 p-10 rounded-md bg-customBlack-light text-white shadow-md">
      <Link
        to="/admin"
        className="w-full max-w-[1240px] flex justify-center my-4 mx-auto hover:text-customPurple-light duration-300 hover:underline"
      >
        Back to admin
      </Link>
      {loading ? (
        <div className="py-5 min-h-[400px] flex justify-center items-center">
          <l-spiral size="50" speed="0.7" color="#b171f2"></l-spiral>
        </div>
      ) : (
        <>
          <table className="w-full text-left">
            <thead>
              <tr className="bg-customPurple-purple">
                <th className="p-3 ">ID</th>
                <th className="p-3">Payscales</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dbPayscales.map((payscale) => renderPayscaleDetails(payscale))}
            </tbody>
          </table>
          <button
            onClick={getData}
            className="mt-5 bg-customPurple-purple hover:bg-customPurple-dark text-white py-2 px-4 rounded duration-300"
          >
            Refresh Data
          </button>
        </>
      )}
    </div>
  );
};

export default PayscaleDetails;
