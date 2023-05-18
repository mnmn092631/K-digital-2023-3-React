import styled from "styled-components";
import Title from "./TitleStyle";

const Modal = styled.article`
  overflow: scroll-y;
  padding-top: 0;
`;

const ModalTitle = styled(Title)`
  position: sticky;
  top: 0;
  cursor: default;

  & > span:nth-child(2) {
    flex-grow: 1;
  }

  & > span.close {
    cursor: pointer;
  }
`;

const GalleryDetail = ({ isOpen, setIsOpen, photo, detail }) => {
  return (
    detail && (
      <dialog open>
        <Modal>
          <ModalTitle>
            <h1>{photo.galTitle}</h1>
            <span>{photo.galPhotographyLocation}</span>
            <span className="close" onClick={() => setIsOpen(!isOpen)}></span>
          </ModalTitle>
          {detail.map((item, idx) => (
            <img
              src={item.galWebImageUrl}
              alt={item.galTitle + idx}
              key={item.galTitle + idx}
            />
          ))}
        </Modal>
      </dialog>
    )
  );
};

export default GalleryDetail;
