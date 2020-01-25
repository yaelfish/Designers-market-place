import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadArtworkById, editArtwork } from '../../actions/ArtworkActions'
import ChooseFrame from '../../cmps/Artwork/ChooseFrame';

class SimulateArtwork extends Component {

    componentDidMount() {
        this.loadArtwork();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params._id !== this.props.match.params._id) {
            this.loadArtwork();
        }
    }

    loadArtwork = async () => {
        const { _id } = this.props.match.params;
        const art = await this.props.loadArtworkById(_id);
    }

    goBack = () => {
        const { _id } = this.props.match.params;
        this.props.history.push('/artwork/' + _id)
    }

    onEditArtwork = async (artwork) => {
        await this.props.editArtwork(artwork);
        console.log('onEditArtwork sent', artwork);
        this.props.history.push('/artwork/' + artwork._id);
    }

    render() {
        if (!this.props.selectedArtwork) return <div className="loading">Loading...</div>
        const { selectedArtwork } = this.props;
        return (<>
            <section className="container add-artwork-container flex column">
                <button className="btn back" onClick={this.goBack}></button>
                <header>
                    <h2>Framing</h2>
                    <h3>Choose Your Frame</h3>
                </header>
                <ChooseFrame artSrc={selectedArtwork.imgUrl} />
            </section>
        </>)
    }
}

const mapStateToProps = (state) => {
    return {
        selectedArtwork: state.artwork.selectedArtwork,
        loggedInUser: state.user.loggedInUser
    }
}
const mapDispatchToProps = {
    loadArtworkById,
    editArtwork
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(SimulateArtwork)
);