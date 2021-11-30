import React from 'react';
import '../../styles/Kitting.css'
import '../../styles/animate.css';
import One from '../../images/kitting/rise.jpg';
import Two from '../../images/kitting/protiviti.jpg';
import Three from '../../images/kitting/centertall.jpg';
import Four from '../../images/kitting/centershort.jpg';
import Five from '../../images/kitting/lunch.jpg';
import Six from '../../images/kitting/santander.jpg'

const ImageGrid = () => {
    return (
        <div className="kitting-image-grid">
            <div className="container-fluid">
                <div className="col-sm-4">
                     <img src={One} className="kitting-img" style={{marginBottom: '20px'}} />
                     <img src={Two} className="kitting-img" />
                </div>
                <div className="col-sm-4">
                    <img src={Three} className="kitting-img" style={{marginBottom: '10px'}} />
                    <img src={Four} className="kitting-img" />
                </div>
                <div className="col-sm-4">
                    <img src={Five} className="kitting-img" style={{marginBottom: '20px'}} />
                    <img src={Six} className="kitting-img" />
                </div>
            </div>
        </div>
    )
}

export default ImageGrid;