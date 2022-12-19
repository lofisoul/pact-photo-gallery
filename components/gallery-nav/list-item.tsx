import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";
import styles from "./index.module.scss";

export function ListItem({ item, isAlbum, level, isHome }) {
  const [active, setActive] = useState(false);
  const [subMenuHeight, setSubMenuHeight] = useState("auto");
  const subMenuRef = useRef(null);

  function toggleItem() {
    setActive(!active);
  }

  function toggleSubmenu() {
    //🫠 not a great solution
    // let originalParentHeight;
    // if (
    //   subMenuRef.current.classList.contains("level0") &&
    //   subMenuRef.current.classList.contains("isOpen")
    // ) {
    //   originalParentHeight = subMenuRef.current.scrollHeight;
    //   console.log(originalParentHeight);
    // }
    // if (
    //   subMenuRef.current.parentNode.parentNode.classList.contains("level0") &&
    //   !subMenuRef.current.parentNode.parentNode.classList.contains(
    //     "subMenuOpen"
    //   )
    // ) {
    //   subMenuRef.current.parentNode.parentNode.style.height =
    //     subMenuRef.current.scrollHeight +
    //     subMenuRef.current.parentNode.parentNode.scrollHeight +
    //     "px";
    //   subMenuRef.current.parentNode.parentNode.classList.add("subMenuOpen");
    // }
    // if (
    //   subMenuRef.current.parentNode.parentNode.classList.contains(
    //     "subMenuOpen"
    //   ) &&
    //   subMenuRef.current.classList.contains("isOpen")
    // ) {
    //   console.log(originalParentHeight);
    //   setSubMenuHeight(0);
    //   console.log(originalParentHeight);
    //   subMenuRef.current.parentNode.parentNode.style.height =
    //     originalParentHeight;
    //   subMenuRef.current.parentNode.parentNode.classList.remove("subMenuOpen");
    // }
    //setSubMenuHeight(subMenuHeight === 0 ? subMenuRef.current.scrollHeight : 0);
  }

  const size = item[item.id].size;

  let children = null;
  if (item[item.id].children && item[item.id].children.length) {
    children = (
      <ul
        ref={subMenuRef}
        style={{ height: subMenuHeight }}
        className={cn(`level${level}`, { isOpen: active })}
      >
        {item[item.id].children.map((li) => {
          const isAlbum = li[li.id].scheme === "album";
          return (
            <ListItem
              item={li}
              isAlbum={isAlbum}
              key={li.id}
              level={(level += 1)}
              isHome={isHome}
            />
          );
        })}
      </ul>
    );
  }

  function renderButtonContent(active) {
    return active ? `📂 ${item.name} (${size})` : `📁 ${item.name} (${size})`;
  }

  return (
    <li className={styles.navItem}>
      {isAlbum ? (
        <Link
          href={isHome ? `album/${item[item.id].id}` : item[item.id].id}
        >{`🌄 ${item.name} (${size})`}</Link>
      ) : (
        <button
          className={cn({ active: active }, { empty: size === "0" })}
          onClick={size === "0" ? undefined : toggleItem}
        >
          {renderButtonContent(active)}
        </button>
      )}
      {active ? children : ""}
    </li>
  );
}
