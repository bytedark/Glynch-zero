import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

const NAMES = [
  "João Silva", "Maria Santos", "Pedro Oliveira", "Ana Costa", "Luiz Souza", 
  "Fernanda Lima", "Carlos Pereira", "Beatriz Alves", "Rafael Ferreira", 
  "Juliana Rodrigues", "Gustavo Gomes", "Camila Martins", "Felipe Barbosa", 
  "Amanda Rocha", "Thiago Ribeiro", "Larissa Cardoso", "Rodrigo Dias", 
  "Patrícia Teixeira", "Bruno Carvalho", "Natália Mendes", "Gabriel Nunes", 
  "Mariana Araújo", "Daniel Vieira", "Letícia Castro", "Lucas Melo", 
  "Gabriela Ramos", "Matheus Moreira", "Isabela Duarte", "Henrique Guimarães", 
  "Vanessa Lopes"
];

const LOCATIONS = [
  "São Paulo, SP", "Rio de Janeiro, RJ", "Belo Horizonte, MG", "Curitiba, PR",
  "Porto Alegre, RS", "Salvador, BA", "Brasília, DF", "Fortaleza, CE",
  "Recife, PE", "Goiânia, GO"
];

export function FakeNotifications() {
  const [notification, setNotification] = useState<{name: string, location: string, time: number} | null>(null);

  useEffect(() => {
    // Show first notification after 6 seconds
    const initialTimer = setTimeout(() => {
      triggerNotification();
    }, 6000);

    const interval = setInterval(() => {
      triggerNotification();
    }, 6000); // Fixed interval of 6 seconds

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const triggerNotification = () => {
    const name = NAMES[Math.floor(Math.random() * NAMES.length)];
    const location = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
    const time = Math.floor(Math.random() * 5) + 1; // 1-5 minutes ago
    
    setNotification({ name, location, time });
    
    // Hide after 4 seconds
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 pointer-events-none">
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white border-l-4 border-primary shadow-lg rounded-r-lg p-4 flex items-center gap-3 w-80 pointer-events-auto"
          >
            <div className="bg-green-100 p-2 rounded-full">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800">
                {notification.name} acabou de comprar!
              </p>
              <p className="text-xs text-gray-500">
                {notification.location} • há {notification.time} min
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}