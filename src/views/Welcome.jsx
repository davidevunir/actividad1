import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export const Welcome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 30000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
      <div className="flex items-center justify-center min-h-screen bg-neutral-200">
        <div className="text-center p-8 bg-white rounded-lg shadow-2xl">
          <h1 className="text-4xl font-bold text-blue-500 mb-4">¡BIENVENIDO!</h1>
          <p className="text-gray-600">Redirigiendo en 3 segundos...</p>
        </div>
      </div>
  );
}