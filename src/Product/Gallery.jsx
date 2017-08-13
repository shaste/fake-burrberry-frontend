import React from "react";
import styled from "styled-components";

const PhotoGalleryWrap = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  @media all and (min-width: 48rem) {
    width: 100%;
    position: relative;
    left: 0;
    right: 0;
    margin-left: 0;
    margin-right: 0;
  }
`;

const PhotoGallery = styled.section`
  display: flex;
  overflow-x: scroll;
  flex-flow: row;
  flex-wrap: nowrap;
  flex-shrink: 0;
`;
const Photo = styled.img`
  object-fit: contain;
  width: auto;
  height: 25rem;

  @media all and (min-width: 48rem) {
    object-fit: contain;
    width: auto;
    height: 36rem;
  }
`;

export default () => {
  return (
    <PhotoGalleryWrap>
      <PhotoGallery>
        <Photo
          src="images/Long-Cotton-Gabardine Car-Coat-1@2x.jpg"
          alt="Front view"
        />
        <Photo
          src="images/Long-Cotton-Gabardine Car-Coat-2@2x.jpg"
          alt="Burburry square close-up"
        />
        <Photo
          src="images/Long-Cotton-Gabardine Car-Coat-3@2x.jpg"
          alt="Collar close-up"
        />
        <Photo
          src="images/Long-Cotton-Gabardine Car-Coat-4@2x.jpg"
          alt="Back view"
        />
      </PhotoGallery>
    </PhotoGalleryWrap>
  );
};
