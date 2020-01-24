import React, { Component } from 'react';
import ColorPicker from './ColorPicker';
import FrameWidthPicker from './FrameWidthPicker';

export default class ChooseFrame extends Component {

    state = {
        isEditFrameMode: true,
        currFrame: {
            color: '',
            width: 'small'
        }
    }
  
    setFrameWidth = (width) => {
        this.setState(prevState => ({ currFrame: {...prevState.width, width} }));
    }

    setFrameColor = (color) => {
        this.setState(prevState => ({ currFrame: {...prevState.color, color} }));
    }

    render() {
        const artSrc = this.props.artSrc;
        let editClass = this.state.isEditFrameMode ? '' : 'none';
        return (<>
            <section className={`frame-section-container ${editClass} flex column`}>
                <div className="frame-artwork-container flex justify-center">
                    <img
                        className={`${this.state.currFrame.color} ${this.state.currFrame.width}`}
                        src={artSrc}
                        alt="" />
                </div>
                <div className="frame-form-container flex column justify-center align-center">
                    <header>
                        <h2>Framing</h2>
                        <h3>Choose Your Frame</h3>
                    </header>
                    <ColorPicker setFrameColor={this.setFrameColor}/>
                    <div className="frames-options flex no-wrap">
                    Choose the thickness of the frame
                    <FrameWidthPicker setFrameWidth={this.setFrameWidth} />
                    </div>
                   
                </div>
            </section>
        </>)
    }
}