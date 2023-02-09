import Slider from 'react-slick'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import IconButton from '@mui/material/IconButton'
import WestIcon from '@mui/icons-material/West'
import EastIcon from '@mui/icons-material/East'
import { urlFor } from 'lib/sanity'

const SlideWrapper = styled.div``

const ImageWrapper = styled.div`
  background-color: #ddbfaf;
  padding: 0.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`

const ImageTitle = styled.p`
  padding: 0 1rem;
  text-align: center;
`

type ArrowButtonProps = {
  direction: string
  currentSlide?: number
  slideCount?: number
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

function Arrow({
  direction,
  currentSlide,
  slideCount,
  ...props
}: ArrowButtonProps) {
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

export type slideProp = {
  name: string
  link: string
  imageSrc: {
    _type: string
    asset: {
      _ref: string
      _type: string
    }
  }
}

function SlideItem({ name, link, imageSrc }: slideProp) {
  return (
    <SlideWrapper>
      <Link href={link || ''}>
        <a>
          <ImageWrapper>
            <Image
              alt={name}
              width={430}
              height={430}
              src={urlFor(imageSrc).url()}
            />
          </ImageWrapper>
          <ImageTitle>{name}</ImageTitle>
        </a>
      </Link>
    </SlideWrapper>
  )
}

export function ImageCarousel({ slides }: { slides: slideProp[] }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="prev" />,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <StyledSlider {...settings}>
      {slides &&
        slides.length > 0 &&
        slides.map((item, index) => (
          <SlideItem key={`${item.name}-${index}`} {...item} />
        ))}
    </StyledSlider>
  )
}
