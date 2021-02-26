/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { ReactComponent as Badge } from "../../components/Icon/grey circle.svg";
import Modal from "../../components/Modals/Modal";
import useModal from "../../hooks/useModal";

const StyledBadgeContainer = styled.div`
grid-column: 2/3;
align-self: flex-end;
justify-self: right;
height: 1196px;
width: 100%;
border-radius: 12px;
background: #FFFFFF;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);
border-radius: 12px;
`;

const StyledBadges = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
`;

const StyledCircle = styled(Badge)`
margin: 20px;
`;

export default function BadgeContainer() {
  const { isShowing, toggle } = useModal();

  const renderBadges = () => {
    const badges = [];
    for (let i = 0; i < 48; i++) {
      badges.push(Badge);
    }
    console.log(badges);
    return badges.map(badge => <StyledCircle key={badge} onClick={toggle} />);
  };

  const description = "";
  return (
    <StyledBadgeContainer>
      <StyledBadges>
        {renderBadges()}
        <Modal
          isShowing={isShowing}
          hide={toggle}
          title="Badge Details"
          modalBodyText={description}
        />
      </StyledBadges>
    </StyledBadgeContainer>
  );
}