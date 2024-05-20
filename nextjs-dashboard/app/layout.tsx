import '@/app/ui/global.css';
import { inter } from '../app/ui/font';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <h1 className="text-blue-500">I'm blue!</h1>
        <div
          className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"
        />
        {children}
      </body>
    </html>
  );
}
