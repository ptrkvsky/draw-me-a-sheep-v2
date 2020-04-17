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
  margin-top: 61px;
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 1;
  color: #000;
`
const Description = styled('p')`
  max-width: 171px;
  margin-top: 40px;
  font-size: 12px;
  line-height: 1.4;
`

const Autistic = styled('p')`
  position: absolute;
  top: 150px;
  left: -113px;
  color: #ffdc1e;
  z-index: -1;
  font-size: 150px;
  font-weight: 600;
  letter-spacing: 8px;
  text-transform: uppercase;
`

export { BlockText, Nom, SubHeading, Description, Autistic }
