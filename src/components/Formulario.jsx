import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ patients, setPatients, editPatient, setEditPatient }) => {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [symptom, setSymptom] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(editPatient).length > 0) {
      setName(editPatient.name);
      setOwner(editPatient.owner);
      setEmail(editPatient.email);
      setDate(editPatient.date);
      setSymptom(editPatient.symptom);
    }
  }, [editPatient]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);
    return random + date;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    const empty = [name, owner, email, date, symptom].some((e) => e === "");
    if (empty) {
      setError(true);
      return;
    }
    setError(false);
    const patient = { name, owner, email, date, symptom };
    if (editPatient.id) {
      const patientUpdated = patients.map((e) =>
        e.id === editPatient.id ? { ...e, ...patient } : e
      );
      setPatients(patientUpdated);
      setEditPatient({});
    } else {
      patient.id = generarId();
      setPatients([...patients, patient]);
    }
    // clear form
    setName("");
    setOwner("");
    setEmail("");
    setDate("");
    setSymptom("");
  };

  return (
    <div className="md:w-1/2 lg:2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Formulario</h2>
      <p className="text-lg mt-5 mb-10 text-center">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold ">Administrarlos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10
      "
      >
        {error && <Error message="Hay uno o mas campos vacíos" />}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="nombre propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={owner}
            onChange={(e) => {
              setOwner(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="email contacto propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="symptom"
            className="block text-gray-700 uppercase font-bold"
          >
            Síntomas
          </label>
          <textarea
            placeholder="Describe los síntomas"
            id="symptom"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={symptom}
            onChange={(e) => {
              setSymptom(e.target.value);
            }}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transaction-colors"
          value={editPatient.id ? "Actualizar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
