import React from "react";
import './Footer.css';
var FontAwesome = require('react-fontawesome');

export interface IFooterProps {
}

export interface IFooterState {
}

export class Footer extends React.Component<IFooterProps, IFooterState> {
    private curretYear: number;

    constructor(props: IFooterProps) {
        super(props);

        this.state = {};

        var date = new Date();
        this.curretYear = date.getFullYear();
    }

    public render() {
        return (
            <div className="vk-flex-container bg-blk">
                <div id="vk-footer">
                    <a href="https://www.instagram.com/valere_4ever_young/" target="_blank" rel="noreferrer">
                        <FontAwesome
                            name='instagram'
                            size='1x'
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', margin: '0 20px' }}
                        /></a>

                    <a href="https://www.facebook.com/valere.kissi.3/" target="_blank" rel="noreferrer">
                        <FontAwesome
                            name='facebook'
                            size='1x'
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', margin: '0 20px' }}
                        /></a>

                    <a href="https://www.youtube.com/channel/UCsT3qb37M9pERgRUhLyFaUQ/" target="_blank" rel="noreferrer">
                        <FontAwesome
                            name='youtube'
                            size='1x'
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', margin: '0 20px' }}
                        /></a>

                    <a href="https://www.linkedin.com/in/valerekissi/" target="_blank" rel="noreferrer">
                        <FontAwesome
                            name='linkedin'
                            size='1x'
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', margin: '0 20px' }}
                        /></a>

                </div>
                <div className="copy-container">
                    ©2021-{this.curretYear} Valere Kissi.
            </div>
            </div>
        );
    }
};