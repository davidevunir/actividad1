import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFetchClientMutation, useCreateClientMutation } from "../service/api/client.js";

export const Welcome = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [clientData, setClientData] = useState(null);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [fetchClient] = useFetchClientMutation();
  const [createClient] = useCreateClientMutation();
  const [newClient, setNewClient] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    active: true,
    createdAt: "2025-01-28T00:00:00.000Z"
  });

   
    useEffect(() => {
      setNewClient((prev) => ({ ...prev, email }));
    }, [email]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  
  const checkClient = async () => {
    if (!email) return alert("Ingresa un correo válido.");
    
    try {
      const response = await fetchClient({
        targetMethod: "GET",
        queryParams: { email: [email] },
      }).unwrap();
console.log('Aqui',response);

      if (response && response.length > 0) {
        setClientData(response[0]); 
        localStorage.setItem("clientData", JSON.stringify(response[0]));
        alert("Cliente encontrado. Redirigiendo...");
        navigate("/home");
      } else {
        if (window.confirm("Cliente no encontrado. ¿Deseas registrarlo?")) {
          setShowRegisterForm(true);
        }
      }
    } catch (error) {
      console.error("Error al buscar cliente:", error);
      alert("Hubo un error al verificar el cliente.");
    }
  };

  
  const handleCreateClient = async () => {
    try {
      const response = await createClient({
        targetMethod: "POST",
        body: newClient,
      }).unwrap();

      setClientData(response);
      console.log("Cliente creado:", response);
      
      localStorage.setItem("clientData", JSON.stringify(response));
      alert("Cliente creado con éxito. Redirigiendo...");
      navigate("/home");
      
    } catch (error) {
      console.error("Error al crear cliente:", error);
      alert("Hubo un problema al crear el cliente.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-200">
      <div className="text-center p-8 bg-white rounded-lg shadow-2xl">
        <h1 className="text-4xl font-bold text-blue-500 mb-4">¡BIENVENIDO!</h1>
        <p className="text-gray-600">Redirigiendo en 3 segundos...</p>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            {!showRegisterForm ? (
              <>
                <h2 className="text-xl font-bold mb-4">Ingresa tu correo</h2>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border rounded mb-4"
                  placeholder="Correo electrónico"
                />
                <button
                  onClick={checkClient}
                  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                  Verificar Cliente
                </button>
              </>
            ) : (
              <div>
                <h2 className="text-xl font-bold mb-4">Registrar Cliente</h2>
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full p-2 border rounded mb-2"
                  onChange={(e) => setNewClient({ ...newClient, firstName: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Apellido"
                  className="w-full p-2 border rounded mb-2"
                  onChange={(e) => setNewClient({ ...newClient, lastName: e.target.value })}
                />
                <input
                  type="email"
                  value={newClient.email}
                  className="w-full p-2 border rounded mb-2"
                  readOnly
                />
                <input
                  type="text"
                  placeholder="Dirección"
                  className="w-full p-2 border rounded mb-2"
                  onChange={(e) => setNewClient({ ...newClient, address: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Teléfono"
                  className="w-full p-2 border rounded mb-4"
                  onChange={(e) => setNewClient({ ...newClient, phone: e.target.value })}
                />
                <button
                  onClick={handleCreateClient}
                  className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
                >
                  Crear Cliente
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
