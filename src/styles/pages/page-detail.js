import styled from '@emotion/styled'
import theme from '../theme'

const ImageContainer = styled('div')`
  width: 100%;
  position: relative;
  overflow: hidden;
  .cover {
    position: absolute;
    z-index: 10;
    top: 0;
    right: 0;
    width: 100%;
    height: 34%;
    background-color: #d8dbe2;
    &:nth-child(2) {
      top: 33%;
    }
    &:nth-child(3) {
      top: 66%;
    }
  }
  img {
    width: 100%;
    height: auto;
  }
`

export { ImageContainer }
