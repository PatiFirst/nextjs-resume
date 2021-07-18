import React from "react";
import styles from "../styles/Layout.module.css";
import Image from "next/image";

export default function Layout({ children, home }) {
  return (
    <main className={styles.resume}>
      {home ? (
        <>
          <div className={styles.resumeLeft}>
            <div className={styles.profileImg}>
              <Image src="/images/Profile2.jpg" width={250} height={250} />
            </div>

            <div>
              <h2>Personal Information</h2>

              <p>
                I'm a third-year student and studying <span>Media Technology</span> at 
                <span> King Mongkut's University of Technology Thonburi.</span>
              </p>
              <p>
                I am interested in
                "front-end web development" and "interactive development" and I
                would like to develop my skills to have knowledge and experience
                from this internship.
              </p>

              <p>Email</p>
              <p>patipon_981@hotmail.com</p>

              <p>Phone</p>
              <p>0814888901</p>
              <p>Facebook</p>
              <p>PatiFirst Wsstt</p>
              <p>Instagram</p>
              <p>p.patifirst</p>

              
            </div>
            <div>
              <h2>Languages</h2>
              <p>
                  <span>Thai: </span> <span>Native</span>
              </p>
              <p>
                  <span>English: </span> <span>Good</span>
              </p>

            </div>

          </div>

          <div className={styles.resumeRight}>
            <h1 className={styles.name}>Patipon Wongsuebsantati</h1>

            <div>
              <h2>Project Experience</h2>
              
              <p>ShirBand</p>
              <p>AR Project</p>
              <p>Rescape</p>
              <p>HeartCir</p>
              <p>SweetBoy Runner</p>

            </div>

            <div className={styles.grid}>
              <div className={styles.gridLeft}>
                    <h2>Programming Language</h2>

                    <p>Basic: </p>
                    <p>
                        HTML/CSS/JavaScript/C#
                    </p>
                    <p>Beginner: </p>
                    <p>
                        SQL/TypeScript/Java
                    </p>
              </div>

              <div className={styles.gridRight}>
                    <h2>Programming Language</h2>

                    <p>Basic: </p>
                    <p>
                        Bootstrap/Node.js/Unity/Vuforia
                    </p>
                    <p>Beginner: </p>
                    <p>
                        React.js/Next.js/Arduino
                    </p>
              </div>

            </div>
          </div>
        </>
      ) : (
        <>
          <p>about</p>
        </>
      )}
    </main>
  );
}
