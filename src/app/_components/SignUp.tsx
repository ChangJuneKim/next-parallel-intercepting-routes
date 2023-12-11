import styles from "@/app/_components/SignUp.module.css";
import Modal from "@/components/Modal";

export default function SignUp({ bg = "no" }: { bg?: "intercept" | "no" }) {
  return (
    <Modal bg={bg}>
      <div className={styles.container}>
        <h1>회원가입</h1>
        <form>
          <div>
            <label htmlFor="email">이메일</label>
            <input type="email" name="email" id="email" />
          </div>

          <div>
            <label htmlFor="password">비밀번호</label>
            <input type="password" name="password" id="password" />
          </div>

          <div>
            <label htmlFor="check-password">비밀번호 확인</label>
            <input
              type="check-password"
              name="check-password"
              id="check-password"
            />
          </div>
        </form>
      </div>
    </Modal>
  );
}
