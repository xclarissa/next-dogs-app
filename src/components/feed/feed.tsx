import { FeedList } from "@/types/feed"
import FeedPhotos from "./feed-photos";

interface FeedProps {
    photos: FeedList[];
}

export default function Feed({ photos }: FeedProps) {
    return (
        <main>
            <FeedPhotos photos={photos}/>
        </main>
    )
}
