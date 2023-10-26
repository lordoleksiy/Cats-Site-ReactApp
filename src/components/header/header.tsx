import {HeaderContainer, StyledHeader} from "./header-styles.tsx";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";
import house from "../../assets/house.png";
import {HeaderImage} from "./header-image/header-image.tsx";
import {HeaderButton} from "./header-button/header-button.tsx";
import {HeaderImageContainer} from "./header-image/header-image-container.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import {pathnames} from "../../models/enums/path-names.ts";
import {useDispatch, useSelector} from "react-redux";
import {changeState} from "../../slices/search-area-slice.ts";
import {RootState} from "../../store.ts";

export function Header(){
    const visible = useSelector((state: RootState) => state.searchArea.visible);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <StyledHeader>
            <HeaderContainer>
                <HeaderImageContainer checked={location.pathname === pathnames.home} onClick={() => {navigate("/")}}>
                    <HeaderImage src={house} alt="house"/>
                    <p>Home</p>
                </HeaderImageContainer>
                <HeaderImageContainer checked={location.pathname === pathnames.profile} onClick={() => {navigate("/profile")}}>
                    <HeaderImage src={avatar} alt="avatar"/>
                    <p>Your Profile</p>
                </HeaderImageContainer>
                {location.pathname === pathnames.home?(
                    <HeaderImageContainer checked={false} onClick={() => dispatch(changeState())}>
                        <HeaderImage src={logo} alt="citten"/>
                        <p>{visible? "Згорнути": "Розгорнути"}</p>
                    </HeaderImageContainer>
                ): null}
            </HeaderContainer>
            <div>
                <HeaderButton type="button" value="Meow"/>
                <HeaderButton type="button" value="Mur"/>
            </div>
        </StyledHeader>
    )
}