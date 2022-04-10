import {
  CardContent,
  Typography,
  CardActions,
  Button,
  Card,
  Link,
} from "@mui/material";
import styled, { css } from "styled-components";

import { Library } from "../../Search.types";

const MainWrapper = styled(Card)(
  ({ theme }) => css`
    border: 0;
    margin-top: -${theme.space.s};
    padding-bottom: ${theme.space.xs};
    padding-top: 0;
  `
);
const AdditionalInformationWrapper = styled.div(
  () => css`
    display: flex;
    justify-content: space-between;
  `
);

const getOwnerNameFromGitUrl = (url: string) => {
  const regex = /https?:\/\/.+\/(.+)\/.*\.git/;
  return url.match(regex);
};

interface ItemProps extends Library {}
const Item = ({
  description,
  homepage,
  name,
  repository_url,
  stars,
}: ItemProps) => {
  const owner = getOwnerNameFromGitUrl(repository_url);

  return (
    <MainWrapper variant="outlined">
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
          component="div"
        >
          <AdditionalInformationWrapper>
            <div>{stars} Stars</div>
            {owner && owner.length > 1 && <div>{owner[1]}</div>}
          </AdditionalInformationWrapper>
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        {homepage && !!homepage.length && (
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <Link href={homepage} target="_blank" rel="noopener noreferrer">
              {homepage}
            </Link>
          </Typography>
        )}
        {description && !!description.length && (
          <Typography variant="body2">{description}</Typography>
        )}
      </CardContent>
      <CardActions>
        <Button
          href={repository_url}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          fullWidth
        >
          Check Repository
        </Button>
      </CardActions>
    </MainWrapper>
  );
};

export { Item };
