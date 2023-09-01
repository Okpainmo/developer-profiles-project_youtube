import HomeContextProvider from './context/HomeContext';
import './styles/globals.css';
import { nunito_sans } from './utils/fonts';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${nunito_sans}`}>
        <HomeContextProvider>{children}</HomeContextProvider>
      </body>
    </html>
  );
}
