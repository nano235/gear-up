import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Wrapper from "./Wrapper";
import { ImageProps } from "./TokenPairImage";

const StyledImage = styled.img`
	height: 100%;
	left: 0;
	position: absolute;
	top: 0;
	width: 100%;
`;

const Placeholder = styled.div`
	height: 100%;
	left: 0;
	position: absolute;
	top: 0;
	width: 100%;
`;

const observerOptions = {
	root: null,
	rootMargin: "200px",
	threshold: 0,
};

const Image: React.FC<ImageProps> = ({ src, alt, width, height, ...props }) => {
	const imgRef = useRef<HTMLDivElement>(null);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		let observer: IntersectionObserver;
		const isSupported = typeof window === "object" && window.IntersectionObserver;

		if (imgRef.current && isSupported) {
			observer = new window.IntersectionObserver(entries => {
				entries.forEach(entry => {
					const { isIntersecting } = entry;
					if (isIntersecting) {
						setIsLoaded(true);
						if (typeof observer?.disconnect === "function") {
							observer.disconnect();
						}
					}
				});
			}, observerOptions);
			observer.observe(imgRef.current);
		}

		return () => {
			if (typeof observer?.disconnect === "function") {
				observer.disconnect();
			}
		};
	}, [src]);

	return (
		<Wrapper ref={imgRef} height={height} width={width} {...props}>
			{isLoaded ? <StyledImage src={src} alt={alt} /> : <Placeholder />}
		</Wrapper>
	);
};

export default Image;
