import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadArtworkById, removeArtwork } from '../../actions/ArtworkActions'
// import bin from '../../assets/images/icons/bin.png';
import like from '../../assets/images/icons/like.png';
// import afterLike from '../../assets/images/icons/after-like.png';
import bin from '../../assets/images/icons/bin.png';
import Moment from 'react-moment';



class ArtistPurchasesPreview extends Component {

  

    render() {
        let { _id, name, artist, price, likedByUsers, imgUrl, createdAt, tags } = this.props.artwork;
        let artistObj = artist;
        let likedByUsersObj = likedByUsers;
        if (artistObj) {
            artist = artistObj.fullName;
        } 
        if (likedByUsersObj) {
            likedByUsers = likedByUsersObj.length;
        }   
        
   
        return ( 
            <Link to={`/artwork/${_id}`}>
                <div className="card-artwork-sold flex  align-center row">
                <img src={imgUrl} alt={name} className="square-ratio" />
                    <div className="preview-info-sold">
                        <div className="art-preview-text-sold flex row align-start">
                            <p className="preview-artwork-name">{name}</p>
                            <p className="preview-artwork-created"><Moment fromNow>{this.props.lastOrder.createdAt}</Moment></p>
                            <p className="likes-counter">{likedByUsers}</p>
                            <p className="preview-artwork-quantity">{this.props.timesSold}</p>
                            <p className="preview-earnings"> ${(this.props.timesSold*price).toLocaleString("USD")}</p>
                        </div>
                        

                    </div>
                  
                </div>
            </Link>
         
        )
    }
}

const mapStateToProps = (state) => {
    return {
        artworks: state.artwork.artworks,
        selectedArtwork: state.artwork.selectedArtwork,
        user: state.user
    }
}

const mapDispatchToProps = {
    loadArtworkById,
    removeArtwork
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArtistPurchasesPreview)