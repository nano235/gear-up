import React, { forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

interface WrapperProps extends SpaceProps, HTMLAttributes<HTMLDivElement> {
	width: number;
	height: number;
}

const StyledWrapper = styled.div<{ $width: number; $height: number }>`
	max-height: ${({ $height }) => $height / 10}rem;
	max-width: ${({ $width }) => $width / 10}rem;
	position: relative;
	width: 100%;

	&:after {
		content: "";
		display: block;
		padding-top: ${({ $width, $height }) => ($height / $width) * 100}%;
	}

	${space}
`;

export default function Wrapper({ width, height, ...props }, ref) {
	return <StyledWrapper ref={ref} $width={width} $height={height} {...props} />;
}
