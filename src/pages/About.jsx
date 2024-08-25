const About = () => {
  return (
    <div className="bg-customBlack-light max-w-[1240px] my-5 w-full mx-auto min-h-screen flex flex-col items-center p-6">
      <div className="container h-screen mx-auto bg-customBlack-light p-6 rounded-lg shadow-md max-w-4xl ">
        <h1 className="text-4xl font-bold text-center text-gray-300 mb-8">
          About NexQuant
        </h1>

        <p className="text-lg text-gray-50 mb-6">
          NexQuant is a web application designed to simplify the payroll
          calculation process for staff and admins. Built with React, Tailwind
          CSS for the frontend, and Firebase for the backend, NexQuant provides
          an intuitive and efficient way to manage payments.
        </p>

        <h2 className="text-3xl font-semibold text-gray-300 mb-4">For Staff</h2>
        <p className="text-lg text-gray-50 mb-6">
          NexQuant allows staff members to calculate their payments based on the
          total number of days worked. The app helps users understand their
          expected earnings at the end of each payroll cycle, providing a clear
          overview of their financials.
        </p>

        <h2 className="text-3xl font-semibold text-gray-300 mb-4">
          For Admins
        </h2>
        <p className="text-lg text-gray-50 mb-6">
          Admins use NexQuant to manage and store pay scales in the database.
          They can assign pay scale IDs to users, which are then used to
          calculate payments accurately.
        </p>

        <p className="text-lg text-gray-50">
          With NexQuant, both staff and admins can streamline payroll
          management, ensuring that payments are calculated correctly and
          efficiently.
        </p>
      </div>
    </div>
  );
};

export default About;
