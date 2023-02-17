import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [patients, setPatients] = useState(JSON.parse(localStorage.getItem("patients")) ?? []);
  const [editPatient, setEditPatient] = useState({});

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const deletePatient = (id) => {
    console.log({ id });
    const filterPatients = patients.filter((patient) => patient.id !== id);
    setPatients(filterPatients);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex ">
        <Formulario
          patients={patients}
          setPatients={setPatients}
          editPatient={editPatient}
          setEditPatient={setEditPatient}
        />
        <ListadoPacientes
          patients={patients}
          setEditPatient={setEditPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
}

export default App;
