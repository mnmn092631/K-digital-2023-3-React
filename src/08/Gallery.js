/*
관광사진갤러리 키워드 검색 목록 조회
https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=9yPsHEIju5rRDqHYs0gdupRMIn7xv%2BZEb1r2005NJpFnf1Nco8oqnZaSm5KcJwWlk3mtSZabtiK2OJAr2UcQlQ%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ec%9e%90%ea%b0%88%ec%b9%98&_type=json
*/

import { useEffect, useRef } from "react";
import styled from "styled-components";

const BtnsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & > button {
    width: 49%;
  }
`;

const Gallery = () => {
  const keywordRef = useRef();

  useEffect(() => {
    keywordRef.current.focus();
  }, []);

  const show = (e) => {
    e.preventDefault();
    if (keywordRef.current.value === "") return;
    let encodeKW = encodeURI(keywordRef.current.value);
    console.log(encodeKW);
    keywordRef.current.value = "";
  };

  const showClear = (e) => {
    e.preventDefault();
  };

  return (
    <main className="container">
      <form>
        <article>
          <header>
            <h1>한국관광공사 관광사진 정보</h1>
          </header>
          <div className="grid">
            <input
              ref={keywordRef}
              type="text"
              id="txt1"
              placeholder="키워드를 입력해주세요."
            />
            <BtnsWrapper>
              <button onClick={(e) => show(e)}>검색</button>
              <button onClick={(e) => showClear(e)}>취소</button>
            </BtnsWrapper>
          </div>
        </article>
      </form>
    </main>
  );
};

export default Gallery;
