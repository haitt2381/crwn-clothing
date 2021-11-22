import './menu-item.styles.scss'
import { useNavigate } from 'react-router-dom';
const MenuItem = ({title, imageUrl, size, linkUrl}) => {
    let navigate = useNavigate();

    return (
        <div className={`${size} menu-item`}
            onClick={() => navigate((linkUrl))}>
            <div 
                className="background-image"
                style={
                    {backgroundImage: `url(${imageUrl})`}
                }
            />
            <div className='content'>
                <div className="title">{title}</div>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;