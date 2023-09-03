import HomeContextProvider from '../(home)/context/HomeContext';
import '../styles/globals.css';
import { nunito_sans, poppins } from '../utils/fonts';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${nunito_sans} ${poppins}`}>
        <main className='nunito_sans'>{children}</main>
      </body>
    </html>
  );
}
