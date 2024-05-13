import { useState } from "react";
import InputSeoin from "./Input";
import styles from "./FormSeoin.module.css";

export default function FormSeoin() {
  const [isError, setIsError] = useState(false);
  return (
    <form>
      <InputSeoin
        id="seoin"
        type="text"
        label="ID: "
        style={styles.Medium}
        isError={true}
        errorText="아이디를 확인해주세요"
        labelStyle={styles.Label}
        placeholder={"아이디를 입력해주세요"}
      />
      <button type="submit" disabled={isError}>
        제출
      </button>
    </form>
  );
}

/*input 공용 컴포넌트 기능 명세
type을 지정할 수 있다.
label을 선택적으로 지정할 수 있다.
FormSeoin.module.css를 활용해 스타일을 지정할 수 있다.
isError로 error 시 input의 테두리를 빨갛게 만들 수 있다.
labelStyle을 지정할 수 있다.
placeholder를 지정할 수 있다.
errorText를 넣거나 넣지 않을 수 있다.
*/
