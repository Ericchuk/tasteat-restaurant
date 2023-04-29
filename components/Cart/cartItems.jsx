import Image from "next/image";
import dish from "../../assets/images/image 4 (1).png";
import bin from "../../assets/icons/bin.svg";
import styles from "./cartItem.module.scss";

export default function CartItems() {
  return (
    <section className={styles.section}>
      <main>
        <div>
          <Image src={dish} alt="dish" />
          <span>
            <p className={styles.description}>Spicy seasoning seafood</p>
            <p>$2.27</p>
          </span>
        </div>
        <div>
          <span>2</span>
          <p>$4.58</p>
        </div>
      </main>
      <aside>
        <label>
          <input
            type="text"
            placeholder="Please, just a little bit spicy only."
          />
        </label>

        <div>
            <Image src={bin} alt="bin" />
        </div>
      </aside>
    </section>
  );
}
