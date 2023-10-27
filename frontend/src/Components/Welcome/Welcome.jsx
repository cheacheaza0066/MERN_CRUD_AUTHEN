import {Container,Col} from 'react-bootstrap';
import Styles from './Welcome.module.css';
function Welcome() {
  return (
    
    <div className={Styles.container}>
      <Container>
      <Col>
            <div className=''>
                <h1 className='fs-2 text-center mt-3'>ยินดีต้อนรับสู่หน้าศิษย์เก่า</h1>
            </div>
      </Col>
    </Container>
    </div>
  )
}

export default Welcome
