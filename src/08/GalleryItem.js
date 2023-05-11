import styled from "styled-components";
import GalleryDetail from "./GalleryDetail";
import { useState } from "react";
import Title from "./TitleStyle";

const KWBtn = styled.button`
  display: inline-block;
  width: fit-content;
  padding: 5px;
  margin: 5px;
  background-color: gray;
  border: none;

  &:active {
    outline: none;
  }
`;

const GalleryItem = ({ photo, setEncodeK }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [detail, setDetail] = useState();

  const getData = (encodeK) => {
    let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/galleryDetailList1?serviceKey=9yPsHEIju5rRDqHYs0gdupRMIn7xv%2BZEb1r2005NJpFnf1Nco8oqnZaSm5KcJwWlk3mtSZabtiK2OJAr2UcQlQ%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&title=${encodeK}&_type=json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetail(data.response.body.items.item))
      .catch((e) => console.log(e));
  };

  const showModal = () => {
    setIsOpen(!isOpen);
    getData(encodeURI(photo.galTitle));
  };

  return (
    <article>
      <Title
        onClick={() => {
          showModal();
        }}
      >
        <h1>{photo.galTitle}</h1>
        <span>{photo.galPhotographyLocation}</span>
      </Title>
      <img src={photo.galWebImageUrl} alt={photo.galTitle} />
      <footer>
        {photo.galSearchKeyword.split(", ").map((kw, idx) => (
          <KWBtn onClick={() => setEncodeK(encodeURI(kw))} key={kw + idx}>
            {kw}
          </KWBtn>
        ))}
      </footer>
      {isOpen && (
        <GalleryDetail
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          photo={photo}
          detail={detail}
        />
      )}
    </article>
  );
};

export default GalleryItem;
