import styled from '@emotion/styled'
import theme from '../theme'

const BlockText = styled('div')`
  position: absolute;
  top: 251px;
  left: -150px;
  width: 830px;
  height: 120px;
  transform: rotate(-90deg);
`
const Nom = styled('h1')`
  font-size: 120px;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: -10px;
  color: #000;
  line-height: 0.75;
`
const SubHeading = styled('h2')`
  margin-top: 40px;
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 1;
  color: #000;
`

const Description = styled('p')`
  margin-top: 40px;
  max-width: 464px;
  font-size: 12px;
  line-height: 1.4;
`

export { BlockText, Nom, SubHeading, Description }
