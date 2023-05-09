import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const ItemSpan = styled.span`
  display: inline-flex;
  margin: 5px;
  padding: 5px;
  background-color: blueviolet;
  border-radius: 10px;
  color: #fff;
`;

const MyRef = () => {
  const txtRef = useRef();

  const itemArr = useRef([]);

  const [itemTag, setItemTag] = useState();

  useEffect(() => {
    txtRef.current.focus();
  }, []);

  const addItem = (e) => {
    e.preventDefault();
    itemArr.current = [...itemArr.current, txtRef.current.value];
    let tempTag = [...new Set(itemArr.current)].map((item) => (
      <ItemSpan key={item}>{item}</ItemSpan>
    ));
    setItemTag(tempTag);
    txtRef.current.value = "";
  };

  const resetItem = (e) => {
    e.preventDefault();
    itemArr.current = itemArr.current.filter(
      (item) => item !== txtRef.current.value
    );
    let tempTag = [...new Set(itemArr.current)].map((item) => (
      <ItemSpan key={item}>{item}</ItemSpan>
    ));
    setItemTag(tempTag);
    txtRef.current.value = "";
  };

  return (
    <main className="container">
      <article>
        <header>
          <form>
            <div className="grid">
              <div>
                <label htmlFor="txt1">과일/채소 입력</label>
                <input
                  type="text"
                  ref={txtRef}
                  id="txt1"
                  name="txt1"
                  required
                />
              </div>
              <div>
                <button onClick={(e) => addItem(e)}>등록</button>
                <button onClick={(e) => resetItem(e)}>취소</button>
              </div>
            </div>
          </form>
        </header>
        <div>{itemTag}</div>
      </article>
    </main>
  );
};

export default MyRef;
