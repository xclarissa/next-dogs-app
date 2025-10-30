"use client";

import { FeedList } from "@/types/feed";
import Image from "next/image";
import Link from "next/link";
import styles from "./feed.module.css";

interface FeedPhotosProps {
	photos: FeedList[];
}

export default function FeedPhotos({ photos }: FeedPhotosProps) {
	return (
		<ul className={`${styles.feed} animeLeft`}>
			{photos.map((photo, i) => (
				<li className={styles.photo} key={photo.id + i}>
					<Link href={`/foto/${photo.id}`} scroll={false}>
						<Image
							src={photo.src}
							alt={photo.title}
							width={1500}
							height={1500}
							sizes="80vw"
						/>
						<span className={styles.visualizacao}>{photo.acessos}</span>
					</Link>
				</li>
			))}
		</ul>
	);
}
