import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { database } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import Button from "../../components/Button";
import Modal from "../../components/Modal";

const PayScaleForm = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const collectionRef = collection(database, "payscales");

  const initialValues = {
    "5man": Array(23).fill(""),
    "4man": Array(16).fill(""),
    "3man": Array(15).fill(""),
    "2man": Array(13).fill(""),
  };

  const validationSchema = Yup.object().shape({
    "5man": Yup.array()
      .of(
        Yup.number()
          .required("This field is required")
          .typeError("Must be a number")
      )
      .required("This field is required"),
    "4man": Yup.array()
      .of(
        Yup.number()
          .required("This field is required")
          .typeError("Must be a number")
      )
      .required("This field is required"),
    "3man": Yup.array()
      .of(
        Yup.number()
          .required("This field is required")
          .typeError("Must be a number")
      )
      .required("This field is required"),
    "2man": Yup.array()
      .of(
        Yup.number()
          .required("This field is required")
          .typeError("Must be a number")
      )
      .required("This field is required"),
  });

  const buildKphValues = (values, keys) => {
    const kphValues = {};
    values.forEach((value, index) => {
      if (value) {
        kphValues[keys[index]] = value;
      }
    });
    return kphValues;
  };

  const handleSubmit = async (values) => {
    const dataToSave = {
      "5man": buildKphValues(values["5man"], [
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
      "4man": buildKphValues(values["4man"], [
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
      "3man": buildKphValues(values["3man"], [
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
      "2man": buildKphValues(values["2man"], [
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

    try {
      await addDoc(collectionRef, dataToSave);
      setShowSuccessModal(true);
    } catch (err) {
      console.error("Error adding document: ", err);
    }
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

  const kphInputStyle =
    "bg-black text-sm p-2 rounded-md max-h-20px border border-gray-700 focus:outline-none focus:ring-2 focus:ring-customPurple-purple hover:border-customPurple-purple duration-300";

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="w-full max-w-[1240px] mx-auto p-10 text-[#D3D3D3] bg-[#121212] m-5 rounded-lg flex flex-col gap-5">
            <div className="flex flex-col md:flex-row justify-between">
              {["5man", "4man", "3man", "2man"].map((category) => (
                <div key={category} className="flex flex-col items-center">
                  <h2 className="text-2xl font-semibold p-3">{category}</h2>
                  {labelKeys[category].map((label, index) => (
                    <div key={index}>
                      <Field
                        type="number"
                        name={`${category}[${index}]`}
                        placeholder={label}
                        className={kphInputStyle}
                      />
                      <ErrorMessage
                        name={`${category}[${index}]`}
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-customPurple-purple text-white py-2 px-4 rounded"
            >
              {isSubmitting
                ? "Submitting to Database..."
                : "Create a new payscale"}
            </Button>
          </Form>
        )}
      </Formik>

      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      >
        <h2 className="text-2xl font-semibold">Submission Successful!</h2>
        <p className="text-sm">
          Your data has been successfully submitted to the database.
        </p>
        <Button
          onClick={() => setShowSuccessModal(false)}
          className="bg-customPurple-purple text-white py-2 px-4 rounded mt-4"
        >
          Close
        </Button>
      </Modal>
    </>
  );
};

export default PayScaleForm;
