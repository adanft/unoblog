'use client';
import { signIn, useSession } from 'next-auth/react';
import styles from './loginPage.module.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const LoginPage = () => {
	const { status } = useSession();

	const router = useRouter();

	if (status === 'authenticated') {
		router.push('/');
	}

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className="flex flex-col items-center gap-4">
					<Image src="/logo.png" alt="unofy-img" width={120} height={120} />
					<h1 className="font-semibold text-2xl title-color">Unofy</h1>
				</div>
				<p className="text-center text-color">Sign In with</p>
				<button
					className="px-8 py-4 font-medium bg-blue-500 rounded-full flex items-center gap-6"
					onClick={() => signIn('google')}
				>
					<span>Google</span> <i className="nf nf-fa-google_plus text-2xl" />
				</button>
				<button className="px-8 py-4 font-medium bg-gray-700 rounded-full flex items-center gap-6">
					<span>GitHub</span> <i className="nf nf-fa-github text-2xl" />
				</button>
			</div>
		</div>
	);
};

export default LoginPage;
