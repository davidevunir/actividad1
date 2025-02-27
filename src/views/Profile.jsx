import profilePic from '../assets/images/profile_pic.jpg';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFetchOrdersMutation, useCancelOrderMutation } from "../service/api/orders.js";
import { useUpdateClientMutation, useDeleteClientMutation } from "../service/api/client.js";

export const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [fetchOrders] = useFetchOrdersMutation();

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updatedClient, setUpdatedClient] = useState({});
  const [updateClient] = useUpdateClientMutation();
  const [deleteClient] = useDeleteClientMutation();

  const [cancelOrder] = useCancelOrderMutation();

  useEffect(() => {
    const storedData = localStorage.getItem("clientData");
    if (storedData) {
      const client = JSON.parse(storedData);
      setUser(client);
      setUpdatedClient(client);
      console.log("Datos del cliente recuperados:", storedData);
    } else {
      navigate("/"); 
      console.log("No se encontraron datos del cliente.");
    }
  }, []);

  
  useEffect(() => {
    const getOrders = async () => {
      if (!user) return;

      try {
        const response = await fetchOrders({ targetMethod: "GET" }).unwrap();
        console.log(user.id);
        
        const filteredOrders = response.filter(order => order.idClient === user.id);
        setOrders(filteredOrders);
      } catch (error) {
        console.error("Error al obtener órdenes:", error);
      }
    };

    getOrders();
  }, [user, fetchOrders]);

   
   const handleUpdateClick = () => {
    setShowUpdateModal(true);
  };

  const handleDeleteClick = async () => {
    if (!window.confirm("¿Estás seguro de que deseas eliminar tu cuenta?")) return; 
    await deleteClient(user.id).unwrap();
    localStorage.removeItem("clientData");
    navigate("/");
  }

  
  const handleInputChange = (e) => {
    setUpdatedClient({
      ...updatedClient,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleUpdateSubmit = async () => {
    try {
      await updateClient({ idClient: user.id, updatedData: updatedClient }).unwrap();
      localStorage.setItem("clientData", JSON.stringify(updatedClient));
      setUser(updatedClient);
      setShowUpdateModal(false);
      alert("Datos actualizados con éxito.");
    } catch (error) {
      console.error("Error al actualizar cliente:", error);
      alert("Hubo un problema al actualizar los datos.");
    }
  };

  const handleCancelOrder = async (idOrder) => {
    if (!window.confirm("¿Estás seguro de que deseas cancelar esta orden?")) return;
console.log('idOrder',idOrder);

    try {
      await cancelOrder(idOrder).unwrap();
      alert("Orden cancelada con éxito.");

      // Actualizar lista de órdenes
      const updatedOrders = orders.map(order =>
        order.idBookOrder === idOrder ? { ...order, status: "CANCELADO" } : order
      );
      setOrders(updatedOrders);
    } catch (error) {
      console.error("Error al cancelar orden:", error);
      alert("Hubo un problema al cancelar la orden.");
    }
  };

  const handleLogout =  () => {
    localStorage.removeItem("clientData"); 
    navigate("/"); 
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-white">No se encontraron datos del usuario...</p>
      </div>
    );
  }


  return (
      <main className="flex-grow pt-20 container mx-auto px-10 pb-8 max-w-6xl">
        <h1 className="text-2xl font-semibold mb-4 text-white">Mi Perfil</h1>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg p-6">
              <div className="flex flex-col items-center">
                <img src={profilePic} alt="Foto de perfil" className="w-32 h-32 rounded-full mb-4"/>
                <h2 className="text-xl font-semibold">{user.firstName} {user.lastName}</h2>
                <p className="text-gray-600">Miembro desde {user.createdAt.split("T")[0]}</p>
              </div>

              <div className="space-y-3 mt-6">
                <div>
                  <p>Email</p>
                  <p className="text-gray-500">{user.email}</p>
                </div>
                <div>
                  <p>Teléfono</p>
                  <p className="text-gray-500">{user.phone}</p>
                </div>
                <div>
                  <p>Dirección</p>
                  <p className="text-gray-500">{user.address}</p>
                </div>
                <button  onClick={handleUpdateClick} className="w-full py-2.5 bg-blue-400 text-white rounded-lg hover:bg-blue-600">
                  Actualizar mis datos
                </button>
                <button  onClick={handleDeleteClick}  className="w-full py-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600">
                  Eliminar cuenta
                </button>
                <button 
                onClick={handleLogout}
                className="w-full py-2.5 bg-gray-500 text-white rounded-lg hover:bg-gray-700"
              >
                Cerrar Sesión
              </button>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow p-4 mb-4">
              <h3 className="text-lg font-semibold mb-4">Pedidos Recientes</h3>
              <div className="space-y-4">
              {orders.length > 0 ? (
                orders.map(order => (
                  <div className="flex justify-between items-center border-b pb-3" key={order.idBookOrder}>
                    <div>
                      <p className="font-medium">Pedido ID: {order.idBookOrder}</p>
                      <p className="text-sm text-gray-600">Fecha: {order.createdAt.split("T")[0]}</p>
                      <p className="text-sm text-gray-600">Total: ${order.totalAmount.toFixed(2)}</p>
                    </div>
                    <div className="text-right">
                      <p className={`text-sm font-bold ${order.status === "CANCELADO" ? "text-red-600" : "text-green-600"}`}>
                        {order.status}
                      </p>

                      {order.status === "INGRESADO" && (
                        <button
                          onClick={() => handleCancelOrder(order.idBookOrder)}
                          className="mt-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-700"
                        >
                          Cancelar Orden
                        </button>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No tienes pedidos recientes.</p>
              )}
            </div>
            </div>

            {/*<div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Preferencias</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Notificaciones</p>
                    <p className="text-sm text-gray-600">Recibir notificaciones de pedidos por correo electrónico</p>
                  </div>
                  <div className={`w-12 h-6 rounded-full transition-colors duration-200 ${userMock.preferences.notifications ? 'bg-blue-600' : 'bg-gray-200'}`}>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Novedades</p>
                    <p className="text-sm text-gray-600">Suscripción a novedades sobre nuevos libros y promociones</p>
                  </div>
                  <div className={`w-12 h-6 rounded-full transition-colors duration-200 ${userMock.preferences.newsletter ? 'bg-blue-600' : 'bg-gray-200'}`}>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Autenticación de dos factores</p>
                    <p className="text-sm text-gray-600">Seguridad adicional para tu cuenta</p>
                  </div>
                  <div className={`w-12 h-6 rounded-full transition-colors duration-200 ${userMock.preferences.twoFactorAuth ? 'bg-blue-600' : 'bg-gray-200'}`}>
                  </div>
                </div>
              </div>
            </div>*/}

              
      {showUpdateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Actualizar Datos</h2>
            <input type="text" name="firstName" value={updatedClient.firstName} onChange={handleInputChange} className="border p-2 w-full mb-2" placeholder="Nombre" />
            <input type="text" name="lastName" value={updatedClient.lastName} onChange={handleInputChange} className="border p-2 w-full mb-2" placeholder="Apellido" />
            <input type="text" name="address" value={updatedClient.address} onChange={handleInputChange} className="border p-2 w-full mb-2" placeholder="Dirección" />
            <input type="text" name="phone" value={updatedClient.phone} onChange={handleInputChange} className="border p-2 w-full mb-2" placeholder="Dirección" />
            <button onClick={handleUpdateSubmit} className="w-full py-2 bg-blue-500 text-white rounded-lg">Guardar Cambios</button>
            <button onClick={() => setShowUpdateModal(false)} className="w-full mt-2 py-2 bg-gray-400 text-white rounded-lg">Cancelar</button>
          </div>
        </div>
      )}
          </div>
        </div>
      </main>
  );
}
