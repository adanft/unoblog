import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeContextProvider } from './lib/contexts/ThemeContext';
import './globals.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import AuthProvider from './providers/AuthProvider';

const inter = Poppins({
	weight: ['400', '500', '600', '700'],
	style: ['normal'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Unofy',
	description: 'Most popular song in the world and news about them',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthProvider>
					<ThemeContextProvider>
						<div className="container">
							<div className="wrapper">
								<Navbar />
								{children}
								<Footer />
							</div>
						</div>
					</ThemeContextProvider>
				</AuthProvider>
			</body>
		</html>
	);
}
