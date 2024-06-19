import React from "react";
import styles from "../../styles/dashboardTable.module.scss";
import face1 from "../../assets/images/faces/face1.jpg";
import face2 from "../../assets/images/faces/face2.jpg";
import face3 from "../../assets/images/faces/face3.jpg";
import face4 from "../../assets/images/faces/face4.jpg";
import Image from "next/image";

const DashboardTable: React.FC = () => {
  return (
    <div className="row">
      <div className="col-12 grid-margin">
        <div className={styles.card}>
          <div className={styles.cardBody}>
            <h4 className={styles.cardTitle}>Recent Tickets</h4>
            <table aria-label="recent tickets table" className={styles.table}>
              <thead className={styles.heading}>
                <tr>
                  <th>Assignee</th>
                  <th>Subject</th>
                  <th>Status</th>
                  <th>Last Update</th>
                  <th>Tracking ID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.Imagealign}>
                    <Image src={face1} className={styles.img} alt="face" />
                    David Grey
                  </td>
                  <td>Fund is not received</td>
                  <td>
                    <label
                      className={`${styles.badge} ${styles.badgeGradientSuccess}`}
                    >
                      DONE
                    </label>
                  </td>
                  <td>Dec 5, 2017</td>
                  <td>WD-12345</td>
                </tr>
                <tr>
                  <td className={styles.Imagealign}>
                    <Image src={face2} className={styles.img} alt="face" />
                    Stella Johnson
                  </td>
                  <td>High loading time</td>
                  <td>
                    <label
                      className={`${styles.badge} ${styles.badgeGradientWarning}`}
                    >
                      PROGRESS
                    </label>
                  </td>
                  <td>Dec 12, 2017</td>
                  <td>WD-12346</td>
                </tr>
                <tr>
                  <td className={styles.Imagealign}>
                    <Image src={face3} className={styles.img} alt="face" />
                    Marina Michel
                  </td>
                  <td>Website down for one week</td>
                  <td>
                    <label
                      className={`${styles.badge} ${styles.badgeGradientInfo}`}
                    >
                      ON HOLD
                    </label>
                  </td>
                  <td>Dec 16, 2017</td>
                  <td>WD-12347</td>
                </tr>
                <tr>
                  <td className={styles.Imagealign}>
                    <Image src={face4} className={styles.img} alt="face" />
                    John Doe
                  </td>
                  <td>Losing control on server</td>
                  <td>
                    <label
                      className={`${styles.badge} ${styles.badgeGradientDanger}`}
                    >
                      REJECTED
                    </label>
                  </td>
                  <td>Dec 3, 2017</td>
                  <td>WD-12348</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;
