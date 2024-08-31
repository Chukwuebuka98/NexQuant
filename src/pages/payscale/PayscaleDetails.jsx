import { database } from "../../firebaseConfig";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "ldrs/spiral";

// Utility function to sort entries based on numeric values in kph keys
const sortEntries = (entries) => {
  return Object.entries(entries).sort(([aKey], [bKey]) => {
    // Extract numeric part from kph keys (handles cases like kph-2.5, kph-3)
    const extractNumber = (key) => {
      const match = key.match(/(\d+(\.\d+)?)/);
      return match ? parseFloat(match[0]) : 0;
    };
    return extractNumber(aKey) - extractNumber(bKey);
  });
};

const PayscaleDetails = () => {
  const [dbPayscales, setDbPayscales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const collectionRef = collection(database, "payscales");

  const getData = async () => {
    setLoading(true);
    try {
      const data = await getDocs(collectionRef);
      setDbPayscales(
        data.docs.map((item) => ({
          ...item.data(),
          id: item.id,
        }))
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
      getData();
    } catch (error) {
      console.error("Error deleting data: ", error);
    } finally {
      setLoading(false);
      setShowConfirmDialog(false);
      setDeleteId(null);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getCategories = () => {
    const categories = new Set();
    dbPayscales.forEach((payscale) => {
      Object.keys(payscale)
        .filter((category) => category !== "id")
        .forEach((category) => categories.add(category));
    });
    return Array.from(categories);
  };

  const renderPayscaleRow = (payscale) => {
    const categories = getCategories();
    return (
      <tr key={payscale.id} className="border-b border-customPurple-purple">
        <td className="p-2 text-sm font-medium">{payscale.id}</td>
        {categories.map((category) => (
          <td key={category} className="p-2 text-sm">
            {payscale[category]
              ? sortEntries(payscale[category])
                  .map(([kph, rate]) => `${kph}: $${rate}`)
                  .join(", ")
              : "N/A"}
          </td>
        ))}
        <td className="p-2 text-center">
          <button
            onClick={() => {
              setDeleteId(payscale.id);
              setShowConfirmDialog(true);
            }}
            className="bg-red-700 hover:bg-red-600 text-white py-1 px-2 rounded"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  };

  const categories = getCategories();

  return (
    <div className="max-w-[1240px] w-full m-auto my-10 p-10 rounded-md bg-customBlack-light text-white shadow-md">
      <Link
        to="/admin"
        className="w-full max-w-[1240px] flex justify-center my-4 mx-auto hover:text-customPurple-light duration-300 hover:underline"
      >
        Back to Admin
      </Link>
      {loading ? (
        <div className="py-5 min-h-[400px] flex justify-center items-center">
          <l-spiral size="50" speed="0.7" color="#b171f2"></l-spiral>
        </div>
      ) : (
        <>
          <table className="w-full text-left bg-customBlack-light rounded overflow-hidden">
            <thead className="bg-customPurple-purple text-white">
              <tr>
                <th className="p-3">ID</th>
                {categories.map((category) => (
                  <th key={category} className="p-2">
                    {category}
                  </th>
                ))}
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>{dbPayscales.map(renderPayscaleRow)}</tbody>
          </table>
          <button
            onClick={getData}
            className="mt-5 bg-customPurple-purple hover:bg-customPurple-dark text-white py-2 px-4 rounded duration-300"
          >
            Refresh Data
          </button>
        </>
      )}

      {/* Confirmation Dialog */}
      {showConfirmDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-customBlack-dark p-6 rounded shadow-lg text-center ">
            <p className="mb-4 text-white">
              Are you sure you want to delete this payscale?
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => deleteData(deleteId)}
                className="bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded mr-2"
              >
                Confirm
              </button>
              <button
                onClick={() => setShowConfirmDialog(false)}
                className="bg-gray-300 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PayscaleDetails;
