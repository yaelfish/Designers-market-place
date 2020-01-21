import React, { Component } from 'react'
import SocketService from '../../service/SocketService'


export default class Reviews extends Component {
    state = {
        msg: '',
    }

    componentDidMount() {
        SocketService.setup();
        SocketService.emit('chat topic', this.props.selectedArtwork);
        SocketService.on('chat addMsg', this.receiveMsg);
    }

    // componentWillUnmount() {
    //     SocketService.off('chat addMsg', this.addMsg);
    //     SocketService.terminate();
    // }

    msgHandleChange = ev => {
        const { name, value } = ev.target;
        this.setState({ [name]: value })
    };


    sendMsg = async (ev, newMsg) => {
        ev.preventDefault();
        const msgReturned = await this.props.sendMsg(newMsg);
        SocketService.emit('chat newMsg', msgReturned.msg);
        this.props.loadReviews({ aboutArtworkId: this.props.selectedArtwork })

        this.setState({ msg: '' });
    }

    receiveMsg = (newMsg) => {
        this.props.loadReviews({ aboutArtworkId: this.props.selectedArtwork });
    }



    render() {
        return <div className="comments-container">
            Comments:
            <form className="comment-form flex">
                <textarea placeholder="write something..." value={this.state.msg.txt} name="msg" onChange={this.msgHandleChange}></textarea>
                <button onClick={(event) => this.sendMsg(event, this.state.msg)}>Publish</button>
            </form>
            {this.props.reviews.length > 0 && <ul className="comments-area">
                {this.props.reviews.map((review, idx) => (
                    <li className="flex align-center" key={idx}>
                        <div className="flex column align-center comment-profile">
                            <img src={review.byUser.imgUrl}></img>
                            <div className="comment-by-user">{review.byUser.fullName}</div>
                        </div>
                        <div>{review.msg}</div>
                        <button className="btn delete-review delete" onClick={this.props.onDeleteReview}></button>
                    </li>
                ))}
                {/* {this.addMsg} */}
            </ul>}

        </div>

    }
}