import React from "react";
import Image from "next/image";
import styles from "./OurMission.module.scss";
import { GamblingAddiction } from "./DB/GamblingAddiction";
import { AskingWhy } from "./DB/AskingWhy";
import { RecoverySteps } from "./DB/RecoverySteps";

const OurMission = () => {
  return (
    <>
      <section id="2" className={styles.wrapper}>
        {/* Asking Why */}
        <div className={styles.headlineWrap}>
          <h5>why?</h5>
          <h2>Simply, what benefits them, benefits you.</h2>
        </div>
        <div className={styles.grid}>
          {AskingWhy.map((item) => (
            <div className={styles.innerGrid} key={item.id}>
              <div className={styles.graphic}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                />
              </div>
              <div className={styles.textWrap}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Our Mission */}
        <div className={styles.grid}>
          <div className={styles.innerGrid}>
            <div className={styles.videoModal}>
              <Image
                src="/images/cycle-of-gambling-addiction.jpeg"
                alt="cycle-of-gambling-addiction"
                width={628}
                height={628}
              />
            </div>
            <div className={styles.textWrap}>
              <div className={styles.headline2Wrap}>
                <h5>OUR MISSION</h5>
                <h2>Freedom from active addiction takes time.</h2>
              </div>
              <p>
                There are various methods that can be used to help with the
                abstinence of problem gambling such as self-help therapy groups
                and 12 Step programs like Gamblers Anonymous,
                Counsellors/Therapists, Cognitive Behaviour Therapy (CBT) based
                professional treatment and self-help CBT models such as SMART
                recovery. These can all be helpful in gaining recovery from
                problem gambling however, in order for any of these to work, it
                is necessary to recognise that there is a problem and that help
                is needed.
              </p>
            </div>
          </div>
        </div>

        {/* Gambling Addiction */}
        <div className={styles.grid}>
          <div className={styles.headlineWrap}>
            <h5>GAMBLING ADDICTION</h5>
            <h2>Is gambling a problem for me?</h2>
          </div>
          <div className={styles.innerGrid}>
            {GamblingAddiction.map((item) => (
              <div className={styles.singleItem} key={item.id}>
                <div className={styles.question}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1920}
                    height={1080}
                  />
                </div>
                <div className={styles.textWrap}>
                  <h6>{item.title}</h6>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.maxWidth}>
        {/* Gambling Steps */}
        <div className={`${styles.grid} ${styles.background}`}>
          <div className={styles.headlineWrap}>
            <h5>REcovery Steps</h5>
            <h3>How do I stop my problem gambling?</h3>
          </div>
          <div className={styles.recoveryGrid}>
            {RecoverySteps.map((item) => (
              <div className={styles.recoveryFlex} key={item.id}>
                <div className={styles.recoveryNumber}>{item.no}</div>
                <div className={styles.recoveryText}>
                  <h5>{item.title}</h5>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurMission;
