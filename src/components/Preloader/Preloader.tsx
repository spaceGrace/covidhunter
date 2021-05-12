import './style.css';
import styled from 'styled-components';

const PreloaderBox = styled.div`
   display: flex;
   width: 100%;
   justify-content: center;
   align-items: center;
`;

const Preloader = () => {
    return (
        <PreloaderBox><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></PreloaderBox>
    )
};

export default Preloader;
