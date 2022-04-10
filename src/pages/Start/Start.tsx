import { GithubIcon } from "../../components/SvgIcon/Icons/Github";
import { Search } from "../../containers/Search";
import {
  Header,
  MainWrapper,
  SidebarWrapper,
  PlaceHolderText,
  PlaceHolderImg,
  ContentWrapper,
  Footer,
  Copyright,
} from "./Start.styles";

const Start = () => {
  return (
    <>
      <Header>
        <h1>Wire.com - Bower Search</h1>
      </Header>
      <MainWrapper>
        <SidebarWrapper aria-label="Sponsors">
          <PlaceHolderText>Our pawesome Sponsors:</PlaceHolderText>
          {Array(10)
            .fill(1)
            .map((i, index) => (
              <PlaceHolderImg
                src="http://placekitten.com/150/100"
                key={`placeholderimage-${index}`}
              />
            ))}
        </SidebarWrapper>
        <ContentWrapper>
          <Search />
        </ContentWrapper>
        <Footer>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <div>
            <strong>
              Powered by{" "}
              <a href="https://libraries.io/" target="_blank" rel="noreferrer">
                libraries.io
              </a>
            </strong>
          </div>
          <Copyright>
            <div>© 2022 Adrian Weiß | Made with ❤️ and 💪 in Germany</div>
            <div>
              <GithubIcon />
              <a
                href="https://github.com/aweiss-dev/wire-com-challenge.git"
                target="_blank"
                rel="noreferrer"
              >
                Show me the code
              </a>
            </div>
          </Copyright>
        </Footer>
      </MainWrapper>
    </>
  );
};

export { Start };
