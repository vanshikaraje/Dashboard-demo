'use client';
import Image from "next/image";
import Link from "next/link";
import styles from './rightbar.module.css';
import { MdPlayCircleFilled, MdReadMore, MdMic } from "react-icons/md";

const Rightbar = () => {
    return (
        <div className={styles.container}>
            {/* Existing Card 1 */}
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src="/astronaut.png" alt="" fill />
                </div>
                <div className={styles.texts}>
                    <span className={styles.notifications}>Available Now</span>
                    <h3 className={styles.title}>
                        How to use the new version of the admin dashboard?
                    </h3>
                    <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                    <p className={styles.desc}>
                        Welcome to the all-new Colabzi Admin Dashboard, designed to help you manage your platform efficiently with enhanced speed, clarity, and simplicity.
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled />
                    </button>
                </div>
            </div>

            {/* Existing Card 2 */}
            <div className={styles.item}>
                <div className={styles.text}>
                    <span className={styles.notifications}>Coming soon</span>
                    <h3 className={styles.title}>New server actions are available</h3>
                    <span className={styles.subtitle}>Boost your productivity</span>
                    <p className={styles.desc}>
                        Server actions make backend interactions faster and scalable. Stay tuned!
                    </p>
                    <button className={styles.button}>
                        <MdReadMore />
                        Learn
                    </button>
                </div>
            </div>

            {/* ✅ New Colabzi Assistant Block */}
            <div className={styles.item}>
                <div className={styles.text}>
                    <span className={styles.notifications}>Colabzi</span>
                    <h3 className={styles.title}>Voice Assistant</h3>
                    <span className={styles.subtitle}>Ask anything!</span>
                    <p className={styles.desc}>
                        Click below to talk to Colabzi and get voice-based help in real-time.
                    </p>
                    <Link href="/dashboard/assistant">
                        <button className={styles.button}>
                            <MdMic />
                            Talk
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Rightbar;
