import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "../styles/componentStyles/navbar.module.scss";
import logo from "../public/images/logo.png";
import Link from "next/link";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import MenuSlider from "./MenuSlider";
import CategoryDropDown from "./CategoryDropDown";
import Authorisation from "./Authorisation";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { fetchCategories } from "@/Redux/actions";

function Navbar() {
  let cart = useSelector((state) => state.cart);
  const userLogin = useSelector((state) => state.user.logIn);
  const user = useSelector((state) => state.user.userInfos);
  const loading = useSelector((state) => state.categories.isLoading);
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const reFetchCategories = () => {
    dispatch(fetchCategories());
  };

  const ToggleButton = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.announcement}>
          <p>The site is under the constructions</p>
        </div>
        <div className={styles.container}>
          <div className={styles.leftSide}>
            <Link href="/">
              <Image src={logo} alt="shopping bag as a logo" width={50} />
            </Link>
          </div>

          <div className={styles.rightSide}>
            <nav>
              <ul>
                <li className={styles.category}>
                  <div className={styles.dropdown}>
                    <p>Categories</p>
                    <div className={styles.dropdownContent}>
                      <CategoryDropDown onMouseEnter={reFetchCategories} />
                    </div>
                  </div>
                </li>

                <li>
                  <Link href="/Cart">
                    <div className={styles.shoppingBagCont}>
                      <LocalMallIcon />
                      {cart.items.length > 0 && (
                        <div className={styles.badge}>{cart.totalQuant}</div>
                      )}
                    </div>
                  </Link>
                </li>
                <li>
                  <div className={styles.dropdownAuth}>
                    {userLogin ? (
                      // <img
                      //   src={session.user.image}
                      //   alt="user img"
                      //   className={styles.profilePic}
                      // />
                      <Image
                        src={user.image}
                        width="40"
                        height="40"
                        alt="/"
                        priority
                        className={styles.profilePic}
                      />
                    ) : (
                      <PersonPinIcon />
                    )}
                    <div className={styles.dropdownContentAuth}>
                      <Authorisation />
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>

          <div className={styles.phoneRightSide}>
            <div className={styles.iconCont} onClick={ToggleButton}>
              {isOpen ? (
                <CloseIcon className={styles.menuIcon} />
              ) : (
                <MenuIcon className={styles.menuIcon} />
              )}
            </div>
          </div>
        </div>

        <div className={`${isOpen ? styles.slideMenu : styles.slideMenuOut}`}>
          <MenuSlider className={styles.menuSlider} />
        </div>
      </div>
    </>
  );
}

export default Navbar;
