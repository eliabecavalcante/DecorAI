// /client/app/layout.js
import './globals.css';
import Header from './components/Header';
import BottomBar from './components/BottomBar';
import Footer from './components/Footer'; // 1. IMPORTAMOS O NOVO FOOTER

export const metadata = {
  title: 'DecorAI - Transforme Seu Espaço',
  description: 'Gere designs de interiores com IA e modelagem 3D.',
  icons: {
    icon: 'https://i.imgur.com/E5eKanr.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header /> 
        <BottomBar /> 
        <main>{children}</main>
        <Footer /> {/* 2. ADICIONAMOS O FOOTER AQUI */}
      </body>
    </html>
  );
}