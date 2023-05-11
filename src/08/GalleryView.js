import styled from "styled-components";
import GalleryItem from "./GalleryItem";

const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & > article {
    width: 49%;
  }

  & > article:nth-child(2n - 1):last-child {
    width: 100%;
  }
`;

const GalleryView = ({ photos, setEncodeK }) => {
  return (
    <GalleryWrapper>
      {photos ? (
        photos.map((photo, idx) => (
          <GalleryItem
            photo={photo}
            key={photo + idx}
            setEncodeK={setEncodeK}
          />
        ))
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </GalleryWrapper>
  );
};

export default GalleryView;
