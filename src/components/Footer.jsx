import {SocialIcon} from "./SocialIcon.jsx";

export const Footer = () => {
  const socialNetworks = ['facebook', 'twitter', 'instagram', 'youtube'];

  return (
      <footer className="bg-zinc-950 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-start">
            <div className="text-gray-200">
              <h2 className="text-xl font-bold mb-4">Relatos de Papel</h2>
              <p className="mb-1">Dirección: Av. Ordoñez Lasso y Los Cerezos</p>
              <p>Contacto: info@relatosdepapel.com</p>
            </div>
            <div className="flex gap-6 mt-10">
              {socialNetworks.map((network) => (<SocialIcon key={network} type={network}/>))}
            </div>
          </div>

          <div className="border-t border-gray-500 my-4"></div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2024 Relatos de Papel - Todos los derechos reservados
            </p>
          </div>
        </div>
      </footer>
  );
}
