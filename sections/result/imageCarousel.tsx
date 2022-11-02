import Slider from 'react-slick'
import styled from '@emotion/styled'
import Image from 'next/image'
import IconButton from '@mui/material/IconButton'
import WestIcon from '@mui/icons-material/West'
import EastIcon from '@mui/icons-material/East'
import { slidesData } from './slidesData'

const SlideWrapper = styled.div``

const ImageWrapper = styled.div``

const ImageTitle = styled.p`
  padding: 0 1rem;
  text-align: center;
`

type ArrowButtonProps = {
  direction: string
}

const ArrowButton = styled(IconButton)<ArrowButtonProps>`
  display: block;
  position: absolute;
  top: -0.5rem;
  right: ${(props) => (props.direction === 'prev' ? '3rem' : '0')};
  z-index: 2;
`

const StyledSlider = styled(Slider)`
  padding-top: 2rem;
`

function SlideItem({ title, imageSrc }: { title: string; imageSrc: string }) {
  return (
    <SlideWrapper>
      <ImageWrapper>
        <Image alt={title} width={430} height={430} src={imageSrc} />
      </ImageWrapper>
      <ImageTitle>{title}</ImageTitle>
    </SlideWrapper>
  )
}

function Arrow({ direction, ...props }: { direction: string }) {
  return (
    <ArrowButton
      {...props}
      aria-label={direction}
      className=""
      direction={direction}
    >
      {direction === 'prev' ? <WestIcon /> : <EastIcon />}
    </ArrowButton>
  )
}

export function ImageCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="prev" />,
  }
  return (
    <StyledSlider {...settings}>
      {slidesData.map((item, index) => (
        <SlideItem key={`${item.title}-${index}`} {...item} />
      ))}
    </StyledSlider>
  )
}
