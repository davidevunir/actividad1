import profilePic from '../assets/images/profile_pic.jpg';

export const Profile = () => {
  const userMock = {
    name: "Juan Mogrovejo Lara",
    email: "juan.mlara01@gmail.com",
    picture: profilePic,
    phone: "+593 98 765 4321",
    address: "Av. Principal 123 y Cerezos esquina.",
    memberSince: "Enero 2023",
    preferences: {
      notifications: true,
      newsletter: true,
      twoFactorAuth: false
    },
    currentOrders: [
      {
        id: "PED-001",
        date: "20/12/2024",
        status: "Entregado"
      },
      {
        id: "PED-002",
        date: "22/12/2024",
        status: "En camino"
      }
    ]
  };

  return (
      <main className="flex-grow pt-20 container mx-auto px-10 pb-8 max-w-6xl">
        <h1 className="text-2xl font-semibold mb-4 text-white">Mi Perfil</h1>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg p-6">
              <div className="flex flex-col items-center">
                <img src={userMock.picture} alt="Foto de perfil" className="w-32 h-32 rounded-full mb-4"/>
                <h2 className="text-xl font-semibold">{userMock.name}</h2>
                <p className="text-gray-600">Miembro desde {userMock.memberSince}</p>
              </div>

              <div className="space-y-3 mt-6">
                <div>
                  <p>Email</p>
                  <p className="text-gray-500">{userMock.email}</p>
                </div>
                <div>
                  <p>Teléfono</p>
                  <p className="text-gray-500">{userMock.phone}</p>
                </div>
                <div>
                  <p>Dirección</p>
                  <p className="text-gray-500">{userMock.address}</p>
                </div>
                <button className="w-full py-2.5 bg-blue-400 text-white rounded-lg hover:bg-blue-600">
                  Actualizar mis datos
                </button>
                <button className="w-full py-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600">
                  Eliminar cuenta
                </button>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow p-4 mb-4">
              <h3 className="text-lg font-semibold mb-4">Pedidos Recientes</h3>
              <div className="space-y-4">
                {userMock.currentOrders.map(order => (
                    <div className="flex justify-between items-center border-b pb-3" key={order.id}>
                      <div>
                        <p className="font-medium">{order.id}</p>
                        <p className="text-sm text-gray-600">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-green-600">{order.status}</p>
                      </div>
                    </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
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
            </div>
          </div>
        </div>
      </main>
  );
}
