import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import GalleryView from "./GalleryView";

const BtnsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & > button {
    width: 49%;
  }
`;

const Gallery = () => {
  const keywordRef = useRef();
  const [encodeK, setEncodeK] = useState("");
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    keywordRef.current.focus();
    encodeK && getData(encodeK);
    keywordRef.current.value = decodeURI(encodeK);
  }, [encodeK]);

  const getData = (encodeK) => {
    let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=9yPsHEIju5rRDqHYs0gdupRMIn7xv%2BZEb1r2005NJpFnf1Nco8oqnZaSm5KcJwWlk3mtSZabtiK2OJAr2UcQlQ%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${encodeK}&_type=json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPhotos(data.response.body.items.item))
      .catch((e) => console.log(e));
  };

  const show = (e) => {
    e.preventDefault();
    if (keywordRef.current.value === "") return;
    let encodeKW = encodeURI(keywordRef.current.value);
    setEncodeK(encodeKW);
  };

  const showClear = (e) => {
    e.preventDefault();
    setEncodeK("");
    setPhotos([]);
    keywordRef.current.value = "";
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
              placeholder="키워드를 입력해주세요."
            />
            <BtnsWrapper>
              <button onClick={(e) => show(e)}>검색</button>
              <button onClick={(e) => showClear(e)}>취소</button>
            </BtnsWrapper>
          </div>
        </article>
      </form>
      <GalleryView photos={photos} setEncodeK={setEncodeK} />
    </main>
  );
};

export default Gallery;
