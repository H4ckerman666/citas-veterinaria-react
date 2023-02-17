import Paciente from "./Paciente";

const ListadoPacientes = ({ patients, setEditPatient, deletePatient }) => {
  const validator = patients && patients.length;
  const title = validator
    ? "Administra tus "
    : "Comienza agregando tus pacientes ";
  const secondTitle = validator
    ? "Pacientes y Citas"
    : "y aparecerán en este lugar";

  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen md:overflow-y-scroll">
      <h2
        className="font-black text-3xl
        text-center"
      >
        Listado de Pacientes
      </h2>
      <p className="text-xl mt-5 mb-10 text-center">
        {title}
        <span className="text-indigo-600 font-bold">{secondTitle}</span>
      </p>
      {patients.map((patient) => (
        <Paciente
          key={patient.id}
          patient={patient}
          setEditPatient={setEditPatient}
          deletePatient={deletePatient}
        />
      ))}
    </div>
  );
};

export default ListadoPacientes;
