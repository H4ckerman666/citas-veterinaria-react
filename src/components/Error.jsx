const Error = ({ message }) => {
  return (
    <div className="bg-red-600 text-white text-center p-3 uppercase font-bold mb-3 rounded">
      <p> {message}</p>
    </div>
  );
};

export default Error;
