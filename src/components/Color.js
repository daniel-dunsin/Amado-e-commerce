import styled from 'styled-components';

const Color = styled.div`
    width: 35px;
    height: 35px;
    background-color: ${({bg})=> bg == 'white' ? 'darkgrey' : bg};
`;

export default Color;