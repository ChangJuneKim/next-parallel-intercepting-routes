import Modal from "@/components/Modal";
import styles from "@/app/@parallel/(.)auth/sign-in/page.module.css";

export default function LoginPage() {
  return (
    <Modal bg="intercept">
      <div className={styles.container}>
        <h1>로그인</h1>
        <form>
          <div>
            <label htmlFor="email">이메일</label>
            <input type="email" name="email" id="email" />
          </div>

          <div>
            <label htmlFor="password">비밀번호</label>
            <input type="password" name="password" id="password" />
          </div>
        </form>
      </div>
    </Modal>
  );
}
