import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

export default async function Footer() {
	return (
		<footer className={styles.footer}>
			<Image src={"/assets/dogs-footer.svg"} alt="Dogs footer" width={28} height={22} />
			<p>Dogs. Todos os direitos reservados.</p>
		</footer>
	);
}
