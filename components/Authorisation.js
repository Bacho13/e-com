import Link from "next/link";
import React from "react";
import styles from "../styles/componentStyles/Authorisation.module.scss";
import { logOut } from "@/Redux/userSlice";
import { useSelector, useDispatch } from "react-redux";

import { useSession, signIn, signOut } from "next-auth/react";
function Authorisation() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { data: session } = useSession();
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <ul>
            <li>
              {user.logIn ? (
                <Link href="#" onClick={() => signOut()}>
                  Log out
                </Link>
              ) : (
                <Link href="/LogIn" onClick={() => dispatch(logOut)}>
                  Log in
                </Link>
              )}
            </li>
            <li>
              {user.logIn ? (
                <Link href="#">Profile</Link>
              ) : (
                <Link href="/Registration">Registration</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Authorisation;
