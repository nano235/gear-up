import React, { HTMLAttributes, ImgHTMLAttributes } from "react";
import styled from "styled-components";
import {
	background,
	border,
	layout,
	position,
	space,
	BackgroundProps,
	BorderProps,
	LayoutProps,
	PositionProps,
	SpaceProps,
	GridProps as _GridProps,
} from "styled-system";
import { StyledPrimaryImage, StyledSecondaryImage } from "./styles";
import Wrapper from "./Wrapper";

interface WrapperProps extends SpaceProps, HTMLAttributes<HTMLDivElement> {
	width: number;
	height: number;
}
export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement>, SpaceProps {
	width: number;
	height: number;
	wrapperProps?: WrapperProps;
}

export interface BoxProps
	extends BackgroundProps,
		BorderProps,
		LayoutProps,
		PositionProps,
		SpaceProps,
		HTMLAttributes<HTMLDivElement> {}

const Box = styled.div<BoxProps>`
	${background}
	${border}
  ${layout}
  ${position}
  ${space}
`;

const variants = {
	DEFAULT: "default",
	INVERTED: "inverted",
} as const;

type Variant = typeof variants[keyof typeof variants];

interface TokenPairImageProps extends BoxProps {
	primarySrc: string;
	secondarySrc: string;
	variant?: Variant;
	height: number;
	width: number;
	primaryImageProps?: Omit<ImageProps, "width" | "height">;
	secondaryImageProps?: Omit<ImageProps, "width" | "height">;
}

const TokenPairImage: React.FC<TokenPairImageProps> = ({
	primarySrc,
	secondarySrc,
	width,
	height,
	variant = variants.DEFAULT,
	primaryImageProps = {},
	secondaryImageProps = {},
	...props
}) => {
	const secondaryImageSize = Math.floor(width / 2);

	return (
		<Wrapper position="relative" width={width} height={height} {...props}>
			<StyledPrimaryImage
				variant={variant}
				src={primarySrc}
				width={width}
				height={height}
				{...primaryImageProps}
			/>
			<StyledSecondaryImage
				variant={variant}
				src={secondarySrc}
				width={secondaryImageSize}
				height={secondaryImageSize}
				{...secondaryImageProps}
			/>
		</Wrapper>
	);
};

export default TokenPairImage;
