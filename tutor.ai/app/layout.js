
import "./globals.css";
import { Roboto } from 'next/font/google';


export const metadata = {

};

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700', '900'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
      >
        {children}
      </body>
    </html>
  );
}
