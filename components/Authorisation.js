import Link from "next/link";
import React from "react";
import styles from "../styles/componentStyles/Authorisation.module.scss";

import { useSession, signIn, signOut } from "next-auth/react";
function Authorisation() {
  const { data: session } = useSession();
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <ul>
            <li>
              {session ? (
                <Link href="#" onClick={() => signOut()}>
                  Log out
                </Link>
              ) : (
                <Link href="#" onClick={() => signIn()}>
                  Log in
                </Link>
              )}
            </li>
            <li>
              <Link href="#">Registration</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Authorisation;
