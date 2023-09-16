import { StyledButton } from "./Button.styled";

export const Button = ({onLoad}) => {
    return <StyledButton onClick={onLoad}>Load More...</StyledButton>
}